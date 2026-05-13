import { FormEvent, useEffect, useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "https://name-ooo-jsc-suek-backend.onrender.com";

export function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("suek_admin_token");

    if (token) {
      navigate("/admin-dashboard");
    }
  }, [navigate]);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      localStorage.setItem("suek_admin_token", data.token);

      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
      setError("Invalid admin username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
            <ShieldCheck className="h-8 w-8 text-amber-400" />
          </div>

          <h1 className="text-2xl font-black uppercase tracking-[0.14em]">
            Admin Login
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Secure access to OOO JSC SUEK inquiry dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="text"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
          />

          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
          />

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Lock className="h-5 w-5" />
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}