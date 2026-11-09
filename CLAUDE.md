# Orello Creatives website — standing rules

This file holds standing engagement rules for working on this repo. Follow these
without being asked again each time.

## Explore Work page — thumbnail service icons (master brief)

On the Explore Work page (`WorkPage.jsx` → `CaseStudySecond.jsx`'s `PortfolioGrid`),
each case study card shows small service icons next to its title. These icons are
driven entirely by `serviceKeys` on the case study doc (see `LOGO_BY_KEY` in
`CaseStudySecond.jsx`), mapped against the canonical vocabulary in
`src/constants/caseStudyFilters.js`:

- `starr` — Branding / Identity Design
- `penn` — Digital Marketing / Content / Print (the pencil icon)
- `togglee` — UI-UX / Development
- `motion` — Video Production / Motion Graphics

**Rule: `serviceKeys` must always reflect the services actually delivered for that
case study, nothing more and nothing less.** When a case study's deliverables
change (a flyer gets added, a video gets added, a brand identity package gets
delivered, etc.), update `serviceKeys` in the same change so the thumbnail icons
stay accurate. A case study with only a video deliverable should show only the
`motion` icon; one with a video and a print flyer should show both `motion` and
`penn`; and so on. Never leave a stale or invalid key (e.g. a key not in
`SERVICE_OPTIONS`) in `serviceKeys` — it silently produces either a missing icon
or, if it happens to collide with another key's logo, a duplicate icon.

Apply this check whenever adding, editing, or reviewing any case study's gallery
or deliverables.

## Explore Work page / case study galleries — media quality checklist (master brief)

Apply this checklist whenever adding, editing, or reviewing ANY gallery, hover
asset, or thumbnail across ANY case study (new or existing, including ones not
otherwise being touched in the current change). Before reporting a gallery/
media fix as done, delegate verification to the `media-quality-reviewer`
subagent (`.claude/agents/media-quality-reviewer.md`) rather than relying on
reading the code change alone; it re-derives the actual rendered crop math
and inspects real video frames, which is what past misses on this checklist
came down to.

- **Never let a logo or watermark get cropped by a tile boundary.** Before
  shipping a tile, check what `object-cover` will crop off at the tile's actual
  rendered aspect ratio. If a logo, wordmark, or watermark baked into a photo or
  video sits near an edge, either use `fit: "contain"` on that gallery item (see
  `fitClass` in `CaseStudyGallery.jsx`) or pick a tighter source crop that keeps
  it inside the safe area. This applies to every layout (`portrait`, `bento`,
  `asymmetric`, `grid`) and every gallery, not just newly-added ones.
- **Never reuse the same footage or photo in more than one place within a case
  study.** A frame that's already shown as `cardDefaultImage`/`cardHoverImage`
  should not also appear again inside that case study's `gallery`, and two
  gallery items should not be the same stock photo or the same video frame
  composited differently. When adding a "card" or "extra" image to a gallery,
  check it isn't a duplicate of something already used for that case study
  elsewhere on the page.
- **Never ship a video with empty pillarbox/letterbox space on the sides (or
  top/bottom).** This can come from the source file itself (e.g. a portrait or
  oddly-padded clip baked into a wider canvas) as much as from CSS `fit`
  settings. Check actual frames (not just the first second) before adding a
  video to a gallery or hero slot, and trim/re-encode the source if it carries
  its own padding, rather than only tweaking `fit` in code.
- **Flyer/print-collateral images should be presented as realistic mockups**
  (a tilted card or paper with a soft drop shadow on a neutral backdrop), not
  as flat rectangular crops of the raw flyer file, wherever they appear in a
  gallery.

## Other standing rules (carried over from engagement history)

- Keep Orello's existing brand look and feel; responsive and accessible.
- Work one section/case-study at a time unless told otherwise.
- All case-study copy must use only real information from source materials — no
  fabricated metrics or claims — except the client's own direct, stated facts
  about their own company's work history, which are taken at face value.
- Push iterative fixes to `staging` without asking each time; only check in
  before outward-facing actions (e.g. a prod deploy).
- Ask only one blocking question when genuinely stuck.
- Never use em dashes in any response or commit message.
