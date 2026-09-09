export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

import { createClient } from "@supabase/supabase-js";

export async function GET(){
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const { data } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
  return Response.json(data || []);
}

export async function POST(req:Request){
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const body = await req.json();
  const { data } = await supabase.from("gallery").insert(body).select().single();
  return Response.json(data);
}
