"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  Clock3,
  Compass,
  FileText,
  LifeBuoy,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Waves,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const LOGO = "https://www.scubachannelfuvahmulah.com/logo.JPG";
const PDF_URL = "https://www.scubachannelfuvahmulah.com/read.pdf";

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

type Course = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  requirements: string[];
  included: string[];
  skills: string[];
};

type Specialty = {
  title: string;
  description: string;
  duration: string;
  price: string;
};

const PRICING_SECTIONS = [
  {
    title: "Tiger Shark Dive",
    items: [
      { name: "Tiger Shark Dive (Close Proximity)", price: "$80 per dive" },
    ],
    note: "This is a special dive and not counted among regular dive packages.",
  },
  {
    title: "Reef Dives",
    items: [
      { name: "1 Reef Dive", price: "$70" },
      { name: "2–6 Reef Dives", price: "$65 per dive" },
      { name: "20+ Reef Dives", price: "$60 per dive" },
    ],
  },
  {
    title: "DAN Dive Insurance",
    items: [
      { name: "1 Day", price: "$12" },
      { name: "7 Days", price: "$20" },
      { name: "14 Days", price: "$30" },
    ],
  },
  {
    title: "Equipment Rental (Per Day)",
    items: [
      { name: "Full Set", price: "$15" },
      { name: "BCD", price: "$5" },
      { name: "Regulator", price: "$5" },
      { name: "Dive Computer", price: "$5" },
    ],
  },
];

const INCLUDED_IN_DIVE = [
  "Mask, Fins & Weights",
  "Towel & Drinking Water on the boat",
  "12L Aluminium Tank (Yoke / DIN Valves)",
];

const PACKAGES = [
  {
    title: "3 Nights & 6 Dives",
    single: "$600",
    twoPeople: "$1000",
    nonDiver: "$252",
    highlight: false,
    includes: [
      "Accommodation",
      "Hotel Room",
      "Breakfast",
      "Hotel arrival & departure",
      "Diving pick-up and drop-off",
      "2 dive days (3 dives per day)",
      "2 tiger shark dives",
      "4 reef dives",
    ],
  },
  {
    title: "5 Nights & 9 Dives",
    single: "$990",
    twoPeople: "$1800",
    nonDiver: "$420",
    highlight: false,
    includes: [
      "Accommodation",
      "Hotel Room",
      "Breakfast",
      "Hotel arrival & departure",
      "Diving pick-up and drop-off",
      "3 dive days (3 dives per day)",
      "3 tiger shark dives",
      "6 reef dives",
    ],
  },
  {
    title: "7 Nights & 15 Dives",
    single: "$1475",
    twoPeople: "$2300",
    nonDiver: "$588",
    highlight: true,
    includes: [
      "Accommodation",
      "Hotel Room",
      "Breakfast",
      "Hotel arrival & departure",
      "Diving pick-up and drop-off",
      "5 dive days (3 dives per day)",
      "5 tiger shark dives",
      "10 reef dives",
      "Complimentary sunset cruise",
    ],
  },
];

