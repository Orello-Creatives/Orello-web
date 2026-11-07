import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { api } from "../api";
import { INDUSTRIES, SERVICE_KEY_OPTIONS } from "../contentTypes";
import Field from "../components/Field";
import Select from "../components/Select";
import ImageUpload from "../components/ImageUpload";
import ListEditor from "../components/ListEditor";
import GalleryEditor from "../components/GalleryEditor";
import PageHeader from "../components/PageHeader";

const INDUSTRY_OPTIONS = INDUSTRIES.map((i) => ({ value: i, label: i }));

const GALLERY_LAYOUT_OPTIONS = [
  { value: "grid", label: "Grid (rows of 2 + full-width banner)" },
  { value: "asymmetric", label: "Asymmetric (stacked left + tall right)" },
  { value: "portrait", label: "Portrait (side-by-side vertical video)" },
];

const DEFAULTS = {
  title: "",
  titleHighlight: "",
  subtitle: "",
  slug: "",
  description: "",
  clientLogos: [],
  industries: [],
  serviceKeys: [],
  cardDefaultImage: "",
  cardHoverImage: "",
  heroMedia: { url: "", type: "image" },
  galleryLayout: "grid",
  gallery: [],
  galleryCta: { label: "", href: "" },
  deliverables: [],
  metrics: [],
  review: { quote: "", authorName: "", authorRole: "", authorImage: "" },
  published: true,
  featuredOnHome: false,
};


