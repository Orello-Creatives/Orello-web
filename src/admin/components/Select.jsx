import ReactSelect from "react-select";

// Orello admin theme applied via react-select's styles API (reliable
// regardless of Tailwind). Menus portal to <body> so they don't clip
// inside the scrollable form cards.
const styles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#FDF6E9",
    borderColor: state.isFocused ? "#d98127" : "rgba(75,67,59,0.2)",
    borderRadius: 12,
    minHeight: 42,
    boxShadow: "none",
    fontSize: 14,
    fontFamily: "Satoshi, sans-serif",
    "&:hover": { borderColor: "#d98127" },
  }),
  valueContainer: (base) => ({ ...base, paddingLeft: 12, paddingRight: 8 }),
  placeholder: (base) => ({ ...base, color: "rgba(75,67,59,0.4)" }),
  singleValue: (base) => ({ ...base, color: "#0A0A0A" }),
  input: (base) => ({ ...base, color: "#0A0A0A" }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#fdf6e9",
    border: "1px solid rgba(75,67,59,0.12)",
    borderRadius: 12,
    overflow: "hidden",
    fontSize: 14,
    fontFamily: "Satoshi, sans-serif",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  option: (base, state) => ({
    ...base,
    cursor: "pointer",
    color: "#0A0A0A",
    backgroundColor: state.isSelected ? "#f7af19" : state.isFocused ? "#F4EDE2" : "transparent",
    "&:active": { backgroundColor: "#f7af19" },
  }),
  multiValue: (base) => ({ ...base, backgroundColor: "#f7af19", borderRadius: 9999 }),
  multiValueLabel: (base) => ({ ...base, color: "#0A0A0A", fontSize: 13 }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#0A0A0A",
    borderRadius: 9999,
    "&:hover": { backgroundColor: "#d98127", color: "#fff" },
  }),
  dropdownIndicator: (base) => ({ ...base, color: "rgba(75,67,59,0.5)", "&:hover": { color: "#d98127" } }),
  indicatorSeparator: (base) => ({ ...base, backgroundColor: "rgba(75,67,59,0.15)" }),
};

export default function Select({ label, required, isMulti = false, options = [], value, onChange, placeholder }) {
  const selected = isMulti
    ? options.filter((o) => Array.isArray(value) && value.includes(o.value))
    : options.find((o) => o.value === value) || null;

  const handleChange = (sel) => {
    if (isMulti) onChange((sel || []).map((o) => o.value));
    else onChange(sel ? sel.value : "");
  };

  return (
    <div className="block">
      {label && (
        <span className="block text-sm font-semibold text-[#4B433B] mb-1.5">
          {label}
          {required && <span className="text-[#d98127]"> *</span>}
        </span>
      )}
      <ReactSelect
        isMulti={isMulti}
        options={options}
        value={selected}
        onChange={handleChange}
        placeholder={placeholder}
        styles={styles}
        menuPortalTarget={typeof document !== "undefined" ? document.body : undefined}
        classNamePrefix="orello-select"
      />
    </div>
  );
}
