import { getToken, clearToken } from "./auth";

const BASE = "https://letsyogwithshai-backend.onrender.com";

export async function api(path, { method = "GET", body, isForm = false } = {}) {
  const headers = {};
  if (!isForm) headers["Content-Type"] = "application/json";
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE}/api/cms${path}`, {
    method,
    headers,
    body: isForm ? body : body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    clearToken();
    if (!path.startsWith("/auth/")) {
      window.location.assign("/admin/login");
      return new Promise(() => {}); // navigation in progress
    }
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export function uploadFile(file, folder) {
  const form = new FormData();
  form.append("file", file);
  form.append("folder", folder || "misc");
  return api("/upload", { method: "POST", body: form, isForm: true });
}