export default function CaseStudyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState(DEFAULTS);

  const { data: doc } = useQuery({
    queryKey: ["admin", "case-studies", id],
    queryFn: () => api(`/admin/case-studies/${id}`),
    enabled: Boolean(id),
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- seed the editable form from the loaded record
    setForm(
      doc
        ? {
            ...DEFAULTS,
            ...doc,
            // transient drag-and-drop key, stripped before saving
            gallery: (doc.gallery || []).map((g) => ({ ...g, _key: crypto.randomUUID() })),
          }
        : DEFAULTS
    );
  }, [doc, id]);

  const set = (name) => (value) => setForm((f) => ({ ...f, [name]: value }));
  const setNested = (name, key) => (value) =>
    setForm((f) => ({ ...f, [name]: { ...f[name], [key]: value } }));

  // Unpublishing also un-features it from the homepage — a case study that
  // isn't published never appears in the public API regardless, so leaving
  // featuredOnHome checked would just be a stale, confusing flag.
  const setPublished = (value) => setForm((f) => ({ ...f, published: value, featuredOnHome: value ? f.featuredOnHome : false }));

  const saveMutation = useMutation({
    mutationFn: () => {
      const payload = {
        ...form,
        gallery: form.gallery.map((g) => {
          const item = { ...g };
          delete item._key; // drop transient drag key
          return item;
        }),
      };
      delete payload.order; // order is managed by drag on the listing page, not here
      delete payload.homeOrder; // homeOrder is managed by drag on the Homepage admin tab, not here
      return id
        ? api(`/admin/case-studies/${id}`, { method: "PUT", body: payload })
        : api(`/admin/case-studies`, { method: "POST", body: payload });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "case-studies"] });
      queryClient.invalidateQueries({ queryKey: ["cms", "/case-studies"] });
      navigate("/admin/case-studies");
    },
  });

  const [validationError, setValidationError] = useState("");
  const error = validationError || saveMutation.error?.message || "";
  const saving = saveMutation.isPending;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.cardDefaultImage?.trim()) {
      setValidationError("Listing card default media is required — upload an image or video so the case study shows up in the work grid.");
      return;
    }
    setValidationError("");
    saveMutation.mutate();
  };

  return (
    <>
      <PageHeader>
        <Link to="/admin/case-studies" className="inline-flex items-center gap-2 text-sm text-[#4B433B]/70 hover:text-[#4B433B] mb-3">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
        <h2 className="font-light text-[#4B433B] text-4xl!">
          {id ? "Edit" : "New"} <span className="font-semibold">Case Study</span>
        </h2>
      </PageHeader>

      <div className="max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basics */}
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h4 className="font-bold text-[#4B433B] text-lg!">Basics</h4>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Title (short name, shown on listing cards)" required value={form.title} onChange={set("title")} placeholder="e.g. Green Building Materials" />
            <Field label="Slug (URL)" value={form.slug} onChange={set("slug")} placeholder="auto-generated from title" />
            <Field label="Headline - bold part" value={form.titleHighlight} onChange={set("titleHighlight")} placeholder="e.g. Green Building Materials:" />
            <Field label="Headline - light part" value={form.subtitle} onChange={set("subtitle")} placeholder="e.g. Collaterals that Convened a Movement" />
          </div>
          <Field label="Description (hero paragraph)" type="textarea" rows={4} value={form.description} onChange={set("description")} />
          <Select
            isMulti
            label="Industries"
            options={INDUSTRY_OPTIONS}
            value={form.industries}
            onChange={set("industries")}
            placeholder="Select industries…"
          />
          <Select
            isMulti
            label="Services"
            options={SERVICE_KEY_OPTIONS}
            value={form.serviceKeys}
            onChange={set("serviceKeys")}
            placeholder="Select services…"
          />
          <Field label="Published" type="checkbox" value={form.published} onChange={setPublished} />
          <Field
            label="Feature on homepage 'Selected Work' section"
            type="checkbox"
            value={form.featuredOnHome}
            onChange={set("featuredOnHome")}
            checkboxLabel="Shown in the homepage grid"
            disabled={!form.published}
          />
          <p className="text-xs text-[#4B433B]/60 sm:col-span-2 -mt-2">
            {form.published
              ? "Go to the Homepage tab to set the display order of featured case studies."
              : "Publish this case study first to make it available for the homepage."}
          </p>
        </div>

        {/* Listing card */}
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h4 className="font-bold text-[#4B433B] text-lg!">Listing Card (work overview grid)</h4>
          <div className="grid sm:grid-cols-2 gap-5">
            <ImageUpload label="Default media" required value={form.cardDefaultImage} onChange={set("cardDefaultImage")} folder="case-studies" accept="image/*,video/mp4" />
            <ImageUpload label="Hover media" value={form.cardHoverImage} onChange={set("cardHoverImage")} folder="case-studies" accept="image/*,video/mp4" />
          </div>
        </div>

        {/* Hero media + client logos */}
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h4 className="font-bold text-[#4B433B] text-lg!">Hero</h4>
          <ImageUpload
            label="Hero media"
            value={form.heroMedia?.url}
            onChange={(v) =>
              setForm((f) => ({ ...f, heroMedia: { url: v, type: /\.mp4(\?|$)/i.test(v) ? "video" : "image" } }))
            }
            folder="case-studies"
            accept="image/*,video/mp4"
          />
          <ListEditor
            label="Client Logos"
            addLabel="Add logo"
            items={form.clientLogos.map((url) => ({ url }))}
            onChange={(items) => set("clientLogos")(items.map((i) => i.url))}
            makeBlank={() => ({ url: "" })}
            renderItem={(item, update) => (
              <ImageUpload value={item.url} onChange={(v) => update({ url: v })} folder="case-studies" />
            )}
          />
        </div>

        {/* What we delivered */}
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h4 className="font-bold text-[#4B433B] text-lg!">What We Delivered</h4>
          <ListEditor
            label="Deliverables"
            addLabel="Add deliverable"
            items={form.deliverables}
            onChange={set("deliverables")}
            makeBlank={() => ({ title: "", description: "" })}
            renderItem={(item, update) => (
              <div className="space-y-3">
                <Field label="Title" value={item.title} onChange={(v) => update({ title: v })} />
                <Field label="Description" type="textarea" rows={2} value={item.description} onChange={(v) => update({ description: v })} />
              </div>
            )}
          />
          <ListEditor
            label="Metrics / Stats"
            addLabel="Add metric"
            items={form.metrics}
            onChange={set("metrics")}
            makeBlank={() => ({ value: "", label: "" })}
            renderItem={(item, update) => (
              <div className="grid grid-cols-2 gap-3">
                <Field label="Value" value={item.value} onChange={(v) => update({ value: v })} placeholder="e.g. 8" />
                <Field label="Label" value={item.label} onChange={(v) => update({ label: v })} placeholder="e.g. Decks Customised" />
              </div>
            )}
          />
        </div>

        {/* Gallery */}
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <h4 className="font-bold text-[#4B433B] text-lg!">Gallery</h4>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Layout"
              type="select"
              options={GALLERY_LAYOUT_OPTIONS}
              value={form.galleryLayout}
              onChange={set("galleryLayout")}
            />
          </div>
          <p className="text-xs text-[#4B433B]/60 -mt-2">
            Grid: items render in rows of two with the last item as a full-width banner. Asymmetric:
            first two stack on the left, third is a tall image on the right, next two form a row, last is a banner.
            Order matters — drag the handle to arrange; the live preview shows exactly what visitors see.
          </p>
          <GalleryEditor
            items={form.gallery}
            onChange={set("gallery")}
            layout={form.galleryLayout}
            cta={form.galleryCta}
          />
          <div className="grid sm:grid-cols-2 gap-5 pt-2 border-t border-[#4B433B]/10">
            <Field label="CTA button label (optional)" value={form.galleryCta?.label} onChange={setNested("galleryCta", "label")} placeholder="e.g. View Site" />
            <Field label="CTA button link (optional)" value={form.galleryCta?.href} onChange={setNested("galleryCta", "href")} placeholder="https://…" />
          </div>
        </div>

        {/* Review */}
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h4 className="font-bold text-[#4B433B] text-lg!">Client Review (optional)</h4>
          <Field label="Quote" type="textarea" rows={3} value={form.review?.quote} onChange={setNested("review", "quote")} />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Author Name" value={form.review?.authorName} onChange={setNested("review", "authorName")} />
            <Field label="Author Role" value={form.review?.authorRole} onChange={setNested("review", "authorRole")} />
          </div>
          <ImageUpload label="Author Photo" value={form.review?.authorImage} onChange={setNested("review", "authorImage")} folder="case-studies" />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-full bg-[#f7af19] text-[#0A0A0A] font-semibold cursor-pointer hover:bg-[#d98127] transition-colors duration-200 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Case Study"}
        </button>
      </form>
      </div>
    </>
  );
}
