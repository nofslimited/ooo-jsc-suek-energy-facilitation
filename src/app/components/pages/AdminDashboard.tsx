import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Building2,
  User,
  MessageSquare,
  Inbox,
  LogOut,
  Trash2,
} from "lucide-react";

interface ContactInquiry {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "https://name-ooo-jsc-suek-backend.onrender.com";

export function AdminDashboard() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const loadInquiries = () => {
    fetch(`${API_BASE}/contacts`)
      .then((res) => res.json())
      .then((data) => {
        setInquiries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load inquiries:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("suek_admin_logged_in");

    if (loggedIn !== "true") {
      navigate("/admin-login");
      return;
    }

    loadInquiries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("suek_admin_logged_in");
    navigate("/admin-login");
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete Inquiry #${id}?`
    );

    if (!confirmed) return;

    setDeletingId(id);

    try {
      const response = await fetch(`${API_BASE}/contacts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete inquiry");
      }

      setInquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete inquiry. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-amber-500/10 p-4">
              <Inbox className="h-8 w-8 text-amber-400" />
            </div>

            <div>
              <h1 className="text-3xl font-black uppercase tracking-[0.14em] text-white">
                Admin Dashboard
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Website contact inquiries and communication requests.
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center">
            <p className="text-slate-400">Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center">
            <p className="text-slate-400">No inquiries found.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm"
              >
                <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-amber-400">
                        Inquiry #{inquiry.id}
                      </span>
                    </div>

                    <h2 className="text-xl font-black text-white">
                      {inquiry.subject}
                    </h2>
                  </div>

                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    disabled={deletingId === inquiry.id}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Trash2 className="h-4 w-4" />
                    {deletingId === inquiry.id ? "Deleting..." : "Delete"}
                  </button>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <User className="h-4 w-4" />
                      <span className="text-xs font-black uppercase tracking-[0.14em]">
                        Full Name
                      </span>
                    </div>

                    <p className="text-sm text-slate-300">{inquiry.name}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <Mail className="h-4 w-4" />
                      <span className="text-xs font-black uppercase tracking-[0.14em]">
                        Email
                      </span>
                    </div>

                    <p className="break-all text-sm text-slate-300">
                      {inquiry.email}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <Phone className="h-4 w-4" />
                      <span className="text-xs font-black uppercase tracking-[0.14em]">
                        Phone
                      </span>
                    </div>

                    <p className="text-sm text-slate-300">
                      {inquiry.phone || "Not provided"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <Building2 className="h-4 w-4" />
                      <span className="text-xs font-black uppercase tracking-[0.14em]">
                        Company
                      </span>
                    </div>

                    <p className="text-sm text-slate-300">
                      {inquiry.company || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <div className="mb-3 flex items-center gap-2 text-amber-400">
                    <MessageSquare className="h-4 w-4" />

                    <span className="text-xs font-black uppercase tracking-[0.14em]">
                      Message
                    </span>
                  </div>

                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">
                    {inquiry.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}