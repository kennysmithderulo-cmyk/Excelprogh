"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function AdminGallery(){
  const [title,setTitle]=useState(""); const [file,setFile]=useState<File|null>(null); const [uploading,setUploading]=useState(false); const [msg,setMsg]=useState("");
  const upload = async()=>{
    if(!file) return alert("Choose image or video first");
    if(!title) return alert("Add title");
    setUploading(true);
    const ext = file.name.split('.').pop();
    const name = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("gallery").upload(name, file);
    if(error){ setMsg("Error: "+error.message); setUploading(false); return; }
    const { data:{ publicUrl } } = supabase.storage.from("gallery").getPublicUrl(name);
    const type = file.type.startsWith("video")? "video":"image";
    await fetch("/api/gallery",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title,url:publicUrl,type})});
    setMsg("✅ LIVE! Go check homepage gallery!"); setTitle(""); setFile(null); setUploading(false);
  }
  return(
    <div className="min-h-screen bg-[#070f26] text-white p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-black mt-10">📸 Upload Gallery</h1>
      <p className="text-white/50 text-sm mt-2">Upload screenshots or MP4 demo videos. Shows instantly on site.</p>
      <div className="mt-8 bg-[#101c39] border border-white/10 rounded-[24px] p-6">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title e.g. Makola Inventory Demo" className="w-full bg-[#070f26] border border-white/10 rounded-full px-6 py-4 mb-4 outline-none text-sm" />
        <input type="file" accept="image/*,video/*" onChange={e=>setFile(e.target.files?.[0]||null)} className="w-full text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#facc15] file:text-black file:font-bold" />
        <button onClick={upload} disabled={uploading} className="w-full mt-6 bg-[#facc15] text-black font-black py-4 rounded-full">{uploading?"Uploading... Please wait":"Upload to Gallery →"}</button>
        {msg && <p className="text-[#facc15] text-sm mt-4 text-center font-bold">{msg}</p>}
        <a href="/" className="block text-center text-white/40 text-sm mt-6">← Back to website</a>
        <a href="/#gallery" className="block text-center text-[#facc15] text-sm mt-2">View Gallery Section →</a>
      </div>
    </div>
  )
                                                                         }
