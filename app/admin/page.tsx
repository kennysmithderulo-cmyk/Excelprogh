"use client";
import { useState, useEffect } from "react";

export default function Admin(){
  const [bookings,setBookings]=useState<any[]>([]);
  const [leads,setLeads]=useState<any[]>([]);
  const [file,setFile]=useState<File|null>(null);
  const [msg,setMsg]=useState("");

  useEffect(()=>{
    (async()=>{
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      const b = await supabase.from("bookings").select("*").order("created_at",{ascending:false});
      const l = await supabase.from("leads").select("*").order("created_at",{ascending:false});
      if(b.data) setBookings(b.data);
      if(l.data) setLeads(l.data);
    })();
  },[]);

  const upload = async()=>{
    if(!file) return;
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const name=`${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("gallery").upload(name,file);
    if(error) setMsg("Upload failed: "+error.message);
    else setMsg("Uploaded! ✓ "+name);
    setTimeout(()=>setMsg(""),3000);
  };

  return(
    <div className="min-h-screen bg-[#070f26] text-white p-6">
      <h1 className="text-2xl font-black">Excel Pro GH — Admin</h1>
      <p className="text-white/50 text-sm">contact.excelprogh@gmail.com • Spintex, Accra, Ghana • +233 54 809 7756</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-[#101c39] border border-white/10 rounded-[16px] p-5">
          <h2 className="font-bold">Upload Gallery</h2>
          <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} className="mt-3 text-sm" />
          <button onClick={upload} className="mt-3 bg-[#facc15] text-black px-5 py-2 rounded-full font-bold text-sm">Upload</button>
          {msg && <p className="text-[#facc15] text-xs mt-2">{msg}</p>}
        </div>

        <div className="bg-[#101c39] border border-white/10 rounded-[16px] p-5">
          <h2 className="font-bold">Business Info</h2>
          <p className="text-xs text-white/60 mt-3 leading-6">Email: contact.excelprogh@gmail.com<br/>Phone: +233 54 809 7756<br/>Location: Spintex, Accra, Ghana<br/>Hours: Mon-Fri 9am-5pm GMT</p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-[#101c39] border border-white/10 rounded-[16px] p-5">
          <h2 className="font-bold">Bookings ({bookings.length})</h2>
          <div className="mt-3 space-y-2 max-h-[300px] overflow-auto">{bookings.map((b:any)=><div key={b.id} className="bg-[#070f26] p-3 rounded-[10px] text-xs"><p className="font-bold">{b.name} — {b.service}</p><p className="text-white/50">{b.email} • {b.date} {b.time}</p></div>)}</div>
        </div>
        <div className="bg-[#101c39] border border-white/10 rounded-[16px] p-5">
          <h2 className="font-bold">Leads ({leads.length})</h2>
          <div className="mt-3 space-y-2 max-h-[300px] overflow-auto">{leads.map((l:any)=><div key={l.id} className="bg-[#070f26] p-3 rounded-[10px] text-xs"><p className="font-bold">{l.name}</p><p className="text-white/50">{l.email}</p><p className="text-white/70 mt-1">{l.message}</p></div>)}</div>
        </div>
      </div>
    </div>
  )
}
