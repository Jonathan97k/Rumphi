"use client";

import { Phone } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Honey", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Bulk Orders", href: "#bulk" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-amber-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src="/logo.png" alt="Rumphi Honey" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  RUMPHI HONEY
                </span>
                <span className="text-sm text-amber-400 tracking-widest">
                  100% NATURAL
                </span>
              </div>
            </div>
            <p className="text-amber-300/80 mb-6">
              Premium natural honey sourced from Rumphi, Malawi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-amber-300/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-300/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-amber-300/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-amber-800/50 text-center">
          <p className="text-amber-400/60 text-sm">
            © 2026 Rumphi Honey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}