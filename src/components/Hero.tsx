"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, BedDouble, Bath, Maximize } from "lucide-react";
import Image from "next/image";

const heroImages = [
  { src: "/images/IMG_1058.jpg", alt: "Charming entrance with hydrangeas" },
  { src: "/images/IMG_1405.jpg", alt: "Open-concept living and dining area" },
  { src: "/images/IMG_1434.jpg", alt: "Private patio with outdoor dining" },
  { src: "/images/IMG_1423.jpg", alt: "Master bedroom with king bed" },
  { src: "/images/IMG_1438.jpg", alt: "Community pool" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image slideshow */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-0.5 transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-4 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 lg:px-8 pb-8 lg:pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
              <MapPin size={14} />
              <span className="tracking-wide">Southampton, New York</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-light leading-tight mb-4">
              Your Southampton
              <br />
              Summer Starts Here
            </h1>
            <p className="text-white/80 text-lg mb-6 max-w-xl">
              A modern 3-bedroom condo in the heart of the Hamptons.
              Available for short-term summer rentals.
            </p>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <BedDouble size={16} />
                <span>3 Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={16} />
                <span>2.5 Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={16} />
                <span>~1,500 sq ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center text-xs">&#9733;</span>
                <span>Private Community</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
