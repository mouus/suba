"use client";

import { useState } from "react";
import { Clock3, BadgeCheck, ChevronDown } from "lucide-react";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Waves,
  X,
  Loader2
  
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";


export default function NavBar() {
    
  const [open, setOpen] = useState(false);
    const [mobileDivingOpen, setMobileDivingOpen] = useState(false);

const LOGO = "/logo.JPG";
const LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Diving",
    children: [{ label: "Courses", href: "/courses" }],
  },
  {
    label: "Stay",
    href: "#hotels", // or "/hotels"
    children: [
      // { label: "Luxury Villas", href: "/hotels/villas" },
      { label: "Guest Houses", href: "/hotels/guest-houses" },
      // { label: "Resorts", href: "/hotels/resorts" },
    ],
  },
  { label: "Our Crew", href: "/our-crew" },
  { label: "Transfer", href: "/transfer" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

  return (
        <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-5 py-3 backdrop-blur-md">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3">
          <img src={LOGO} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="hidden sm:block">
      <p className="font-['NasaFont'] text-sm tracking-[0.3em] text-white">
        SCUBACHANNEL
      </p>
      <p className="font-['NasaFont'] text-[10px] tracking-[0.4em] text-white/60">
        FUVAHMULAH
      </p>
    </div>
        </a>
    
        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 text-sm text-white/85 transition hover:text-white">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
    
                {/* Dropdown Menu - Fixed Nesting */}
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 rounded-2xl border border-[#e6ddd1] bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block rounded-xl px-4 py-3 text-sm text-[#1f2a37] hover:bg-[#f7f2ea]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="text-sm text-white/85 transition hover:text-white">
                {item.label}
              </a>
            )
          )}
    
          {/* Socials */}
          <div className="flex items-center gap-4 text-white">
            <a href="#" className="hover:text-[#0f766e]"><FaFacebookF className="h-4 w-4" /></a>
            <a href="#" className="hover:text-[#0f766e]"><FaInstagram className="h-4 w-4" /></a>
            <a href="#" className="hover:text-[#0f766e]"><FaTiktok className="h-4 w-4" /></a>
          </div>
        </div>
    
        {/* CTA Button */}
        <a href="/book" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-[#1f2a37] lg:block">
          Book Now
        </a>
    
        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    
      {/* Mobile Menu logic remains same, it will now automatically include "Stay/Hotels" from your LINKS array */}
    </nav>
  )
}
