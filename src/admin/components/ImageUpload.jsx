import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { uploadFile } from "../api";

const isVideo = (url) => /\.mp4(\?|$)/i.test(url || "");

export default function ImageUpload({ label, value, onChange, folder = "misc", accept = "image/*", required = false }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const { url } = await uploadFile(file, folder);
      onChange(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div>
      {label && (
        <span className="block text-sm font-semibold text-[#4B433B] mb-1.5">
          {label}
          {required && <span className="text-[#d98127]"> *</span>}
        </span>
      )}
      <div className="flex items-start gap-3">
        {value ? (
          <div className="relative w-28 h-28 rounded-xl overflow-hidden bg-[#F4EDE2] border border-[#4B433B]/20 flex-shrink-0">
            {isVideo(value) ? (
              <video src={value} className="w-full h-full object-cover" muted preload="metadata" />
            ) : (
              <img src={value} alt="" className="w-full h-full object-cover" />
            )}
            <button
              type="button"
              onClick={() => onChange("")}
              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[#0A0A0A]/70 text-white flex items-center justify-center cursor-pointer hover:bg-[#0A0A0A]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : null}
        <div className="flex-1 space-y-2">
          <button
            type="button"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7af19] text-[#0A0A0A] text-sm font-medium cursor-pointer hover:bg-[#d98127] transition-colors duration-200 disabled:opacity-50"
          >
            <Upload className="w-4 h-4" strokeWidth={1.75} />
            {uploading ? "Uploading…" : value ? "Replace file" : "Upload file"}
          </button>
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
        <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
      </div>
    </div>
  );
}
