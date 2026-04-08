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
  Info,
  Calendar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import NavBar from "@/components/NavBar";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";

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

const TRAVEL_STEPS = [
  {
    step: "Step 1",
    title: "International Flight",
    desc: "Book your international flight to Malé International Airport (Velana International Airport, MLE). Many international airlines operate flights to the Maldives from major cities worldwide.",
  },
  {
    step: "Step 2",
    title: "Domestic Flight",
    desc: "From Malé, take a domestic flight to Fuvahmulah Airport (FVM). Flights are operated by Maldivian and Manta Air. The flight takes approximately 1 hour, and the team can assist with booking.",
  },
  {
    step: "Step 3",
    title: "Airport Pickup",
    desc: "The team can meet guests at Fuvahmulah Airport and transfer them to their accommodation. Share your flight details in advance for smooth arrival support.",
  },
];

const FAQS = [
  {
    question: "How can I book a diving course?",
    answer: "You can book directly via our website, email us, or send a message on WhatsApp. We'll guide you through the availability and course requirements.",
  },
  {
    question: "What information do you need for a booking?",
    answer: "We typically need your full name, diving certification level (if applicable), preferred dates, and flight details for transfer coordination.",
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we provide airport pickup and drop-off services at Fuvahmulah Airport for all our guests.",
  },
  {
    question: "Can I reschedule my diving course?",
    answer: "Yes, please contact us as soon as possible. Rescheduling is subject to availability and our cancellation policy.",
  },
];

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e6ddd1] py-6 last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronRight className={`transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 text-sm text-[#667085] leading-relaxed"
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
      <section className="relative min-h-[80vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://www.scubachannelfuvahmulah.com/fvm-pic.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-7xl px-6 text-white">
          <h1 className="text-6xl font-light leading-tight">
            Contact Us
            <span className="block font-semibold">
              start your diving journey
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="rounded-full bg-white px-8 py-3 text-[#1f2a37] font-medium hover:bg-gray-100 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="/courses"
              className="rounded-full border border-white px-8 py-3 text-white font-medium hover:bg-white/10 transition-colors"
            >
              View Courses
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
              <div key={item.title} className="bg-white p-8 rounded-3xl shadow-sm">
                <div className="bg-[#0f766e]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-[#0f766e]" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRAVEL & TRANSFERS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-light">Travel & Transfers</h2>
            <p className="mt-4 text-lg text-gray-600">Planning your journey to Fuvahmulah</p>
            <p className="mt-2 text-sm text-gray-400">Our quick travel guide for guests arriving through Malé.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TRAVEL_STEPS.map((s, i) => (
              <div key={i} className="relative">
                <span className="text-[#0f766e] font-bold text-sm uppercase tracking-widest">{s.step}</span>
                <h3 className="text-2xl font-medium mt-2 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            {/* Transfer Services */}
            <div className="bg-[#f6f1e8] p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Car className="text-[#0f766e]" /> Transfer Services
              </h3>
              <p className="text-[#0f766e] font-medium mb-6">Arrival support with guest-first assistance</p>
              <ul className="space-y-4">
                {[
                  "Airport transfers at Fuvahmulah Airport",
                  "Daily transport to dive sites included in your package",
                  "Island excursion transportation on request",
                  "Custom transportation arrangements with advance notice",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <BadgeCheck className="text-[#0f766e] h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Info */}
            <div className="bg-[#1f2a37] text-white p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Info className="text-[#0f766e]" /> Important Information
              </h3>
              <ul className="space-y-6">
                {[
                  "Please inform the team of any flight schedule changes or delays",
                  "Standard domestic flight luggage allowance: 20kg + 5kg hand luggage",
                  "Allow at least 3 hours between international and domestic flights",
                  "The team can help answer questions about your journey to Fuvahmulah",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/80 border-b border-white/10 pb-4 last:border-0">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0f766e] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-500">Helpful answers before you book</p>
        </div>
        <div className="bg-white px-8 rounded-3xl">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} title={faq.question} content={faq.answer} />
          ))}
        </div>
      </section>

      {/* URGENT ASSISTANCE & WHATSAPP */}
      <section className="bg-[#0f766e] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-light">Need Urgent Assistance?</h2>
          <p className="mt-6 text-white/80">
            Fast support for urgent bookings and inquiries. Reach out directly for emergency bookings and time-sensitive enquiries.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <a href="tel:+9607930760" className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all">
              <p className="text-sm text-white/60 mb-2">Emergency Hotline</p>
              <p className="text-2xl font-semibold">+960 7930760</p>
            </a>
            <a href={WHATSAPP_URL} target="_blank" className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all">
              <p className="text-sm text-white/60 mb-2">WhatsApp</p>
              <p className="text-2xl font-semibold">+960 7930760</p>
            </a>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-[#0f766e] font-bold shadow-xl hover:scale-105 transition-transform"
          >
            <FaWhatsapp size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0f766e] px-5 py-3 text-white shadow-lg hover:scale-105 transition-all"
      >
        <FaWhatsapp size={20} />
        <span className="text-sm font-medium">Chat</span>
      </a>

      {/* FOOTER */}
      <footer className="bg-[#16202b] px-6 py-10 text-white/55">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO} className="h-11 w-11 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-white">SCUBACHANNEL</p>
                <p className="text-[10px] text-white/50">FUVAHMULAH</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Your premier diving center in Fuvahmulah, Maldives, offering
              unforgettable underwater experiences and professional PADI
              courses.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-4">Quick Links</p>
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="block mt-2 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <p className="text-white font-medium mb-4">Courses</p>
            {COURSES.map((c) => (
              <p key={c} className="mt-2">{c}</p>
            ))}
          </div>

          <div>
            <p className="text-white font-medium mb-4">Contact Info</p>
            <p className="mt-2 text-sm">Fuvahmulah Island, Maldives</p>
            <p className="mt-2 text-sm">+960 7930760</p>
            <p className="mt-2 text-sm">sales@scubachannelfuvahmulah.com</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/40">
          © 2026 Southern Channel Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}