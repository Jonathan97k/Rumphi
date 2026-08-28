"use client";

import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER } from "@/lib/data";

export default function MobileBottomBar() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-amber-200 shadow-lg">
      <div className="flex">
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-amber-900 hover:bg-amber-50 transition-colors relative"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="font-semibold">Cart</span>
          {itemCount > 0 && (
            <span className="absolute top-2 right-1/4 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}