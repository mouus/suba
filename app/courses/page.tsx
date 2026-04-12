"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  ChevronDown,
  Mail,
  Phone,
  Users,
  Waves,
  ShieldCheck,
  Anchor
} from "lucide-react";
import { FaTiktok, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import NavBar from "@/components/NavBar";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";

// ✅ UPDATED PACKAGE DATA (8 Packages with correct pricing)
const PACKAGE_DATA = [
  {
    id: "3n",
    duration: "3 Nights & 6 Dives",
    description: "2 Days of diving. Includes Hotel Room, Breakfast, and Transfers.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$610" },
      { label: "2 People (Shared)", value: "$1017" },
      { label: "Non-Diver", value: "$250" },
    ],
    includes: ["2 Dive Days (3 dives/day)", "Hotel Room + Breakfast", "Airport Pick-up & Drop-off", "Dive Site Transfers", "Green Tax & GST Included"],
  },
  {
    id: "4n",
    duration: "4 Nights & 9 Dives",
    description: "3 Days of diving. Includes Hotel Room, Breakfast, and Transfers.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$950" },
      { label: "2 People (Shared)", value: "$1700" },
      { label: "Non-Diver", value: "$336" },
    ],
    includes: ["3 Dive Days", "Hotel Room + Breakfast", "Tiger Shark & Reef Dives", "Airport Transfers", "All Applicable Taxes"],
  },
  {
    id: "5n",
    duration: "5 Nights & 9 Dives",
    description: "3 Days of diving. Extended stay for more relaxation.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$1039" },
      { label: "2 People (Shared)", value: "$1817" },
      { label: "Non-Diver", value: "$420" },
    ],
    includes: ["3 Dive Days", "Hotel Room + Breakfast", "Tiger Shark & Reef Dives", "Airport Transfers", "All Applicable Taxes"],
  },
  {
    id: "6n",
    duration: "6 Nights & 12 Dives",
    description: "4 Days of diving. Perfect for seeing the full variety of Fuvahmulah.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$1251" },
      { label: "2 People (Shared)", value: "$2189" },
      { label: "Non-Diver", value: "$500" },
    ],
    includes: ["4 Dive Days", "Hotel Room + Breakfast", "Tiger Shark & Reef Dives", "Airport Transfers", "All Applicable Taxes"],
  },
  {
    id: "7n",
    duration: "7 Nights & 15 Dives",
    description: "5 Days of diving. Our most popular weekly residency.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$1520" },
      { label: "2 People (Shared)", value: "$2327" },
      { label: "Non-Diver", value: "$588" },
    ],
    includes: ["5 Dive Days", "Hotel Room + Breakfast", "Daily Tiger Shark Dives", "Airport Transfers", "All Taxes Included"],
  },
  {
    id: "8n",
    duration: "8 Nights & 18 Dives",
    description: "6 Days of diving. Maximum immersion into the blue.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$1790" },
      { label: "2 People (Shared)", value: "$3160" },
      { label: "Non-Diver", value: "$672" },
    ],
    includes: ["6 Dive Days", "Hotel Room + Breakfast", "Daily Tiger Shark Dives", "Airport Transfers", "All Taxes Included"],
  },
  {
    id: "9n",
    duration: "9 Nights & 21 Dives",
    description: "7 Days of diving. For the hardcore shark enthusiasts.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$2062" },
      { label: "2 People (Shared)", value: "$3800" },
      { label: "Non-Diver", value: "$756" },
    ],
    includes: ["7 Dive Days", "Hotel Room + Breakfast", "Daily Tiger Shark Dives", "Airport Transfers", "All Taxes Included"],
  },
  {
    id: "10n",
    duration: "10 Nights & 24 Dives",
    description: "8 Days of diving. The ultimate Fuvahmulah expedition.",
    prices: [
      { label: "1 Person (Hotel Room)", value: "$2332" },
      { label: "2 People (Shared)", value: "$4376" },
      { label: "Non-Diver", value: "$830" },
    ],
    includes: ["8 Dive Days", "Hotel Room + Breakfast", "Unlimited Potential for Pelagics", "Airport Transfers", "All Taxes Included"],
  },
];

