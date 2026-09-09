"use client";
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function AdminGallery(){
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const [title,setTitle]=useState("");
  const [file,setFile]=useState<any>(null);
  const [uploading,setUploading]=useState(false);
  const [msg,setMsg]=useState("");

  const upload = async()=>{
    if(!file) return alert("Choose image");
    if(!title) return alert("Add title");
    setUploading(true);
    const ext = file.name.split('.').pop();
    const name = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('gallery').upload(name, file);
    if(error){ setMsg("Error: "+error.message); setUploading(false); return; }
    const { data:{ publicUrl } } = supabase.storage.from('gallery').getPublicUrl(name);
    await supabase.from('gallery').insert({ title, image_url: publicUrl });
    setMsg("Uploaded!");
    setUploading(false);
  }

  return (
    <div>
      <h1>Admin Gallery</h1>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input type="file" onChange={e=>setFile(e.target.files?.[0])} />
      <button onClick={upload} disabled={uploading}>{uploading?"Uploading...":"Upload"}</button>
      <p>{msg}</p>
    </div>
  );
}
