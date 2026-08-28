"use client";

import { useState } from "react";
import { Package, ArrowRight } from "lucide-react";
import { BulkOrderFormData } from "@/lib/data";
import { openWhatsApp, generateBulkMessage } from "@/lib/whatsapp";

export default function BulkOrderSection() {
  const [formData, setFormData] = useState<BulkOrderFormData>({
    fullName: "",
    phoneNumber: "",
    location: "",
    quantity: 1,
    unit: "KG",
    packaging: "Not sure",
    message: "",
  });

  const handleSubmit = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.location) {
      alert("Please fill in your name, phone number, and location.");
      return;
    }

    const message = generateBulkMessage(formData);
    openWhatsApp(message);
    setFormData({
      fullName: "",
      phoneNumber: "",
      location: "",
      quantity: 1,
      unit: "KG",
      packaging: "Not sure",
      message: "",
    });
  };

  return (
    <section id="bulk" className="py-20 bg-gradient-to-br from-amber-900 to-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-800/50 px-4 py-2 rounded-full mb-6">
            <Package className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200">
              Wholesale & Bulk
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NEED HONEY IN BULK?
          </h2>

          <h3 className="text-2xl text-amber-200 mb-4">
            Buying Honey in Large Quantities?
          </h3>

          <p className="text-lg text-amber-300/80 max-w-2xl mx-auto">
            Whether you&apos;re buying for resale, a shop, restaurant, events,
            hospitality or other business needs, tell us how much honey you
            require and we&apos;ll get back to you with a quotation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <input
            type="text"
            placeholder="Location *"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400 mb-4"
          />

          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm text-amber-300 mb-2">
                Quantity Required
              </label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: parseInt(e.target.value) || 1,
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm text-amber-300 mb-2">Unit</label>
              <select
                value={formData.unit}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    unit: e.target.value as "KG" | "LITRES",
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="KG" className="text-amber-900">
                  KG
                </option>
                <option value="LITRES" className="text-amber-900">
                  LITRES
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-amber-300 mb-2">
                Packaging
              </label>
              <select
                value={formData.packaging}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    packaging: e.target.value as
                      | "Bottles"
                      | "Containers"
                      | "Other"
                      | "Not sure",
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="Bottles" className="text-amber-900">
                  Bottles
                </option>
                <option value="Containers" className="text-amber-900">
                  Containers
                </option>
                <option value="Other" className="text-amber-900">
                  Other
                </option>
                <option value="Not sure" className="text-amber-900">
                  Not sure
                </option>
              </select>
            </div>
          </div>

          <textarea
            placeholder="Additional message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none mb-6"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
          >
            GET A QUOTE ON WHATSAPP
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}