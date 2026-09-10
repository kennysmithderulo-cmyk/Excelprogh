"use client";
import { useState } from "react";

const portfolio = [
  {
    title:"5-7 Hair Lounge",
    desc:"E-commerce hair store - 100+ products",
    tag:"Website Development - LIVE",
    link:"https://5-7hair-lounge.vercel.app",
    image:"/hair-lounge.jpg",
    price:"From GHS 500"
  },
  {
    title:"Betslip Analyser",
    desc:"Website - Check Your Bet For Risk",
    tag:"Website Development - LIVE",
    link:"https://betslip-analyser-check.vercel.app",
    image:"/betslip.jpg",
    price:"GHS 30/mo"
  },
  {
    title:"Budget Tracker",
    desc:"Track income & expenses",
    tag:"Excel Automation",
    link:"#contact",
    image:"/budget-tracker.jpg",
    price:"GHS 150"
  },
  {
    title:"Inventory & Invoice",
    desc:"Stock & billing system",
    tag:"Excel Automation",
    link:"#contact",
    image:"/inventory-invoice.jpg",
    price:"GHS 200"
  },
  {
    title:"Data Cleaning",
    desc:"Clean messy datasets fast",
    tag:"Data Cleaning",
    link:"#contact",
    image:"/data-cleaning.jpg",
    price:"GHS 100"
  },
  {
    title:"Sales Dashboard",
    desc:"Analytics dashboard",
    tag:"Data Analytics",
    link:"#contact",
    image:"/data-analytics.jpg",
    price:"GHS 250"
  },
  {
    title:"VA Service",
    desc:"Admin, Email, Research support",
    tag:"VA Service - GHS 400/mo",
    link:"#contact",
    image:"/virtual-assistant.jpg",
    price:"GHS 400/mo"
  },
  {
    title:"CUSTOMER SUPPORT & OPERATIONS",
    desc:"Call Center, Chat Support",
    tag:"Support - GHS 350/mo",
    link:"#contact",
    image:"/customer-support.jpg",
    price:"GHS 350/mo"
  },
];

export default function Home(){
  const [book,setBook]=useState({name:"",email:"",service:""});
  const [msg,setMsg]=useState("");
  const send = async()=>{
    try{
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      await supabase.from("bookings").insert([book]);
      setMsg("Booking sent! We'll contact you on +233 548097756");
    }catch(e){ setMsg("Error, check Supabase keys"); }
  }
  return(
    <div className="bg-[#070f26] text-white min-h-screen">
      <nav className="px-6 py-4 flex justify-between">
        <p className="font-bold">Excelprogh</p>
        <div className="flex gap-4 text-sm">
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="https://wa.me/233548097756" className="bg-green-500 px-3 py-1 rounded">WhatsApp</a>
        </div>
      </nav>

      <section className="px-6 max-w-6xl mx-auto py-10 text-center">
        <img src="/profile.jpg" className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white/20" alt="profile"/>
        <h1 className="text-4xl font-bold mt-4">I Build Websites & Excel Systems That Make You Money</h1>
        <p className="text-white/70 mt-3">Based in Accra | Available Worldwide | +233 548097756</p>
      </section>

      <section id="portfolio" className="px-6 max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Gallery / Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((p,i)=>(
            <a key={i} href={p.link} target="_blank" className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <p className="text-xs bg-white/10 inline-block px-2 py-1 rounded">{p.tag}</p>
                <h3 className="font-bold mt-2">{p.title}</h3>
                <p className="text-sm text-white/60">{p.desc}</p>
                <p className="text-sm font-bold mt-2 text-green-400">{p.price}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2">Call/WhatsApp: <a href="https://wa.me/233548097756" className="text-green-400 font-bold">+233 548097756</a></p>
        <div className="mt-6 grid gap-3 max-w-md">
          <input placeholder="Name" className="p-3 rounded bg-white/10" onChange={e=>setBook({...book,name:e.target.value})}/>
          <input placeholder="Email" className="p-3 rounded bg-white/10" onChange={e=>setBook({...book,email:e.target.value})}/>
          <input placeholder="Service you need" className="p-3 rounded bg-white/10" onChange={e=>setBook({...book,service:e.target.value})}/>
          <button onClick={send} className="bg-white text-black font-bold py-3 rounded">Book Now</button>
          <p>{msg}</p>
        </div>
      </section>

      <footer className="text-center py-10 text-white/50 text-sm border-t border-white/10">
        Excelprogh • +233 548097756 • Accra, Ghana • <a href="https://wa.me/233548097756" className="underline">WhatsApp Us</a>
      </footer>
    </div>
  )
}
