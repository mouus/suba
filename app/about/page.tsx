"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronDown,
  Compass,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Waves,
  X,
  Camera,
  Trophy,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import NavBar from "@/components/NavBar";

const LOGO = "/logo.JPG";

const LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "Diving",
    children: [{ label: "Courses", href: "/courses" }],
  },
  {
    label: "Stay",
    href: "#hotels",
    children: [
      { label: "Guest Houses", href: "/hotels/guest-houses" },
    ],
  },
  { label: "Our Crew", href: "/our-crew" },
  { label: "Transfer", href: "/transfer" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const STORY_POINTS = [
  {
    title: "The Pioneer",
    text: "Mr. Abdulla Zafar Ali is presented as the pioneer behind the discovery of tiger shark diving in Fuvahmulah and a key figure in developing the island's recreational diving story.",
    icon: Award,
  },
  {
    title: "The Discovery",
    text: "The page centers on the early discovery of tiger sharks near the harbor, which became the turning point that helped shape Fuvahmulah into a recognized dive destination.",
    icon: Waves,
  },
  {
    title: "The Legacy",
    text: "From scarce equipment and no dive centers in 2011 to international recognition, the story highlights the long-term vision behind Scubachannel Fuvahmulah.",
    icon: Trophy,
  },
];

const PIONEER_HIGHLIGHTS = [
  "First to discover tiger sharks in Fuvahmulah",
  "Professional dive instructor with years of experience",
  "Helped transform Fuvahmulah into a world-class diving destination",
];

const TIMELINE = [
  {
    year: "2011",
    title: "First Dive Experience",
    text: "Mr. Zafar had his first scuba diving experience in Fuvahmulah at a time when equipment was scarce and there were no dive centers on the island.",
    image: "/img-7.webp",
  },
  {
    year: "2012",
    title: "Tiger Shark Discovery",
    text: "Tiger sharks were identified near the harbor area, marking a pivotal moment in the growth of diving in the region.",
    image: "/img-3.webp",
  },
  {
    year: "2014 - 2015",
    title: "Growth Period",
    text: "Local entrepreneurs began investing in the diving sector, with new guest houses and dive activity expanding around the island.",
    image: "/img-2.webp",
  },
  {
    year: "2019",
    title: "First Guided Dives",
    text: "Guided tiger shark dives became a stronger tourism offering, helping establish the foundation of the island's shark diving reputation.",
    image: "/img.webp",
  },
  {
    year: "Present",
    title: "World-Class Destination",
    text: "Fuvahmulah is presented as the world's number one tiger shark destination, with a growing hospitality and dive infrastructure.",
    image: "/fvm-3.JPG",
  },
];

// Corrected Image Array
const images = [
  "/fvm-3.JPG",
  "/fvm-pic.jpg",
  "/img-2.webp",
  "/img-3.webp",
  "/img-5.webp",
  "/img-7.webp",
  "/img-8.webp",
  "/img-9.webp",
];

const VISUAL_JOURNEY = [
  { year: "2011", label: "Early days of diving in Fuvahmulah" },
  { year: "2012", label: "First tiger shark encounters" },
  { year: "2014", label: "Growing our team of instructors" },
  { year: "2016", label: "Gaining international recognition" },
  { year: "2018", label: "Shark conservation initiatives" },
  { year: "Today", label: "Our operations today" },
];

const STATS = [
  { value: "21", label: "Guest Houses" },
  { value: "7", label: "Dive Centers" },
  { value: "#1", label: "Tiger Shark Destination" },
];

const JOURNEY_QUOTES = [
  "In 2011, dive equipment was scarce and there were no dive centers or dive schools on the island.",
  "The discovery of tiger sharks near the harbor created the momentum that pushed recreational diving forward in Fuvahmulah.",
  "Today, the page presents Fuvahmulah as a globally recognized tiger shark destination built through persistence, experimentation, and local belief.",
];

function TimelineCard({ year, title, text, image }: { year: string; title: string; text: string; image: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/70 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1f2a37]">
          {year}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-medium text-[#1f2a37]">{title}</h3>
        <p className="mt-4 text-sm leading-8 text-[#667085]">{text}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] overflow-hidden pb-12 pt-32 md:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/fvm-pic.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/65" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="text-sm uppercase tracking-[0.32em] text-white/80">Fuvahmulah, Maldives</p>
            <h1 className="mt-4 text-5xl font-light leading-tight md:text-7xl">
              Our Story
              <span className="block font-semibold">how a local vision shaped a world-class dive destination</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Scubachannel Fuvahmulah is built on persistence, experimentation, and local belief.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#story" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]">
                Read The Story
              </a>
              <a href="#journey" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white">
                View Timeline
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Story */}
      <section id="story" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">About Scubachannel</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              The story behind
              <span className="block font-semibold">Fuvahmulah’s tiger shark legacy</span>
            </h2>
          </div>
          <p className="text-base leading-8 text-[#667085]">
            The origin story of tiger shark diving in Fuvahmulah is centered around the persistence and long-term vision of Mr. Abdulla Zafar Ali.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STORY_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                  <Icon className="h-5 w-5 text-[#0f766e]" />
                </div>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#667085]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Journey Section - FIXED Loop and Images */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Our Visual Journey</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">A photographic history</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {VISUAL_JOURNEY.map((item, index) => (
              <div key={`${item.year}-${item.label}`} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={images[index % images.length]}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/65 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1f2a37]">
                    <Camera className="h-3.5 w-3.5" />
                    {item.year}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg font-medium text-[#1f2a37]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="journey" className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Our Journey</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              From humble beginnings
              <span className="block font-semibold">to a globally recognized destination</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {TIMELINE.map((item) => (
              <TimelineCard key={`${item.year}-${item.title}`} {...item} />
            ))}
          </div>
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

      {/* Footer and Remaining sections consistent with your design... */}
      <footer className="bg-[#16202b] px-6 py-10 text-white/55">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Scubachannel logo" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-white">SCUBACHANNEL</p>
                <p className="text-[10px] tracking-[0.25em] text-white/50">FUVAHMULAH</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              Premier diving center in Fuvahmulah, Maldives.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
          © 2026 Southern channel Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}