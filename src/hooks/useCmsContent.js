import { useQuery } from "@tanstack/react-query";

const BASE = import.meta.env.VITE_API_URL || "";

// Fetches CMS content with a hardcoded fallback. react-query caches per
// endpoint (staleTime in queryClient), so navigating between pages reuses
// the cached data instead of refetching. The fallback renders immediately
// and CMS data swaps in only when the API responds with non-empty data —
// the site never breaks if the backend is down or the CMS is unpopulated.
export function useCmsContent(endpoint, fallback) {
  const { data } = useQuery({
    queryKey: ["cms", endpoint],
    queryFn: () =>
      fetch(`${BASE}/api/cms${endpoint}`).then((res) => {
        if (!res.ok) throw new Error("CMS request failed");
        return res.json();
      }),
    enabled: Boolean(BASE),
  });

  const hasData = Array.isArray(data) ? data.length > 0 : Boolean(data);
  return hasData ? data : fallback;
}
