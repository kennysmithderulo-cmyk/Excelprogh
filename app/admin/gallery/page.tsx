"use client";
import { useState } from "react";
export default function GalleryAdmin(){
  const [file,setFile]=useState<any>(null);
  const upload = async()=>{
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const name=`${Date.now()}.jpg`;
    await supabase.storage.from("gallery").upload(name,file);
  };
  return <div className="p-10">Admin<input type="file" onChange={e=>setFile(e.target.files?.[0])}/><button onClick={upload}>Upload</button></div>
}
