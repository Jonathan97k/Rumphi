"use client";

import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items, updateQuantity } = useCart();
  const cartItem = items.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-shadow">
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-amber-100 to-amber-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-32 mx-auto mb-3 bg-gradient-to-b from-amber-300 to-amber-500 rounded-xl shadow-inner" />
            <p className="text-amber-700 font-medium text-sm">
              {product.size} Jar
            </p>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {product.size}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">
          {product.size} Rumphi Honey
        </h3>
        <p className="text-amber-700 text-sm mb-4">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-amber-900">
            K{product.price.toLocaleString()}
          </span>
          <span className="text-sm text-amber-600">{product.size}</span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => addItem(product)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            ADD TO CART
          </button>
        ) : (
          <div className="flex items-center justify-between bg-amber-50 rounded-xl p-2">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center text-amber-900 hover:bg-amber-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-lg font-bold text-amber-900">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center text-amber-900 hover:bg-amber-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}