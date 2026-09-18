"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

type Lead = {
  id: number;
  name: string;
  email: string;
  service: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const statuses = ["new", "contacted", "in_progress", "completed"];

function formatStatus(status: string | null) {
  if (!status) return "New";

  return status
    .replace("_", " ")
    .replace(/\bw/g, (letter) => letter.toUpperCase());
}

export default function AdminLeadsPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const loadLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
    } else {
      setLeads(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    const checkAccess = async () => {
      if (!supabaseUrl || !supabaseAnonKey) {
        setMessage("Supabase is not configured in Vercel yet.");
        setLoading(false);
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || user.email !== "kennysmithderulo@gmail.com") {
        router.replace("/admin/login");
        return;
      }

      await loadLeads();
    };

    checkAccess();
  }, []);

  const updateStatus = async (leadId: number, status: string) => {
    setUpdatingId(leadId);
    setMessage("");

    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", leadId);

    if (error) {
      setMessage(error.message);
    } else {
      setLeads((current) =>
        current.map((lead) =>
          lead.id === leadId ? { ...lead, status } : lead
        )
      );
    }

    setUpdatingId(null);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  const visibleLeads = leads.filter((lead) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      lead.name.toLowerCase().includes(searchText) ||
      lead.email.toLowerCase().includes(searchText) ||
      (lead.service || "").toLowerCase().includes(searchText);

    const leadStatus = lead.status || "new";
    const matchesFilter = filter === "all" || leadStatus === filter;

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070f26] px-6 text-white">
        <p className="text-white/70">Loading secure dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070f26] px-4 py-6 text-white sm:px-6">
      <header className="mx-auto flex max-w-6xl flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
            Excel Pro GH
          </p>
          <h1 className="mt-1 text-2xl font-bold">Lead dashboard</h1>
        </div>

        <div className="flex gap-3">
          <a
            href="/"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            View website
          </a>
          <button
            onClick={signOut}
            className="rounded-lg bg-[#f4c542] px-4 py-2 text-sm font-bold text-[#070f26] hover:bg-[#ffd95c]"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl py-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/60">All leads</p>
            <p className="mt-1 text-3xl font-bold text-[#f4c542]">
              {leads.length}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/60">New leads</p>
            <p className="mt-1 text-3xl font-bold text-[#f4c542]">
              {leads.filter((lead) => (lead.status || "new") === "new").length}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/60">Completed</p>
            <p className="mt-1 text-3xl font-bold text-[#f4c542]">
              {
                leads.filter(
                  (lead) => (lead.status || "new") === "completed"
                ).length
              }
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-[1fr_220px]">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="rounded-lg border border-white/10 bg-white/10 p-3 text-white outline-none placeholder:text-white/40 focus:border-[#f4c542]"
            placeholder="Search name, email, or service"
          />

          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-lg border border-white/10 bg-[#111d38] p-3 text-white outline-none focus:border-[#f4c542]"
          >
            <option value="all">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="in_progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {message && (
          <p className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">
            {message}
          </p>
        )}

        <div className="mt-6 grid gap-4">
          {visibleLeads.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/60">
              No leads found.
            </div>
          ) : (
            visibleLeads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{lead.name}</h2>
                    <p className="mt-1 text-sm text-white/60">
                      {new Date(lead.created_at).toLocaleString()}
                    </p>
                  </div>

                  <select
                    value={lead.status || "new"}
                    disabled={updatingId === lead.id}
                    onChange={(event) =>
                      updateStatus(lead.id, event.target.value)
                    }
                    className="rounded-lg border border-[#f4c542]/40 bg-[#111d38] px-3 py-2 text-sm text-white outline-none focus:border-[#f4c542] disabled:opacity-60"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {formatStatus(status)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-white/80">
                  <p>
                    <span className="text-white/50">Email:</span>{" "}
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-green-400 hover:underline"
                    >
                      {lead.email}
                    </a>
                  </p>

                  <p>
                    <span className="text-white/50">Service:</span>{" "}
                    {lead.service || "Not selected"}
                  </p>

                  <p className="whitespace-pre-wrap leading-6">
                    <span className="text-white/50">Message:</span>{" "}
                    {lead.message || "No description provided."}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={`mailto:${lead.email}?subject=${encodeURIComponent(
                        "Re: Your Excel Pro GH request"
                      )}`}
                      className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
                    >
                      Email client
                    </a>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `Hello ${lead.name}, this is Excel Pro GH following up on your request.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-white hover:bg-green-600"
                    >
                      WhatsApp client
                    </a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
                                           }
