"use client";

import React from "react";
import {
  Award,
  BadgeCheck,
  Star,
  Waves,
  Trophy,
  Camera,
} from "lucide-react";
import NavBar from "@/components/NavBar";

const LOGO = "/logo.JPG";

const images = [
  "/fvm-3.JPG",
  "/fvm-pic.jpg",
  "/img-2.webp",
  "/img-3.webp",
  "/img-5.webp",
  "/img-7.webp",
  "/img.webp",
  "/img-9.webp",
];

const VISUAL_JOURNEY = [
  { year: "2011", label: "Early days of diving in Fuvahmulah" },
  { year: "", label: "Beautiful Fuvahmulah Island" },
  { year: "2012", label: "First Tiger shark encounters" },
  { year: "2014", label: "Growing our team of instructors" },
  { year: "2016", label: "Gaining international recognition" },
  { year: "2018", label: "Our shark conservation initiatives" },
  { year: "2019", label: "Opening our first dive center" },
  { year: "Today", label: "Our operations today" },
];

const TIMELINE = [
  {
    year: "2011",
    title: "First Dive Experience",
    text: "Mr. Zafar had his first scuba diving experience in Fuvahmulah with scarce equipment and no dive centers.",
    image: "/img-7.webp",
  },
  {
    year: "2012",
    title: "Tiger Shark Discovery",
    text: "Discovery of Tiger sharks near the harbor of Fuvahmulah.",
    image: "/img-3.webp",
  },
  {
    year: "2014-2015",
    title: "Growth Period",
    text: "New dive centers and guest houses opened.",
    image: "/img-2.webp",
  },
  {
    year: "2019",
    title: "First Guided Dives",
    text: "Mr. Zafar began guiding clients to the Tiger shark point.",
    image: "/img.webp",
  },
  {
    year: "Present",
    title: "World-Class Destination",
    text: "Now the #1 Tiger shark destination.",
    image: "/fvm-3.JPG",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <NavBar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/fvm-pic.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Tracing the Depths of <br />
            <span>Our Heritage.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
            From the first discovery in 2011 to becoming a global shark sanctuary, explore the journey of the pioneer who put Fuvahmulah on the map.
          </p>
        </div>
      </section>

      {/* PIONEER */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src="/insta1.webp" className="rounded-[2rem] shadow-sm" />

        <div>
          <h2 className="text-4xl font-light">Mr. Abdulla Zafar Ali</h2>
          <p className="text-[#0f766e] uppercase tracking-[0.25em] mt-2">The Pioneer</p>

          <p className="mt-6 text-[#667085] leading-8">
            Mr. Abdulla Zafar Ali pioneered the discovery of the first Tiger shark in Fuvahmulah. He is currently working as an instructor in Fuvahmulah. Apart from being a dive instructor, he is one of the few divers who are continually concerned about the advancement of this field in Fuvahmulah.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3">
              <Award />
              <div>
                <p className="font-medium">Diving Pioneer</p>
                <p className="text-sm text-[#667085]">First to discover Tiger sharks in Fuvahmulah</p>
              </div>
            </div>

            <div className="flex gap-3">
              <BadgeCheck />
              <div>
                <p className="font-medium">Certified Instructor</p>
                <p className="text-sm text-[#667085]">Professional dive instructor with years of experience</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Star />
              <div>
                <p className="font-medium">Visionary</p>
                <p className="text-sm text-[#667085]">Transformed Fuvahmulah into a world-class diving destination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light">Our Visual Journey</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {VISUAL_JOURNEY.map((item, index) => (
            <div key={index} className="rounded-[2rem] overflow-hidden bg-white shadow-sm">
              <img src={images[index % images.length]} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm text-[#0f766e]">{item.year}</p>
                <p className="text-lg">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY STORY (FULL FIXED) */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-[#667085] leading-8">
        <h2 className="text-4xl font-light text-[#1f2a37] mb-6">The Journey</h2>
        <p className="mb-6">
          The remarkable story of how Tiger shark diving began in Fuvahmulah, in the words of Mr. Abdulla Zafar Ali.
        </p>

        <div className="space-y-6">
          <p>
            I had my very first experience scuba diving in Fuvahmulah in the year 2011. At that time the dive equipment was very scarce and there were no dive center or dive schools in this island. But I never gave up. The ambition of bringing a successful recreational diving in Fuvahmulah never dies.
          </p>

          <p>
            As time passes, I came to know that there are Tiger sharks close to the harbor of this island. This made me more enthusiastic in bringing recreational diving. I managed to get scuba equipment from one of the local fishing boats (boadhi dhoni), Tharaanage Iburey, and with the help of Mr. Hussain Saeed (Kao) and Riyaz, Fehigiri, I was able to catch the first sight of a Tiger shark.
          </p>

          <p>
            When I brought this news to my friends, most of them made fun of what I had told them. Many people said that you won't be able to see that kind of shark on this island. It was then that I felt I should discuss this with stakeholders. Hence, I managed to convince a few divers who were keen to explore this brand-new Tiger shark spot.
          </p>

          <p>
            As I envisioned earlier, after a few months, a local entrepreneur (Mr. Saud) established a guest house and started selling diving trips to the Tiger shark point, and I became one of the divers who guided clients diving for Mr. Saud. Within 1 or 2 years, people started investing in this field. New dive centers and guest houses opened.
          </p>

          <p>
            Today, I stand proudly as a pioneer of this profitable venture. We now have 21 guest houses and 7 diving schools or centers. I believe there is still room for development and expansion in this field. At the same time, I wish to see the water sport activities prosper and expand in a wider range.
          </p>

          <p className="pt-6 font-medium text-[#1f2a37]">
            Mr. Abdulla Zafar Ali <br />
            Founder, Scubachannel Fuvahmulah
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid xl:grid-cols-3 gap-6">
        {TIMELINE.map((item, i) => (
          <div key={i} className="rounded-[2rem] overflow-hidden bg-white shadow-sm">
            <img src={item.image} className="h-64 w-full object-cover" />
            <div className="p-6">
              <p className="text-sm text-[#0f766e]">{item.year}</p>
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-sm text-[#667085] mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#16202b] px-6 py-10 text-white/55">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <img src={LOGO} className="h-11 w-11 rounded-full" />
            <div>
              <p className="text-sm font-semibold text-white">SCUBACHANNEL</p>
              <p className="text-xs text-white/50">FUVAHMULAH</p>
            </div>
          </div>

          <p className="mt-4 text-sm">
            Premier diving center in Fuvahmulah, Maldives.
          </p>

          <div className="mt-6 border-t border-white/10 pt-4 text-sm">
            © 2026 Southern channel Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}