"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronDown,
  Compass,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Waves,
  X,
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

type TeamCategory = "all" | "team" | "support";

type CrewMember = {
  name: string;
  role: string;
  category: TeamCategory;
  image: string;
  description: string;
  certifications: string[];
  expertise?: string[];
  experience: string;
};

const STATS = [
  {
    title: "Professional Instructors",
    value: "10+",
    text: "Years of combined experience",
    icon: Award,
  },
  {
    title: "PADI Certified",
    value: "100%",
    text: "Professional certification",
    icon: ShieldCheck,
  },
  {
    title: "Dive Experience",
    value: "5000+",
    text: "Dives completed",
    icon: Waves,
  },
];

const CREW: CrewMember[] = [
  {
    name: "Nishan",
    role: "Captain",
    category: "team",
    image: "https://www.scubachannelfuvahmulah.com/nishan.jpg",
    description:
      "A highly skilled boat captain with nearly 11 years of experience, Nishan's deep knowledge of Maldivian waters ensures smooth and safe journeys for all our guests. As a certified rescue diver, he adds an extra layer of safety and expertise to every adventure.",
    certifications: ["Certified Rescue Diver", "Maritime Navigation"],
    expertise: ["Navigation", "Weather Patterns", "Emergency Response"],
    experience: "11 years",
  },
  {
    name: "Alzum",
    role: "Assistant Captain",
    category: "team",
    image: "https://www.scubachannelfuvahmulah.com/alzum.jpg",
    description:
      "A former Maldivian Defense Force marine, Alzum is a highly trained emergency first responder and rescue expert. With years of experience in hospitality, he ensures the safety and comfort of all our guests while delivering top-tier service.",
    certifications: ["Emergency First Responder", "Hospitality Management"],
    expertise: ["Emergency Response", "Guest Relations", "Safety Protocols"],
    experience: "Several years",
  },
  {
    name: "Rafhan",
    role: "Crew Member",
    category: "support",
    image: "https://www.scubachannelfuvahmulah.com/rafhan.jpg",
    description:
      "An experienced food and beverage professional with a background in five-star resorts, Rafhan brings refined hospitality skills to our team. His attention to detail and guest-focused service ensure a premium onboard experience.",
    certifications: ["Hospitality Service"],
    expertise: ["Food & Beverage", "Guest Service", "Hospitality"],
    experience: "Several years",
  },
  {
    name: "Nafiz",
    role: "Crew Member",
    category: "support",
    image: "https://www.scubachannelfuvahmulah.com/nafiz.jpg",
    description:
      "Nafiz is a dedicated member of our crew, contributing to the smooth operation of our diving excursions.",
    certifications: ["Basic Safety Training"],
    expertise: ["Trip Support", "Deck Assistance", "Guest Care"],
    experience: "Ongoing",
  },
  {
    name: "Samir",
    role: "Crew Member",
    category: "support",
    image: "https://www.scubachannelfuvahmulah.com/samir.jpg",
    description:
      "Samir is part of our dedicated crew team, helping to ensure our guests have a safe and enjoyable diving experience.",
    certifications: ["Basic Safety Training"],
    expertise: ["Guest Assistance", "Boat Readiness", "Operational Support"],
    experience: "Ongoing",
  },
];

const FILTERS: { label: string; value: TeamCategory }[] = [
  { label: "All Team Members", value: "all" },
  { label: "Dive Team", value: "team" },
  { label: "Support Staff", value: "support" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDivingOpen, setMobileDivingOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-5 py-3 backdrop-blur-md">
        <a href="/#home" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Scubachannel logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">
              SCUBACHANNEL
            </p>
            <p className="text-[10px] tracking-[0.28em] text-white/60">
              FUVAHMULAH
            </p>
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
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {item.label}
              </a>
            )
          )}

          <div className="flex items-center gap-4 text-white">
            <a href="#" className="transition hover:text-[#0f766e]" aria-label="Facebook">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="#" className="transition hover:text-[#0f766e]" aria-label="Instagram">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="transition hover:text-[#0f766e]" aria-label="TikTok">
              <FaTiktok className="h-4 w-4" />
            </a>
          </div>
        </div>

        <a
          href="/#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-[#1f2a37] lg:block"
        >
          Book Now
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
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileDivingOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileDivingOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
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
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-[#1f2a37] hover:bg-[#f7f2ea]"
                  >
                    {item.label}
                  </a>
                )
              )}

              <div className="mt-3 flex items-center gap-5 px-4 py-3 text-[#1f2a37]">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="TikTok">
                  <FaTiktok className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function StatCard({
  title,
  value,
  text,
  icon: Icon,
}: {
  title: string;
  value: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm uppercase tracking-[0.18em] text-white/65">{title}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-7 text-white/75">{text}</p>
    </div>
  );
}

