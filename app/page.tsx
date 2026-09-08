"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ylspdrjrvhixrregmqtg.supabase.co";
const SUPABASE_KEY = "sb_publishable_Ar8T3NCh77i6YZfjN88wBQ_f8j7oool";
const PAYSTACK_KEY = "pk_live_f0406495db009afc29da2b4ac5d7a3cbdd4afb4d9dcd24"; // YOUR LIVE KEY - EDIT IF WRONG
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const G = "https://cdn.jsdelivr.net/gh/kennysmithderulo-cmyk/Excelprogh@main";

export default function Home(){
  const [paystackReady, setPaystackReady] = useState(false);

  useEffect(()=>{
    // Load Paystack script properly
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = ()=> setPaystackReady(true);
    document.body.appendChild(script);
  },[]);

  const pay = async (amount:number, name:string)=>{
    if(!paystackReady){ alert("⏳ Paystack loading... wait 2 seconds and click again"); return; }
    const email = prompt("Enter email for receipt:");
    if(!email?.includes("@")) return alert("❌ Enter valid email");
    
    try{
      // @ts-ignore
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_KEY,
        email,
        amount: amount*100,
        currency: "GHS",
        ref: "EXCEL-"+Date.now(),
        callback: async (res:any)=>{
          alert("✅ Paid! Ref: "+res.reference+" Saving...");
          const { error } = await supabase.from("sales").insert([{product:name, price:amount, email, paystack_ref:res.reference}]);
          if(error) alert("❌ DB Error: "+error.message+" BUT payment success! Ref: "+res.reference);
          else alert("🎉 SUCCESS! Saved to Supabase! Ref: "+res.reference);
        },
        onClose: ()=> alert("Payment closed")
      });
      handler.openIframe();
    }catch(e:any){ alert("❌ Error: "+e.message); }
  };

  return (
    <main className="min-h-screen bg-[#0a1931] text-white p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-black">EXCEL PRO GH - FIXED 🔥</h1>
        <p className="mt-2">Paystack Ready: {paystackReady ? "✅ YES" : "⏳ Loading..."}</p>
        <img src={`${G}/profile.jpg`} className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-yellow-400" alt="profile"/>
        <button onClick={()=>pay(50,"Excel Pro")} className="mt-8 bg-yellow-400 text-black font-black px-10 py-5 rounded-full text-xl">💳 PAY ₵50 NOW - TEST IT!</button>
        <p className="mt-4 text-xs opacity-50">Hardcoded keys - No Vercel env needed</p>
      </div>
    </main>
  );
}
