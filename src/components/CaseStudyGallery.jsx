// Shared case-study gallery renderer — the single source of truth used by
// both the public page (DynamicCaseStudyPage) and the admin live preview
// (GalleryEditor). Items are { src, type }.
//
// Two optional props let the admin reuse the exact layout interactively:
//   Tile     — wrapper component around each cell (default plain div); the
//              admin passes a sortable wrapper so the preview is draggable.
//   compact  — smaller fixed heights (same arrangement) so the preview fits
//              the form un-scaled, keeping drag coordinates clean.

const isVideoItem = (item) => item?.type === 'video' || /\.mp4(\?|$)/i.test(item?.src || '');

export function Media({ item, className }) {
  if (!item?.src) return null;
  return isVideoItem(item) ? (
    <video src={item.src} autoPlay loop muted playsInline className={className} />
  ) : (
    <img src={item.src} alt="" className={className} draggable={false} />
  );
}

// Items can opt into object-contain (e.g. a clip with on-screen text that
// must never be cropped) via item.fit === 'contain'; everything else keeps
// the default object-cover fill.
const fitClass = (item) => (item?.fit === 'contain' ? 'object-contain' : 'object-cover');

function GalleryCta({ cta }) {
  if (!cta?.href) return null;
  return (
    <div className="mt-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={cta.href}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium text-gray-700 bg-[#4B433B] hover:border-gray-600 transition-all duration-200 shadow-sm"
      >
        <span className="text-[#F4EDE2]">{cta.label || 'View Site'}</span>
      </a>
    </div>
  );
}

const DefaultTile = ({ className, children }) => <div className={className}>{children}</div>;

const HEIGHTS = {
  full: {
    stack: 'h-[140px] sm:h-[180px] md:h-[220px] lg:h-[310px]',
    tall: 'h-[288px] sm:h-[368px] md:h-[448px] lg:h-[628px]',
    pair: 'h-[220px] sm:h-[240px] md:h-[280px] lg:h-[380px]',
    asymBanner: 'h-[200px] sm:h-[260px] md:h-[320px] lg:h-[580px]',
    gridTile: 'h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]',
    gridBanner: 'h-[200px] sm:h-[260px] md:h-[320px] lg:h-[420px]',
  },
  compact: {
    stack: 'h-[90px] sm:h-[110px]',
    tall: 'h-[190px] sm:h-[232px]',
    pair: 'h-[120px]',
    asymBanner: 'h-[150px]',
    gridTile: 'h-[120px]',
    gridBanner: 'h-[140px]',
  },
};

// Layout-aware gallery: 'grid' (rows of 2 + full-width banner) or
// 'asymmetric' (2 stacked left + tall right, then a pair, then a banner).
export default function CaseStudyGallery({ layout = 'grid', items = [], cta, Tile, compact = false }) {
  const media = (items || []).filter((g) => g.src);
  if (media.length === 0) return null;
  const Cell = Tile || DefaultTile;
  const tile = 'relative overflow-hidden rounded-xl sm:rounded-2xl' + (compact ? '' : ' group');
  const h = compact ? HEIGHTS.compact : HEIGHTS.full;

  // Restored hover effect (public render only — the compact admin preview tiles
  // are drag handles, so they stay static): the image zooms in and the default
  // dark tint lifts. Pure CSS group-hover, no per-tile state.
  const mediaCls = (fit) =>
    `w-full h-full ${fit} transition-transform duration-300 ease-in-out${compact ? '' : ' group-hover:scale-110'}`;
  const overlay = compact ? null : (
    <span className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
  );

  // portrait: for vertical (9:16 / 4:5) social/ad video — side-by-side phone-style
  // tiles at a fixed portrait aspect ratio, instead of forcing tall footage into
  // the landscape-shaped grid/asymmetric cells (which either crops it to nothing
  // or pillarboxes it badly).
  if (layout === 'portrait') {
    const tileWidth = compact
      ? 'w-[110px]'
      : 'w-[200px] sm:w-[240px] md:w-[270px] lg:w-[300px]';
    return (
      <section className="bg-[#F4EDE2] flex items-center justify-center py-10 sm:py-16 lg:py-24 px-3 sm:px-4">
        <div className="container flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6">
            {media.map((item) => (
              <Cell
                key={item._key ?? item.src}
                id={item._key}
                className={`${tile} ${tileWidth} aspect-[9/16]`}
              >
                <Media item={item} className={mediaCls(fitClass(item))} />
                {overlay}
              </Cell>
            ))}
          </div>
          <GalleryCta cta={cta} />
        </div>
      </section>
    );
  }

  if (layout === 'asymmetric' && media.length >= 5) {
    const [a, b, tall, c, d, banner] = media;
    return (
      <section className="bg-[#F4EDE2] flex items-center justify-center py-10 sm:py-16 lg:py-24 px-3 sm:px-4">
        <div className="container flex flex-col gap-2 sm:gap-3">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="flex flex-col gap-2 sm:gap-3">
              <Cell id={a._key} className={`${tile} ${h.stack}`}><Media item={a} className={mediaCls('object-cover')} />{overlay}</Cell>
              <Cell id={b._key} className={`${tile} ${h.stack}`}><Media item={b} className={mediaCls('object-cover')} />{overlay}</Cell>
            </div>
            <Cell id={tall._key} className={`${tile} ${h.tall}`}><Media item={tall} className={mediaCls('object-cover')} />{overlay}</Cell>
          </div>
          {(c || d) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {c && <Cell id={c._key} className={`${tile} ${h.pair}`}><Media item={c} className={mediaCls('object-cover')} />{overlay}</Cell>}
              {d && <Cell id={d._key} className={`${tile} ${h.pair}`}><Media item={d} className={mediaCls('object-cover')} />{overlay}</Cell>}
            </div>
          )}
          {banner && (
            <Cell id={banner._key} className={`${tile} ${h.asymBanner}`}><Media item={banner} className={mediaCls('object-contain')} />{overlay}</Cell>
          )}
          <GalleryCta cta={cta} />
        </div>
      </section>
    );
  }

  // grid: all but the last item in rows of two, last item full-width banner
  const banner = media[media.length - 1];
  const rowItems = media.slice(0, -1);
  const rows = [];
  for (let i = 0; i < rowItems.length; i += 2) rows.push(rowItems.slice(i, i + 2));

  return (
    <section className="bg-[#F4EDE2] flex items-center justify-center py-10 sm:py-16 lg:py-24 px-3 sm:px-4">
      <div className="container flex flex-col gap-2 sm:gap-3">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {row.map((item) => (
              <Cell key={item._key ?? item.src} id={item._key} className={`${tile} ${h.gridTile}`}>
                <Media item={item} className={mediaCls(fitClass(item))} />
                {overlay}
              </Cell>
            ))}
          </div>
        ))}
        {banner && (
          <Cell id={banner._key} className={`${tile} ${h.gridBanner} ${banner.fit === 'contain' ? 'bg-[#F4EDE2]' : ''}`}>
            <Media item={banner} className={mediaCls(fitClass(banner))} />
            {overlay}
          </Cell>
        )}
        <GalleryCta cta={cta} />
      </div>
    </section>
  );
}
