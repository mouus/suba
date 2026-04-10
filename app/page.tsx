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
import NavBar from "../components/NavBar";

type HeroMedia = {
  type: "image" | "video";
  src: string;
};


const PDF_URL = "/read.pdf";
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
const COURSES = [
  {
    id: "open-water",
    title: "Open Water",
    price: "$550",
    duration: "3-4 days",
    text: "The world's most popular diving course that qualifies you to dive independently with a buddy to 18 meters/60 feet.",
    items: [
      "All learning materials included",
      "5 confined water dives",
      "4 open water dives",
      "PADI certification upon completion",
      "Equipment rental included",
    ],
  },
  {
    id: "advanced-open-water",
    title: "Advanced Open Water",
    price: "$421",
    duration: "2+ days",
    text: "Expand your diving knowledge with 5 adventure dives, including deep and navigation dives.",
    items: [
      "Learning materials included",
      "5 adventure dives",
      "Deep diving techniques",
      "Underwater navigation",
      "PADI certification upon completion",
    ],
  },
  {
    id: "efr-rescue",
    title: "EFR & Rescue",
    price: "$600-$750",
    duration: "5-7 days",
    text: "Learn essential first aid, CPR skills, and how to prevent and manage diving emergencies.",
    items: [
      "Emergency First Response (EFR) training",
      "Rescue Diver course",
      "Self-rescue techniques",
      "Recognizing and managing dive emergencies",
      "PADI certification upon completion",
    ],
  },
  {
    id: "divemaster",
    title: "Divemaster",
    price: "$1000+",
    duration: "2-4 weeks",
    text: "Professional-level training to lead certified divers and assist instructors.",
    items: [
      "Professional-level certification",
      "Dive leadership training",
      "Supervising diving activities",
      "Assisting with student training",
      "Career opportunities in diving",
    ],
  },
  {
    id: "specialty-courses",
    title: "Specialty Courses",
    price: "$190 per specialty",
    duration: "1-2 days per specialty",
    text: "Focus on specific diving activities or environments to enhance your skills in that area.",
    items: [
      "Tiger Shark Specialty",
      "Deep Diver Specialty",
      "Night Diver Specialty",
      "Underwater Photography",
      "And many more options",
    ],
  },
];

const HERO_MEDIA: HeroMedia[] = [
  { type: "video", src: "/whaleview.mp4" },
  {
    type: "image",
    src: "/fvm-pic.jpg",
  },
  { type: "video", src: "/img77.mp4" },
  {
    type: "image",
    src: "/fvm-3.JPG",
  },
];
const IMAGES = [
  "/dive.jpg",
  "/whaleimg.jpg",
  "/loneshark.webp",
  "/manta.webp",
  "shark-4.webp",
];

const GALLERY_IMAGES = [
  "/airport.jpg",
  "/diving1.JPG",
  "fishshark.JPEG",
  "/fvm-3.JPG",
  "/whale.webp",
  "/loneshark.webp",
  "/img1.webp",
  "/dive-guide.webp",
  "/finshark.JPEG",
];

const EXPERIENCES = [
  {
    title: "Scuba Diving",
    text: "Experience world-class diving with a range of scuba options for all levels in Fuvahmulah’s unique waters.",
    price: "From $62",
  },
  {
    title: "Free Diving",
    text: "Connect with marine life in a more natural way through guided free diving adventures.",
    price: "$150",
  },
  {
    title: "Tiger Shark Diving",
    text: "Dive with magnificent tiger sharks in their natural habitat with expert local guides.",
    price: "From $97",
  },
  {
    title: "Addu Manta Point",
    text: "Encounter graceful manta rays at one of the most memorable dive experiences available.",
    price: "$150 per person",
  },
  {
    title: "Shipwreck Diving",
    text: "Explore fascinating underwater wrecks rich with marine life and history.",
    price: "$85",
  },
];

const COURSESS = [
  {
    id: "open-water",
    title: "Open Water",
    price: "$550",
    duration: "3-4 days",
    image:
      "/shark.webp",
    text: "The world's most popular diving course that qualifies you to dive independently with a buddy to 18 meters/60 feet.",
    items: [
      "All learning materials included",
      "5 confined water dives",
      "4 open water dives",
      "PADI certification upon completion",
      "Equipment rental included",
    ],
  },
  {
    id: "advanced-open-water",
    title: "Advanced Open Water",
    price: "$421",
    duration: "2+ days",
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80",
    text: "Expand your diving knowledge with 5 adventure dives, including deep and navigation dives.",
    items: [
      "Learning materials included",
      "5 adventure dives",
      "Deep diving techniques",
      "Underwater navigation",
      "PADI certification upon completion",
    ],
  },
  {
    id: "efr-rescue",
    title: "EFR & Rescue",
    price: "$600-$750",
    duration: "5-7 days",
    image:
      "whale.webp",
    text: "Learn essential first aid, CPR skills, and how to prevent and manage diving emergencies.",
    items: [
      "Emergency First Response (EFR) training",
      "Rescue Diver course",
      "Self-rescue techniques",
      "Recognizing and managing dive emergencies",
      "PADI certification upon completion",
    ],
  },
  {
    id: "divemaster",
    title: "Divemaster",
    price: "$1000+",
    duration: "2-4 weeks",
    image:
      "people.webp",
    text: "Professional-level training to lead certified divers and assist instructors.",
    items: [
      "Professional-level certification",
      "Dive leadership training",
      "Supervising diving activities",
      "Assisting with student training",
      "Career opportunities in diving",
    ],
  },
  {
    id: "specialty-courses",
    title: "Specialty Courses",
    price: "$190 per specialty",
    duration: "1-2 days per specialty",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    text: "Focus on specific diving activities or environments to enhance your skills in that area.",
    items: [
      "Tiger Shark Specialty",
      "Deep Diver Specialty",
      "Night Diver Specialty",
      "Underwater Photography",
      "And many more options",
    ],
  },
];

