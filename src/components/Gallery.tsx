"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
import Image from "next/image";

const images = [
  // Preview grid: variety across categories (first 9 shown)
  { src: "/images/IMG_1058.jpg", alt: "Front entrance with hydrangeas", tag: "Exterior" },
  { src: "/images/IMG_1405.jpg", alt: "Open living & dining area", tag: "Living Room" },
  { src: "/images/IMG_1401.jpg", alt: "Kitchen with white cabinetry", tag: "Kitchen" },
  { src: "/images/IMG_1423.jpg", alt: "Master bedroom with king bed", tag: "Bedroom" },
  { src: "/images/IMG_1421.jpg", alt: "Master bath walk-in shower", tag: "Bathroom" },
  { src: "/images/IMG_1434.jpg", alt: "Private patio with grill & hammock", tag: "Outdoor" },
  { src: "/images/IMG_1425.jpg", alt: "Lower-level sitting area", tag: "Bonus Room" },
  { src: "/images/IMG_1438.jpg", alt: "Community pool", tag: "Community" },
  // Living spaces
  { src: "/images/IMG_1406.jpg", alt: "Living room with sectional sofa", tag: "Living Room" },
  { src: "/images/IMG_1407.jpg", alt: "Entertainment center & wet bar", tag: "Living Room" },
  // Kitchen & Dining
  { src: "/images/IMG_1403.jpg", alt: "Kitchen to living room view", tag: "Kitchen" },
  { src: "/images/IMG_1402.jpg", alt: "Dining nook with bay windows", tag: "Dining" },
  { src: "/images/IMG_1404.jpg", alt: "Dining area with sputnik chandelier", tag: "Dining" },
  // Bedrooms
  { src: "/images/IMG_1424.jpg", alt: "Master bedroom with TV & desk", tag: "Bedroom" },
  { src: "/images/IMG_1418.jpg", alt: "Queen bedroom", tag: "Bedroom" },
  { src: "/images/IMG_1417.jpg", alt: "Twin bedroom", tag: "Bedroom" },
  // Bathrooms
  { src: "/images/IMG_1422.jpg", alt: "Master bath double vanity", tag: "Bathroom" },
  { src: "/images/IMG_1419.jpg", alt: "Full bath with tub", tag: "Bathroom" },
  { src: "/images/IMG_1420.jpg", alt: "Bathroom vanity detail", tag: "Bathroom" },
  { src: "/images/IMG_1412.jpg", alt: "Powder room", tag: "Bathroom" },
  // Entry / Stairs
  { src: "/images/IMG_1400.jpg", alt: "Entry hallway", tag: "Interior" },
  { src: "/images/IMG_1409.jpg", alt: "Staircase with ship model", tag: "Interior" },
  { src: "/images/IMG_1416.jpg", alt: "Staircase to second floor", tag: "Interior" },
  // Laundry
  { src: "/images/IMG_1414.jpg", alt: "In-unit washer & dryer", tag: "Interior" },
  // Basement
  { src: "/images/IMG_1426.jpg", alt: "Lower-level rec room with TV", tag: "Bonus Room" },
  { src: "/images/IMG_1427.jpg", alt: "Lower-level bathroom", tag: "Bonus Room" },
  { src: "/images/IMG_1428.jpg", alt: "Lower-level shower", tag: "Bonus Room" },
  // Community
  { src: "/images/IMG_1437.jpg", alt: "Putting green", tag: "Community" },
  { src: "/images/IMG_1436.jpg", alt: "Pickleball & tennis courts", tag: "Community" },
  { src: "/images/IMG_1435.jpg", alt: "Community pavilion & grounds", tag: "Community" },
];

// 1 large (2x2 = 4 cells) + 8 small = 12 cells = 3 full rows in 4-col grid
const GRID_COUNT = 9;

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <section id="gallery" className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Gallery
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy mt-3">
              Take a Look Around
            </h2>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {/* Large featured image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2 relative aspect-square cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 text-sm text-navy font-medium">
                  {images[0].tag}
                </span>
              </div>
            </motion.div>

            {/* Smaller images */}
            {images.slice(1, GRID_COUNT).map((img, i) => {
              const isLast = i === GRID_COUNT - 2;
              const remaining = images.length - GRID_COUNT;
              return (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                  className="relative aspect-square cursor-pointer group overflow-hidden"
                  onClick={() => openLightbox(i + 1)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  {isLast && remaining > 0 ? (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-lg font-medium tracking-wide">
                        +{remaining} more
                      </span>
                    </div>
                  ) : (
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-xs text-navy font-medium">
                        {img.tag}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* View all photos button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={() => openLightbox(0)}
              className="flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy text-sm tracking-wide hover:bg-navy hover:text-white transition-all duration-300"
            >
              <Grid3X3 size={16} />
              View All {images.length} Photos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/95 lightbox-overlay flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white/50 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Tag */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-3 py-1 text-white/70 text-xs tracking-wide">
              {images[lightboxIndex].tag}
            </div>

            {/* Nav buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh] mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {images[lightboxIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
