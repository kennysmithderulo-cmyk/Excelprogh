"use client";
import { useState } from "react";

const portfolio = [
  {
    title:"Betslip Analyser",
    desc:"Betting analytics system - Check wins/loses. Web App",
    tag:"Website Development",
    link:"https://betslip-analyser-check-lose-aiitx7ylt-kennysmithderulo-cmyk.vercel.app/",
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
  },
  {
    title:"5-7 Hair Lounge",
    desc:"Salon booking website - Modern booking system",
    tag:"Website Development",
    link:"https://5-7hair-lounge.vercel.app/",
    image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600"
  },
  {
    title:"Inventory & Stock Manager",
    desc:"Excel automation system for inventory tracking",
    tag:"Excel Systems",
    link:"#contact",
    image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
  },
  {
    title:"Budget & Cashflow Planner",
    desc:"Complete business finance management",
    tag:"Excel Systems",
    link:"#contact",
    image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
  },
  {
    title:"Website Development",
    desc:"Business sites, Landing pages, E-commerce + Excel dashboards as live websites. From GHS 1,500",
    tag:"NEW SERVICE",
    link:"#contact",
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
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
      <nav className="px-6 py-4 flex justify-between">
        <p className="font-bold">Excel Pro GH</p>
        <div className="flex gap-4 text-sm">
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="px-6 max-w-7xl mx-auto py-10">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto bg-[#101c46] rounded-full flex items-center justify-center"><p className="text-4xl">📊</p></div>
          <p className="mt-4 bg-[#fac02f] text-black inline-block px-3 py-1 rounded text-sm">Spintex, Accra</p>
          <p className="text-white/40 text-sm mt-2">contact.excelprogh@gmail.com</p>
        </div>
        <div className="mt-6">
          <h1 className="text-[34px] font-bold leading-tight">We Build Excel Systems + Modern Websites</h1>
          <p className="text-white/60 mt-2">Excel automation, dashboards, and business websites. Booking systems, e-commerce, and Excel-to-Web.</p>
          <div className="flex gap-3 mt-6">
            <a href="#portfolio" className="bg-[#fac02f] text-black px-6 py-3 rounded font-bold">View Portfolio</a>
            <a href="#contact" className="border px-6 py-3 rounded">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold">Portfolio - Excel + Websites</h2>
        <p className="text-white/60 mt-2">Our real projects</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {portfolio.map((p)=>(
            <a key={p.title} href={p.link} target="_blank" className="bg-[#101c46] rounded-xl overflow-hidden">
              <img src={p.image} className="h-48 w-full object-cover" alt={p.title}/>
              <div className="p-4">
                <span className="text-xs bg-[#fac02f] text-black px-2 py-1 rounded">{p.tag}</span>
                <h3 className="font-bold mt-2">{p.title}</h3>
                <p className="text-white/60 text-sm mt-1">{p.desc}</p>
                <p className="text-[#fac02f] mt-3 text-sm">View Live →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-2xl font-bold">Book Us - Spintex Accra</h2>
        <div className="mt-6 max-w-md">
          <input placeholder="Name" className="w-full p-3 rounded bg-[#101c46] mb-3 text-white" value={book.name} onChange={e=>setBook({...book,name:e.target.value})} />
          <input placeholder="Email" className="w-full p-3 rounded bg-[#101c46] mb-3 text-white" value={book.email} onChange={e=>setBook({...book,email:e.target.value})} />
          <textarea placeholder="Excel or Website project?" className="w-full p-3 rounded bg-[#101c46] mb-3 text-white" value={book.message} onChange={e=>setBook({...book,message:e.target.value})} />
          <button onClick={send} className="bg-[#fac02f] text-black w-full py-3 rounded font-bold">Send Booking</button>
          <p className="mt-3 text-green-400 text-sm">{msg}</p>
        </div>
      </section>

      <footer className="bg-[#050d24] px-6 py-10 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><p className="font-bold mb-3">Excel Pro GH</p><p className="text-white/50 text-sm">Spintex, Accra<br/>contact.excelprogh@gmail.com<br/>+233 54 809 5000</p></div>
          <div><p className="font-bold mb-3">Company</p><div className="flex flex-col gap-2 text-sm text-white/60"><a href="/about" className="hover:text-white">About Us</a><a href="/portfolio">Portfolio</a><a href="/case-studies">Case Studies</a></div></div>
          <div><p className="font-bold mb-3">Resources</p><div className="flex flex-col gap-2 text-sm text-white/60"><a href="/excel-tips" className="hover:text-white">Excel Tips</a><a href="/templates" className="hover:text-white">Template Library</a><a href="/support" className="hover:text-white">Support</a></div></div>
          <div><p className="font-bold mb-3">Services</p><div className="flex flex-col gap-2 text-sm text-white/60"><p>Excel Systems</p><p>Website Development</p><p>Business Automation</p></div></div>
        </div>
        <div className="text-center text-white/30 text-sm mt-10">© 2026 Excel Pro GH - Spintex, Accra</div>
      </footer>

      <a href="https://wa.me/233548095000" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full">WA</a>
    </div>
  )
}
