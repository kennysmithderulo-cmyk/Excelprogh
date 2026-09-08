"use client";
import { useState } from "react";

const WA = "https://wa.me/233548097756?text=Hi%20Kenny%20-%20I%20need%20an%20Excel%20System";

const services = [
  { icon:"🧹", title:"Data Cleaning Systems", price:"₵200", desc:"Power Query automation that saves 96% of manual time. Clean 10k rows in 2 minutes.", badge:"BESTSELLER" },
  { icon:"💰", title:"Budget Tracker Ghana", price:"₵150", desc:"Built for GHS, offline-first. Track sales, expenses & profit. Saves clients ₵500-1500/mo.", badge:"MAKOLA EDITION" },
  { icon:"🧾", title:"Auto Inventory + Invoice", price:"₵300", desc:"Makola proven: 1,248 items, low-stock alerts, auto invoice INV-02389 generator.", badge:"BUSINESS" },
  { icon:"📊", title:"Sales Dashboard System", price:"₵250", desc:"CEO dashboard with charts, profit/loss, top products. Used in 40+ projects.", badge:"DASHBOARD" },
  { icon:"⚙️", title:"Business Automation", price:"₵350", desc:"Excel VBA + Python. Auto reports, auto WhatsApp, zero manual work.", badge:"AUTOMATION" },
  { icon:"🚀", title:"Website + Excel Integration", price:"₵500", desc:"React, Next.js, Supabase. Your Excel becomes a full website/app.", badge:"FULL-STACK" },
];

export default function Home(){
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [loading, setLoading] = useState(false);

  const sendLead = async ()=>{
    if(!form.name ||!form.email) return alert("Please enter name & contact");
    setLoading(true);
    try{
      await fetch("/api/leads", {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form)});
      alert("✅ Received! I will reply on WhatsApp in 5 minutes.");
      setForm({name:"", email:"", message:""});
    }catch{ alert("Failed, WhatsApp me directly"); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#070f26] text-white">
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#070f26]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#facc15] text-black font-black grid place-items-center">E</div>
            <p className="font-black">Excel Pro GH</p>
          </div>
          <a href={WA} className="bg-white text-black font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#facc15] transition">Hire Me →</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[38px] md:text-[56px] font-black leading-[0.95] tracking-[-0.03em]">
            I build Excel systems<br/><span className="text-[#facc15]">that run your business.</span>
          </h1>
          <p className="text-[17px] leading-relaxed text-white/60 mt-6">Data Analyst & Full-Stack Builder. I turn messy Makola records into automated dashboards, inventory & finance systems.</p>
          <div className="flex gap-3 mt-8">
            <a href="#work" className="bg-[#facc15] text-black font-black px-8 py-4 rounded-full">View My Work</a>
            <a href={WA} className="border border-white/15 px-8 py-4 rounded-full font-bold">WhatsApp Me</a>
          </div>
          <div className="flex gap-10 mt-10 border-t border-white/[0.07] pt-8">
            <div><p className="text-3xl font-black">5+</p><p className="text-xs opacity-50 uppercase">Years</p></div>
            <div><p className="text-3xl font-black">40+</p><p className="text-xs opacity-50 uppercase">Projects</p></div>
            <div><p className="text-3xl font-black">25+</p><p className="text-xs opacity-50 uppercase">Clients</p></div>
          </div>
        </div>
        <div className="relative">
          <img src="https://cdn.jsdelivr.net/gh/kennysmithderulo-cmyk/Excelprogh@main/profile.jpg" className="w-full max-w-[440px] h-[520px] object-cover rounded-[32px] border border-white/10 mx-auto" alt="Kenny Murray"/>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-6 mt-28">
        <h2 className="text-4xl font-black tracking-tight">Systems that make money</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((s,i)=>(
            <div key={i} className="bg-[#101c39] border border-white/[0.07] rounded-[24px] p-7 hover:border-[#facc15]/30 transition-all hover:-translate-y-1">
              <div className="flex justify-between">
                <span className="text-[11px] font-black tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">{s.badge}</span>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-[20px] font-bold mt-6 leading-tight">{s.title}</h3>
              <p className="text-[13px] leading-relaxed text-white/50 mt-3 min-h-[56px]">{s.desc}</p>
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-xl font-black">{s.price}</p>
                <a href={`${WA}%20-%20${encodeURIComponent(s.title)}`} className="bg-white text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#facc15] transition">WhatsApp →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 mt-28 pb-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[42px] font-black leading-[0.9] tracking-tight">Let's build your<br/>system in 48hrs.</h2>
          <div className="mt-8 space-y-3 text-sm opacity-70">
            <p>contact.excelprogh@gmail.com</p>
            <p>+233 548 097 756</p>
            <p>Accra, Ghana</p>
          </div>
        </div>
        <div className="bg-[#101c39] border border-white/[0.07] rounded-[24px] p-7">
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your full name" className="w-full bg-[#070f26] border border-white/10 p-4 rounded-xl outline-none"/>
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email or WhatsApp number" className="w-full mt-3 bg-[#070f26] border border-white/10 p-4 rounded-xl outline-none"/>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="What system do you need?" className="w-full mt-3 bg-[#070f26] border border-white/10 p-4 rounded-xl h-32 outline-none"/>
          <button onClick={sendLead} className="w-full mt-4 bg-[#facc15] text-black font-black py-4 rounded-full">{loading?"Sending...":"Send Message →"}</button>
        </div>
      </section>

      {/* PROFESSIONAL FOOTNOTE WITH © */}
      <footer className="border-t border-white/[0.06] bg-[#050c20]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#facc15] text-black font-black grid place-items-center text-sm">E</div>
              <p className="font-black">Excel Pro GH</p>
            </div>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">Building powerful Excel systems, dashboards and full-stack apps for businesses in Ghana and worldwide.</p>
          </div>
          <div>
            <p className="font-bold text-sm">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>Data Cleaning Systems</li>
              <li>Budget Tracker Ghana</li>
              <li>Inventory + Invoice</li>
              <li>Business Automation</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>contact.excelprogh@gmail.com</li>
              <li>+233 548 097 756</li>
              <li>Accra, Ghana</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-white/40">
            <p>© 2026 Excel Pro GH. All rights reserved. Built by Kenny Murray.</p>
            <p>React • Next.js • Supabase • Tailwind CSS</p>
          </div>
        </div>
      </footer>

      <a href={WA} className="fixed bottom-6 right-6 bg-[#25D366] w-14 h-14 rounded-full grid place-items-center shadow-xl z-50">💬</a>
    </div>
  )
}
