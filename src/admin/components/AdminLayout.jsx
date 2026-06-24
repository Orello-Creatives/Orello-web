import { NavLink, useNavigate } from "react-router";
import { LogOut, LayoutDashboard, FileText, Briefcase, HelpCircle, Users, Quote } from "lucide-react";
import { clearToken } from "../auth";

const NAV_ITEMS = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/blogs", label: "Blog Posts", icon: FileText },
  { to: "/admin/case-studies", label: "Case Studies", icon: Briefcase },
  { to: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { to: "/admin/team", label: "Team Members", icon: Users },
  { to: "/admin/testimonials", label: "Testimonials", icon: Quote },
];

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/admin/login");
  };

  return (
    <div className="h-screen overflow-hidden bg-[#eadecf] flex" style={{ fontFamily: "Satoshi, sans-serif" }}>
      {/* Sidebar — stays fixed while the main area scrolls */}
      <aside className="w-64 flex-shrink-0 h-screen bg-[#fdf6e9] border-r border-[#4B433B]/10 flex flex-col">
        <div className="p-6 border-b border-[#4B433B]/10">
          <h4 className="font-black text-[#4B433B]" style={{ fontWeight: 900 }}>
            Orello <span className="text-[#d98127]">CMS</span>
          </h4>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#f7af19] text-[#0A0A0A]"
                    : "text-[#4B433B] hover:bg-[#F4EDE2]"
                }`
              }
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-[#4B433B]/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium text-[#4B433B] hover:bg-[#F4EDE2] w-full cursor-pointer transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" strokeWidth={1.75} />
            Log out
          </button>
        </div>
      </aside>

      {/* Main — the only scrolling region (no top padding so the sticky
          PageHeader sits flush with the top) */}
      <main className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 overflow-auto">{children}</main>
    </div>
  );
}
