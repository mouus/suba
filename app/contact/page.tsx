"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Waves,
  X,
  MessageCircle,
  Plane,
  Car,
  BadgeCheck,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";
const WHATSAPP_URL = "https://wa.me";

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

const BUSINESS_HOURS = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM" },
  { day: "Sunday", time: "9:00 AM - 2:00 PM" },
];

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Open Water Course",
  "Advanced Diver Course",
  "Rescue Diver Course",
  "Divemaster Course",
  "Specialty Courses",
  "Tiger Shark Diving",
  "Fun Dives",
];

const TRANSFER_STEPS = [
  {
    title: "Step 1: International Flight",
    content:
      "Book your international flight to Malé International Airport (Velana International Airport, MLE). Many international airlines operate flights to the Maldives from major cities worldwide.",
    icon: Plane,
  },
  {
    title: "Step 2: Domestic Flight",
    content:
      "From Malé, take a domestic flight to Fuvahmulah Airport (FVM). Flights are operated by Maldivian and Manta Air. The flight takes approximately 1 hour, and the team can assist with booking.",
    icon: Plane,
  },
  {
    title: "Step 3: Airport Pickup",
    content:
      "The team can meet guests at Fuvahmulah Airport and transfer them to their accommodation. Share your flight details in advance for smooth arrival support.",
    icon: Car,
  },
];

const TRANSFER_SERVICES = [
  "Airport transfers at Fuvahmulah Airport",
  "Daily transport to dive sites included in your package",
  "Island excursion transportation on request",
  "Custom transportation arrangements with advance notice",
];

const IMPORTANT_NOTES = [
  "Please inform the team of any flight schedule changes or delays",
  "Standard domestic flight luggage allowance is listed as 20kg + 5kg hand luggage",
  "Allow at least 3 hours between international and domestic flights",
  "The team can help answer questions about your journey to Fuvahmulah",
];

