"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("kennysmithderulo@gmail.com");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabaseUrl || !supabaseAnonKey) {
      setMessage("Supabase is not configured in Vercel yet.");
      return;
    }

    setMessage("");
    setIsSubmitting(true);

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      setMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    router.replace("/admin");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070f26] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <a href="/" className="text-sm text-[#f4c542] hover:underline">
          ← Back to Excel Pro GH
        </a>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#f4c542]">
          Private access
        </p>

        <h1 className="mt-3 text-3xl font-bold">Admin sign in</h1>

        <p className="mt-3 text-sm leading-6 text-white/60">
          Sign in to securely manage business leads.
        </p>

        <form onSubmit={signIn} className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm">
            Email address
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 text-sm">
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-lg border border-white/10 bg-white/10 p-3 outline-none focus:border-[#f4c542]"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-lg bg-[#f4c542] px-4 py-3 font-bold text-[#070f26] hover:bg-[#ffd95c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          {message && (
            <p className="text-sm leading-6 text-red-300">{message}</p>
          )}
        </form>
      </div>
    </main>
  );
}
