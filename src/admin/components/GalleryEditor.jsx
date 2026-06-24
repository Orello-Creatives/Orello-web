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
  rectSortingStrategy,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2, Plus } from "lucide-react";
import ImageUpload from "./ImageUpload";
import CaseStudyGallery from "../../components/CaseStudyGallery.jsx";

// Video is auto-detected from the uploaded file (.mp4); no manual Type select.
const mediaType = (url) => (/\.mp4(\?|$)/i.test(url || "") ? "video" : "image");

const ASYMMETRIC_ROLES = ["Top-left", "Bottom-left", "Tall (right)", "Row left", "Row right", "Banner"];

// Which slot an item lands in on the live site, given the layout + its index.
function slotRole(layout, index, total) {
  if (layout === "asymmetric" && total >= 5) {
    return ASYMMETRIC_ROLES[index] || "Unused";
  }
  if (index === total - 1) return "Banner";
  return `Image ${index + 1}`;
}

// ── Card (vertical list, keyboard-friendly, holds the editing controls) ──
function SortableCard({ item, index, total, layout, onUpdate, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item._key });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    zIndex: isDragging ? 20 : "auto",
  };
  const role = slotRole(layout, index, total);

  return (
    <div ref={setNodeRef} style={style} className="bg-[#F4EDE2] rounded-2xl p-4 border border-[#4B433B]/10">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#4B433B]">
          <span className="w-5 h-5 rounded-full bg-[#f7af19] text-[#0A0A0A] flex items-center justify-center">{index + 1}</span>
          <span className="px-2 py-0.5 rounded-full bg-[#FDF6E9] border border-[#4B433B]/15">{role}</span>
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            {...attributes}
            {...listeners}
            className="p-1.5 rounded-full text-[#4B433B] hover:bg-[#fdf6e9] cursor-grab active:cursor-grabbing touch-none"
            title="Drag to reorder"
            aria-label="Drag to reorder"
          >
            <GripVertical className="w-4 h-4" />
          </button>
          <button type="button" onClick={onRemove} className="p-1.5 rounded-full hover:bg-red-100 cursor-pointer text-red-700" title="Remove">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ImageUpload value={item.url} onChange={(v) => onUpdate({ url: v, type: mediaType(v) })} folder="case-studies" accept="image/*,video/mp4" />
    </div>
  );
}

// ── Preview tile (the whole tile is the drag handle) ──
function SortableTile({ id, className, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 30 : "auto",
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${className} cursor-grab active:cursor-grabbing select-none touch-none ring-1 ring-black/5`}
    >
      {children}
    </div>
  );
}

export default function GalleryEditor({ items = [], onChange, layout, cta }) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Reorder the full items array by _key (works for both the card list and the
  // preview, even though the preview only shows uploaded items).
  const reorderByKey = (activeId, overId) => {
    if (!overId || activeId === overId) return;
    const oldIndex = items.findIndex((i) => i._key === activeId);
    const newIndex = items.findIndex((i) => i._key === overId);
    if (oldIndex !== -1 && newIndex !== -1) onChange(arrayMove(items, oldIndex, newIndex));
  };
  const onDragEnd = ({ active, over }) => reorderByKey(active.id, over?.id);

  const update = (idx, patch) => onChange(items.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  const remove = (idx) => onChange(items.filter((_, i) => i !== idx));
  const add = () => onChange([...items, { url: "", type: "image", _key: crypto.randomUUID() }]);

  const cardIds = items.map((i) => i._key);
  const previewItems = items
    .filter((i) => i.url)
    .map((i) => ({ src: i.url, type: i.type, _key: i._key }));

  return (
    <div className="space-y-4">
      {/* Editing cards */}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {items.map((item, idx) => (
              <SortableCard
                key={item._key}
                item={item}
                index={idx}
                total={items.length}
                layout={layout}
                onUpdate={(patch) => update(idx, patch)}
                onRemove={() => remove(idx)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        type="button"
        onClick={add}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#4B433B]/30 text-sm font-medium text-[#4B433B] cursor-pointer hover:bg-[#F4EDE2] transition-colors duration-200"
      >
        <Plus className="w-4 h-4" />
        Add gallery item
      </button>

      {/* Live preview — the real website renderer, draggable */}
      <div className="pt-2">
        <span className="block text-sm font-semibold text-[#4B433B] mb-2">
          Live preview — drag images to position them
        </span>
        {previewItems.length === 0 ? (
          <p className="text-xs text-[#4B433B]/50 italic">Upload images above to preview the gallery.</p>
        ) : (
          <div className="rounded-2xl border border-[#4B433B]/15 overflow-hidden">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
              <SortableContext items={previewItems.map((i) => i._key)} strategy={rectSortingStrategy}>
                <CaseStudyGallery compact Tile={SortableTile} layout={layout} items={previewItems} cta={cta} />
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>
    </div>
  );
}
