"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const PRODUCTS = [
  { id:1, name:"Data Cleaning Systems", price:200, img:"data-cleaning.jpg", result:"90% faster" },
  { id:2, name:"Budget Tracker Ghana", price:150, img:"budget-tracker.jpg", result:"Save ₵500-₵1500/mo" },
  { id:3, name:"Inventory + Invoice Makola", price:300, img:"inventory-invoice.jpg", result:"Best-seller Accra" },
  { id:4, name:"Data Analytics Service", price:250, img:"data-analytics.jpg", result:"Data-driven growth" },
  { id:5, name:"Website Developer", price:500, img:"website-developer.jpg", result:"Converts visitors" },
  { id:6, name:"VA Assistant", price:400, img:"va-assistant.jpg", result:"Save 15+ hrs/week" },
  { id:7, name:"Customer Support & Ops", price:350, img:"customer-support.jpg", result:"Ghana-based team" },
];

export default function Home(){
  const pay = (price:number, name:string) => {
    const email = prompt(`Email for receipt for ${name} GHS ${price}:`);
    if(!email?.includes("@")) return alert("Valid email needed");
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email, amount: price*100, currency:"GHS",
      ref: "EXCELPRO_"+Date.now(),
      callback: async (res:any)=>{
        alert(`✅ Paid! Ref ${res.reference}`);
        await supabase.from("leads").insert({ email, product_interest: `${name} PAID GHS${price} Ref:${res.reference}`, budget:`GHS ${price}`, status:"paid" });
        window.open(`https://wa.me/233548097756?text=${encodeURIComponent(`🔥 NEW SALE ${name} GHS${price} Ref:${res.reference} Customer:${email}`)}`,"_blank");
      },
      onClose: ()=> alert("Cancelled")
    });
    handler.openIframe();
  };

  return (
    <main>
      <nav className="max-w-[1220px] m-auto p-5 flex justify-between"><span className="font-black text-gold text-xl">Excel Pro GH</span><a href="https://wa.me/233548097756" className="bg-gold text-[#091a33] px-5 py-2 rounded-full font-bold">Hire Me</a></nav>
      <section className="max-w-[1220px] m-auto grid md:grid-cols-2 gap-8 p-6">
        <div className="rounded-[30px] overflow-hidden"><img src="/profile.jpg" alt="Kenny" className="w-full h-[580px] object-cover"/></div>
        <div>
          <p className="text-gold font-bold text-xs tracking-widest">HELLO, I'M KENNY MURRAY</p>
          <h1 className="text-4xl font-black mt-2">Data Analyst | <span className="text-gold">Website Developer</span> | Excel Systems Builder</h1>
          <p className="text-slate-400 mt-4">Trusted by 25+ clients — 📧 contact.excelprogh@gmail.com | +233 548 097 756</p>
          <div className="mt-6 flex flex-col gap-3 max-w-[400px]">
            <a href="https://wa.me/233548097756" className="bg-gold text-black p-4 rounded-full font-black text-center">💬 WhatsApp: +233 548 097 756</a>
          </div>
        </div>
      </section>
      <section className="max-w-[1220px] m-auto p-6 grid md:grid-cols-3 gap-6">
        {PRODUCTS.map(p=>(
          <div key={p.id} className="bg-[#132a4e] rounded-3xl overflow-hidden border border-[#1d3a6b]">
            <img src={`/${p.img}`} className="h-[200px] w-full object-cover"/>
            <div className="p-5"><h3 className="font-bold">{p.name}</h3><div className="flex justify-between mt-4"><span>{p.result}</span><button onClick={()=>pay(p.price,p.name)} className="price">→ ₵{p.price} Pay</button></div></div>
          </div>
        ))}
      </section>
      <footer className="text-center p-10 text-slate-400">© 2026 Excel Pro GH — contact.excelprogh@gmail.com — Accra Ghana — Paystack LIVE + Supabase Dynamic</footer>
    </main>
  )
}
