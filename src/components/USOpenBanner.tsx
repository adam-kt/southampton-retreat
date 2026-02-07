"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Flag } from "lucide-react";

export default function USOpenBanner() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const show = visible && !scrolled;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          <a
            href="#inquire"
            className="block relative bg-[#0c1f3d] group cursor-pointer"
          >
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 -skew-x-12 pointer-events-none"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            >
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </motion.div>

            {/* Bottom gold line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="flex items-center justify-center gap-3 lg:gap-6 py-3 lg:py-3.5">
                {/* Flag icon + pulsing ring */}
                <div className="relative flex-shrink-0 hidden sm:block">
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-gold/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <div className="relative w-7 h-7 flex items-center justify-center bg-gold/15 border border-gold/30 rounded-full">
                    <Flag size={12} className="text-gold" />
                  </div>
                </div>

                {/* Pulsing dot - mobile only */}
                <span className="relative flex h-2 w-2 flex-shrink-0 sm:hidden">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>

                {/* Text */}
                <p className="text-white text-xs lg:text-sm font-medium tracking-wide text-center">
                  <span className="text-gold font-semibold">US Open 2026</span>
                  <span className="text-white/30 mx-1.5 lg:mx-2.5">&#8212;</span>
                  <span className="text-white/80">Shinnecock Hills is just 1.5 miles away.</span>
                  <span className="hidden lg:inline text-white/50 ml-1">Book your stay and walk to the course.</span>
                </p>

                {/* CTA pill */}
                <span className="hidden md:inline-flex items-center gap-1.5 bg-gold/15 border border-gold/30 text-gold text-[11px] font-semibold uppercase tracking-wider px-3 py-1 group-hover:bg-gold/25 transition-all duration-300 flex-shrink-0 whitespace-nowrap">
                  Book Now
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setVisible(false);
              }}
              className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 p-1.5 text-white/25 hover:text-white/60 transition-colors z-20"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
