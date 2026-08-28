"use client";

import Image from "next/image";
import { ArrowDown, Droplets, Leaf, MapPin } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/data";

export default function Hero() {
  const { addItem } = useCart();

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
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
          poster="/500g.png"
        >
          <source
            src="https://assets.mixkit.co/videos/8596/8596-720.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-yellow-50/90" />
        {/* Honeycomb pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b45309' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-2 rounded-full mb-6">
              <Droplets className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">
                100% Natural
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-950 leading-tight mb-4">
              RUMPHI
              <br />
              <span className="text-amber-600">HONEY</span>
            </h1>

            <p className="text-xl md:text-2xl text-amber-800 font-medium mb-4">
              100% NATURAL
            </p>

            <h2 className="text-2xl md:text-3xl text-amber-900 font-semibold mb-6">
              Pure Honey.
              <br />
              Straight From Rumphi.
            </h2>

            <p className="text-lg text-amber-800/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover naturally sourced honey from Rumphi, Malawi — carefully
              packed and made for people who appreciate real, natural honey.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-amber-700">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <Droplets className="w-5 h-5" />
                <span className="text-sm font-medium">Pure & Raw</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">From Rumphi</span>
              </div>
            </div>

            {/* Price Display */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-amber-200">
                <span className="text-sm text-amber-700">250g</span>
                <span className="mx-2 text-amber-300">|</span>
                <span className="font-bold text-amber-900">K5,000</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-amber-200">
                <span className="text-sm text-amber-700">500g</span>
                <span className="mx-2 text-amber-300">|</span>
                <span className="font-bold text-amber-900">K10,000</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-600/25"
              >
                SHOP HONEY
              </button>
              <button
                onClick={scrollToBulk}
                className="bg-white hover:bg-amber-50 text-amber-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-amber-200 transition-all hover:scale-105"
              >
                BULK ENQUIRY
              </button>
            </div>
          </div>

          {/* Product Images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* 500g jar - back larger */}
              <div className="relative w-72 h-80 md:w-80 md:h-96">
                <Image
                  src="/500g.png"
                  alt="500g Rumphi Honey"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-amber-900 font-bold">K10,000</span>
                  <span className="text-amber-600 text-sm ml-1">500g</span>
                </div>
              </div>

              {/* 250g jar - front smaller */}
              <div className="absolute bottom-8 right-8 md:bottom-4 md:right-4 w-52 h-64 md:w-60 md:h-72">
                <Image
                  src="/250g.png"
                  alt="250g Rumphi Honey"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full font-bold shadow-lg text-sm">
                  100% Natural
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={scrollToProducts}
            className="flex flex-col items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}