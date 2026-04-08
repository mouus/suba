"use client";

import React, { useState } from "react";
import { ChevronDown, Loader2, Check } from "lucide-react";
import { neon } from "@neondatabase/serverless";

// --- CONSTANTS ---
const SERVICES = [
    "Dive",
    "PADI Courses",
    "Hotel",
    "Dive master internship",
    "Transfer (Flight / Ferry)",
    "Add extra dive",
];

const COUNTRY_CODES = [
    { code: "+960", flag: "🇲🇻", country: "Maldives" },
    { code: "+1", flag: "🇺🇸", country: "United States" },
    { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
    { code: "+39", flag: "🇮🇹", country: "Italy" },
    { code: "+49", flag: "🇩🇪", country: "Germany" },
    { code: "+91", flag: "🇮🇳", country: "India" },
    { code: "+61", flag: "🇦🇺", country: "Australia" },
];

// --- MAIN COMPONENT ---
export default function BookingPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [countryCode, setCountryCode] = useState("+960");
    const [guests, setGuests] = useState("Select guests");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
        );
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            country: formData.get("country"),
            whatsapp: `${countryCode} ${formData.get("phone")}`,
            arrival: formData.get("arrival"),
            departure: formData.get("departure"),
            guests: guests,
            services: selectedServices,
            message: formData.get("message"),
        };

        try {
            // Note: In a real production app, move this fetch to a separate /api/route 
            // or a Server Action file to keep your DB URL hidden from the browser.
            const res = await fetch("/api/bookings", { 
                method: "POST", 
                body: JSON.stringify(data) 
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            alert("Connection error. Check your database settings.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6f1e8] px-4">
                <div className="text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Check className="h-10 w-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#1f2a37]">Booking Received!</h1>
                    <p className="mt-2 text-[#7b7b7b]">We will get back to you on WhatsApp or Email shortly.</p>
                    <button onClick={() => window.location.href = "/"} className="mt-8 rounded-full bg-[#5f8fff] px-8 py-3 text-white font-medium">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f6f1e8] text-[#1f2a37]">
            <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="overflow-hidden rounded-[2.5rem] border border-[#e7dfd3] bg-white shadow-[0_20px_60px_rgba(31,42,55,0.06)]">
                        <div className="px-6 py-10 sm:px-10 sm:py-12">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Reserve now pay later</h1>
                                <p className="mt-3 text-sm text-[#7b7b7b] sm:text-base">Secure your dive spot in Fuvahmulah today.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Name *">
                                        <Input name="name" required placeholder="Full Name" />
                                    </Field>

                                    <Field label="Email *">
                                        <Input name="email" type="email" required placeholder="email@example.com" />
                                    </Field>

                                    <Field label="Country">
                                        <Input name="country" placeholder="Your Country" />
                                    </Field>

                                    <Field label="WhatsApp Number">
                                        <div className="flex items-center rounded-full bg-[#efefef] px-4 py-3.5">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="mr-2 max-w-[100px] bg-transparent text-sm font-medium outline-none"
                                            >
                                                {COUNTRY_CODES.map((item) => (
                                                    <option key={item.code} value={item.code}>{item.flag} {item.code}</option>
                                                ))}
                                            </select>
                                            <input name="phone" type="tel" placeholder="000 0000" className="w-full bg-transparent text-sm outline-none" />
                                        </div>
                                    </Field>

                                    <Field label="Expected Arrival *">
                                        <Input name="arrival" type="date" required />
                                    </Field>

                                    <Field label="Expected Departure *">
                                        <Input name="departure" type="date" required />
                                    </Field>
                                </div>

                                <Field label="Number of Guest *">
                                    <div className="relative">
                                        <select
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                            className="w-full appearance-none rounded-full bg-[#efefef] px-5 py-4 text-sm outline-none"
                                        >
                                            <option>Select guests</option>
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3 Guests</option>
                                            <option>4 Guests</option>
                                            <option>5+ Guests</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
                                    </div>
                                </Field>

                                <div>
                                    <p className="mb-4 text-sm font-semibold">Select the service *</p>
                                    <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                                        {SERVICES.map((service) => {
                                            const checked = selectedServices.includes(service);
                                            return (
                                                <label key={service} className="flex cursor-pointer items-center gap-3 text-[15px] font-medium">
                                                    <div className={`flex h-[18px] w-[18px] items-center justify-center rounded border transition ${checked ? "bg-[#0f766e] border-[#0f766e]" : "bg-white border-gray-300"}`}>
                                                        <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleService(service)} />
                                                        {checked && <div className="h-2 w-2 rounded-sm bg-white" />}
                                                    </div>
                                                    {service}
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                <Field label="Message">
                                    <textarea name="message" rows={4} className="w-full rounded-[1.35rem] bg-[#efefef] px-5 py-4 text-sm outline-none" placeholder="Certifications, gear sizes, or special requests..." />
                                </Field>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex w-full items-center justify-center rounded-full bg-[#5f8fff] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:bg-gray-400"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : "Send Booking Request"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- HELPER COMPONENTS ---
function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col">
            <label className="mb-2.5 block text-sm font-semibold text-[#1f1f1f]">{label}</label>
            {children}
        </div>
    );
}

function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="w-full rounded-full bg-[#efefef] px-5 py-4 text-sm outline-none placeholder:text-[#a8a8a8] text-[#4d4d4d]"
        />
    );
}