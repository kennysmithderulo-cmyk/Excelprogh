"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ylspdrjrvhixrregmqtg.supabase.co",
  "sb_publishable_Ar8T3NCh77i6YZfjN88wBQ_f8j7oool"
);

const PAYSTACK_KEY = "pk_live_f0406495db009afc29da2b4ac5d7a3cbdd4afb4d9dcd24"; // PUT FULL KEY
const WA = "https://wa.me/233548097756";

export default function Home(){
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const s = document.createElement("script");
    s.src="https://js.paystack.co/v1/inline.js";
    document.body.appendChild(s);
  },[]);

  const pay = (amount:number, product:string)=>{
    const email = prompt("Enter email for receipt:");
    if(!email) return;
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY, email, amount: amount*100, currency:"GHS", ref:"EXCEL"+Date.now(),
      callback: async (res:any)=>{
        await fetch("/api/sales", {method:"POST", body: JSON.stringify({product, price:amount, email, ref: res.reference})});
        alert("✅ Paid "+product+"! Ref: "+res.reference+" Saved to Supabase!");
      }
    });
    handler.openIframe();
  };

  const sendLead = async ()=>{
    setLoading(true);
    await fetch("/api/leads", {method:"POST", body: JSON.stringify(form)});
    alert("✅ Sent! I will reply on WhatsApp");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#081b36] text-white">
      <header className="flex justify-between p-5 max-w-6xl mx-auto">
        <h1 className="text-[#facc15] font-black text-2xl">Excel Pro GH</h1>
        <a href={WA} className="bg-[#facc15] text-black font-bold px-6 py-2 rounded-full">Hire Me</a>
      </header>

      {/* HERO - YOUR OLD DESIGN */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <img src="https://cdn.jsdelivr.net/gh/kennysmithderulo-cmyk/Excelprogh@main/profile.jpg" className="w-[320px] h-[420px] object-cover rounded-[30px] mx-auto border-2 border-white/20" alt="Kenny"/>
        <p className="text-[#facc15] font-bold mt-6">HELLO, I'M KENNY MURRAY</p>
        <h1 className="text-4xl font-black mt-2">Data Analyst | <span className="text-[#facc15]">Website Developer</span> | Excel Systems Builder</h1>
        <p className="text-slate-300 mt-4">I build powerful Excel systems — Trusted by 25+ clients. React • Next.js • Supabase • Full-Stack.</p>
        <div className="grid grid-cols-3 gap-4 mt-8 border-t border-white/10 pt-6">
          <div><p className="text-[#facc15] text-2xl font-black">5+ Years</p></div>
          <div><p className="text-[#facc15] text-2xl font-black">40+ Projects</p></div>
          <div><p className="text-[#facc15] text-2xl font-black">25+ Clients</p></div>
        </div>
      </section>

      {/* PORTFOLIO - 3 SYSTEMS WITH BACKEND */}
      <section className="max-w-6xl mx-auto px-6 mt-12 grid gap-6">
        <div className="bg-[#122a4f] border border-yellow-400/50 p-6 rounded-3xl">
          <h3 className="font-black">🧹 Data Cleaning Systems — ¢200</h3>
          <p className="text-sm text-slate-300 mt-2">Power Query • Automation • 96% Time Saved</p>
          <div className="flex gap-2 mt-4">
            <button onClick={()=>pay(200,"Data Cleaning")} className="bg-[#facc15] text-black font-black px-6 py-3 rounded-full">Paystack Pay ¢200</button>
            <a href={WA} className="border px-6 py-3 rounded-full">WhatsApp</a>
          </div>
        </div>

        <div className="bg-[#122a4f] border border-yellow-400/50 p-6 rounded-3xl">
          <h3 className="font-black">💰 Budget Tracker Ghana — ¢150</h3>
          <p className="text-sm text-slate-300 mt-2">GHS ¢ • Offline • Saves ¢500-1500/month</p>
          <div className="flex gap-2 mt-4">
            <button onClick={()=>pay(150,"Budget Tracker")} className="bg-[#facc15] text-black font-black px-6 py-3 rounded-full">Pay ¢150</button>
            <a href={WA} className="border px-6 py-3 rounded-full">WhatsApp</a>
          </div>
        </div>

        <div className="bg-[#122a4f] border border-yellow-400/50 p-6 rounded-3xl">
          <h3 className="font-black">🧾 Auto Inventory + Invoice — ¢300</h3>
          <p className="text-sm text-slate-300 mt-2">Makola Edition • 1,248 items • Invoice INV-02389</p>
          <div className="flex gap-2 mt-4">
            <button onClick={()=>pay(300,"Inventory System")} className="bg-[#facc15] text-black font-black px-6 py-3 rounded-full">Pay ¢300</button>
            <a href={WA} className="border px-6 py-3 rounded-full">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM -> SUPABASE BACKEND */}
      <section className="max-w-[500px] mx-auto px-6 mt-16 pb-20">
        <h2 className="text-3xl font-black text-center">Contact Kenny Murray</h2>
        <div className="bg-[#122a4f] p-6 rounded-3xl mt-6">
          <p className="text-[#facc15]">contact.excelprogh@gmail.com • +233 548 097 756</p>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your Name" className="w-full mt-4 bg-[#081b36] p-4 rounded-xl"/>
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email / WhatsApp" className="w-full mt-3 bg-[#081b36] p-4 rounded-xl"/>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Which system? Data Cleaning / Budget / Inventory?" className="w-full mt-3 bg-[#081b36] p-4 rounded-xl h-24"/>
          <button onClick={sendLead} className="w-full mt-3 bg-[#facc15] text-black font-black py-4 rounded-full">{loading?"Sending...":"Send to Supabase Backend"}</button>
          <p className="text-xs mt-2 opacity-50">React Frontend → Next.js API → Supabase Backend</p>
        </div>
      </section>

      <a href={WA} className="fixed bottom-6 right-6 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center text-3xl">💬</a>
    </div>
  )
}
