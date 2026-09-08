export const dynamic = 'force-dynamic';

import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request){
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const body = await req.json();
  const { data, error } = await supabase.from("leads").insert([body]);
  if(error) return Response.json({error: error.message}, {status:400});
  return Response.json({ok:true, data});
}
