"use client";
import { useState } from "react";

const portfolio = [
  { title:"Inventory & Stock Manager", desc:"Track stock levels, low-stock alerts, supplier log, automated reports.", price:"GHS 1,200", badge:"BESTSELLER" },
  { title:"Budget & Cashflow Planner", desc:"Monthly budget planning, cashflow forecast, variance analysis.", price:"GHS 1,100", badge:"" },
  { title:"Project Tracker & CRM", desc:"Tasks, client pipeline, follow-up reminders, status tracker.", price:"GHS 1,350", badge:"BESTSELLER" },
  { title:"Invoicing & Quotes System", desc:"Create invoices & quotes, client database, payment tracking.", price:"GHS 800", badge:"" },
  { title:"Inventory Dashboard", desc:"Stock levels and reorder management - Logistics", price:"GHS 1,200", badge:"" },
  { title:"Cashflow Planner", desc:"Cashflow forecast and monthly variance", price:"GHS 1,100", badge:"" },
  { title:"Business Automation", desc:"WhatsApp alerts, auto invoices, daily reports - Save 5hrs/week", price:"GHS 1,350", badge:"" },
];

export default function Home(){
  const [book,setBook]=useState({name:"",email:"",service:"Excel Automation"});
  const [msg,setMsg]=useState("");
  const send = async()=>{
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    await supabase.from("bookings").insert(book);
    setMsg("Booking sent! We'll contact you on WhatsApp."); setTimeout(()=>setMsg(""),4000);
  }
  return(
    <div className="bg-[#070f26] text-white">
      <nav className="px-6 py-4 flex justify-between items-center border-b border-[#facc15]/20"><div className="font-black flex gap-2 items-center"><span className="bg-[#facc15] text-black w-8 h-8 grid place-items-center rounded">📊</span> Excel Pro GH</div><div className="hidden md:flex gap-6 text-sm text-white/60"><a href="#portfolio">Portfolio</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div><a href="#contact" className="bg-[#facc15] text-black px-5 py-2 rounded-full font-bold text-sm">Book Consultation</a></nav>

      {/* PROFILE - ACCRA SPINTEX */}
      <section className="px-6 max-w-7xl mx-auto py-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-[#facc15] grid place-items-center bg-white/5 overflow-hidden"><img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
          <p className="mt-4 bg-[#facc15] text-black text-xs font-black px-4 py-1.5 rounded-full inline-block">EXCEL PRO GH • SPINTEX, ACCRA</p>
          <p className="text-white/40 text-xs mt-2">Trusted Excel Solutions Partner</p>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-[34px] md:text-[44px] font-black leading-[1]">I build <span className="text-[#facc15]">Excel systems</span> that run your business</h1>
          <p className="text-white/60 text-sm mt-3">Custom Excel automation, dashboards, and business tools tailored for SMEs & enterprises in Ghana. Based in Spintex, Accra. Reliable. Efficient. Scalable.</p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#101c39] border border-[#facc15]/30 rounded-[12px] p-4"><p className="text-[#facc15] font-black text-xl">5+ years</p><p className="text-xs text-white/50">Experience</p></div>
            <div className="bg-[#101c39] border border-[#facc15]/30 rounded-[12px] p-4"><p className="text-[#facc15] font-black text-xl">40+ projects</p><p className="text-xs text-white/50">Completed</p></div>
            <div className="bg-[#101c39] border border-[#facc15]/30 rounded-[12px] p-4"><p className="text-[#facc15] font-black text-xl">25+ clients</p><p className="text-xs text-white/50">Satisfied</p></div>
          </div>
          <div className="flex gap-3 mt-4"><a href="#contact" className="bg-[#facc15] text-black px-6 py-3 rounded-full font-black text-sm">Book Free Consultation →</a><a href="#portfolio" className="border border-[#facc15]/30 px-6 py-3 rounded-full text-sm">View Portfolio</a></div>
        </div>
      </section>

      <section id="portfolio" className="px-6 max-w-7xl mx-auto py-10"><h2 className="text-2xl font-black text-center">Our 7 Best-Selling Excel Systems</h2><div className="grid md:grid-cols-3 gap-4 mt-6">{portfolio.map(p=><div key={p.title} className="bg-[#111d3c] border border-[#facc15]/20 rounded-[14px] p-5 relative"><h3 className="font-bold text-sm">{p.title}</h3><p className="text-white/50 text-xs mt-2">{p.desc}</p><p className="text-[#facc15] font-black mt-3">{p.price}</p>{p.badge && <span className="absolute top-3 right-3 bg-[#facc15] text-black text-[10px] font-black px-2 py-1 rounded">{p.badge}</span>}</div>)}</div></section>

      <section id="gallery" className="bg-[#0f1c3d] px-6 py-10"><div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"><div><h3 className="font-black">Project Gallery</h3><p className="text-white/40 text-xs">Recent dashboards — Spintex, Accra clients</p><div className="grid grid-cols-2 gap-2 mt-4">{[1,2,3,4].map(i=><div key={i} className="h-20 bg-[#070f26] border border-[#facc15]/20 rounded-[8px] grid place-items-center text-xs text-white/30">Dashboard {i}</div>)}</div></div><div><h3 className="font-black">Testimonials</h3><div className="mt-4 bg-[#070f26] border border-white/10 rounded-[12px] p-4 text-xs text-white/60">"Excel Pro GH built our inventory system and reduced stock errors by 80%. Professional and reliable support." — Retail Owner, Spintex, Accra</div></div><div id="contact"><h3 className="font-black">Contact Information</h3><div className="mt-4 space-y-3 text-sm"><p>📞 +233 54 809 7756</p><p>✉️ contact.excelprogh@gmail.com</p><p>📍 Spintex, Accra, Ghana<br/><span className="text-white/40 text-xs">Business Hours: Mon - Fri, 9am - 5pm GMT</span></p><input value={book.name} onChange={e=>setBook({...book,name:e.target.value})} placeholder="Your Name" className="w-full bg-[#070f26] border border-white/10 rounded-full px-4 py-2.5 mt-2 outline-none text-sm" /><input value={book.email} onChange={e=>setBook({...book,email:e.target.value})} placeholder="Email / WhatsApp" className="w-full bg-[#070f26] border border-white/10 rounded-full px-4 py-2.5 mt-2 outline-none text-sm" /><button onClick={send} className="w-full bg-[#facc15] text-black font-black py-2.5 rounded-full text-sm mt-2">Send Message</button>{msg && <p className="text-[#facc15] text-xs mt-2">{msg}</p>}</div></div></div></section>

      <footer className="bg-[#050d24] border-t border-[#facc15]/20 px-6 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div><p className="font-black">Excel Pro GH</p><p className="text-white/40 text-xs mt-2">We build Excel systems that run your business. Based in Spintex, Accra, Ghana.</p></div>
          <div><p className="font-bold text-[#facc15] text-sm">Company</p><p className="text-white/50 text-xs mt-3 leading-6">About Us<br/>Portfolio<br/>Case Studies</p></div>
          <div><p className="font-bold text-[#facc15] text-sm">Resources</p><p className="text-white/50 text-xs mt-3 leading-6">Excel Tips<br/>Template Library<br/>Support</p></div>
          <div><p className="font-bold text-[#facc15] text-sm">Contact</p><p className="text-white/50 text-xs mt-3 leading-6">📍 Spintex, Accra, Ghana<br/>📞 +233 54 809 7756<br/>✉️ contact.excelprogh@gmail.com</p></div>
        </div>
        <div className="text-center text-white/30 text-[11px] mt-10 border-t border-white/10 pt-4">© 2024 Excel Pro GH. All rights reserved. • Made in Spintex, Accra, Ghana 🇬🇭<br/>Email: contact.excelprogh@gmail.com • Phone: +233 54 809 7756 • Location: Spintex, Accra, Ghana</div>
      </footer>
      <a href="https://wa.me/233548097756" className="fixed bottom-5 right-5 bg-[#25D366] px-5 py-3 rounded-full font-bold text-sm shadow-2xl">💬 Chat on WhatsApp</a>
    </div>
  )
}
