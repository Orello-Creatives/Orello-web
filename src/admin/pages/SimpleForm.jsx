import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { api } from "../api";
import { CONTENT_TYPES } from "../contentTypes";
import Field from "../components/Field";
import ImageUpload from "../components/ImageUpload";
import PageHeader from "../components/PageHeader";

export default function SimpleForm({ type }) {
  const config = CONTENT_TYPES[type];
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState(config.defaults);

  const { data: loaded } = useQuery({
    queryKey: ["admin", config.endpoint, id],
    queryFn: () => api(`/admin/${config.endpoint}/${id}`),
    enabled: Boolean(id),
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- seed the editable form from the loaded record
    setForm(loaded ? { ...config.defaults, ...loaded } : config.defaults);
  }, [loaded, id, type]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (name) => (value) => setForm((f) => ({ ...f, [name]: value }));

  const saveMutation = useMutation({
    mutationFn: () => {
      const body = { ...form };
      delete body.order;
      return id
        ? api(`/admin/${config.endpoint}/${id}`, { method: "PUT", body })
        : api(`/admin/${config.endpoint}`, { method: "POST", body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", config.endpoint] });
      queryClient.invalidateQueries({ queryKey: ["cms", `/${config.endpoint}`] });
      navigate(`/admin/${type}`);
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
        <Link to={`/admin/${type}`} className="inline-flex items-center gap-2 text-sm text-[#4B433B]/70 hover:text-[#4B433B] mb-3">
          <ArrowLeft className="w-4 h-4" /> Back to {config.label}
        </Link>
        <h2 className="font-light text-[#4B433B] text-4xl!">
          {id ? "Edit" : "New"} <span className="font-semibold">{config.singular}</span>
        </h2>
      </PageHeader>

      <div className="max-w-2xl">
      <form onSubmit={handleSubmit} className="bg-[#fdf6e9] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
        {config.fields.map((field) =>
          field.type === "image" ? (
            <ImageUpload
              key={field.name}
              label={field.label}
              value={form[field.name]}
              onChange={set(field.name)}
              folder={field.folder}
            />
          ) : (
            <Field
              key={field.name}
              label={field.label}
              type={field.type}
              options={field.options}
              required={field.required}
              value={form[field.name]}
              onChange={set(field.name)}
            />
          )
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-full bg-[#f7af19] text-[#0A0A0A] font-semibold cursor-pointer hover:bg-[#d98127] transition-colors duration-200 disabled:opacity-50"
        >
          {saving ? "Savingâ€¦" : "Save"}
        </button>
      </form>
      </div>
    </>
  );
}
