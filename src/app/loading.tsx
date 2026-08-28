"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-amber-50 flex items-center justify-center">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading 1.5s ease-in-out infinite;
        }
      ` }} />
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/logo.png"
          alt="Rumphi Honey"
          width={120}
          height={120}
          className="animate-pulse"
        />
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold text-amber-900 tracking-tight">
            RUMPHI HONEY
          </span>
          <span className="text-xs text-amber-700 tracking-widest">
            100% NATURAL
          </span>
        </div>
        <div className="w-24 h-1 bg-amber-200 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-amber-600 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}