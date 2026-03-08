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
  CalendarDays,
  Camera,
  Trophy,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";

const LINKS = [
  { label: "Home", href: "/#home" },
  {
    label: "Diving",
    children: [{ label: "Courses", href: "/courses" }],
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
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
  },
  {
    year: "2012",
    title: "Tiger Shark Discovery",
    text: "Tiger sharks were identified near the harbor area, marking a pivotal moment in the growth of diving in the region.",
    image: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg",
  },
  {
    year: "2014 - 2015",
    title: "Growth Period",
    text: "Local entrepreneurs began investing in the diving sector, with new guest houses and dive activity expanding around the island.",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
  },
  {
    year: "2019",
    title: "First Guided Dives",
    text: "Guided tiger shark dives became a stronger tourism offering, helping establish the foundation of the island's shark diving reputation.",
    image: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg",
  },
  {
    year: "Present",
    title: "World-Class Destination",
    text: "Fuvahmulah is presented as the world's number one tiger shark destination, with a growing hospitality and dive infrastructure.",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
  },
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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDivingOpen, setMobileDivingOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-5 py-3 backdrop-blur-md">
        <a href="/#home" className="flex items-center gap-3">
          <img src={LOGO} alt="Scubachannel logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">SCUBACHANNEL</p>
            <p className="text-[10px] tracking-[0.28em] text-white/60">FUVAHMULAH</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 text-sm text-white/85 transition hover:text-white">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 rounded-2xl border border-[#e6ddd1] bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.children?.map((child) => (
                    <a key={child.label} href={child.href} className="block rounded-xl px-4 py-3 text-sm text-[#1f2a37] hover:bg-[#f7f2ea]">
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

          <div className="flex items-center gap-4 text-white">
            <a href="#" className="transition hover:text-[#0f766e]" aria-label="Facebook"><FaFacebookF className="h-4 w-4" /></a>
            <a href="#" className="transition hover:text-[#0f766e]" aria-label="Instagram"><FaInstagram className="h-4 w-4" /></a>
            <a href="#" className="transition hover:text-[#0f766e]" aria-label="TikTok"><FaTiktok className="h-4 w-4" /></a>
          </div>
        </div>

        <a href="#story" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-[#1f2a37] lg:block">
          Explore Story
        </a>

        <button onClick={() => setOpen((prev) => !prev)} className="text-white lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] bg-white p-4 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((item) =>
                "children" in item ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileDivingOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm text-[#1f2a37] hover:bg-[#f7f2ea]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileDivingOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {mobileDivingOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-1 flex flex-col gap-1 pl-3">
                            {item.children?.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileDivingOpen(false);
                                }}
                                className="rounded-2xl px-4 py-3 text-sm text-[#1f2a37] hover:bg-[#f7f2ea]"
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
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-[#1f2a37] hover:bg-[#f7f2ea]">
                    {item.label}
                  </a>
                )
              )}

              <div className="mt-3 flex items-center gap-5 px-4 py-3 text-[#1f2a37]">
                <a href="#" aria-label="Facebook"><FaFacebookF className="h-4 w-4" /></a>
                <a href="#" aria-label="Instagram"><FaInstagram className="h-4 w-4" /></a>
                <a href="#" aria-label="TikTok"><FaTiktok className="h-4 w-4" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

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
      <Navbar />

      <section className="relative min-h-[88vh] overflow-hidden pb-12 pt-32 md:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.scubachannelfuvahmulah.com/fvm-pic.jpg)" }}
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
              A premium about page that keeps the heart of the live story while matching the elevated, resort-inspired design language used across your other pages.
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
            The live about page focuses on the origin story of tiger shark diving in Fuvahmulah, centered around the persistence, experimentation, and long-term vision of Mr. Abdulla Zafar Ali. This redesign keeps that narrative but presents it with a calmer, more premium tone and stronger visual hierarchy.
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

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-sm">
              <div className="relative h-full min-h-[520px] overflow-hidden">
                <img
                  src="https://www.scubachannelfuvahmulah.com/zafar.jpg"
                  alt="Mr. Abdulla Zafar Ali"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/75">The Pioneer</p>
                  <h3 className="mt-2 text-3xl font-medium">Mr. Abdulla Zafar Ali</h3>
                  <p className="mt-2 text-sm text-white/85">Founder, Scubachannel Fuvahmulah</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">The Pioneer</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                A local pioneer with
                <span className="block font-semibold">a long-term vision for the island</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-[#667085]">
                The live page describes Mr. Abdulla Zafar Ali as one of the key pioneers behind the emergence of tiger shark diving in Fuvahmulah. It presents him not only as a dive instructor, but as someone deeply invested in the development and future of the field on the island.
              </p>

              <div className="mt-8 space-y-4">
                {PIONEER_HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                      <BadgeCheck className="h-4 w-4 text-[#0f766e]" />
                    </div>
                    <p className="text-sm leading-7 text-[#667085]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    src={index % 2 === 0 ? "https://www.scubachannelfuvahmulah.com/fvm-3.JPG" : "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg"}
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
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">The Journey</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                A story built on
                <span className="block font-semibold">belief, persistence, and local knowledge</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                The live page includes a first-person-style narrative about how recreational diving slowly took shape in Fuvahmulah, even when the island had limited equipment and little outside belief in the possibility of tiger shark diving becoming a serious attraction.
              </p>

              <div className="mt-8 space-y-4">
                {JOURNEY_QUOTES.map((item) => (
                  <div key={item} className="rounded-[1.5rem] bg-[#fcfaf6] p-5 text-sm leading-8 text-[#667085]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white shadow-sm md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Fuvahmulah Today</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                The island now stands as
                <span className="block font-semibold">a shark diving icon</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-white/72">
                The current about page presents Fuvahmulah as the world's number one tiger shark destination, supported by a growing hospitality base and a stronger diving ecosystem than in its early years.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {STATS.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: Compass, text: "Locally rooted diving heritage" },
                  { icon: Star, text: "Globally recognized tiger shark destination" },
                  { icon: ShieldCheck, text: "A strong foundation for future growth" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85">
                      <Icon className="h-4 w-4 text-[#d7f3ed]" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Experience the Legend</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Dive into the story
                <span className="block font-semibold">for yourself</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                Join Scubachannel Fuvahmulah for an unforgettable diving adventure in the waters that helped define the island's reputation as a tiger shark destination.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/courses" className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-medium text-white">
                  Explore Courses <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="rounded-full border border-[#d9cfbf] px-6 py-3 text-sm font-medium text-[#1f2a37]">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Why This Page Works</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Same story,
                <span className="block font-semibold">more premium presentation</span>
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "Uses the same visual language as your crew, courses, transfer, and contact pages",
                  "Keeps the founder-led origin story at the center of the page",
                  "Turns the historical content into easier-to-scan premium sections",
                  "Makes the about page feel more aligned with a high-end dive brand",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85">
                    <BadgeCheck className="mt-1 h-4 w-4 text-[#d7f3ed]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1f2a37] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Contact Us</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Speak with
              <span className="block font-semibold">our team</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="max-w-lg text-base leading-8 text-white/70">
                Reach out for dive bookings, tiger shark adventures, courses, or questions about Scubachannel Fuvahmulah and its story.
              </p>

              <div className="mt-10 space-y-5 text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#d7f3ed]" />
                  <p>Zindha, husnuheenamagu, funaadu, Fuvahmulah Island, Maldives</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#d7f3ed]" />
                  <a href="tel:+9607930760">+960 7930760</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#d7f3ed]" />
                  <a href="mailto:sales@scubachannelfuvahmulah.com">sales@scubachannelfuvahmulah.com</a>
                </div>
              </div>
            </div>

            <form className="rounded-[2.5rem] bg-white p-8 text-[#1f2a37]">
              <h3 className="text-2xl font-medium">Send a message</h3>
              <div className="mt-6 space-y-4">
                <input type="text" placeholder="Name" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="email" placeholder="Email" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="text" placeholder="Subject" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <textarea rows={6} placeholder="Message" className="w-full rounded-[1.5rem] border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-medium text-white">
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

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
              Your premier diving center in Fuvahmulah, Maldives, offering unforgettable underwater experiences and professional PADI courses.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Quick Links</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="/#home" className="block hover:text-white">Home</a>
              <a href="/about" className="block hover:text-white">About Us</a>
              <a href="/courses" className="block hover:text-white">Courses</a>
              <a href="/contact" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Story Highlights</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Origins in 2011</p>
              <p>Tiger shark discovery</p>
              <p>Growth of dive tourism</p>
              <p>World-class destination</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact Info</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Zindha, husnuheenamagu, funaadu, Fuvahmulah Island, Maldives</p>
              <a href="tel:+9607930760" className="block hover:text-white">+960 7930760</a>
              <a href="mailto:sales@scubachannelfuvahmulah.com" className="block hover:text-white">sales@scubachannelfuvahmulah.com</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
          © 2025 Southern channel Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
