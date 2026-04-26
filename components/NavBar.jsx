"use client";

import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const LOGO = "/logo.JPG";
  
  const LINKS = [
    { label: "Home", href: "/" },
    {
      label: "Diving",
      children: [{ label: "Courses", href: "/courses" }],
    },
    {
      label: "Stay",
      children: [
        { label: "Guest Houses", href: "/hotels/guest-houses" },
      ],
    },
    { label: "Transfer", href: "/transfer" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[60] px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/30 px-5 py-3 backdrop-blur-md shadow-2xl">
          
          {/* LOGO SECTION */}
          <a href="/" className="flex items-center gap-2 mr-2 shrink-0">
            <img src={LOGO} alt="Logo" className="h-10 w-10 rounded-full object-cover border border-white/20" />
            <div className="flex flex-col text-left">
              <p className="font-['NasaFont'] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white font-bold leading-tight">
                SCUBACHANNEL
              </p>
              <p className="font-['NasaFont'] text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-white/70 leading-tight">
                FUVAHMULAH
              </p>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden items-center gap-8 lg:flex ml-4">
            {LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 text-sm text-white/85 transition hover:text-white">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>

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
          </div>

          {/* RIGHT SECTION: CERTS + BOOK NOW */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Unified Certifications Bar (Responsive) */}
            {/* <div className="flex items-center gap-3 sm:gap-5 border-l border-white/10 pl-4 sm:pl-6 py-1">
              <img src="/padi.webp" alt="PADI" className="h-5 sm:h-7 w-auto object-contain brightness-110" />
              <img src="/dan.webp" alt="DAN" className="h-4 sm:h-6 w-auto object-contain" />
              <img src="/scubapro.png" alt="Scubapro" className="h-3 sm:h-5 w-auto object-contain  opacity-80" />
            </div> */}

            <a href="/contact" className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#1f2a37] lg:block hover:bg-[#0f766e] hover:text-white transition-all transform active:scale-95">
              Book Now
            </a>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setOpen(!open)} className="relative z-[70] text-white lg:hidden outline-none p-1">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] flex flex-col bg-[#1f2a37] pt-32 px-8 pb-10 text-white lg:hidden"
          >
            <div className="flex flex-col gap-6 overflow-y-auto">
              {LINKS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button 
                        onClick={() => toggleSubmenu(item.label)}
                        className="flex w-full items-center justify-between text-2xl font-light text-left"
                      >
                        {item.label}
                        <ChevronRight className={`transition-transform duration-200 ${activeSubmenu === item.label ? 'rotate-90' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === item.label && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-5 pl-5 pt-5 border-l border-white/10 mt-2">
                              {item.children.map((child) => (
                                <a 
                                  key={child.label} 
                                  href={child.href} 
                                  onClick={() => setOpen(false)}
                                  className="text-xl text-white/60 hover:text-white transition-colors"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-light hover:text-[#0f766e] transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Socials & Action */}
            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="flex justify-center gap-8 mb-8">
                <a href="https://www.facebook.com/share/1FJA5pvuW8/?mibextid=wwXIfr" className="text-white/60 hover:text-white transition-colors"><FaFacebookF size={26} /></a>
                <a href="https://www.instagram.com/scubachannelfvm" className="text-white/60 hover:text-white transition-colors"><FaInstagram size={26} /></a>
              </div>
              <a 
                href="/contact" 
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-white py-4 text-center text-lg font-bold text-[#1f2a37] active:scale-95 transition-transform shadow-lg"
              >
                Book Your Adventure
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}