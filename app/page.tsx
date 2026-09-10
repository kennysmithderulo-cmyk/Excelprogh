"use client";
import { useState } from "react";

const portfolio = [
  {
    title:"5-7 Hair Lounge",
    desc:"E-commerce hair store - 100% Human Hair, Pay on Delivery Accra. GHS 800+ Free Delivery - LIVE Website",
    tag:"Website Development - LIVE",
    link:"https://5-7hair-lounge.vercel.app/",
    image:"/hair-lounge.jpg",
    price:"From GHS 500"
  },
  {
    title:"Betslip Analyser",
    desc:"Website - Check Your Bet For Potential Lose or Win. Paystack LIVE - GHS 30/mo Unlimited, GHS 200 Yearly, GHS 2 Per Single",
    tag:"Website Development - LIVE",
    link:"https://betslip-analyser-check-lose-aiitx7ylt-kennysmithderulo-cmyk.vercel.app/",
    image:"/betslip.jpg",
    price:"GHS 30/mo"
  },
  {
    title:"DATA CLEANING SYSTEMS",
    desc:"Automated Excel Solution - BEFORE Messy → AFTER Clean Data. 96% time saved, 892 records cleaned.",
    tag:"Excel Systems",
    link:"#contact",
    image:"/data-cleaning.jpg",
    price:"GHS 250"
  },
  {
    title:"PERSONAL BUDGET TRACKER",
    desc:"Complete Personal Finance Dashboard - Income $8,450, Expenses $5,120, Savings 39% + Goals",
    tag:"Excel Dashboard",
    link:"#contact",
    image:"/budget-tracker.jpg",
    price:"GHS 150"
  },
  {
    title:"AUTO INVENTORY + INVOICE",
    desc:"Ghana Edition - Track Stock & Sales in GHS ¢. 1,248 items, Real-time Stock, VAT Compliant",
    tag:"Excel Systems - Ghana",
    link:"#contact",
    image:"/inventory-invoice.jpg",
    price:"GHS 400"
  },
  {
    title:"DATA ANALYTICS SERVICE",
    desc:"By Kenny Murray - Data Cleaning, Dashboard, KPI Tracking. Revenue GHS 120K, 42 Clients, 6.4% Conversion",
    tag:"Analytics - GHS 250/mo",
    link:"#contact",
    image:"/data-analytics.jpg",
    price:"GHS 250/mo"
  },
  {
    title:"WEBSITE DEVELOPER SERVICE",
    desc:"By Kenny Murray - Responsive Design, Landing Pages, E-commerce. Fashion Store & Restaurant demos",
    tag:"Website Service - From GHS 500",
    link:"#contact",
    image:"/website-dev.jpg",
    price:"From GHS 500"
  },
  {
    title:"VIRTUAL ASSISTANT SERVICE",
    desc:"By Kenny Murray - Email, Calendar, Data Entry, Research, Customer Support. Remote - Accra",
    tag:"VA Service - GHS 400/mo",
    link:"#contact",
    image:"/virtual-assistant.jpg",
    price:"GHS 400/mo"
  },
  {
    title:"CUSTOMER SUPPORT & OPERATIONS",
    desc:"Call Center, Chat Support, Operations, CRM Integration. Professional Support Team Ghana",
    tag:"Support - GHS 350/mo",
    link:"#contact",
    image:"/customer-support.jpg",
    price:"GHS 350/mo"
  },
];

