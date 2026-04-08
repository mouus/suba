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
import NavBar from "@/components/NavBar";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";

const LINKS = [
  { label: "Home", href: "#home" },
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
      <NavBar />

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
          © 2026 Southern Channel Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
