"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Mail, Phone, MessageCircle, Search, Filter, X } from "lucide-react";
import Link from "next/link";

const supabase = createClient();

type RequestRow = {
  id: string;
  created_at: string;
  business_name: string;
  email: string;
  phone: string;
  service: string;
  budget: string | null;
  details: string;
  status: string;
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<RequestRow | null>(null);

  // Simple password gate (change the password here)
  const ADMIN_PASSWORD = "ExcelPro2026!";

  useEffect(() => {
    if (authenticated) {
      loadRequests();
    }
  }, [authenticated]);

  const loadRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("client_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setRequests(data as RequestRow[]);
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const filtered = requests.filter((r) => {
    const matchesFilter = filter === "All" || r.status === filter;
    const q = search.toLowerCase();
    const matchesSearch =
      r.business_name.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q) ||
      r.service.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const statuses = ["All", "New", "Quote Sent", "In Progress", "Completed"];

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl p-6 border border-blue-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Login
            </button>
            <Link href="/" className="block text-center text-blue-600 hover:underline">
              Back to home
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Client Requests</h1>
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              Back to site
            </Link>
          </div>

          {/* Search + Filter */}
          <div className="mt-4 grid md:grid-cols-2 gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by business, email, or service"
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="flex-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* List */}
      <main className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <p className="text-gray-600">Loading requests...</p>
          ) : filtered.length === 0 ? (
            <p className="text-gray-600">No requests found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-xl p-4 border border-blue-100 hover:shadow-md cursor-pointer"
                  onClick={() => setSelected(r)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{r.business_name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        r.status === "New"
                          ? "bg-blue-100 text-blue-700"
                          : r.status === "Quote Sent"
                          ? "bg-yellow-100 text-yellow-700"
                          : r.status === "In Progress"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{r.service}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(r.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50">
          <div className="bg-white w-full md:max-w-2xl md:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-lg font-bold text-gray-900">{selected.business_name}</h2>
              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a href={`mailto:${selected.email}`} className="text-blue-600 hover:underline">
                    {selected.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <a href={`tel:${selected.phone}`} className="text-blue-600 hover:underline">
                    {selected.phone}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500">Service</p>
                <p className="text-gray-900">{selected.service}</p>
              </div>

              {selected.budget && (
                <div>
                  <p className="text-xs text-gray-500">Budget</p>
                  <p className="text-gray-900">{selected.budget}</p>
                </div>
              )}

              <div>
                <p className="text-xs text-gray-500">Details</p>
                <p className="text-gray-900 whitespace-pre-line">{selected.details}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/${selected.phone.replace(/s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${selected.phone}`}
                  className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </a>
                <a
                  href={`mailto:${selected.email}`}
                  className="inline-flex items-center px-3 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  Email
                </a>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Update status</p>
                <p className="text-xs text-gray-500 mb-2">
                  (Status update logic will be added next)
                </p>
                <div className="flex flex-wrap gap-2">
                  {["New", "Quote Sent", "In Progress", "Completed"].map((s) => (
                    <button
                      key={s}
                      disabled
                      className="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-50"
                    >
                      {s}
                      {selected.status === s ? " ✓" : ""}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
