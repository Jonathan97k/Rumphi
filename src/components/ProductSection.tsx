"use client";

import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            OUR HONEY
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Natural goodness, packed with care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}