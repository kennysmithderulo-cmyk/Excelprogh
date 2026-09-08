"use client";
import { useEffect, useState } from "react";

type Lead = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filtered, setFiltered] = useState<Lead[]>([]);
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const PASSWORD = "kenny2026"; // CHANGE THIS!

  useEffect(() => {
    if(localStorage.getItem("excel_admin") === "ok"){
      setAuth(true);
      loadLeads();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setFiltered(leads.filter(l =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search, leads]);

  const loadLeads = async () => {
    setLoading(true);
    try{
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      setLeads(data);
      setFiltered(data);
    }catch(e){ console.log(e); }
    setLoading(false);
  };

  const login = () => {
    if(pass === PASSWORD){
      setAuth(true);
      localStorage.setItem("excel_admin","ok");
      loadLeads();
    } else {
      alert("Wrong password bro! Hint: kenny2026");
    }
  };

  const exportCSV = () => {
    const headers = "Name,Email,Message,Date\n";
    const rows = leads.map(l => `"${l.name}","${l.email}","${l.message.replace(/"/g,'""')}","${l.created_at}"`).join("\n");
    const blob = new Blob([headers+rows], {type: "text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `excelpro-leads-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  if (!auth) {
    return (
      <div className="min-h-screen bg-[#070f26] flex items-center justify-center p-6">
        <div className="bg-[#101c39] border border-white/10 p-8 rounded-[24px] w-full max-w-sm">
          <h1 className="text-white text-2xl font-black">Excel Pro GH</h1>
          <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Admin Access Only</p>
          <input
            type="password"
            value={pass}
            onChange={e=>setPass(e.target.value)}
            onKeyDown={e=>e.key==='Enter' && login()}
            placeholder="Password"
            className="w-full mt-8 bg-[#070f26] border border-white/10 rounded-full px-5 py-4 text-white outline-none focus:border-[#facc15]"
          />
          <button onClick={login} className="w-full mt-4 bg-[#facc15] text-black font-black py-4 rounded-full hover:bg-yellow-300">
            Unlock Dashboard →
          </button>
          <p className="text-[10px] text-white/20 mt-4 text-center">Default: kenny2026 - change in code</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070f26] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black">Leads <span className="text-[#facc15]">{leads.length}</span></h1>
            <p className="text-white/40 text-sm">excelprogh-fa6y.vercel.app</p>
          </div>
          <div className="flex gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name / email" className="bg-[#101c39] border border-white/10 rounded-full px-5 py-2.5 text-sm outline-none w-[200px]"/>
            <button onClick={loadLeads} className="bg-white/10 px-5 py-2.5 rounded-full text-sm font-bold">Refresh</button>
            <button onClick={exportCSV} className="bg-[#facc15] text-black px-5 py-2.5 rounded-full text-sm font-black">Export Excel</button>
          </div>
        </div>

        <div className="mt-8 bg-[#101c39] rounded-[20px] border border-white/10 overflow-hidden">
          {loading? <p className="p-10 text-center opacity-40">Loading leads...</p> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] text-white/40 text-[11px] uppercase tracking-widest">
                <tr><th className="p-4 text-left">Name</th><th className="p-4 text-left">Contact</th><th className="p-4 text-left">Need</th><th className="p-4 text-left">Date</th></tr>
              </thead>
              <tbody>
                {filtered.map((l)=>(
                  <tr key={l.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                    <td className="p-4 font-bold">{l.name}</td>
                    <td className="p-4 opacity-70">{l.email}</td>
                    <td className="p-4 opacity-60 max-w-[280px] truncate">{l.message}</td>
                    <td className="p-4 opacity-40 text-xs">{new Date(l.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
          {filtered.length===0 &&!loading && <p className="p-12 text-center opacity-30">No leads yet. Share your site on WhatsApp Status!</p>}
        </div>

        <button onClick={()=>{localStorage.removeItem("excel_admin"); setAuth(false);}} className="mt-6 text-white/20 text-xs underline">Logout</button>
      </div>
    </div>
  );
  }
