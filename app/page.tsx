"use client";
export const dynamic = 'force-dynamic'
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const G = "https://cdn.jsdelivr.net/gh/kennysmithderulo-cmyk/Excelprogh@main";

export default function Home(){
  const [loading, setLoading] = useState<string|null>(null);

  const pay = (amount:number, name:string)=>{
    const email = prompt("Enter email for receipt:");
    if(!email?.includes("@")) return alert("Valid email needed");
    // @ts-ignore
    if(!window.PaystackPop) return alert("Paystack not loaded, refresh page");
    setLoading(name);
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount*100,
      currency: "GHS",
      ref: "EXCEL-"+Date.now(),
      callback: async (res:any)=>{
        try{
          await supabase.from("sales").insert([{product:name,price:amount,email,paystack_ref:res.reference}]);
          alert("✅ Paid! Ref: "+res.reference);
        }catch{ alert("Paid! But DB save failed - check Supabase table"); }
        setLoading(null);
      },
      onClose: ()=>setLoading(null)
    });
    handler.openIframe();
  };

  const items = [
    {name:"Data Cleaning Systems", price:250, desc:"Clean 1000s rows in 5min", img:`${G}/data-cleaning.jpg`},
    {name:"Budget Tracker Ghana", price:150, desc:"Save ₵500-₵1500/mo", img:`${G}/budget-tracker.jpg`},
    {name:"Inventory + Invoice Makola", price:300, desc:"Best-seller Accra", img:`${G}/inventory-invoice.jpg`},
    {name:"Data Analytics Service", price:350, desc:"Dashboard for SME", img:`${G}/data-analytics.jpg`},
    {name:"Website Developer", price:500, desc:"Converts visitors", img:`${G}/website-developer.jpg`},
    {name:"VA Assistant", price:400, desc:"Save 15+ hrs/week", img:`${G}/va-assistant.jpg`},
    {name:"Customer Support & Ops", price:350, desc:"Ghana-based team", img:`${G}/customer-support.jpg`},
  ];

  return (
    <main className="min-h-screen bg-[#0a1931] text-white">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Excel Pro GH</h1>
        
        <div className="mt-8 bg-[#12264a] rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-center">
          <img src={`${G}/profile.jpg`} alt="Kenny Murray" className="w-40 h-40 rounded-full object-cover border-4 border-[#f4c542]" />
          <div>
            <p className="tracking-widest opacity-70 text-sm">HELLO, I&apos;M KENNY MURRAY</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-2">Data Analyst | Website Developer | Excel Systems Builder</h2>
            <p className="mt-3 opacity-80">Trusted by 25+ clients — 📧 contact.excelprogh@gmail.com | +233 548 097 756</p>
            <p className="mt-2 font-bold text-[#f4c542]">💬 WhatsApp: +233 548 097 756</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map(it=>(
            <div key={it.name} className="bg-[#12264a] rounded-3xl overflow-hidden border border-white/10">
              <img src={it.img} alt={it.name} className="w-full h-56 object-cover bg-[#0f2342]" />
              <div className="p-5 flex justify-between items-center gap-3">
                <div><p className="font-bold text-lg">{it.name}</p><p className="opacity-60 text-sm">{it.desc}</p></div>
                <button onClick={()=>pay(it.price,it.name)} disabled={loading===it.name} className="bg-[#f4c542] text-black font-bold px-6 py-3 rounded-full shrink-0">
                  {loading===it.name?"...":`→ ₵${it.price} Pay`}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <img src={`${G}/personal-budget.jpg`} alt="Personal Budget" className="w-full h-80 object-cover rounded-3xl border border-white/10" />
          <div className="bg-[#12264a] rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl font-bold">Personal Budget Tracker Included</h3>
            <p className="opacity-70 mt-2">Track income, expenses, savings in GHS. Used by 100+ Ghanaians.</p>
            <button onClick={()=>pay(100,"Personal Budget")} className="mt-4 bg-[#f4c542] text-black font-bold px-6 py-3 rounded-full">→ ₵100 Pay</button>
          </div>
        </div>

        <footer className="text-center py-12 opacity-50">© 2026 Excel Pro GH — contact.excelprogh@gmail.com — Accra Ghana — Paystack LIVE + Supabase Dynamic</footer>
      </div>
    </main>
  );
        }
