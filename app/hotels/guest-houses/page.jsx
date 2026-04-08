"use client";

import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import NavBar from "../../../components/NavBar";

const SANDSCAPE = {
  name: "The Sandscape",
  location: "Dhoondigan, Dhaairaa, Bodufannu Magu, Fuvahmulah",
  price: "From $50 / night",
  image: "/sand.jpg",
  contact: "+960 7780353",
  email: "stay@sandscape.mv",
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
    title: "Cancellation Policy",
    content:
      "100% charge applies if canceled 3–5 days before arrival depending on season. No-shows are fully charged.",
  },
  {
    title: "Reservation Policy",
    content:
      "All bookings must be confirmed via email or WhatsApp and are subject to availability.",
  },
  {
    title: "Important Notes",
    content:
      "Rates exclude green tax. Government tax changes may affect final pricing.",
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
          style={{ backgroundImage: "url('/fvm-3.JPG')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white pt-32">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Guest House
          </p>

          <h1 className="mt-4 text-5xl font-light md:text-6xl">
            The Sandscape
            <span className="block font-semibold">
              Boutique island stay
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80">
            A premium guesthouse in Fuvahmulah offering comfort, convenience,
            and seamless access to world-class diving experiences.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Overview
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Comfort meets
              <span className="block font-semibold">
                island simplicity
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#667085]">
            The Sandscape offers modern accommodation tailored for divers and
            travelers. With included transfers, breakfast, and essential
            amenities, it provides a smooth and enjoyable island stay.
          </p>
        </div>
      </section>

      {/* MAIN CARD */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem] border bg-white shadow-sm lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          
          <div className="relative min-h-[400px]">
            <img
              src={SANDSCAPE.image}
              alt="Sandscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="p-8 md:p-10">
            <h3 className="text-3xl font-medium">{SANDSCAPE.name}</h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-[#667085]">
              <MapPin className="h-4 w-4 text-[#0f766e]" />
              {SANDSCAPE.location}
            </div>

            <p className="mt-6 text-sm font-semibold text-[#0f766e]">
              {SANDSCAPE.price}
            </p>

            {/* CONTACT */}
            <div className="mt-6 space-y-2 text-sm text-[#667085]">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0f766e]" />
                {SANDSCAPE.contact}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#0f766e]" />
                {SANDSCAPE.email}
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium"
            >
              Enquire <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ROOMS + RATES */}
      <section className="bg-[#fcfaf6] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0f766e]">
              Rooms & Rates
            </p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Transparent pricing
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border bg-white">
            <table className="w-full text-sm">
              <thead className="bg-[#fcfaf6]">
                <tr>
                  <th className="p-4 text-left">Room</th>
                  <th className="p-4">Details</th>
                  <th className="p-4">Peak</th>
                  <th className="p-4">Off Peak</th>
                </tr>
              </thead>

              <tbody>
                {ROOMS.map((room, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4">{room.name}</td>
                    <td className="p-4 text-[#667085] text-xs">
                      {room.occupancy} <br />
                      {room.bed} <br />
                      {room.meal}
                    </td>
                    <td className="p-4">{room.peak}</td>
                    <td className="p-4">{room.offpeak}</td>
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
          <div className="text-center">
            <h2 className="text-4xl font-light md:text-5xl">
              Policies & Information
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            {POLICIES.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-[#667085]">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f2a37] py-24 text-white text-center">
        <h2 className="text-4xl font-light md:text-5xl">
          Book your stay at
          <span className="block font-semibold">The Sandscape</span>
        </h2>

        <p className="mt-6 text-white/70">
          Combine your accommodation with diving for the ultimate Fuvahmulah experience.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f2a37]"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </section>
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

    </div>
  );
}