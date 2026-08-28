"use client";

import { ShoppingCart, CheckCircle, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    number: "01",
    title: "CHOOSE YOUR HONEY",
    description: "Select 250g or 500g and add it to your cart.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "CONFIRM YOUR DETAILS",
    description: "Enter your name, phone number and location.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "ORDER ON WHATSAPP",
    description:
      "Send your completed order directly to Rumphi Honey on WhatsApp.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            HOW TO ORDER
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Simple steps to get your honey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-amber-200" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-12 h-12 text-amber-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-amber-700">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <p className="text-amber-800">
            <span className="font-semibold">For large quantities:</span> Use our
            Bulk Order form to request a quotation.
          </p>
        </div>
      </div>
    </section>
  );
}