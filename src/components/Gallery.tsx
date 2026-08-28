"use client";

import Image from "next/image";

const galleryItems = [
  {
    title: "500g Jar",
    description: "Our premium 500g honey jar",
    image: "/500g.png",
  },
  {
    title: "250g Jar",
    description: "Perfect 250g size for everyday use",
    image: "/250g.png",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            GALLERY
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            A glimpse into the world of Rumphi Honey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover p-4 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-amber-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-amber-600 text-sm mt-6">
          Premium honey from Rumphi, Malawi
        </p>
      </div>
    </section>
  );
}