function CrewCard({ member }: { member: CrewMember }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-[2rem] border border-[#e6ddd1] bg-white shadow-sm"
    >
      <div className="relative h-80 overflow-hidden bg-[#dcecea]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-white/75">
            {member.category === "team" ? "Dive Team" : "Support Staff"}
          </p>
          <h3 className="mt-2 text-3xl font-medium">{member.name}</h3>
          <p className="mt-1 text-sm text-white/85">{member.role}</p>
        </div>
      </div>

      <div className="p-8">
        <p className="text-sm leading-8 text-[#667085]">{member.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
              Certifications
            </p>
            <div className="mt-4 space-y-3">
              {member.certifications.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                    <BadgeCheck className="h-4 w-4 text-[#0f766e]" />
                  </div>
                  <p className="text-sm leading-7 text-[#667085]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
              Areas of Expertise
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(member.expertise ?? []).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d6ebe7] bg-[#f4fbf9] px-4 py-2 text-xs font-medium text-[#0f766e]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#fcfaf6] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#667085]">Experience</p>
              <p className="mt-2 text-lg font-medium text-[#1f2a37]">{member.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CrewPage() {
  const [activeFilter, setActiveFilter] = useState<TeamCategory>("all");

  const filteredCrew = useMemo(() => {
    if (activeFilter === "all") return CREW;
    return CREW.filter((member) => member.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.scubachannelfuvahmulah.com/fvm-pic.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-[#10212b]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-[#10212b]/80" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl text-white">
            <p className="text-sm uppercase tracking-[0.32em] text-white/75">
              Fuvahmulah, Maldives
            </p>
            <h1 className="mt-5 text-5xl font-light leading-tight md:text-7xl">
              Our Crew
              <span className="block font-semibold">the people behind every unforgettable dive</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Meet the passionate team behind Scubachannel Fuvahmulah's exceptional diving experiences, presented in the same premium resort-inspired visual language as your main site.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#team"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]"
              >
                Meet The Team
              </a>
              <a
                href="/#contact"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {STATS.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Our Expert Team
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Experienced professionals
              <span className="block font-semibold">with a guest-first approach</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            Our team consists of experienced dive professionals who are passionate about the underwater world and committed to providing safe, educational, and unforgettable diving experiences. Each team member contributes to the calm, premium, and highly personal atmosphere that defines Scubachannel Fuvahmulah.
          </p>
        </div>
      </section>

      <section id="team" className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Meet Our Team
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              The passionate individuals
              <span className="block font-semibold">who shape your diving journey</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#667085]">
              The passionate individuals who make your diving experience safe, educational, and unforgettable.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-[#0f766e] bg-[#0f766e] text-white shadow-sm"
                      : "border-[#d8d8d8] bg-white text-[#1f2a37] hover:border-[#0f766e] hover:text-[#0f766e]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <motion.div layout className="mt-12 grid gap-8 xl:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredCrew.map((member) => (
                <CrewCard key={member.name} member={member} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div className="overflow-hidden rounded-[2.5rem] bg-[#1f2a37] p-10 text-white shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Dive With Our Experts</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Ready to explore
              <span className="block font-semibold">Fuvahmulah with our crew?</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
              Ready to explore the underwater wonders of Fuvahmulah with our experienced team? Book your diving adventure today and enjoy a refined, safety-focused experience from start to finish.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                { icon: Compass, text: "Locally guided dive experiences" },
                { icon: LifeBuoy, text: "Safety-led operations and support" },
                { icon: Users, text: "Warm, guest-focused hospitality" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85"
                  >
                    <Icon className="h-4 w-4 text-[#d7f3ed]" />
                    {item.text}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#courses"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]"
              >
                Explore Courses <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-10 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Why Guests Trust Us</p>
            <h3 className="mt-4 text-3xl font-light md:text-4xl">
              Calm professionalism,
              <span className="block font-semibold">on every trip</span>
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Experienced local crew with strong knowledge of Maldivian waters",
                "Professional certifications across rescue, hospitality, and safety",
                "Premium onboard atmosphere inspired by resort-level service",
                "A more polished presentation that matches the feel of your home page",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f5f2]">
                    <Star className="h-4 w-4 fill-current text-[#0f766e]" />
                  </div>
                  <p className="text-sm leading-7 text-[#667085]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1f2a37] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
              Contact Us
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Speak with
              <span className="block font-semibold">our team</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="max-w-lg text-base leading-8 text-white/70">
                Reach out for dive bookings, shark experiences, trip planning, transfers, or general questions about the crew and your stay in Fuvahmulah.
              </p>

              <div className="mt-10 space-y-5 text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#d7f3ed]" />
                  <p>Zindha, Husnuheenamagu, Funaadu, Fuvahmulah Island, Maldives</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#d7f3ed]" />
                  <a href="tel:+9607930760">+960 7930760</a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#d7f3ed]" />
                  <a href="mailto:sales@scubachannelfuvahmulah.com">
                    sales@scubachannelfuvahmulah.com
                  </a>
                </div>
              </div>

              <div className="mt-8 flex gap-4 text-white">
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
                  aria-label="TikTok"
                >
                  <FaTiktok className="h-4 w-4" />
                </a>
              </div>
            </div>

            <form className="rounded-[2.5rem] bg-white p-8 text-[#1f2a37]">
              <h3 className="text-2xl font-medium">Send a message</h3>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none"
                />
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-[1.5rem] border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-medium text-white"
                >
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
              <img
                src={LOGO}
                alt="Scubachannel logo"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-white">
                  SCUBACHANNEL
                </p>
                <p className="text-[10px] tracking-[0.25em] text-white/50">
                  FUVAHMULAH
                </p>
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
              <a href="/our-crew" className="block hover:text-white">Our Crew</a>
              <a href="/#about" className="block hover:text-white">About Us</a>
              <a href="/#contact" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Crew Highlights</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Experienced local team</p>
              <p>Certified safety support</p>
              <p>Premium guest care</p>
              <p>Boat and trip operations</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact Info</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Fuvahmulah Island, Maldives</p>
              <a href="tel:+9607930760" className="block hover:text-white">
                +960 7930760
              </a>
              <a
                href="mailto:sales@scubachannelfuvahmulah.com"
                className="block hover:text-white"
              >
                sales@scubachannelfuvahmulah.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
          © 2025 Southern Channel Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
