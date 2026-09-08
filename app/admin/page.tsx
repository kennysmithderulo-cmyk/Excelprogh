"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Admin(){
  const [leads,setLeads]=useState<any[]>([]);
  useEffect(()=>{ supabase.from("leads").select("*").order("created_at",{ascending:false}).then(({data})=> setLeads(data||[])) },[]);
  return <div className="p-8 max-w-6xl m-auto"><h1 className="text-3xl font-black">Admin — Leads & Sales</h1><p className="text-slate-400">Live from Supabase {process.env.NEXT_PUBLIC_SUPABASE_URL}</p><div className="mt-6 grid gap-3">{leads.map((l,i)=><div key={i} className="bg-[#132a4e] p-4 rounded-xl">{l.email} — {l.product_interest} — {l.budget} — {l.status}</div>)}</div></div>
}