const POLICIES = [
  {
    title: "Scuba Diving",
    content:
      "Certification must be presented to be accepted as a diver. An orientation dive is mandatory for certified divers except dive professionals and divers with 100+ logged dives. Valid dive insurance is mandatory. Maximum depth is 30 meters, maximum dive time is 45 minutes, and a 24-hour surface interval is required before flying.",
  },
  {
    title: "Reservation Policy",
    content:
      "All scheduled adventures are subject to weather conditions and minimum guest numbers. 12 hours advance reservation is required for excursions. Reservations are subject to availability, and guests are recommended to be at the harbor 15 minutes before start time.",
  },
  {
    title: "Cancellation Policy",
    content:
      "A 50% cancellation fee may be charged for cancellations made less than 4 hours before the trip, and no-shows may also be charged 50%.",
  },
];

const REVIEWS = [
  {
    name: "Sarah Johnson",
    country: "United States",
    text: "My diving experience with Scubachannel Fuvahmulah was absolutely incredible. The instructors were knowledgeable and patient, making my first diving experience unforgettable.",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    text: "Swimming with tiger sharks was a dream come true. The team ensured our safety while providing an exhilarating experience. Would definitely recommend.",
  },
  {
    name: "Akiko Tanaka",
    country: "Japan",
    text: "The visibility in Fuvahmulah is amazing. Completed my Advanced course here and the instructors were professional and friendly. Can’t wait to come back.",
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


export default function Page() {
  const [activeCourse, setActiveCourse] = useState(COURSESS[0]);
  const [heroIndex, setHeroIndex] = useState(0);
  const activeHero = HERO_MEDIA[heroIndex];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_MEDIA.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <NavBar />

      <section id="home" className="relative min-h-screen pb-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {activeHero.type === "video" ? (
              <video
                src={activeHero.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${activeHero.src})` }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/55" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
          <div className="max-w-3xl text-white">
            <p className="text-sm uppercase tracking-[0.32em] text-white/80">
              Fuvahmulah, Maldives
            </p>

            <h1 className="mt-4 text-5xl font-light leading-tight md:text-7xl">
              Dive into a more
              <span className="block font-semibold">refined island experience</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Discover tiger sharks, pristine blue water, and unforgettable underwater
              adventures with a premium resort-inspired feel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experiences"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]"
              >
                Explore Experiences
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 flex gap-2">
              {HERO_MEDIA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === heroIndex ? "w-10 bg-white" : "w-2.5 bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Welcome
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Where professional diving
              <span className="block font-semibold">meets a premium island atmosphere</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            Located in the pristine waters of Fuvahmulah, Scubachannel offers
            world-class diving experiences and professional PADI courses with a calmer,
            more elevated visual identity inspired by boutique resort design.
          </p>
        </div>
      </section>
      <section id="experiences" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Diving Experiences
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Ocean experiences
            </h2>
          </div>

          <a href="#contact" className="hidden items-center gap-2 text-sm md:flex">
            Plan your trip <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {EXPERIENCES.map((item, index) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-[#fcfaf6] shadow-sm"
            >
              {/* Image */}
              <img
                src={`${IMAGES[index % IMAGES.length]}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f2]">
                  <Waves className="h-5 w-5 text-[#0f766e]" />
                </div>

                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#667085]">{item.text}</p>
                <p className="mt-6 text-sm font-semibold text-[#0f766e]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="courses" className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Our PADI Diving Courses
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Learn in one of the Maldives’
              <span className="block font-semibold">
                most exciting dive destinations
              </span>
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {COURSESS.map((course) => {
              const isActive = activeCourse.id === course.id;

              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourse(course)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${isActive
                    ? "border-[#0f766e] bg-[#0f766e] text-white shadow-sm"
                    : "border-[#d8d8d8] bg-white text-[#1f2a37] hover:border-[#0f766e] hover:text-[#0f766e]"
                    }`}
                >
                  {course.title}
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            <div className="overflow-hidden rounded-[2rem] border border-[#e6ddd1] bg-white shadow-sm lg:grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-[#1f2a37] text-white">
                <img
                  src={activeCourse.image}
                  alt={activeCourse.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a37]/95 via-[#1f2a37]/55 to-[#1f2a37]/20" />

                <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Waves className="h-6 w-6" />
                  </div>

                  <h3 className="text-3xl font-medium md:text-4xl">
                    {activeCourse.title}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-[#d7f3ed]">
                    {activeCourse.price}
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                    {activeCourse.text}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                      <Clock3 className="h-4 w-4" />
                      Duration: {activeCourse.duration}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    Enquire <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
                  What's Included
                </p>

                <div className="mt-6 space-y-4">
                  {activeCourse.items.map((listItem, index) => (
                    <div
                      key={`${activeCourse.id}-${index}`}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5f2]">
                        <BadgeCheck className="h-4 w-4 text-[#0f766e]" />
                      </div>
                      <p className="text-sm leading-7 text-[#667085] md:text-base">
                        {listItem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
            Dive Site Gallery
          </p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            A glimpse into Fuvahmulah
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((image, i) => (
            <div
              key={i}
              className="aspect-[4/5] rounded-[2rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </section>

      <section id="policies" className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Diving Policies & Information
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Important details before you book
            </h2>
          </div>

          <div className="mt-12 rounded-[2rem] bg-white px-8 py-4 shadow-sm">
            {POLICIES.map((item) => (
              <PolicyItem key={item.title} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
            What Our Divers Say
          </p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">Guest experiences</h2>
          <div className="mt-4 flex justify-center gap-1 text-[#0f766e]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((item) => (
            <div key={item.name} className="rounded-[2rem] bg-[#fcfaf6] p-8 shadow-sm">
              <p className="text-sm leading-8 text-[#667085]">“{item.text}”</p>
              <p className="mt-6 text-lg font-medium">{item.name}</p>
              <p className="text-sm text-[#0f766e]">{item.country}</p>
            </div>
          ))}
        </div>
      </section>

    <section id="resources" className="bg-[#fcfaf6] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
      
      {/* Useful Information Card */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-sm flex flex-col">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
            Diving Resources
          </p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Useful information
            <span className="block font-semibold">before your dive</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
            Download the official diving policies and requirements PDF directly
            from the live site.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={"/read.pdf"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-medium text-white"
            >
              <FileText className="h-4 w-4" />
              Read PDF
            </a>

            <a
              href="#policies"
              className="rounded-full border border-[#d9cfbf] px-6 py-3 text-sm font-medium text-[#1f2a37]"
            >
              View Policies
            </a>
          </div>
        </div>

        {/* The map added to the bottom of this specific box */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#f0ebe3]">
          <img 
            src="/mapisland.png" 
            alt="Island Map" 
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Ready for Adventure Card */}
      <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Ready</p>
        <h2 className="mt-4 text-4xl font-light md:text-5xl">
          Ready for an
          <span className="block font-semibold">Unforgettable Diving Adventure?</span>
        </h2>
        <p className="mt-6 text-base leading-8 text-white/70">
          Book your diving experience today and discover the underwater wonders
          of Fuvahmulah with expert local guides.
        </p>

        <div className="mt-8 grid gap-3">
          {[
            "Scuba trips",
            "Tiger shark encounters",
            "PADI training",
            "Trip planning support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85"
            >
              {item}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
        >
          Contact our team <ArrowRight className="h-4 w-4" />
        </a>
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
              Get in touch with
              <span className="block font-semibold">our team</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="max-w-lg text-base leading-8 text-white/70">
                Have questions or ready to book your diving adventure? Reach out for
                dive trips, shark experiences, course bookings, or general enquiries.
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

              {/* <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>

         <form onSubmit={handleSubmit} className="rounded-[2.5rem] bg-white p-8 text-[#1f2a37] shadow-sm border border-[#e6ddd1]">
      <h3 className="text-2xl font-medium">Send a message</h3>

      {status === "success" ? (
        <div className="mt-6 flex flex-col items-center justify-center py-10 text-center">
          <CheckCircle2 className="h-12 w-12 text-[#0f766e] mb-4" />
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm text-slate-500 mt-1">We'll get back to you soon.</p>
          <button 
            type="button" 
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-[#0f766e] underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Name"
            className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none focus:border-[#0f766e] transition-colors"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none focus:border-[#0f766e] transition-colors"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full rounded-full border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none focus:border-[#0f766e] transition-colors"
          />
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Message"
            className="w-full rounded-[1.5rem] border border-[#e6ddd1] bg-[#fcfaf6] px-5 py-4 text-sm outline-none focus:border-[#0f766e] transition-colors resize-none"
          />
          
          {status === "error" && (
            <p className="text-xs text-red-500 font-medium px-2">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>Sending <Loader2 className="h-4 w-4 animate-spin" /></>
            ) : (
              <>Send Message <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        </div>
      )}
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
              Your premier diving center in Fuvahmulah, Maldives, offering
              unforgettable underwater experiences and professional PADI courses.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Quick Links</p>
            <div className="mt-4 space-y-3 text-sm">
              {LINKS.map((item) => (
                <a key={item.label} href={item.href} className="block hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Courses</p>
            <div className="mt-4 space-y-3 text-sm">
              {COURSES.map((item) => (
                <a key={item.title} href="#courses" className="block hover:text-white">
                  {item.title}
                </a>
              ))}
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