export default function Home(){
  const [book,setBook]=useState({name:"",email:"",message:""});
  const [msg,setMsg]=useState("");
  const send = async()=>{
    try{
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      await supabase.from("bookings").insert([book]);
      setMsg("Booking sent! We'll contact you from Spintex, Accra soon.");
    }catch(e){ setMsg("Error, check Supabase keys"); }
  }
  return(
    <div className="bg-[#070f26] text-white min-h-screen">
      <nav className="px-6 py-4 flex justify-between sticky top-0 bg-[#070f26] z-50 border-b border-white/5">
        <p className="font-bold">Excel Pro GH</p>
        <div className="flex gap-4 text-sm">
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="px-6 max-w-7xl mx-auto py-10">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto bg-[#101c46] rounded-full flex items-center justify-center overflow-hidden"><img src="/profile.jpg" className="w-full h-full object-cover" alt="Kenny"/></div>
          <p className="mt-4 bg-[#fac02f] text-black inline-block px-3 py-1 rounded text-sm font-bold">Spintex, Accra - Kenny Murray</p>
          <p className="text-white/40 text-sm mt-2">contact.excelprogh@gmail.com</p>
        </div>
        <div className="mt-6 text-center md:text-left">
          <h1 className="text-[36px] font-bold leading-tight">We Build Excel Systems + Modern Websites + VA Services</h1>
          <p className="text-white/60 mt-3">9 Professional Services - 2 LIVE Websites + 7 Premium Services. Made in Ghana.</p>
          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            <a href="#portfolio" className="bg-[#fac02f] text-black px-6 py-3 rounded font-bold">View 9 Services</a>
            <a href="#contact" className="border px-6 py-3 rounded">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold">Services Portfolio - 9 Services</h2>
        <p className="text-white/60 mt-2">2 Live Websites + 7 Premium Services by Kenny Murray</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {portfolio.map((p)=>(
            <a key={p.title} href={p.link} target={p.link.startsWith("http")?"_blank":"_self"} className="bg-[#101c46] rounded-xl overflow-hidden border border-white/5 hover:border-[#fac02f] transition">
              <img src={p.image} className="h-52 w-full object-cover" alt={p.title}/>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-[#fac02f] text-black px-2 py-1 rounded font-bold">{p.tag}</span>
                  <span className="text-xs text-[#fac02f] font-bold">{p.price}</span>
                </div>
                <h3 className="font-bold mt-2 text-[14px] leading-tight">{p.title}</h3>
                <p className="text-white/60 text-[11px] mt-1 line-clamp-2">{p.desc}</p>
                <p className="text-[#fac02f] mt-3 text-xs font-bold">View Details →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-2xl font-bold">Book a Service - Spintex Accra</h2>
        <div className="mt-6 max-w-md">
          <input placeholder="Name" className="w-full p-3 rounded bg-[#101c46] mb-3 text-white" value={book.name} onChange={e=>setBook({...book,name:e.target.value})} />
          <input placeholder="Email" className="w-full p-3 rounded bg-[#101c46] mb-3 text-white" value={book.email} onChange={e=>setBook({...book,email:e.target.value})} />
          <textarea placeholder="Which service?" className="w-full p-3 rounded bg-[#101c46] mb-3 text-white h-24" value={book.message} onChange={e=>setBook({...book,message:e.target.value})} />
          <button onClick={send} className="bg-[#fac02f] text-black w-full py-3 rounded font-bold">Send Booking - Ghana</button>
          <p className="mt-3 text-green-400 text-sm">{msg}</p>
        </div>
      </section>

      <footer className="bg-[#050d24] px-6 py-10 mt-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><p className="font-bold mb-3">Excel Pro GH</p><p className="text-white/50 text-sm">Spintex, Accra<br/>By Kenny Murray<br/>contact.excelprogh@gmail.com<br/>+233 54 809 7756</p></div>
          <div><p className="font-bold mb-3">Company</p><div className="flex flex-col gap-2 text-sm text-white/60"><a href="/about">About Us</a><a href="/portfolio">Portfolio (9)</a><a href="/case-studies">Case Studies</a></div></div>
          <div><p className="font-bold mb-3">Resources</p><div className="flex flex-col gap-2 text-sm text-white/60"><a href="/excel-tips">Excel Tips</a><a href="/templates">Template Library</a><a href="/support">Support</a></div></div>
          <div><p className="font-bold mb-3">Services</p><div className="flex flex-col gap-2 text-sm text-white/60"><p>2 Live Websites</p><p>Excel Systems</p><p>VA & Support</p></div></div>
        </div>
        <div className="text-center text-white/30 text-sm mt-10">© 2026 Excel Pro GH - Kenny Murray - Spintex, Accra, Ghana</div>
      </footer>

      <a href="https://wa.me/233548097756" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full font-bold">WA</a>
    </div>
  )
            }
