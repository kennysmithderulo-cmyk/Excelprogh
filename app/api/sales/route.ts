import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);
export async function POST(req: Request){
  const body = await req.json();
  await supabase.from("leads").insert([body]);
  return Response.json({ok:true});
}
