import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { api } from "../api";
import { TAG_COLOR_OPTIONS } from "../contentTypes";
import Field from "../components/Field";
import ImageUpload from "../components/ImageUpload";
import ListEditor from "../components/ListEditor";
import PageHeader from "../components/PageHeader";

const DEFAULTS = {
  title: "",
  slug: "",
  author: "",
  publishedDate: "",
  tag: "BLOGS",
  tagColor: "bg-orange-500",
  featuredImage: "",
  cardImage: "",
  intro: "",
  sections: [],
  published: true,
};


const toFormSections = (sections = []) =>
  sections.map((s) => ({ heading: s.heading || "", text: (s.paragraphs || []).join("\n\n") }));
const toApiSections = (sections = []) =>
  sections.map((s) => ({
    heading: s.heading,
    paragraphs: s.text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean),
  }));

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState(DEFAULTS);

  const { data: doc } = useQuery({
    queryKey: ["admin", "blogs", id],
    queryFn: () => api(`/admin/blogs/${id}`),
    enabled: Boolean(id),
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- seed the editable form from the loaded record
    setForm(
      doc
        ? {
            ...doc,
            publishedDate: doc.publishedDate ? doc.publishedDate.slice(0, 10) : "",
            sections: toFormSections(doc.sections),
          }
        : DEFAULTS
    );
  }, [doc, id]);

  const set = (name) => (value) => setForm((f) => ({ ...f, [name]: value }));

  const saveMutation = useMutation({
    mutationFn: () => {
      const body = { ...form, sections: toApiSections(form.sections) };
      if (!body.publishedDate) delete body.publishedDate;
      return id
        ? api(`/admin/blogs/${id}`, { method: "PUT", body })
        : api(`/admin/blogs`, { method: "POST", body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "blogs"] });
      queryClient.invalidateQueries({ queryKey: ["cms", "/blogs"] });
      navigate("/admin/blogs");
    },
  });

  const error = saveMutation.error?.message || "";
  const saving = saveMutation.isPending;

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMutation.mutate();
  };

  return (
    <>
      <PageHeader>
        <Link to="/admin/blogs" className="inline-flex items-center gap-2 text-sm text-[#4B433B]/70 hover:text-[#4B433B] mb-3">
          <ArrowLeft className="w-4 h-4" /> Back to Blog Posts
        </Link>
        <h2 className="font-light text-[#4B433B] text-4xl!">
          {id ? "Edit" : "New"} <span className="font-semibold">Blog Post</span>
        </h2>
      </PageHeader>

      <div className="max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <Field label="Title" required value={form.title} onChange={set("title")} />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Slug (URL)" value={form.slug} onChange={set("slug")} placeholder="auto-generated from title" />
            <Field label="Author" value={form.author} onChange={set("author")} />
            <Field label="Publish Date" type="date" value={form.publishedDate} onChange={set("publishedDate")} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tag" value={form.tag} onChange={set("tag")} />
              <Field label="Tag Color" type="select" options={TAG_COLOR_OPTIONS} value={form.tagColor} onChange={set("tagColor")} />
            </div>
          </div>
          <Field label="Introduction" type="textarea" rows={4} value={form.intro} onChange={set("intro")} />
          <div className="grid sm:grid-cols-2 gap-5">
            <ImageUpload label="Hero Image (top of the post)" value={form.featuredImage} onChange={set("featuredImage")} folder="blogs" />
            <ImageUpload label="Card Image (listing thumbnail)" value={form.cardImage} onChange={set("cardImage")} folder="blogs" />
          </div>
          <Field label="Published" type="checkbox" value={form.published} onChange={set("published")} />
        </div>

        <div className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 shadow-sm">
          <ListEditor
            label="Content Sections"
            addLabel="Add section"
            items={form.sections}
            onChange={set("sections")}
            makeBlank={() => ({ heading: "", text: "" })}
            renderItem={(item, update) => (
              <div className="space-y-3">
                <Field label="Heading" value={item.heading} onChange={(v) => update({ heading: v })} />
                <Field
                  label="Paragraphs (separate with a blank line)"
                  type="textarea"
                  rows={6}
                  value={item.text}
                  onChange={(v) => update({ text: v })}
                />
              </div>
            )}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-full bg-[#f7af19] text-[#0A0A0A] font-semibold cursor-pointer hover:bg-[#d98127] transition-colors duration-200 disabled:opacity-50"
        >
          {saving ? "Savingâ€¦" : "Save Blog Post"}
        </button>
      </form>
      </div>
    </>
  );
}
