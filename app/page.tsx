"use client";
import { useState } from "react";

const services = [
  { t:"Excel Automation", d:"Automate reports, data entry, workflows with VBA & Power Query" },
  { t:"Dashboard & Reporting", d:"Interactive dashboards for sales, finance, operations" },
  { t:"Financial Modeling", d:"Forecasting, budgeting, and financial models" },
  { t:"Data Cleaning", d:"Clean, transform and analyze large datasets" },
  { t:"Training & Workshops", d:"Excel training for teams — beginner to advanced" },
  { t:"Ongoing Support", d:"Reliable support and system updates" },
];

const systems = [
  { title:"Data Cleaning Systems", sub:"Power Query • 96% Time Saved", price:"₵200", tag:"Automation" },
  { title:"Budget Tracker Ghana Edition", sub:"GHS ₵ • Monthly Tracking", price:"₵150", tag:"Budgeting" },
  { title:"Inventory + Invoice", sub:"Accra Shops • Low Stock Alerts", price:"₵300", tag:"Inventory" },
  { title:"Data Analytics", sub:"KPIs • Reports", price:"₵250", tag:"Analytics" },
  { title:"Sales Dashboard Pro", sub:"Daily Sales • Profit", price:"₵250", tag:"Sales" },
  { title:"Business Automation", sub:"WhatsApp • Auto Alerts", price:"₵350", tag:"Automation" },
  { title:"Website + Excel System", sub:"React • Supabase • Excel", price:"₵500", tag:"Website" },
];

const testimonials = [
  { n:"Kwame O.", b:"Retail - Accra", txt:"Payroll dashboard saved our HR team countless days. Clean, accurate, easy." },
  { n:"Efua Addeh", b:"Fitness Owner, Tema", txt:"Excellent training and very patient. Our team is now confident using Excel." },
  { n:"Loan Officer", b:"Finance - Kumasi", txt:"The budget forecasting tool is excellent. Tracked 100+ expenses/month perfectly." },
];

