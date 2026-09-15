import { supabase } from "@/lib/supabaseClient";

// ... inside Home component ...

const send = async () => {
  if (!book.name || !book.email) {
    setMsg("Please enter your name and email so we can reply.");
    return;
  }

  const { error } = await supabase.from("leads").insert([
    {
      name: book.name,
      email: book.email,
      service: book.service || "",
      message: "",
    },
  ]);

  if (error) {
    setMsg("Something went wrong. Please WhatsApp us directly.");
    console.error(error);
    return;
  }

  setMsg(
    `Thanks ${book.name}! We've received your request and will contact you via ${book.email} or WhatsApp (+233 548097756).`
  );
  setBook({ name: "", email: "", service: "" });
};
