"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For redirection
import { 
  Loader2, RefreshCcw, Inbox, BookmarkCheck,
  Mail, Phone, Clock, Globe, AlertCircle, FileText, LogOut
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Updated Logout Handler
  const handleLogout = async () => {
    try {
      // 1. Call the API to clear the server-side cookie
      await fetch("/api/admin/logout", { method: "POST" });
      
      // 2. Clear local storage just in case
      localStorage.removeItem("admin_token"); 
      
      // 3. Redirect to login
      router.push("/login");
      router.refresh(); // Forces Next.js to re-run middleware
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [bookRes, msgRes] = await Promise.all([
        fetch("/api/admin/bookings"),
        fetch("/api/admin/messages")
      ]);

      const parse = async (res, type) => {
        const contentType = res.headers.get("content-type");
        if (!res.ok || !contentType?.includes("application/json")) {
          throw new Error(`${type} API failed. Verify the table exists.`);
        }
        return res.json();
      };

      const bData = await parse(bookRes, "Booking");
      const mData = await parse(msgRes, "Message");

      setBookings(Array.isArray(bData) ? bData : []);
      setMessages(Array.isArray(mData) ? mData : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 lg:p-8 text-[#1f2a37]">
      <div className="mx-auto max-w-[1600px]">
        
        {/* Header with Sync and Logout */}
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#0f766e]">ScubaChannel Dashboard</h1>
            <p className="text-sm text-slate-500 font-medium">Fuvahmulah Dive Operations</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={fetchData} 
              disabled={loading}
              className="flex items-center gap-2 rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200 disabled:opacity-50"
            >
              <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Sync
            </button>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-full bg-red-50 px-6 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </header>

        {error && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-red-700 border border-red-100 text-sm font-bold">
            <AlertCircle className="h-5 w-5" /> Error: {error}
          </div>
        )}

        {loading && bookings.length === 0 ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#0f766e]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* BOOKINGS COLUMN */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="flex items-center gap-2 px-4 text-lg font-bold text-slate-700">
                <BookmarkCheck className="text-[#0f766e]" /> Full Booking Details ({bookings.length})
              </h2>
              {bookings.map((b) => (
                <div key={b.id} className="rounded-[2.5rem] border bg-white p-7 shadow-sm border-slate-100 hover:border-[#0f766e]/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl">{b.name}</h3>
                      <div className="flex gap-4 text-sm text-slate-500 mt-1">
                        <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {b.email}</span>
                        <span className="flex items-center gap-1 font-bold text-[#0f766e]"><Phone className="h-3.5 w-3.5" /> {b.whatsapp}</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Divers</p>
                      <p className="font-black text-xl text-[#0f766e]">{b.guests || 1}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 mb-4 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                      <FileText className="h-3 w-3" /> Booking Subject & Notes
                    </h4>
                    <p className="font-bold text-slate-800 mb-1">{b.subject || "Dive Package Request"}</p>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      "{b.message || b.notes || "No extra notes provided."}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex flex-wrap justify-between items-center gap-3 text-sm">
                    <p className="text-slate-600 font-bold bg-white px-3 py-1 rounded-full border border-slate-100 italic">
                      <Clock className="inline h-3.5 w-3.5 mr-1 text-[#0f766e]" /> 
                      {new Date(b.arrival).toLocaleDateString()} — {new Date(b.departure).toLocaleDateString()}
                    </p>
                    <div className="flex gap-1.5">
                      {b.services?.map(s => (
                        <span key={s} className="px-3 py-1 bg-[#0f766e] text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MESSAGES COLUMN */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="flex items-center gap-2 px-4 text-lg font-bold text-slate-700">
                <Inbox className="text-[#0f766e]" /> General Inquiries ({messages.length})
              </h2>
              {messages.map((m) => (
                <div key={m.id} className="rounded-[2.5rem] border border-[#e6ddd1] bg-[#fcfaf6] p-7 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg leading-tight">{m.subject || "Inquiry"}</h4>
                      <p className="text-xs text-slate-500 mt-1 font-medium"><Globe className="inline h-3 w-3 mr-1" /> {m.name}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-md border border-[#e6ddd1]">
                      {new Date(m.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-[#e6ddd1] text-sm text-slate-600 leading-relaxed italic shadow-inner">
                    "{m.message}"
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}