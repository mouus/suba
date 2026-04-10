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
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  // Track which mobile submenu is open
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
    { label: "Our Crew", href: "/our-crew" },
    { label: "Transfer", href: "/transfer" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[60] px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-5 py-3 backdrop-blur-md">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3">
            <img src={LOGO} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
            <div className="hidden sm:block text-left">
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
            <div className="flex items-center gap-4 text-white/70">
              <a href="#" className="hover:text-white transition-colors"><FaFacebookF className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><FaInstagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><FaTiktok className="h-4 w-4" /></a>
            </div>
          </div>

          {/* CTA Button */}
          <a href="/contact" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-[#1f2a37] lg:block hover:bg-gray-100 transition-colors">
            Book Now
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="relative z-[70] text-white lg:hidden outline-none">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
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

            {/* Bottom Section */}
            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="flex gap-8 mb-8">
                <a href="#" className="text-white/60 hover:text-white transition-colors"><FaFacebookF size={26} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><FaInstagram size={26} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><FaTiktok size={26} /></a>
              </div>
              <a 
                href="/book" 
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-white py-4 text-center text-lg font-semibold text-[#1f2a37] active:scale-95 transition-transform shadow-lg"
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