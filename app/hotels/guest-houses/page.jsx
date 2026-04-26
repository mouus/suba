"use client";

import {
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import NavBar from "../../../components/NavBar";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const SANDSCAPE = {
  name: "The Sandscape",
  location: "Fuvahmulah, Maldives",
  price: "From $50 / night",
  image: "/sand.jpg",
};

const ROOMS = [
  {
    name: "Deluxe Double Room",
    occupancy: "2 Adults / 2 Adults + 1 Child",
    bed: "1 King Bed",
    meal: "Breakfast Included",
    peak: "$55",
    offpeak: "$50",
  },
  {
    name: "Deluxe Twin Room",
    occupancy: "2 Adults",
    bed: "1 King or 2 Twin Beds",
    meal: "Breakfast Included",
    peak: "$55",
    offpeak: "$50",
  },
  {
    name: "Family Room",
    occupancy: "3 Adults / Family Setup",
    bed: "1 King + 1 Twin or 3 Twin",
    meal: "Breakfast Included",
    peak: "$65",
    offpeak: "$60",
  },
];

const INCLUSIONS = [
  "Accommodation per night",
  "Free airport pickup & drop-off",
  "Daily breakfast",
  "Free WiFi (rooms & public areas)",
  "500ml water bottle daily",
  "10% Service charge + 17% GST included",
];

const EXTRAS = [
  "Extra Adult: $20 / night",
  "Child (7–11 yrs): $10 / night",
  "Half Board: $15 adult / $10 child",
  "Full Board: $35 adult / $20 child",
  "Green Tax: $6 per person per night",
];

const POLICIES = [
  {
    title: "Check-in / Check-out",
    content: "Check-in at 14:00 and check-out at 12:00.",
  },
  {
    title: "Booking via Scubachannel",
    content:
      "All bookings managed by Scubachannel include coordinated transfers and diving priority. Rates are subject to availability.",
  },
  {
    title: "Cancellation Policy",
    content:
      "100% charge applies if canceled 3–5 days before arrival depending on season. No-shows are fully charged.",
  },
];

export default function Page() {
  return (
    <div className="bg-[#f6f1e8] text-[#1f2a37]">
      <NavBar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/guestoutside.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white pt-32">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Exclusive Scubachannel Partner
          </p>
          <h1 className="mt-4 text-5xl font-light md:text-6xl">
            The Sandscape
            <span className="block font-semibold">Boutique island stay</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            A premium guesthouse in Fuvahmulah curated by Scubachannel for comfort, 
            convenience, and seamless access to world-class diving.
          </p>
        </div>
      </section>

      {/* OVERVIEW + GALLERY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">Overview</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Comfort meets <span className="block font-semibold">island simplicity</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#667085]">
                The Sandscape offers modern accommodation tailored for divers and
                travelers. By booking through Scubachannel, you ensure a 
                fully coordinated itinerary including airport transfers and daily dive logistics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="/guesthousedisplay.jpg" alt="Exterior" className="rounded-2xl w-full h-64 object-cover shadow-md" />
             <img src="/guesthouseroom.jpg" alt="Room" className="rounded-2xl w-full h-64 object-cover shadow-md" />
          </div>
        </div>
      </section>

      {/* MAIN BOOKING CARD */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem] border bg-white shadow-sm lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[400px]">
            <img src={SANDSCAPE.image} alt="Main" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-medium">{SANDSCAPE.name}</h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#667085]">
              <MapPin className="h-4 w-4 text-[#0f766e]" />
              {SANDSCAPE.location}
            </div>
            <p className="mt-6 text-sm font-semibold text-[#0f766e]">{SANDSCAPE.price}</p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-6 py-4 text-white font-medium hover:bg-[#0d635c] transition-colors"
            >
              Request Booking via Scubachannel <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ROOMS TABLE */}
      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-12 overflow-x-auto rounded-[2rem] border bg-white">
            <table className="w-full text-sm">
              <thead className="bg-[#fcfaf6]">
                <tr>
                  <th className="p-4 text-left">Room</th>
                  <th className="p-4 text-left">Details</th>
                  <th className="p-4 text-center">Peak</th>
                  <th className="p-4 text-center">Off Peak</th>
                </tr>
              </thead>
              <tbody>
                {ROOMS.map((room, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4 font-medium">{room.name}</td>
                    <td className="p-4 text-[#667085] text-xs">{room.occupancy} • {room.bed}</td>
                    <td className="p-4 text-center">{room.peak}</td>
                    <td className="p-4 text-center">{room.offpeak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INCLUSIONS + EXTRAS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-medium">What's Included</h3>
            <div className="mt-6 space-y-3">
              {INCLUSIONS.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#0f766e]" />
                  <p className="text-sm text-[#667085]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Additional Charges</h3>
            <div className="mt-6 space-y-3">
              {EXTRAS.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#0f766e]" />
                  <p className="text-sm text-[#667085]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mt-10 space-y-6">
            {POLICIES.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-[#667085]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f2a37] py-24 text-white text-center">
        <h2 className="text-4xl font-light md:text-5xl">Ready to dive Fuvahmulah?</h2>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-8 py-4 text-sm font-medium text-white hover:scale-105 transition-all"
        >
          Book Your Package <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/9607930760?text=Hello%20Scubachannel%20Fuvahmulah,%20I%20would%20like%20to%20enquire%20about%20booking%20The%20Sandscape."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0f766e] px-5 py-3 text-white shadow-lg hover:scale-105 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.79 11.79 0 0012.02 0C5.38 0 .01 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0012.02 24C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.02 21.82c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.67.96.98-3.57-.24-.37A9.77 9.77 0 012.2 12c0-5.43 4.41-9.82 9.82-9.82 2.62 0 5.08 1.02 6.94 2.88A9.75 9.75 0 0121.82 12c0 5.41-4.39 9.82-9.8 9.82zm5.39-7.38c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.17-1.44-.07-.13-.27-.2-.57-.35z" />
        </svg>
        <span className="text-sm font-medium">Book Now</span>
      </a>

      {/* FOOTER - ADDED BACK HERE */}
      {/* FOOTER SECTION */}
      <footer className="bg-[#111827] pt-24 pb-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <img src="/logo.JPG" alt="Logo" className="h-12 w-12 rounded-full object-cover border border-white/20" />
                <div className="flex flex-col text-left">
                  <p className="font-['NasaFont'] text-sm tracking-[0.3em] text-white font-bold">
                    SCUBACHANNEL
                  </p>
                  <p className="font-['NasaFont'] text-[10px] tracking-[0.4em] text-white/60">
                    FUVAHMULAH
                  </p>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
                Fuvahmulah's premier diving specialist. We provide world-class diving experiences, 
                premium island stays, and seamless logistics for the ultimate tiger shark adventure.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="mt-6 space-y-4 text-sm text-gray-400">
                <li><a href="/courses" className="hover:text-white transition-colors">Diving Courses</a></li>
                <li><a href="/hotels/guest-houses" className="hover:text-white transition-colors">Guest Houses</a></li>
                <li><a href="/transfer" className="hover:text-white transition-colors">Transfers</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Book Now</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="mt-6 space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#0f766e]" />
                  Fuvahmulah, Maldives
                </li>
                <li>Email: info@scubachannel.mv</li>
                <li>WhatsApp: +960 7930760</li>
              </ul>
            </div>
          </div>

          {/* Socials & Copyright */}
          <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Scubachannel Fuvahmulah. All rights reserved.
            </p>
            {/* <div className="mt-6 flex items-center gap-6 text-gray-400 md:mt-0">
               <a href="#" className="hover:text-white transition-colors"><FaFacebookF className="h-5 w-5" /></a>
               <a href="#" className="hover:text-white transition-colors"><FaInstagram className="h-5 w-5" /></a>
             </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}