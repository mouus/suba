"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  MapPin,
  Menu,
  Phone,
  Plane,
  ShipWheel,
  ShieldCheck,
  Star,
  Ticket,
  Wallet,
  Waves,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";
const RTL_URL = "https://www.rtl.mv";

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

const HIGHLIGHTS = [
  {
    title: "Domestic Flights",
    text: "Daily Malé to Fuvahmulah connections with support for discounted ticket booking.",
    icon: Plane,
  },
  {
    title: "Ferry Services",
    text: "Alternative travel options via RTL scheduled speed boat services.",
    icon: ShipWheel,
  },
  {
    title: "Private Transfers",
    text: "Private speed boat arrangements for Addu and Huvadhoo routes.",
    icon: Waves,
  },
];

const FLIGHT_INFO = [
  { label: "Average flying time", value: "80 minutes" },
  { label: "Daily flights", value: "3 to 4 flights per day" },
  { label: "Operated by", value: "Maldivian Airlines" },
  { label: "Scubachannel rate benefit", value: "Up to 30% lower than direct booking" },
];

const FLIGHT_FARES = [
  { name: "Divers fare one way Malé - Fuvahmulah", price: "$149.00 per adult / $125 child / free infant" },
  { name: "Non-divers", price: "Additional USD 30 service commission per person" },
  { name: "Baggage allowance", price: "25kg checked + 5kg hand luggage" },
  { name: "Excess baggage", price: "$4.3 per kilogram + GST" },
];

const BOOKING_REQUIREMENTS = [
  "Copy of your passport",
  "International flight ticket details",
  "Preferred domestic flight times",
  "Advance booking recommended, especially December to April",
];

const DAILY_FLIGHTS = [
  { route: "Malé (MLE) → Fuvahmulah (FVM)", flight: "124", departure: "15:05", arrival: "16:30", days: "Daily" },
  { route: "Fuvahmulah (FVM) → Malé (MLE)", flight: "125", departure: "16:55", arrival: "18:20", days: "Daily" },
  { route: "Fuvahmulah (FVM) → Malé (MLE)", flight: "129", departure: "05:10", arrival: "06:20", days: "Tuesday / Friday / Sunday" },
  { route: "Malé (MLE) → Fuvahmulah (FVM)", flight: "128", departure: "23:35", arrival: "01:00", days: "Monday / Thursday / Saturday" },
];

const FERRY_ADDU = [
  { departure: "GN. Fuvahmulah 07:00", stop: "S. Hulhulhumeedhoo 08:00", arrival: "S. Feydhoo 08:25" },
  { departure: "S. Feydhoo 10:00", stop: "S. Hulhulhumeedhoo 10:20", arrival: "GN. Fuvahmulah 11:25" },
  { departure: "GN. Fuvahmulah 10:30", stop: "S. Hulhulhumeedhoo 11:30", arrival: "S. Feydhoo 11:55" },
  { departure: "S. Feydhoo 16:00", stop: "S. Hulhulhumeedhoo 16:20", arrival: "GN. Fuvahmulah 17:25" },
];

const FERRY_VAADHOO = [
  { departure: "GN. Fuvahmulah 06:15", arrival: "GDH. Vaadhoo 07:50" },
  { departure: "GDH. Vaadhoo 08:15", arrival: "GN. Fuvahmulah 09:50" },
  { departure: "GN. Fuvahmulah 14:00", arrival: "GDH. Vaadhoo 15:35" },
  { departure: "GDH. Vaadhoo 16:10", arrival: "GN. Fuvahmulah 17:45" },
];

const PRIVATE_TRANSFERS = [
  {
    route: "Addu (S. Feydhoo jetty) → Fuvahmulah (Harbour)",
    duration: "60 minutes",
    price: "$500.00",
    capacity: "Maximum 10 persons",
  },
  {
    route: "Huvadhoo (GDH. Vaadhoo jetty) → Fuvahmulah (Harbour)",
    duration: "80 minutes",
    price: "$1000.00",
    capacity: "Maximum 10 persons",
  },
];

const AIRPORT_STEPS = [
  {
    title: "Arrival at Malé International Airport",
    content: "After clearing immigration and customs, proceed to the domestic terminal.",
  },
  {
    title: "Domestic Terminal Transfer",
    content: "The domestic terminal is within walking distance from the international terminal.",
  },
  {
    title: "Check-in Process",
    content: "Check in at the Maldivian Airlines counter with your ID and booking reference.",
  },
  {
    title: "Arrival at Fuvahmulah",
    content: "Upon arrival at Fuvahmulah Airport, the team will meet you and transfer you to your accommodation.",
  },
];