const COURSES = [
  {
    id: "open-water",
    title: "Open Water",
    subtitle: "PADI Open Water Diver",
    duration: "3 - 4 days",
    price: "$550",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
    description: "The world's most popular course. Qualifies you to dive to 18m independently with a buddy.",
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "PADI Advanced Open Water",
    duration: "2+ days",
    price: "$421",
    image: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg",
    description: "Advance your skills with 5 adventure dives, including deep and navigation specialties.",
  },
  {
    id: "rescue",
    title: "EFR & Rescue",
    subtitle: "Rescue Diver + Emergency First Response",
    duration: "5-7 days",
    price: "$600-$750",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
    description: "Learn to manage dive emergencies and provide first aid. (EFR only is $150).",
  },
  {
    id: "divemaster",
    title: "Divemaster",
    subtitle: "PADI Divemaster Course",
    duration: "2 - 4 weeks",
    price: "$1000+",
    image: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg",
    description: "Join the ranks of dive professionals. Lead groups and assist instructors.",
  },
];

const SPECIALTIES = [
  { name: "Tiger Shark Specialty", time: "2 Days", price: "$300" },
  { name: "Deep Diver (40m)", time: "2 Days", price: "$250" },
  { name: "Underwater Photo", time: "2 Days", price: "$275" },
  { name: "Night Diver", time: "2 Days", price: "$225" },
  { name: "Navigation", time: "2 Days", price: "$225" },
];

const ADDITIONAL_RATES = [
  {
    title: "Daily Dive Rates",
    items: [
      { name: "Tiger Shark Dive (Special)", price: "$80" },
      { name: "1 Reef Dive", price: "$70" },
      { name: "2–6 Reef Dives", price: "$65/dive" },
      { name: "20+ Reef Dives", price: "$60/dive" },
    ]
  },
  {
    title: "Equipment (Per Day)",
    items: [
      { name: "Full Set", price: "$15" },
      { name: "BCD / Regulator", price: "$5/each" },
      { name: "Dive Computer", price: "$5" },
      { name: "12L Tank & Weights", price: "Included" },
    ]
  },
  {
    title: "DAN Insurance",
    items: [
      { name: "1 Day Cover", price: "$12" },
      { name: "7 Days Cover", price: "$20" },
      { name: "14 Days Cover", price: "$30" },
    ]
  }
];