const FAQS = [
  {
    title: "How can I book a diving course?",
    content:
      "You can book a diving course by filling out the contact form, calling directly, sending an email, or messaging on WhatsApp. The live page says the team will get back within 24 hours to confirm the booking and provide further instructions.",
  },
  {
    title: "What information do you need for a booking?",
    content:
      "For a booking, provide your full name, contact information, preferred course or diving package, and your planned travel dates. You can also include any specific requests or questions.",
  },
  {
    title: "Do you offer airport transfers?",
    content:
      "Yes, the contact page states airport transfers from Fuvahmulah Airport to your accommodation are available. It also asks guests to share flight details when booking.",
  },
  {
    title: "Can I reschedule my diving course?",
    content:
      "The live page says courses can be rescheduled with at least 7 days notice without penalty. For changes within 7 days of the scheduled start date, a rescheduling fee may apply.",
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

        <a href="#contact-form" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-[#1f2a37] lg:block">
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

export default function ContactPage() {
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
              Contact Us
              <span className="block font-semibold">start your diving journey with confidence</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              A refined contact page matching the premium island look of the rest of the site, while keeping the same essential details from the live page for bookings, travel help, and urgent support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact-form" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]">
                Send a Message
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Get In Touch</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Reach the team for bookings,
              <span className="block font-semibold">questions, or travel support</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            Have questions about diving courses or want to plan your next underwater adventure? This page keeps the practical contact details from the live site while presenting them in the same premium, calm, resort-inspired design language as the rest of your pages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                  <Icon className="h-5 w-5 text-[#0f766e]" />
                </div>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#667085]">{item.text}</p>
              </>
            );
            return item.href ? (
              <a key={item.title} href={item.href} className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm transition hover:-translate-y-0.5">
                {content}
              </a>
            ) : (
              <div key={item.title} className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact-form" className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Send Us a Message</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                We’re here to help
                <span className="block font-semibold">with every step of your trip</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#667085]">
                Fill out the form below and the team can get back to you as soon as possible about bookings, courses, tiger shark diving, fun dives, or general questions.
              </p>

              <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Business Hours</p>
                <div className="mt-6 space-y-4">
                  {BUSINESS_HOURS.map((item) => (
                    <div key={item.day} className="flex items-center justify-between gap-4 border-b border-[#efe7db] pb-4 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-[#1f2a37]">{item.day}</p>
                      <div className="flex items-center gap-2 text-sm text-[#667085]">
                        <Clock3 className="h-4 w-4 text-[#0f766e]" />
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form className="rounded-[2.5rem] bg-white p-8 shadow-sm text-[#1f2a37]">
              <h3 className="text-2xl font-medium">Send a message</h3>
              <div className="mt-6 space-y-4">
                <input type="text" placeholder="Full Name *" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="email" placeholder="Email Address *" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="text" placeholder="Phone Number" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <input type="text" placeholder="Subject *" className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <select className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none text-[#667085]">
                  <option>I'm interested in</option>
                  {INQUIRY_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <textarea rows={6} placeholder="Message *" className="w-full rounded-[1.5rem] border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none" />
                <div className="flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-medium text-white">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d9cfbf] px-6 py-3 text-sm font-medium text-[#1f2a37]">
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Travel & Transfers</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Planning your journey
                <span className="block font-semibold">to Fuvahmulah</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                The live contact page also includes a quick travel guide for guests arriving through Malé before continuing to Fuvahmulah.
              </p>

              <div className="mt-8 space-y-5">
                {TRANSFER_STEPS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.5rem] bg-[#fcfaf6] p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f5f2]">
                          <Icon className="h-5 w-5 text-[#0f766e]" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-[#1f2a37]">{item.title}</p>
                          <p className="mt-2 text-sm leading-7 text-[#667085]">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Transfer Services</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Arrival support with
                <span className="block font-semibold">guest-first assistance</span>
              </h2>

              <div className="mt-8 space-y-4">
                {TRANSFER_SERVICES.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85">
                    <BadgeCheck className="mt-1 h-4 w-4 text-[#d7f3ed]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Important Information</p>
                <div className="mt-4 space-y-3">
                  {IMPORTANT_NOTES.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-white/78">
                      <ShieldCheck className="mt-1 h-4 w-4 text-[#d7f3ed]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Frequently Asked Questions</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">Helpful answers before you book</h2>
          </div>

          <div className="mt-12 rounded-[2rem] bg-white px-8 py-4 shadow-sm">
            {FAQS.map((item) => (
              <AccordionItem key={item.title} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Need Urgent Assistance?</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Fast support for
                <span className="block font-semibold">urgent bookings and inquiries</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                The live page highlights urgent support for emergency bookings and time-sensitive enquiries, with direct phone and WhatsApp contact.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <a href="tel:+9607930760" className="rounded-[1.5rem] bg-[#fcfaf6] p-6 transition hover:-translate-y-0.5">
                  <Phone className="h-5 w-5 text-[#0f766e]" />
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#667085]">Emergency Hotline</p>
                  <p className="mt-2 text-xl font-medium text-[#1f2a37]">+960 7930760</p>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-[1.5rem] bg-[#fcfaf6] p-6 transition hover:-translate-y-0.5">
                  <MessageCircle className="h-5 w-5 text-[#0f766e]" />
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#667085]">WhatsApp</p>
                  <p className="mt-2 text-xl font-medium text-[#1f2a37]">+960 7930760</p>
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Ready</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Ready to start your
                <span className="block font-semibold">diving adventure?</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                Book your diving course today and discover the underwater wonders of Fuvahmulah with expert instructors and personalized support.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Course bookings and packages",
                  "Tiger shark diving enquiries",
                  "Travel and transfer assistance",
                  "Fast WhatsApp communication",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]">
                  WhatsApp Us <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/courses" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
                  View Courses <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
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
              <a href="/contact" className="block hover:text-white">Contact</a>
              <a href="/courses" className="block hover:text-white">Courses</a>
              <a href="/our-crew" className="block hover:text-white">Our Crew</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Popular Enquiries</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Open Water Diver</p>
              <p>Advanced Diver</p>
              <p>Rescue Diver</p>
              <p>Specialty Courses</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact Info</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>Zindha, husnuheenamagu, funaadu, Fuvahmulah Island, Maldives</p>
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