export default function Home(){
  const [booking,setBooking]=useState({name:"",email:"",service:"Excel Automation",date:"2025-10-15",time:"2:00 PM"});
  const [lead,setLead]=useState({name:"",email:"",message:""});
  const [done,setDone]=useState("");

  const bookNow = async()=>{
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    await supabase.from("bookings").insert(booking);
    setDone("Booking confirmed! We'll WhatsApp you.");
    setTimeout(()=>setDone(""),4000);
  };

  const sendLead = async()=>{
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    await supabase.from("leads").insert(lead);
    setDone("Message sent! ✓"); setLead({name:"",email:"",message:""});
    setTimeout(()=>setDone(""),3000);
  };

  return(
    <div className="bg-[#070f26] text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#070f26]/90 backdrop-blur border-b border-[#facc15]/20 px-6 py-4 flex justify-between items-center">
        <div className="font-black flex items-center gap-2"><span className="bg-[#facc15] text-black w-8 h-8 grid place-items-center rounded">E</span> Excel Pro GH</div>
        <div className="hidden md:flex gap-6 text-sm text-white/70"><a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#gallery">Gallery</a><a href="#booking">Booking</a><a href="#contact">Contact</a></div>
        <div className="flex gap-2"><a href="#booking" className="bg-[#facc15] text-black px-5 py-2 rounded-full font-bold text-sm">Book Now</a><a href="https://wa.me/233548097756" className="bg-[#25D366] px-4 py-2 rounded-full text-sm font-bold">WhatsApp</a></div>
      </nav>

      {/* HERO */}
      <section className="px-6 max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[42px] md:text-[56px] font-black leading-[0.9]">Excel Pro GH<br/>Data Solutions &<br/><span className="text-[#facc15]">Excel Automation</span><br/><span className="text-[22px] text-white/70">For Businesses in Accra, Ghana</span></h1>
          <p className="text-white/50 mt-4">We transform raw data into powerful Excel dashboards, automation tools, and insights to help Ghanaian businesses grow smarter.</p>
          <div className="flex gap-3 mt-6"><a href="#booking" className="bg-[#facc15] text-black px-6 py-3 rounded-full font-black">Book Consultation</a><a href="#portfolio" className="border border-white/20 px-6 py-3 rounded-full font-bold">View Portfolio →</a></div>
          <p className="mt-4 text-xs text-white/40">📍 Accra, Ghana • Trusted by 50+ SMEs • Microsoft Excel Certified</p>
        </div>
        <div className="bg-[#101c39] border border-[#facc15]/30 rounded-[20px] p-4">
          <div className="bg-[#070f26] rounded-[12px] p-4"><p className="text-[#facc15] font-bold">Sales Performance - Jan to Sep 2025</p><div className="grid grid-cols-3 gap-3 mt-4 text-sm"><div className="bg-white/5 p-3 rounded">Revenue: GHS 1.24M</div><div className="bg-white/5 p-3 rounded">Profit: 22%</div><div className="bg-white/5 p-3 rounded">Clients: 312</div></div><div className="h-24 mt-4 bg-gradient-to-r from-[#facc15]/20 to-transparent rounded" /></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#0f1c3d] px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 items-center">
          <h2 className="text-3xl font-black">ABOUT US<br/>Our Mission</h2>
          <div><p className="font-bold text-[#facc15]">Tailored Solutions</p><p className="text-white/50 text-sm">Custom Excel systems built for your business needs</p></div>
          <div><p className="font-bold text-[#facc15]">Data-Driven Insights</p><p className="text-white/50 text-sm">Turn spreadsheets into clear actionable dashboards</p></div>
          <div><p className="font-bold text-[#facc15]">Local Support - Accra</p><p className="text-white/50 text-sm">On-site & remote support based in Accra, Ghana</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-center font-black text-3xl">Services</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {services.map(s=><div key={s.t} className="bg-[#111d3c] border border-[#facc15]/20 rounded-[16px] p-6"><p className="font-bold">{s.t}</p><p className="text-white/50 text-sm mt-2">{s.d}</p></div>)}
        </div>
      </section>

      {/* PORTFOLIO - 7 SYSTEMS */}
      <section id="portfolio" className="px-6 max-w-7xl mx-auto pb-16">
        <h2 className="text-center font-black text-3xl">7 Systems We've Built</h2>
        <p className="text-center text-white/40 text-sm mt-2">Built in Accra, Ghana - GHS ₵ - Offline-ready</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {systems.map(s=>(
            <div key={s.title} className="bg-[#101c39] border border-[#facc15]/20 rounded-[16px] p-5">
              <p className="font-bold">{s.title}</p><p className="text-[#facc15] text-xs mt-1">{s.sub}</p><p className="text-white/50 text-xs mt-2">Result: Saves time & boosts profit</p><p className="text-[#facc15] font-black mt-3">→ {s.price} • {s.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#0f1c3d] px-6 py-12">
        <div className="max-w-7xl mx-auto"><h2 className="font-black text-2xl">Gallery — Real Dashboards</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">{[1,2,3,4,5,6].map(i=><img key={i} src={`/gallery-${i}.jpg`} alt="dashboard" className="h-40 w-full object-cover rounded-[12px] border border-[#facc15]/20 bg-[#070f26]" onError={e=>e.currentTarget.src=`https://via.placeholder.com/400x300/101c39/facc15?text=Dashboard+${i}`} />)}</div></div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-6 max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-[#facc15] text-xs font-bold tracking-widest">BOOK A CONSULTATION</p>
          <h2 className="text-3xl font-black mt-2">Book a Time with Us</h2>
          <p className="text-white/50 text-sm mt-2">Schedule a 30-minute free consultation to discuss your Excel & data needs.</p>
          <div className="mt-6 space-y-3 text-sm"><p>📍 Osu, Accra, Ghana - G108 Oxford St, Osu</p><p>✉️ hello@excelprogh.com</p><p>📞 +233 54 809 7756</p></div>
          <div className="mt-6 bg-[#101c39] border border-white/10 rounded-[16px] p-4">
            <p className="font-bold">October 2025</p>
            <div className="grid grid-cols-7 gap-2 mt-3 text-xs text-center"><span className="text-white/30">Mon</span><span className="text-white/30">Tue</span><span>15</span><span className="bg-[#facc15] text-black rounded-full w-6 h-6 grid place-items-center">15</span><span>16</span></div>
          </div>
        </div>
        <div className="bg-[#101c39] border border-white/10 rounded-[20px] p-6">
          <input value={booking.name} onChange={e=>setBooking({...booking,name:e.target.value})} placeholder="Your Name" className="w-full bg-[#070f26] border border-white/10 rounded-full px-5 py-3 mb-3 outline-none" />
          <input value={booking.email} onChange={e=>setBooking({...booking,email:e.target.value})} placeholder="your@email.com" className="w-full bg-[#070f26] border border-white/10 rounded-full px-5 py-3 mb-3 outline-none" />
          <select value={booking.service} onChange={e=>setBooking({...booking,service:e.target.value})} className="w-full bg-[#070f26] border border-white/10 rounded-full px-5 py-3 mb-3 outline-none">{services.map(s=><option key={s.t}>{s.t}</option>)}</select>
          <button onClick={bookNow} className="w-full bg-[#facc15] text-black font-black py-3 rounded-full">Confirm Booking — {booking.date} {booking.time}</button>
          {done && <p className="text-[#facc15] text-sm mt-3 text-center">{done}</p>}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0f1c3d] px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map(t=><div key={t.n} className="bg-[#111d3c] border border-white/10 rounded-[16px] p-6"><p className="text-[#facc15]">★★★★★</p><p className="text-sm mt-3 text-white/80">"{t.txt}"</p><p className="font-bold mt-4 text-sm">{t.n}</p><p className="text-white/40 text-xs">{t.b}</p></div>)}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-10">
        <div><h2 className="text-3xl font-black">Contact — Accra, Ghana</h2><div className="mt-6 bg-[#101c39] border border-white/10 rounded-[16px] p-6"><input value={lead.name} onChange={e=>setLead({...lead,name:e.target.value})} placeholder="Name" className="w-full bg-[#070f26] border border-white/10 rounded-full px-5 py-3 mb-3 outline-none" /><input value={lead.email} onChange={e=>setLead({...lead,email:e.target.value})} placeholder="WhatsApp / Email" className="w-full bg-[#070f26] border border-white/10 rounded-full px-5 py-3 mb-3 outline-none" /><textarea value={lead.message} onChange={e=>setLead({...lead,message:e.target.value})} placeholder="What system do you need?" className="w-full bg-[#070f26] border border-white/10 rounded-[16px] px-5 py-3 h-24 outline-none" /><button onClick={sendLead} className="w-full mt-3 bg-[#facc15] text-black font-black py-3 rounded-full">Send Message →</button></div></div>
        <div className="bg-[#101c39] border border-white/10 rounded-[16px] p-2 h-[350px]"><iframe src="https://maps.google.com/maps?q=Accra,Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full rounded-[12px] border-0" /></div>
      </section>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-[#0a1330] border-t border-[#facc15]/20 px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div><p className="font-black text-lg">Excel Pro GH</p><p className="text-white/40 text-sm mt-2">Excel automation & data solutions for Ghanaian businesses. Based in Accra, Ghana.</p><div className="flex gap-2 mt-4"><span className="w-8 h-8 bg-[#facc15] rounded-full grid place-items-center text-black font-bold">in</span><span className="w-8 h-8 bg-[#facc15] rounded-full grid place-items-center text-black font-bold">f</span><span className="w-8 h-8 bg-[#facc15] rounded-full grid place-items-center text-black font-bold">X</span></div></div>
          <div><p className="font-bold text-[#facc15]">Company</p><p className="text-sm mt-3 space-y-2 text-white/60">About Us<br/>Services<br/>Portfolio<br/>Careers</p></div>
          <div><p className="font-bold text-[#facc15]">Resources</p><p className="text-sm mt-3 space-y-2 text-white/60">Blog<br/>FAQ<br/>Support<br/>Case Studies</p></div>
          <div><p className="font-bold text-[#facc15]">Newsletter</p><p className="text-white/50 text-xs mt-2">Subscribe for Excel tips & updates</p><input placeholder="Enter your email" className="w-full mt-3 bg-[#070f26] border border-white/10 rounded-full px-5 py-3 text-sm outline-none" /><button className="w-full mt-2 bg-[#facc15] text-black font-bold py-3 rounded-full text-sm">Subscribe</button></div>
        </div>
        <div className="text-center text-white/30 text-xs mt-10 border-t border-white/10 pt-6">© 2025 Excel Pro GH. All rights reserved. | Privacy Policy | Terms | Built in Accra, Ghana</div>
      </footer>
      <a href="https://wa.me/233548097756" className="fixed bottom-6 right-6 bg-[#25D366] px-4 py-3 rounded-full font-bold text-sm shadow-2xl">💬 Chat on WhatsApp</a>
    </div>
  )
}
