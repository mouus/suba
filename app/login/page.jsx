"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
        router.refresh(); // Ensure middleware picks up the new cookie
      } else {
        setError("Access Denied: Incorrect Password");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#020617] px-4">
      {/* Background Glows */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-900/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-900/20 blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-md"
      >
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Admin Access</h1>
            <p className="mt-2 text-sm text-white/60">Enter password to manage Scubachannel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/20 outline-none transition focus:border-white/40 focus:bg-white/10"
              />
            </div>

            {error && (
              <p className="text-center text-xs font-medium text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Enter Dashboard <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <a href="/" className="text-xs text-white/40 hover:text-white transition">
              ← Return to website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}