const COURSES: Course[] = [
  {
    id: "open-water",
    title: "Open Water",
    subtitle: "PADI Open Water Diver",
    duration: "3 - 4 days",
    price: "$550",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
    description:
      "The world's most popular dive course that qualifies you to dive independently with a buddy to 18 meters / 60 feet.",
    requirements: [
      "Age 10+ years",
      "Able to swim 200 meters",
      "Float / tread water for 10 minutes",
      "Good health",
    ],
    included: [
      "All learning materials",
      "Knowledge development sessions",
      "5 confined water dives",
      "4 open water dives",
      "PADI certification upon completion",
    ],
    skills: [
      "Dive planning",
      "Equipment assembly and care",
      "Underwater navigation",
      "Buoyancy control",
      "Emergency procedures",
    ],
  },
  {
    id: "advanced-open-water",
    title: "Advanced Open Water",
    subtitle: "Advanced Open Water Dive",
    duration: "Minimum 2 days",
    price: "$421",
    image: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg",
    description:
      "Expand your diving knowledge with 5 adventure dives, including deep and navigation dives.",
    requirements: ["Open Water Diver certification", "Good health"],
    included: [
      "Learning materials",
      "5 adventure dives",
      "PADI certification upon completion",
    ],
    skills: [
      "Deep diving techniques",
      "Underwater navigation",
      "Peak performance buoyancy",
      "Specialized diving activities",
    ],
  },
  {
    id: "efr-rescue",
    title: "EFR & Rescue",
    subtitle: "Emergency First Response (EFR) + Rescue Diver",
    duration: "2 - 5 days",
    price: "$150 - $600",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
    description:
      "Learn essential first aid, CPR skills, and how to prevent and manage diving emergencies through EFR and Rescue training.",
    requirements: [
      "No prior experience needed for EFR",
      "Advanced Open Water Diver for Rescue",
      "EFR certification within 24 months for Rescue",
      "Good health",
    ],
    included: [
      "Learning materials",
      "Practical skills sessions",
      "Confined water practice",
      "Rescue scenarios",
      "EFR / PADI certification upon completion",
    ],
    skills: [
      "Primary care (CPR)",
      "Secondary care (first aid)",
      "AED use",
      "Emergency management",
      "Rescue techniques",
    ],
  },
  {
    id: "divemaster",
    title: "Divemaster",
    subtitle: "PADI Divemaster Course",
    duration: "2 - 4 weeks",
    price: "$1000",
    image: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg",
    description:
      "The first professional level in the PADI system, training you to lead certified divers and assist instructors.",
    requirements: [
      "Rescue Diver certification",
      "EFR certification within 24 months",
      "40 logged dives",
      "Medical clearance",
      "Age 18+ years",
    ],
    included: [
      "All learning materials",
      "Practical training sessions",
      "Workshops",
      "PADI certification upon completion",
    ],
    skills: [
      "Dive leadership",
      "Problem solving",
      "Dive briefings",
      "Supervising diving activities",
      "Assisting with student training",
    ],
  },
  {
    id: "specialty-courses",
    title: "Specialty Courses",
    subtitle: "Specialized certifications",
    duration: "1 - 2 days",
    price: "$190 - $300",
    image: "https://www.scubachannelfuvahmulah.com/fvm-3.JPG",
    description:
      "Focus on specific diving activities or environments to enhance your skills and confidence in that area.",
    requirements: ["Open Water or Advanced certification depending on specialty", "Good health"],
    included: [
      "Learning materials",
      "Specialized training",
      "Certification upon completion",
    ],
    skills: [
      "Shark behavior understanding",
      "Deep diving planning",
      "Gas management",
      "Environmental awareness",
      "Safety procedures",
    ],
  },
];

const SPECIALTIES: Specialty[] = [
  {
    title: "Tiger Shark Diving Specialty",
    description:
      "Learn specialized techniques for safely diving with tiger sharks in Fuvahmulah's unique environment.",
    duration: "2 days",
    price: "$300",
  },
  {
    title: "Deep Diver Specialty",
    description:
      "Master the skills needed for diving between 18-40 meters, including special equipment and safety procedures.",
    duration: "2 days",
    price: "$250",
  },
  {
    title: "Underwater Photography",
    description:
      "Learn to capture stunning underwater images with proper techniques, lighting, and composition.",
    duration: "2 days",
    price: "$275",
  },
  {
    title: "Night Diver Specialty",
    description:
      "Discover the nocturnal underwater world with specialized training for night diving conditions.",
    duration: "2 days",
    price: "$225",
  },
  {
    title: "Navigation Specialty",
    description:
      "Master underwater navigation using natural references, compass, and advanced techniques.",
    duration: "2 days",
    price: "$225",
  },
];

const FAQS = [
  {
    title: "Do I need to know how to swim to take a diving course?",
    content:
      "Yes, you need basic swimming skills to enroll in diving courses. For the Open Water Diver course, you should be able to swim 200 meters without swimming aids and float or tread water for 10 minutes.",
  },
  {
    title: "What is the minimum age requirement for diving courses?",
    content:
      "The minimum age varies by course. Open Water Diver starts at age 10, advanced courses typically start from 12, and professional-level courses like Divemaster require participants to be at least 18 years old.",
  },
  {
    title: "How long does it take to complete a diving course?",
    content:
      "Course duration varies: Open Water Diver usually takes 3-4 days, Advanced Open Water takes around 2 days, Rescue Diver takes 5 days, and Divemaster can take 2-4 weeks.",
  },
  {
    title: "Do I need to bring my own diving equipment?",
    content:
      "No, all necessary diving equipment is included in course fees. The center provides high-quality gear, though you're welcome to use your own serviced equipment if preferred.",
  },
  {
    title: "Is diving with tiger sharks safe?",
    content:
      "Tiger shark diving at Fuvahmulah is conducted with experienced guides trained in shark diving protocols and safety procedures. Divers are properly briefed and trips are operated responsibly.",
  },
];

function PolicyItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e6ddd1] py-6 last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="text-xl font-medium text-[#1f2a37]">{title}</h3>
        <ChevronRight
          className={`h-5 w-5 text-[#0f766e] transition ${open ? "rotate-90" : ""}`}
        />
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
                        className={`h-4 w-4 transition-transform ${mobileDivingOpen ? "rotate-180" : ""}`}
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

export default function CoursesPage() {
  const [activeCourseId, setActiveCourseId] = useState(COURSES[0].id);

  const activeCourse = useMemo(
    () => COURSES.find((course) => course.id === activeCourseId) ?? COURSES[0],
    [activeCourseId]
  );

  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <Navbar />

      <section className="relative min-h-[88vh] overflow-hidden pb-12 pt-32 md:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.scubachannelfuvahmulah.com/fvm-pic.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/60" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="text-sm uppercase tracking-[0.32em] text-white/80">Fuvahmulah, Maldives</p>
            <h1 className="mt-4 text-5xl font-light leading-tight md:text-7xl">
              Our PADI Diving Courses
              <span className="block font-semibold">crafted with a premium island feel</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              From beginners to professionals, explore a refined courses page inspired by your main site design while keeping the live course content, pricing, and structure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#course-details" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]">
                Explore Courses
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
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Dive Prices</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Transparent pricing
              <span className="block font-semibold">for dives, rentals, and packages</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            This section is styled to feel more elevated and resort-like while preserving the current live pricing model for tiger shark dives, reef dives, insurance, rental equipment, and stay packages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PRICING_SECTIONS.map((section) => (
            <div key={section.title} className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                <Waves className="h-5 w-5 text-[#0f766e]" />
              </div>
              <h3 className="text-2xl font-medium">{section.title}</h3>
              <div className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-b border-[#eee5d7] pb-4 last:border-0 last:pb-0">
                    <p className="text-sm leading-7 text-[#667085]">{item.name}</p>
                    <p className="text-sm font-semibold text-[#0f766e]">{item.price}</p>
                  </div>
                ))}
              </div>
              {section.note ? <p className="mt-5 text-sm leading-7 text-[#667085]">{section.note}</p> : null}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#e6ddd1] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Included In Dive</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {INCLUDED_IN_DIVE.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[1.5rem] bg-[#fcfaf6] p-5">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                  <BadgeCheck className="h-4 w-4 text-[#0f766e]" />
                </div>
                <p className="text-sm leading-7 text-[#667085]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Dive Packages</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Stay and dive
              <span className="block font-semibold">with curated package options</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-[2rem] p-8 shadow-sm ${pkg.highlight ? "bg-[#1f2a37] text-white" : "bg-white text-[#1f2a37]"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-medium">{pkg.title}</h3>
                  {pkg.highlight ? (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { label: "Single", value: pkg.single },
                    { label: "Two People", value: pkg.twoPeople },
                    { label: "Non-Diver", value: pkg.nonDiver },
                  ].map((price) => (
                    <div
                      key={price.label}
                      className={`rounded-[1.25rem] p-4 ${pkg.highlight ? "bg-white/5 border border-white/10" : "bg-[#fcfaf6]"}`}
                    >
                      <p className={`text-xs uppercase tracking-[0.16em] ${pkg.highlight ? "text-white/60" : "text-[#667085]"}`}>
                        {price.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold">{price.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${pkg.highlight ? "bg-white/10" : "bg-[#e8f5f2]"}`}>
                        <BadgeCheck className={`h-4 w-4 ${pkg.highlight ? "text-white" : "text-[#0f766e]"}`} />
                      </div>
                      <p className={`text-sm leading-7 ${pkg.highlight ? "text-white/80" : "text-[#667085]"}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="course-details" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">PADI Diving Courses</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Learn in one of the Maldives'
              <span className="block font-semibold">most exciting dive destinations</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#667085]">
              Explore the full course range with a more premium visual presentation while keeping the live site's transparent pricing, requirements, and learning outcomes.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {COURSES.map((course) => {
              const isActive = activeCourse.id === course.id;
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseId(course.id)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-[#0f766e] bg-[#0f766e] text-white shadow-sm"
                      : "border-[#d8d8d8] bg-white text-[#1f2a37] hover:border-[#0f766e] hover:text-[#0f766e]"
                  }`}
                >
                  {course.title}
                </button>
              );
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e6ddd1] bg-white shadow-sm lg:grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[460px] overflow-hidden bg-[#1f2a37] text-white">
              <img src={activeCourse.image} alt={activeCourse.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/95 via-[#1f2a37]/55 to-[#1f2a37]/15" />

              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Compass className="h-6 w-6" />
                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-white/70">{activeCourse.subtitle}</p>
                <h3 className="mt-3 text-3xl font-medium md:text-4xl">{activeCourse.title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 md:text-base">{activeCourse.description}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                    <Clock3 className="h-4 w-4" />
                    Duration: {activeCourse.duration}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                    <ShieldCheck className="h-4 w-4" />
                    Price: {activeCourse.price}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]">
                    Book This Course <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
                    Ask Questions <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Requirements</p>
                <div className="mt-5 space-y-4">
                  {activeCourse.requirements.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                        <BadgeCheck className="h-4 w-4 text-[#0f766e]" />
                      </div>
                      <p className="text-sm leading-7 text-[#667085] md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">What's Included</p>
                <div className="mt-5 space-y-4">
                  {activeCourse.included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                        <BadgeCheck className="h-4 w-4 text-[#0f766e]" />
                      </div>
                      <p className="text-sm leading-7 text-[#667085] md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Skills You'll Learn</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeCourse.skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d6ebe7] bg-[#f4fbf9] px-4 py-2 text-xs font-medium text-[#0f766e]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Specialty Courses</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Enhance your skills
              </h2>
            </div>

            <a href="/#contact" className="hidden items-center gap-2 text-sm md:flex">
              Ask about specialties <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SPECIALTIES.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                  <Waves className="h-5 w-5 text-[#0f766e]" />
                </div>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#667085]">{item.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4 text-sm">
                  <span className="rounded-full bg-[#f4fbf9] px-4 py-2 font-medium text-[#0f766e]">{item.duration}</span>
                  <span className="font-semibold text-[#0f766e]">{item.price}</span>
                </div>
                <a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#1f2a37]">
                  Book Course <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Frequently Asked Questions</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Helpful answers before you book
            </h2>
          </div>

          <div className="mt-12 rounded-[2rem] bg-white px-8 py-4 shadow-sm">
            {FAQS.map((item) => (
              <PolicyItem key={item.title} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Diving Resources</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Useful information
                <span className="block font-semibold">before your dive</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                Download the official diving policies and requirements PDF directly from the live site.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-medium text-white"
                >
                  <FileText className="h-4 w-4" />
                  Read PDF
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-[#d9cfbf] px-6 py-3 text-sm font-medium text-[#1f2a37]"
                >
                  Contact Team
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Ready</p>
              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Ready to start your
                <span className="block font-semibold">diving adventure?</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                Book your diving course today and discover the underwater wonders of Fuvahmulah with expert instructors and a more refined, premium visual experience.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: LifeBuoy, text: "Beginner to professional PADI pathway" },
                  { icon: ShieldCheck, text: "Transparent pricing and requirements" },
                  { icon: Star, text: "Premium island-inspired presentation" },
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

              <a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
                Contact our team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1f2a37] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Contact Us</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Get in touch with
              <span className="block font-semibold">our team</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="max-w-lg text-base leading-8 text-white/70">
                Have questions or ready to book your diving course? Reach out for course bookings, dive packages, specialty training, or general enquiries.
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
              <a href="/courses" className="block hover:text-white">Courses</a>
              <a href="/our-crew" className="block hover:text-white">Our Crew</a>
              <a href="/#contact" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Course Categories</p>
            <div className="mt-4 space-y-3 text-sm">
              {COURSES.map((course) => (
                <a key={course.id} href="#course-details" className="block hover:text-white">
                  {course.title}
                </a>
              ))}
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