const BOOKING_STEPS = [
  {
    title: "Contact Us",
    content: "Send your travel dates, number of travelers, and preferred transfer method.",
  },
  {
    title: "Receive Quote",
    content: "You'll receive transportation options and pricing based on your requirements.",
  },
  {
    title: "Confirmation",
    content: "Once confirmed, transport is arranged and all journey details are shared with you.",
  },
];

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e6ddd1] py-6 last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="text-xl font-medium text-[#1f2a37]">{title}</h3>
        <ChevronRight className={`h-5 w-5 text-[#0f766e] transition ${open ? "rotate-90" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pt-4 text-sm leading-7 text-[#667085]"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

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
                  {item.children.map((child) => (
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

        <a href="/#contact" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-[#1f2a37] lg:block">
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
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileDivingOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {mobileDivingOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-1 flex flex-col gap-1 pl-3">
                            {item.children.map((child) => (
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

export default function TransferPage() {
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
              Travel & Transfers
              <span className="block font-semibold">everything you need to reach the island smoothly</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              A premium-styled transfer page matching the rest of the site, built around the current live information for flights, ferry routes, airport transfer guidance, and private speed boat options.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#transfer-options" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]">
                View Transfer Options
              </a>
              <a href="/#contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Getting to Fuvahmulah</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Travel planning made
              <span className="block font-semibold">clear and comfortable</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            Fuvahmulah is accessible through domestic flights and ferry services, with optional private speed boat transfers for certain routes. This page keeps the same practical information from the live site while presenting it in a calmer, more resort-inspired style.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
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

      <section id="transfer-options" className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Domestic Flights</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              The most convenient route
              <span className="block font-semibold">from Malé to Fuvahmulah</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div className="relative min-h-[420px] overflow-hidden bg-[#1f2a37] text-white">
                <img src="/male-air.webp" alt="Fuvahmulah transfer" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/95 via-[#1f2a37]/50 to-[#1f2a37]/10" />

                <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Plane className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-medium md:text-4xl">Flight Information</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                    Maldivian Airlines is the primary carrier operating flights between Malé and Fuvahmulah. Scubachannel can help arrange domestic tickets and states rates may be up to 30% lower than booking directly.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {FLIGHT_INFO.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85">
                        <p className="text-xs uppercase tracking-[0.15em] text-white/55">{item.label}</p>
                        <p className="mt-2 font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Fares & Baggage</p>
              <div className="mt-6 space-y-4">
                {FLIGHT_FARES.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                      <Wallet className="h-4 w-4 text-[#0f766e]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1f2a37]">{item.name}</p>
                      <p className="text-sm leading-7 text-[#667085]">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Booking Requirements</p>
                <div className="mt-5 space-y-4">
                  {BOOKING_REQUIREMENTS.map((item) => (
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

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e6ddd1] bg-white shadow-sm">
            <div className="border-b border-[#ece3d6] px-8 py-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Daily Flight Schedules</p>
              <h3 className="mt-2 text-2xl font-medium">Current flight timetable</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-[#fcfaf6] text-sm text-[#667085]">
                  <tr>
                    <th className="px-8 py-4 font-medium">Route</th>
                    <th className="px-6 py-4 font-medium">Flight</th>
                    <th className="px-6 py-4 font-medium">Departure</th>
                    <th className="px-6 py-4 font-medium">Arrival</th>
                    <th className="px-8 py-4 font-medium">Days</th>
                  </tr>
                </thead>
                <tbody>
                  {DAILY_FLIGHTS.map((item) => (
                    <tr key={`${item.route}-${item.flight}`} className="border-t border-[#f0e9df] text-sm text-[#667085]">
                      <td className="px-8 py-5 font-medium text-[#1f2a37]">{item.route}</td>
                      <td className="px-6 py-5">{item.flight}</td>
                      <td className="px-6 py-5">{item.departure}</td>
                      <td className="px-6 py-5">{item.arrival}</td>
                      <td className="px-8 py-5">{item.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Ferry Services</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">Alternative transfer routes</h2>
            </div>
            <a href={RTL_URL} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm md:flex">
              Check RTL updates <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                <ShipWheel className="h-5 w-5 text-[#0f766e]" />
              </div>
              <h3 className="text-2xl font-medium">Fuvahmulah – Addu Schedule</h3>
              <div className="mt-6 space-y-4">
                {FERRY_ADDU.map((item, index) => (
                  <div key={index} className="rounded-[1.5rem] bg-white p-5">
                    <p className="text-sm font-medium text-[#1f2a37]">Departure: {item.departure}</p>
                    <p className="mt-2 text-sm leading-7 text-[#667085]">Stop: {item.stop}</p>
                    <p className="text-sm leading-7 text-[#667085]">Arrival: {item.arrival}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                <ShipWheel className="h-5 w-5 text-[#0f766e]" />
              </div>
              <h3 className="text-2xl font-medium">Fuvahmulah – GDH. Vaadhoo Schedule</h3>
              <div className="mt-6 space-y-4">
                {FERRY_VAADHOO.map((item, index) => (
                  <div key={index} className="rounded-[1.5rem] bg-white p-5">
                    <p className="text-sm font-medium text-[#1f2a37]">Departure: {item.departure}</p>
                    <p className="mt-2 text-sm leading-7 text-[#667085]">Arrival: {item.arrival}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#e6ddd1] bg-white p-8 shadow-sm">
            <p className="text-sm leading-8 text-[#667085]">
              RTL ferry schedules may change or be postponed due to weather conditions or maintenance. It is best to verify updates with the official RTL website before travel.
            </p>
            <a href={RTL_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1f2a37]">
              Visit RTL <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Private Speed Boat Transfer</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Faster, private options
              <span className="block font-semibold">for selected routes</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRIVATE_TRANSFERS.map((item) => (
              <div key={item.route} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                  <Waves className="h-5 w-5 text-[#0f766e]" />
                </div>
                <h3 className="text-2xl font-medium">{item.route}</h3>
                <div className="mt-6 space-y-3 text-sm text-[#667085]">
                  <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-[#0f766e]" /> Duration: {item.duration}</div>
                  <div className="flex items-center gap-3"><Ticket className="h-4 w-4 text-[#0f766e]" /> Price: {item.price}</div>
                  <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-[#0f766e]" /> {item.capacity}</div>
                </div>
                <p className="mt-6 text-sm leading-7 text-[#667085]">Private speed boat transfers require at least 48 hours advance reservation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Malé Airport Information</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                A smoother airport
                <span className="block font-semibold">transfer experience</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                Velana International Airport in Malé is the main gateway to the Maldives and the starting point for most journeys to Fuvahmulah.
              </p>

              <div className="mt-8 space-y-5">
                {AIRPORT_STEPS.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-[1.5rem] bg-[#fcfaf6] p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#1f2a37]">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[#667085]">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-[#e6ddd1] bg-white p-5">
                <p className="text-sm leading-7 text-[#667085]">
                  Recommended buffer: allow at least <span className="font-semibold text-[#1f2a37]">3 hours</span> between your international arrival and domestic departure for a smoother connection.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">How to Book</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Book your transfer
                <span className="block font-semibold">in three simple steps</span>
              </h2>
              <div className="mt-8 space-y-4">
                {BOOKING_STEPS.map((item, index) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/55">Step {index + 1}</p>
                    <p className="mt-2 text-lg font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/72">{item.content}</p>
                  </div>
                ))}
              </div>
              <a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
                Book Your Transfer <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Helpful Notes</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">Important travel details</h2>
          </div>

          <div className="mt-12 rounded-[2rem] bg-white px-8 py-4 shadow-sm">
            <AccordionItem title="Are flight schedules fixed?" content="Flight schedules are subject to change, so it is recommended to book in advance and reconfirm timings closer to travel." />
            <AccordionItem title="Can ferry schedules change?" content="Yes. RTL ferry schedules may be postponed or adjusted due to weather or maintenance, so it is best to check official RTL updates before departure." />
            <AccordionItem title="How early should I reserve private speed boat transfers?" content="Private speed boat transfers require at least 48 hours advance reservation." />
            <AccordionItem title="Will someone meet me in Fuvahmulah?" content="According to the live site information, the team can meet guests upon arrival in Fuvahmulah and assist with transfer to accommodation." />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1f2a37] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Contact Us</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Plan your journey with
              <span className="block font-semibold">our team</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="max-w-lg text-base leading-8 text-white/70">
                Reach out for domestic flights, ferry information, private transfer bookings, and arrival support for your trip to Fuvahmulah.
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
              </div>
            </div>

            <form className="rounded-[2.5rem] bg-white p-8 text-[#1f2a37]">
              <h3 className="text-2xl font-medium">Send a message</h3>
              <div className="mt-6 space-y-4">
                <input type="text" placeholder="Name" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="email" placeholder="Email" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="text" placeholder="Travel Dates / Route" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
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
              <a href="/transfer" className="block hover:text-white">Transfer</a>
              <a href="/courses" className="block hover:text-white">Courses</a>
              <a href="/our-crew" className="block hover:text-white">Our Crew</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Transfer Options</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Domestic flights</p>
              <p>RTL ferry services</p>
              <p>Private speed boats</p>
              <p>Airport assistance</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact Info</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Fuvahmulah Island, Maldives</p>
              <a href="tel:+9607930760" className="block hover:text-white">+960 7930760</a>
              <a href="mailto:sales@scubachannelfuvahmulah.com" className="block hover:text-white">
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
