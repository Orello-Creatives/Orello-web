import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { Pencil, GripVertical } from "lucide-react";
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
import PageHeader from "../components/PageHeader";

// Sort key used before any manual drag has happened: items default to
// homeOrder 0, so freshly-featured case studies fall back to creation order
// until an admin drags something (which assigns everyone a real sequence).
const byHomeOrder = (a, b) =>
  (a.homeOrder || 0) - (b.homeOrder || 0) || new Date(a.createdAt) - new Date(b.createdAt);

function SortableCard({ doc }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: doc._id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    background: isDragging ? "#F4EDE2" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-4 px-4 py-3 border-b border-[#4B433B]/5 hover:bg-[#F4EDE2]/60 transition-colors"
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="p-1.5 rounded-full text-[#4B433B]/50 hover:text-[#4B433B] hover:bg-[#F4EDE2] cursor-grab active:cursor-grabbing touch-none shrink-0"
        title="Drag to reorder"
        aria-label="Drag to reorder"
      >
        <GripVertical className="w-4 h-4" />
      </button>

      <img
        src={doc.cardDefaultImage}
        alt=""
        className="w-16 h-12 rounded-lg object-cover shrink-0 bg-[#4B433B]/5"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#4B433B] truncate">{doc.title}</p>
        <p className="text-xs text-[#4B433B]/60 truncate">{(doc.industries || []).join(", ")}</p>
      </div>

      <Link
        to={`/admin/case-studies/${doc._id}/edit`}
        className="p-2 rounded-full hover:bg-[#f7af19]/30 text-[#4B433B] shrink-0"
        title="Edit"
      >
        <Pencil className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function HomepageOrder() {
  const queryClient = useQueryClient();
  const listKey = ["admin", "case-studies"];

  const { data: allDocs, error: queryError } = useQuery({
    queryKey: listKey,
    queryFn: () => api("/admin/case-studies"),
  });

  const featured = (allDocs || []).filter((d) => d.featuredOnHome).sort(byHomeOrder);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const reorderMutation = useMutation({
    mutationFn: (next) =>
      api("/admin/case-studies/reorder-home", { method: "PATCH", body: { ids: next.map((d) => d._id) } }),
    onMutate: async (next) => {
      await queryClient.cancelQueries({ queryKey: listKey });
      const previous = queryClient.getQueryData(listKey);
      // Optimistically patch just the featured subset's homeOrder within the full list
      const nextOrderById = new Map(next.map((d, i) => [d._id, i]));
      queryClient.setQueryData(listKey, (docs) =>
        (docs || []).map((d) => (nextOrderById.has(d._id) ? { ...d, homeOrder: nextOrderById.get(d._id) } : d))
      );
      return { previous };
    },
    onError: (_err, _next, ctx) => queryClient.setQueryData(listKey, ctx?.previous),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: listKey });
      queryClient.invalidateQueries({ queryKey: ["cms", "/case-studies"] });
    },
  });

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;
    const oldIndex = featured.findIndex((d) => d._id === active.id);
    const newIndex = featured.findIndex((d) => d._id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    reorderMutation.mutate(arrayMove(featured, oldIndex, newIndex));
  };

  const error = queryError?.message || reorderMutation.error?.message || "";

  return (
    <div>
      <PageHeader>
        <h2 className="font-light text-[#4B433B] text-4xl!">
          <span className="font-semibold">Homepage</span>
        </h2>
        <p className="text-sm text-[#4B433B]/60 mt-1">
          Case studies shown in the "A few Selected Work" section on the homepage.
        </p>
      </PageHeader>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {!allDocs ? (
        <p className="text-sm text-[#4B433B]/50 px-2">Loading…</p>
      ) : featured.length === 0 ? (
        <div className="bg-[#fdf6e9] rounded-2xl p-10 text-center text-sm text-[#4B433B]/60 shadow-sm">
          No case studies are featured yet — go to{" "}
          <Link to="/admin/case-studies" className="text-[#d98127] font-semibold hover:underline">
            Case Studies
          </Link>{" "}
          and check "Feature on homepage" on the ones you want shown here.
        </div>
      ) : (
        <>
          {featured.length > 1 && (
            <p className="mb-3 text-xs text-[#4B433B]/55">
              Drag to reorder — this order is independent from the main Case Studies list order.
            </p>
          )}
          <div className="bg-[#fdf6e9] rounded-2xl overflow-hidden shadow-sm">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={featured.map((d) => d._id)} strategy={verticalListSortingStrategy}>
                {featured.map((doc) => (
                  <SortableCard key={doc._id} doc={doc} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </>
      )}
    </div>
  );
}
