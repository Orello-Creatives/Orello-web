import { QueryClient } from "@tanstack/react-query";

// Shared client for the whole app (public site + admin).
// staleTime keeps data fresh across route changes so navigating between
// pages doesn't refire the same CMS request.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
