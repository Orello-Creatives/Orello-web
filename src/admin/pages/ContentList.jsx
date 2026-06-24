import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { api } from "../api";
import { CONTENT_TYPES } from "../contentTypes";
import PageHeader from "../components/PageHeader";

function CellValue({ value }) {
  if (typeof value === "boolean") {
    return (
      <span
        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
          value ? "bg-[#f7af19]/30 text-[#7a5200]" : "bg-[#4B433B]/10 text-[#4B433B]/60"
        }`}
      >
        {value ? "Published" : "Hidden"}
      </span>
    );
  }
  if (Array.isArray(value)) return <span>{value.join(", ")}</span>;
  return <span>{String(value ?? "")}</span>;
}

function RowActions({ type, doc, onDelete }) {
  return (
    <div className="flex items-center gap-2 justify-end">
      <Link to={`/admin/${type}/${doc._id}/edit`} className="p-2 rounded-full hover:bg-[#f7af19]/30 text-[#4B433B]" title="Edit">
        <Pencil className="w-4 h-4" />
      </Link>
      <button onClick={() => onDelete(doc)} className="p-2 rounded-full hover:bg-red-100 text-red-700 cursor-pointer" title="Delete">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

function Cells({ columns, doc }) {
  return columns.map((col) => (
    <td key={col.key} className="px-6 py-4 text-sm text-[#4B433B] max-w-xs truncate">
      <CellValue value={doc[col.key]} />
    </td>
  ));
}

function SortableRow({ type, doc, columns, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: doc._id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    background: isDragging ? "#F4EDE2" : undefined,
  };
  return (
    <tr ref={setNodeRef} style={style} className="border-b border-[#4B433B]/5 hover:bg-[#F4EDE2]/60 transition-colors">
      <td className="pl-4 w-10">
        <button
          type="button"
          {...attributes}
          {...listeners}
          className="p-1.5 rounded-full text-[#4B433B]/50 hover:text-[#4B433B] hover:bg-[#F4EDE2] cursor-grab active:cursor-grabbing touch-none"
          title="Drag to reorder"
          aria-label="Drag to reorder"
        >
          <GripVertical className="w-4 h-4" />
        </button>
      </td>
      <Cells columns={columns} doc={doc} />
      <td className="px-6 py-4">
        <RowActions type={type} doc={doc} onDelete={onDelete} />
      </td>
    </tr>
  );
}

export default function ContentList({ type }) {
  const config = CONTENT_TYPES[type];
  const queryClient = useQueryClient();
  const listKey = ["admin", config.endpoint];

  const { data: docs, error: queryError } = useQuery({
    queryKey: listKey,
    queryFn: () => api(`/admin/${config.endpoint}`),
  });

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const deleteMutation = useMutation({
    mutationFn: (id) => api(`/admin/${config.endpoint}/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: listKey }),
  });

  const reorderMutation = useMutation({
    mutationFn: (next) =>
      api(`/admin/${config.endpoint}/reorder`, { method: "PATCH", body: { ids: next.map((d) => d._id) } }),
    onMutate: async (next) => {
      await queryClient.cancelQueries({ queryKey: listKey });
      const previous = queryClient.getQueryData(listKey);
      queryClient.setQueryData(listKey, next); // optimistic
      return { previous };
    },
    onError: (_err, _next, ctx) => queryClient.setQueryData(listKey, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: listKey }),
  });

  const error =
    queryError?.message || deleteMutation.error?.message || reorderMutation.error?.message || "";

  const handleDelete = (doc) => {
    const name = doc.title || doc.question || doc.name || "this item";
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    deleteMutation.mutate(doc._id);
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;
    const oldIndex = docs.findIndex((d) => d._id === active.id);
    const newIndex = docs.findIndex((d) => d._id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    reorderMutation.mutate(arrayMove(docs, oldIndex, newIndex));
  };

  const ordered = Boolean(config.ordered);
  const colCount = config.columns.length + (ordered ? 2 : 1);

  const renderBody = () => {
    if (!docs) {
      return (
        <tr>
          <td colSpan={colCount} className="px-6 py-10 text-center text-sm text-[#4B433B]/50">Loading…</td>
        </tr>
      );
    }
    if (docs.length === 0) {
      return (
        <tr>
          <td colSpan={colCount} className="px-6 py-10 text-center text-sm text-[#4B433B]/50">
            No {config.label.toLowerCase()} yet — create the first one.
          </td>
        </tr>
      );
    }
    if (ordered) {
      return docs.map((doc) => (
        <SortableRow key={doc._id} type={type} doc={doc} columns={config.columns} onDelete={handleDelete} />
      ));
    }
    return docs.map((doc) => (
      <tr key={doc._id} className="border-b border-[#4B433B]/5 hover:bg-[#F4EDE2]/60 transition-colors">
        <Cells columns={config.columns} doc={doc} />
        <td className="px-6 py-4">
          <RowActions type={type} doc={doc} onDelete={handleDelete} />
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <PageHeader>
        <div className="flex items-center justify-between">
          <h2 className="font-light text-[#4B433B] text-4xl!">{config.label}</h2>
          <Link
            to={`/admin/${type}/new`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f7af19] text-[#0A0A0A] text-sm font-semibold hover:bg-[#d98127] transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            New {config.singular}
          </Link>
        </div>
      </PageHeader>

      {ordered && docs && docs.length > 1 && (
        <p className="mb-3 text-xs text-[#4B433B]/55">Drag the handle to reorder — the order is saved automatically and used on the website.</p>
      )}
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="bg-[#fdf6e9] rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#4B433B]/10">
              {ordered && <th className="w-10" />}
              {config.columns.map((col) => (
                <th key={col.key} className="px-6 py-4 text-xs font-semibold uppercase tracking-[1.5px] text-[#4B433B]/60">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-4 w-24" />
            </tr>
          </thead>
          <tbody>
            {ordered && docs && docs.length > 0 ? (
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={docs.map((d) => d._id)} strategy={verticalListSortingStrategy}>
                  {renderBody()}
                </SortableContext>
              </DndContext>
            ) : (
              renderBody()
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
