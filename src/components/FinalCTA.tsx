"use client";

import { Phone } from "lucide-react";
import { WHATSAPP_NUMBER_DISPLAY } from "@/lib/data";

export default function FinalCTA() {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBulk = () => {
    const element = document.querySelector("#bulk");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          TASTE THE GOODNESS
          <br />
          OF RUMPHI
        </h2>

        <p className="text-xl text-white/90 mb-8">
          100% natural honey, ready to order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToProducts}
            className="bg-white hover:bg-amber-50 text-amber-900 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            SHOP HONEY
          </button>
          <button
            onClick={scrollToBulk}
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-amber-700 transition-all hover:scale-105"
          >
            BULK ENQUIRY
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-white">
          <Phone className="w-5 h-5" />
          <span className="text-lg font-semibold">
            WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
          </span>
        </div>
      </div>
    </section>
  );
}