import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function GET(){
  const { data } = await supabase.from("gallery").select("*").order("created_at",{ascending:false});
  return Response.json(data||[]);
}
export async function POST(req:Request){
  const body = await req.json();
  const { data } = await supabase.from("gallery").insert(body).select().single();
  return Response.json(data);
}
