import { useQueries } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { api } from "../api";
import { CONTENT_TYPES } from "../contentTypes";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const entries = Object.entries(CONTENT_TYPES);

  const results = useQueries({
    queries: entries.map(([, { endpoint }]) => ({
      queryKey: ["admin", endpoint],
      queryFn: () => api(`/admin/${endpoint}`),
    })),
  });

  const counts = Object.fromEntries(
    entries.map(([key], i) => {
      const r = results[i];
      return [key, r.isError ? "—" : r.data ? r.data.length : "…"];
    })
  );

  return (
    <div>
      <PageHeader>
        <h2 className="font-light text-[#4B433B] text-4xl!">
          Content <span className="font-semibold">Dashboard</span>
        </h2>
      </PageHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {entries.map(([key, { label }]) => (
          <Link
            key={key}
            to={`/admin/${key}`}
            className="group bg-[#fdf6e9] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#4B433B]/60 mb-1">{label}</p>
                <p className="text-4xl font-black text-[#4B433B]" style={{ fontWeight: 900 }}>
                  {counts[key]}
                </p>
              </div>
              <span className="w-10 h-10 rounded-full bg-[#f7af19] flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors duration-300">
                <ArrowUpRight className="w-5 h-5 text-[#0A0A0A] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
