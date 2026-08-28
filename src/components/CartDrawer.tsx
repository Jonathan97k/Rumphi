"use client";

import { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { openWhatsApp, generateOrderMessage } from "@/lib/whatsapp";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    isOpen,
    setIsOpen,
  } = useCart();

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    notes: "",
  });

  const handleOrder = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.location) {
      alert("Please fill in your name, phone number, and location.");
      return;
    }

    const message = generateOrderMessage(items, formData, total);
    openWhatsApp(message);
    clearCart();
    setShowOrderForm(false);
    setIsOpen(false);
    setFormData({ fullName: "", phoneNumber: "", location: "", notes: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-amber-900" />
            <h2 className="text-xl font-bold text-amber-900">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-amber-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-amber-900" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-amber-200 mx-auto mb-4" />
              <p className="text-amber-700">Your cart is empty</p>
            </div>
          ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-amber-50 rounded-xl p-4 border border-amber-100"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-amber-900">
                      {item.product.size} Rumphi Honey
                    </h3>
                    <p className="text-sm text-amber-600">
                      K{item.product.price.toLocaleString()} each
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-1 hover:bg-red-100 rounded-full transition-colors text-red-500"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center text-amber-900 hover:bg-amber-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center font-bold text-amber-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center text-amber-900 hover:bg-amber-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="font-bold text-amber-900">
                    K{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-amber-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-amber-900">
                Total
              </span>
              <span className="text-2xl font-bold text-amber-900">
                K{total.toLocaleString()}
              </span>
            </div>

            {!showOrderForm ? (
              <div className="space-y-3">
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  ORDER VIA WHATSAPP
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 py-3 rounded-xl font-medium transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-amber-900">
                  Complete Your Order
                </h3>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="Location *"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <textarea
                  placeholder="Additional Notes (optional)"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
                <button
                  onClick={handleOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  SEND ORDER ON WHATSAPP
                </button>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 py-3 rounded-xl font-medium transition-colors"
                >
                  Back to Cart
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}