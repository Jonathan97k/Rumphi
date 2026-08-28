"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const landscapeImages = [
  { src: "/rumphi-1.jpg", alt: "Rumphi hills and landscape" },
  { src: "/rumphi-2.jpg", alt: "Rumphi natural scenery" },
  { src: "/rumphi-3.jpg", alt: "Rumphi beautiful views" },
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % landscapeImages.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + landscapeImages.length) % landscapeImages.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-amber-50">
              {landscapeImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : "opacity-0 translate-x-full scale-95 -z-10"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-amber-900 hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-amber-900 hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {landscapeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-16 left-6 right-6 text-center text-white z-20">
              <p className="text-sm font-medium">Rumphi, Malawi — Nature's Paradise</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              FROM RUMPHI,
              <br />
              WITH NATURE&apos;S GOODNESS
            </h2>

            <div className="space-y-4 text-amber-800">
              <p className="text-lg">
                Rumphi Honey brings the natural goodness of honey from Rumphi,
                Malawi, to customers who value quality and simplicity.
              </p>

              <p className="text-lg">
                Our focus is simple: natural honey, carefully packed and made
                available to households, businesses and honey lovers.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-semibold">
                  Natural Source
                </span>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-semibold">
                  Quality Packed
                </span>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-semibold">
                  From Malawi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}