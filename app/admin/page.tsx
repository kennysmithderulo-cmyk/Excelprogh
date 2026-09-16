"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

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

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabaseUrl || !supabaseAnonKey) {
      setError("Supabase is not configured.");
      setLoading(false);
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    async function loadLeads() {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setLeads(data || []);
      }
      setLoading(false);
    }

    loadLeads();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading leads…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Excel Pro GH — Leads
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {leads.length === 0 ? (
          <p className="text-gray-600">No leads yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-3 py-2 text-left">Date</th>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Service</th>
                  <th className="px-3 py-2 text-left">Message</th>
                  <th className="px-3 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-t">
                    <td className="px-3 py-2 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleString()}
                    </td>
                    <td className="px-3 py-2">{lead.name}</td>
                    <td className="px-3 py-2">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-blue-600 underline"
                      >
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-3 py-2">{lead.service || "-"}</td>
                    <td className="px-3 py-2 max-w-xs">
                      {lead.message ? (
                        <span className="line-clamp-3">{lead.message}</span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-3 py-2">{lead.status || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
