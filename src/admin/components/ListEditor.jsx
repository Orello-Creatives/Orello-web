import { useState, useEffect } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

// Generic array editor: renders one card per item with move/remove controls.
// renderItem(item, update) returns the fields for a single row;
// update(patch) merges the patch into that item.
//
// Rows are keyed by a stable per-row id kept parallel to `items` (reordered with
// moves, spliced on remove) rather than the array index — so moving/removing a
// row reconciles to the right DOM node instead of reusing it by position. The
// keys live in state, not in the item data, so string-backed lists (e.g. client
// logos that round-trip through plain strings) are unaffected.
export default function ListEditor({ label, items = [], onChange, makeBlank, renderItem, addLabel = "Add item" }) {
  const [keys, setKeys] = useState(() => items.map(() => crypto.randomUUID()));

  // Safety net: keep the key list length in sync if items change externally
  // (e.g. the form seeds its state from a loaded record after the query resolves).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync key count to item count
    setKeys((prev) => {
      if (prev.length === items.length) return prev;
      if (prev.length > items.length) return prev.slice(0, items.length);
      const next = [...prev];
      while (next.length < items.length) next.push(crypto.randomUUID());
      return next;
    });
  }, [items.length]);

  const update = (idx, patch) => {
    onChange(items.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  };

  const remove = (idx) => {
    setKeys((k) => k.filter((_, i) => i !== idx));
    onChange(items.filter((_, i) => i !== idx));
  };

  const move = (idx, dir) => {
    const target = idx + dir;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[idx], next[target]] = [next[target], next[idx]];
    setKeys((k) => {
      const nk = [...k];
      [nk[idx], nk[target]] = [nk[target], nk[idx]];
      return nk;
    });
    onChange(next);
  };

  const add = () => {
    setKeys((k) => [...k, crypto.randomUUID()]);
    onChange([...items, makeBlank()]);
  };

  return (
    <div>
      {label && <span className="block text-sm font-semibold text-[#4B433B] mb-2">{label}</span>}
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={keys[idx] ?? idx} className="bg-[#F4EDE2] rounded-2xl p-4 border border-[#4B433B]/10">
            <div className="flex justify-end gap-1 mb-2">
              <button type="button" onClick={() => move(idx, -1)} className="p-1.5 rounded-full hover:bg-[#fdf6e9] cursor-pointer text-[#4B433B]" title="Move up">
                <ChevronUp className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => move(idx, 1)} className="p-1.5 rounded-full hover:bg-[#fdf6e9] cursor-pointer text-[#4B433B]" title="Move down">
                <ChevronDown className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => remove(idx)} className="p-1.5 rounded-full hover:bg-red-100 cursor-pointer text-red-700" title="Remove">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            {renderItem(item, (patch) => update(idx, patch))}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-3 flex items-center gap-2 px-4 py-2 rounded-full border border-[#4B433B]/30 text-sm font-medium text-[#4B433B] cursor-pointer hover:bg-[#F4EDE2] transition-colors duration-200"
      >
        <Plus className="w-4 h-4" />
        {addLabel}
      </button>
    </div>
  );
}
