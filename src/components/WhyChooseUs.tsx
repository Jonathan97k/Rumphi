"use client";

import { Leaf, Droplets, MapPin, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% NATURAL",
    description: "Naturally sourced honey from Rumphi.",
  },
  {
    icon: Droplets,
    title: "PURE & SIMPLE",
    description:
      "Honey presented with minimal processing claims only where appropriate.",
  },
  {
    icon: MapPin,
    title: "FROM RUMPHI",
    description: "Celebrating honey from one of Malawi's beautiful regions.",
  },
  {
    icon: Heart,
    title: "PACKED WITH CARE",
    description: "Carefully prepared and packed for our customers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Quality and authenticity in every drop
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-amber-700 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}