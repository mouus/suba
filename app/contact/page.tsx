"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  MessageCircle,
  Plane,
  Car,
  BadgeCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import NavBar from "@/components/NavBar";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";

// ✅ FIXED WhatsApp (with number + optional message)
const WHATSAPP_URL = "https://wa.me/9607930760?text=Hello%20Scubachannel%20Fuvahmulah,%20I%20would%20like%20to%20enquire%20about%20diving.";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Diving", href: "/courses" },
  { label: "Stay", href: "/hotels/guest-houses" },
  { label: "Our Crew", href: "/our-crew" },
  { label: "Transfer", href: "/transfer" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const COURSES = [
  "Open Water",
  "Advanced Open Water",
  "EFR & Rescue",
  "Divemaster",
  "Specialty Courses",
];

const CONTACT_INFO = [
  {
    title: "Our Location",
    text: "Zindha, husnuheenamagu, funaadu, Fuvahmulah Island, Maldives",
    icon: MapPin,
  },
  {
    title: "Phone Number",
    text: "+960 7930760",
    icon: Phone,
    href: "tel:+9607930760",
  },
  {
    title: "Email Us",
    text: "sales@scubachannelfuvahmulah.com",
    icon: Mail,
    href: "mailto:sales@scubachannelfuvahmulah.com",
  },
];

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e6ddd1] py-6 last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between"
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronRight className={`${open ? "rotate-90" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 text-sm text-[#667085]"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <NavBar />

      {/* HERO */}
      <section className="relative min-h-[80vh] pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.scubachannelfuvahmulah.com/fvm-pic.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-7xl px-6 text-white">
          <h1 className="text-6xl font-light">
            Contact Us
            <span className="block font-semibold">
              start your diving journey
            </span>
          </h1>

          <div className="mt-10 flex gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="rounded-full bg-white px-6 py-3 text-[#1f2a37]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-8 rounded-3xl">
                <Icon className="text-[#0f766e]" />
                <h3 className="text-xl mt-4">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHATSAPP CTA (REPLACED FORM) */}
      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-light">
            Contact us instantly on
            <span className="block font-semibold">WhatsApp</span>
          </h2>

          <p className="mt-6 text-gray-500">
            Skip forms — message us directly for bookings, courses, or questions.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0f766e] px-8 py-4 text-white"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>
        <a
  href="https://wa.me/9607930760?text=Hello%20Scubachannel%20Fuvahmulah,%20I%20would%20like%20to%20enquire%20about%20diving."
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0f766e] px-5 py-3 text-white shadow-lg hover:scale-105 transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.79 11.79 0 0012.02 0C5.38 0 .01 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0012.02 24C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.02 21.82c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.67.96.98-3.57-.24-.37A9.77 9.77 0 012.2 12c0-5.43 4.41-9.82 9.82-9.82 2.62 0 5.08 1.02 6.94 2.88A9.75 9.75 0 0121.82 12c0 5.41-4.39 9.82-9.8 9.82zm5.39-7.38c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.17-1.44-.07-.13-.27-.2-.57-.35z" />
  </svg>

  <span className="text-sm font-medium">Chat</span>
</a>
      </section>

      {/* FOOTER (RESTORED EXACTLY) */}
      <footer className="bg-[#16202b] px-6 py-10 text-white/55">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO} className="h-11 w-11 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-white">
                  SCUBACHANNEL
                </p>
                <p className="text-[10px] text-white/50">FUVAHMULAH</p>
              </div>
            </div>

            <p className="mt-4 text-sm">
              Your premier diving center in Fuvahmulah, Maldives, offering
              unforgettable underwater experiences and professional PADI
              courses.
            </p>
          </div>

          <div>
            <p className="text-white">Quick Links</p>
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="block mt-2">
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <p className="text-white">Courses</p>
            {COURSES.map((c) => (
              <p key={c} className="mt-2">
                {c}
              </p>
            ))}
          </div>

          <div>
            <p className="text-white">Contact Info</p>
            <p className="mt-2">Fuvahmulah Island, Maldives</p>
            <p className="mt-2">+960 7930760</p>
            <p className="mt-2">sales@scubachannelfuvahmulah.com</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/40">
          © 2026 Southern Channel Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}