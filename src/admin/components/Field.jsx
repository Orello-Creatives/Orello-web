import Select from "./Select";

const inputClass =
  "w-full bg-[#FDF6E9] border border-[#4B433B]/20 rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] placeholder-[#4B433B]/40 focus:outline-none focus:border-[#d98127] transition-colors duration-200";

export default function Field({ label, type = "text", value, onChange, options = [], required, placeholder, rows = 4, checkboxLabel = "Visible on the website", disabled = false }) {
  // react-select isn't a native control, so render it outside Field's <label> wrapper
  if (type === "select") {
    return (
      <Select label={label} required={required} options={options} value={value} onChange={onChange} placeholder={placeholder} />
    );
  }

  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-semibold text-[#4B433B] mb-1.5">
          {label}
          {required && <span className="text-[#d98127]"> *</span>}
        </span>
      )}
      {type === "textarea" ? (
        <textarea
          className={inputClass}
          value={value ?? ""}
          rows={rows}
          required={required}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : type === "checkbox" ? (
        <span className="flex items-center gap-2 py-1">
          <input
            type="checkbox"
            checked={Boolean(value)}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 accent-[#d98127] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          />
          <span className={`text-sm ${disabled ? "text-[#4B433B]/40" : "text-[#4B433B]"}`}>{checkboxLabel}</span>
        </span>
      ) : (
        <input
          type={type}
          className={inputClass}
          value={value ?? ""}
          required={required}
          placeholder={placeholder}
          onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
        />
      )}
    </label>
  );
}