export default function PricingPage() {
  const [selectedPkg, setSelectedPkg] = useState(PACKAGE_DATA[0]);
  const [activeCourseId, setActiveCourseId] = useState(COURSES[0].id);
  const [showGroupInfo, setShowGroupInfo] = useState(false);

  const activeCourse = useMemo(() => COURSES.find(c => c.id === activeCourseId), [activeCourseId]);

  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37] min-h-screen font-sans relative">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-10">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-[url('/img2.webp')] bg-cover bg-center" />
        <div className="relative z-20 text-white max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] mb-4 text-[#0f766e] font-bold">Expert PADI Dive Center</p>
          <h1 className="text-4xl md:text-7xl font-light mb-4">Dive Prices & <span className="font-semibold italic">Stay</span></h1>
          <p className="text-sm md:text-lg opacity-90 font-light">Transparent pricing for Tiger Shark dives, certification courses, and all-inclusive packages.</p>
        </div>
      </section>

      {/* Dive & Stay Packages */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[350px_1fr] gap-8">
          
          {/* Package Selector */}
          <div className="space-y-3 overflow-y-auto max-h-[800px] pr-2 scrollbar-hide">
            {PACKAGE_DATA.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => { setSelectedPkg(pkg); setShowGroupInfo(false); }}
                className={`w-full text-left p-6 rounded-3xl transition-all border ${
                  selectedPkg.id === pkg.id ? "bg-[#1f2a37] text-white shadow-2xl scale-[1.02]" : "bg-white text-gray-400 border-transparent hover:border-[#0f766e]/30"
                }`}
              >
                <div className="font-bold text-lg">{pkg.duration}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">From {pkg.prices[0].value}</div>
              </button>
            ))}
          </div>

          {/* Package Detail Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#eee5d7]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-black mb-2">{selectedPkg.duration}</h2>
                <p className="text-gray-500 max-w-md">{selectedPkg.description}</p>
              </div>
              <div className="bg-[#f6f1e8] px-4 py-2 rounded-full flex items-center gap-2 text-[#0f766e] text-xs font-bold">
                <ShieldCheck size={14}/> Value Guaranteed
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {selectedPkg.prices.map((p) => (
                <div key={p.label} className="p-6 rounded-2xl bg-[#fcfaf6] border border-[#eee5d7] text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{p.label}</p>
                  <p className="text-2xl font-black">{p.value}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-[#0f766e] uppercase tracking-widest mb-3">What's Included</p>
                <div className="grid grid-cols-1 gap-2">
                  {selectedPkg.includes.map(inc => (
                    <div key={inc} className="flex items-center gap-3 text-sm text-gray-600">
                      <BadgeCheck className="h-5 w-5 text-[#0f766e] flex-shrink-0" /> {inc}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#1f2a37] p-8 rounded-3xl text-white text-center flex flex-col justify-center">
                <div className="mb-4">
                   <p className="text-xl font-bold mb-1">Book Your Package</p>
                   <p className="text-xs text-gray-400">Secure your dates with our dive team.</p>
                </div>
                <a href="https://wa.me/9607930760" target="_blank" className="bg-[#0f766e] text-[#1f2a37] py-4 rounded-full font-black flex items-center justify-center gap-2 hover:scale-105 transition-all">
                  <FaWhatsapp size={20} /> WHATSAPP BOOKING
                </a>
              </div>
            </div>

            {/* Information Box */}
            <div className="mt-10 bg-[#fcfaf6] p-6 rounded-3xl border border-[#eee5d7] grid md:grid-cols-1 gap-6 items-center">
              <div>
                <h3 className="text-sm font-bold text-[#0f766e] mb-2 uppercase tracking-tighter">Useful Information Before You Dive</h3>
                <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4 grid md:grid-cols-2 gap-x-4">
                  <li>Valid PADI Certification and Medical form required.</li>
                  <li>Tiger Shark dives are specialized; strictly follow guide instructions.</li>
                  <li>Free 12L Aluminium Tanks (Yoke/DIN) provided.</li>
                  <li>Complimentary towel and drinking water on board.</li>
                  <li>All packages include green tax and airport transfers.</li>
                  <li>Equipment rental available separately if not owned.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PADI Courses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">PADI Certification Courses</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From discovery to professional leadership in the heart of the Maldives.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 bg-[#fcfaf6] rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl">
            <div className="relative h-full min-h-[400px]">
               <img src={activeCourse.image} className="absolute inset-0 h-full w-full object-cover" alt="Dive Course" />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex justify-between items-end border-b pb-6 border-gray-200 mb-8">
                 <div>
                    <h3 className="text-3xl font-black mb-1">{activeCourse.subtitle}</h3>
                    <div className="flex items-center gap-4 text-sm font-bold text-[#0f766e]">
                      <span className="flex items-center gap-1"><Waves size={16}/> {activeCourse.duration}</span>
                    </div>
                 </div>
                 <div className="text-4xl font-black text-gray-900">{activeCourse.price}</div>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">{activeCourse.description}</p>
              <div className="flex flex-wrap gap-2">
                {COURSES.map(c => (
                  <button 
                    key={c.id} 
                    onClick={() => setActiveCourseId(c.id)} 
                    className={`px-8 py-3 rounded-full text-xs font-bold border transition-all ${activeCourseId === c.id ? "bg-[#0f766e] text-white border-[#0f766e] shadow-lg" : "bg-white text-gray-400 border-gray-200 hover:border-[#0f766e]/40"}`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-10 text-center">PADI Specialty Courses</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SPECIALTIES.map((spec) => (
            <div key={spec.name} className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
              <p className="text-[#0f766e] font-bold text-xs mb-1 uppercase">{spec.time}</p>
              <h4 className="font-bold text-sm mb-3 h-10 flex items-center justify-center">{spec.name}</h4>
              <p className="text-2xl font-black">{spec.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Rates Table */}
      <section className="py-24 bg-[#1f2a37] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {ADDITIONAL_RATES.map(section => (
              <div key={section.title}>
                <h4 className="text-[10px] font-bold text-[#0f766e] uppercase tracking-widest mb-8 border-b border-[#0f766e] pb-2 inline-block">{section.title}</h4>
                <div className="space-y-4">
                  {section.items.map(item => (
                    <div key={item.name} className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="font-bold text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4 col-span-1 md:col-span-2">
            <img src={LOGO} className="h-16 w-16 rounded-full" alt="logo" />
            <h3 className="text-xl font-bold">Scuba Channel Fuvahmulah</h3>
            <p className="text-sm text-gray-400 max-w-sm">Premium PADI certified dive center specializing in pelagic shark encounters and elite maritime service in the Maldives.</p>
          </div>
          <div className="space-y-4 text-sm text-gray-400">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact Information</h4>
            <p className="flex items-center justify-center md:justify-start gap-3"><Phone size={14} className="text-[#0f766e]"/> +960 793-0760</p>
            <p className="flex items-center justify-center md:justify-start gap-3"><Mail size={14} className="text-[#0f766e]"/> info@scubachannelfuvahmulah.com</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
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
    </div>
  );
}