"use client";
import { useState } from "react";

const systems = [
  { img: "/data-cleaning.jpg", title: "Data Cleaning Systems", sub: "Power Query • 96% Time Saved", desc: "Messy 10,000+ rows → clean in 1 click. 4hrs → 12min.", tags: ["Excel","Power Query"], price: "₵200" },
  { img: "/budget-tracker.jpg", title: "Budget Tracker — Ghana Edition", sub: "GHS ₵ • Monthly Tracking", desc: "Income ₵12,400 / Expenses ₵8,650 / Savings ₵3,750. Goal 94%.", tags: ["Budgeting","GHS ₵"], price: "₵150" },
  { img: "/inventory-invoice.jpg", title: "Inventory + Invoice — Makola", sub: "Ghana Shops • Low Stock Alerts", desc: "1,248 stock, ₵85,420 sales, INV-02389. Offline for Makola, Abossey Okai.", tags: ["Inventory","Invoice"], price: "₵300" },
  { img: "/data-analytics.jpg", title: "Data Analytics Dashboard", sub: "KPIs • Reports", desc: "Turn raw data into decisions. KPI dashboards, sales reports.", tags: ["Analytics","Power BI"], price: "₵250" },
  { img: "/customer-support.jpg", title: "Sales Dashboard — Pro", sub: "Daily Sales • Profit", desc: "Track daily sales, best sellers, profit. Offline-ready.", tags: ["Sales","Dashboard"], price: "₵250" },
  { img: "/va-assistant.jpg", title: "Business Automation", sub: "WhatsApp • Auto Alerts", desc: "Auto invoices, low stock WhatsApp alerts, daily report to phone.", tags: ["Automation","WhatsApp"], price: "₵350" },
  { img: "/website-developer.jpg", title: "Website + Excel System", sub: "React • Supabase • Excel", desc: "Website + Excel backend. Like this site. Leads save auto.", tags: ["Website","Supabase"], price: "₵500" },
];

export default function Home(){
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [sent,setSent]=useState(false);
  const send = async()=>{
    await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
    setSent(true); setForm({name:"",email:"",message:""});
    setTimeout(()=>setSent(false),3000);
  }
  return(
    <div className="bg-[#070f26] text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 font-black text-lg"><span className="w-9 h-9 bg-[#facc15] text-black rounded-full grid place-items-center">E</span>Excel Pro GH</div>
        <a href="#contact" className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm">Hire Me →</a>
      </header>

      {/* PROFILE TOP */}
      <section className="px-6 max-w-7xl mx-auto pt-4 pb-10">
        <div className="bg-[#101c39] border border-white/10 rounded-[32px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <img src="/profile.jpg" alt="Kenny" className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-[28px] object-cover border-4 border-[#facc15]" />
          <div>
            <h1 className="text-[30px] md:text-[52px] font-black leading-[0.95]">I build Excel<br/><span className="text-[#facc15]">systems that run your business.</span></h1>
            <p className="text-white/50 mt-4 max-w-xl">Data Analyst & Full-Stack Builder. 5+ years turning messy Makola records into automated dashboards.</p>
            <div className="flex gap-8 mt-6"><div><p className="text-2xl font-black">5+</p><p className="text-[10px] text-white/40 tracking-widest">YEARS</p></div><div><p className="text-2xl font-black">40+</p><p className="text-[10px] text-white/40">PROJECTS</p></div><div><p className="text-2xl font-black">25+</p><p className="text-[10px] text-white/40">CLIENTS</p></div></div>
            <div className="flex gap-3 mt-6">
              <a href="#portfolio" className="bg-[#facc15] text-black px-6 py-3 rounded-full font-black text-sm">View My Work →</a>
              <a href="https://wa.me/233548097756" className="bg-white/10 border border-white/10 px-6 py-3 rounded-full font-bold text-sm">WhatsApp Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO CARDS - PROPER LAYOUT */}
      <section id="portfolio" className="px-6 max-w-7xl mx-auto pb-16">
        <h2 className="text-[36px] md:text-[56px] font-black text-center leading-[0.95]">My Portfolio — 7<br/>Best-Selling Systems</h2>
        <p className="text-center text-white/40 mt-4">Built for Ghana, priced in GHS ₵, offline-ready</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {systems.map((s)=>(
            <div key={s.title} className="bg-[#111d3c] border border-[#facc15]/20 rounded-[28px] overflow-hidden">
              <div className="bg-[#0b1733] p-2"><img src={s.img} alt={s.title} className="w-full h-[250px] object-cover rounded-[18px] border border-yellow-500/20" /></div>
              <div className="p-6">
                <h3 className="font-bold text-[18px]">{s.title}</h3>
                <p className="text-[#facc15] font-bold text-sm mt-2">{s.sub}</p>
                <p className="text-white/50 text-[14px] mt-3 leading-6">{s.desc}</p>
                <div className="flex gap-2 mt-4 flex-wrap">{s.tags.map(t=><span key={t} className="bg-[#1a274f] border border-white/10 text-white/60 px-3 py-1 rounded-full text-[11px]">{t}</span>)}</div>
                <p className="mt-4 text-[#facc15] font-black text-[18px]">→ {s.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 max-w-2xl mx-auto pb-20">
        <h3 className="text-3xl font-black text-center">Let's build your system<br/>in 48hrs.</h3>
        <div className="mt-8 bg-[#101c39] border border-white/10 rounded-[24px] p-6">
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="w-full bg-[#070f26] border border-white/10 rounded-full px-6 py-4 mb-3 outline-none" />
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="WhatsApp / Email" className="w-full bg-[#070f26] border border-white/10 rounded-full px-6 py-4 mb-3 outline-none" />
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What system do you need?" className="w-full bg-[#070f26] border border-white/10 rounded-[20px] px-6 py-4 h-28 outline-none" />
          <button onClick={send} className="w-full mt-4 bg-[#facc15] text-black font-black py-4 rounded-full">{sent?"Sent! ✓":"Send Message →"}</button>
        </div>
      </section>
      <a href="https://wa.me/233548097756" className="fixed bottom-6 left-6 bg-[#25D366] w-14 h-14 rounded-full grid place-items-center text-2xl shadow-2xl">💬</a>
    </div>
  )
}
