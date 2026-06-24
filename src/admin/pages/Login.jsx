import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { api } from "../api";
import { setToken, isLoggedIn } from "../auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { token } = await api("/auth/login", { method: "POST", body: { email, password } });
      setToken(token);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#eadecf] flex items-center justify-center p-4"
      style={{ fontFamily: "Satoshi, sans-serif" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#fdf6e9] rounded-2xl shadow-lg p-8 sm:p-10"
      >
        <h3 className="font-black text-[#4B433B] mb-1 text-3xl!" style={{ fontWeight: 900 }}>
          Orello <span className="text-[#d98127]">CMS</span>
        </h3>
        <p className="text-sm text-[#4B433B]/70 mb-8">Sign in to manage website content</p>

        <div className="space-y-4">
          <label className="block">
            <span className="block text-sm font-semibold text-[#4B433B] mb-1.5">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F4EDE2] border border-[#4B433B]/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#d98127]"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-[#4B433B] mb-1.5">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#F4EDE2] border border-[#4B433B]/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#d98127]"
            />
          </label>
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full py-3 rounded-full bg-[#f7af19] text-[#0A0A0A] font-semibold cursor-pointer hover:bg-[#d98127] transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
