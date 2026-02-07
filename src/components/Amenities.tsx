"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const amenities = [
  {
    title: "Two Community Pools",
    description:
      "Cool off in one of two sparkling pools surrounded by loungers and lush landscaping. The perfect way to spend a Hamptons afternoon.",
    image: "/images/IMG_1438.jpg",
  },
  {
    title: "Pickleball & Tennis",
    description:
      "Brand new pickleball and tennis courts right in the community. Bring your racket and challenge your group to a match.",
    image: "/images/IMG_1436.jpg",
  },
  {
    title: "Turf Putting Green",
    description:
      "Practice your short game on the community putting green. Perfect prep before heading over to Shinnecock or one of the many local courses.",
    image: "/images/IMG_1437.jpg",
  },
  {
    title: "Fitness Center",
    description:
      "Stay on top of your routine with the on-site gym, equipped with cardio and strength training equipment.",
    image: null,
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-sand/50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
            Community
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-navy mt-3 mb-4">
            Community Amenities
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            More than just a place to stay. The community offers
            resort-style amenities that elevate your summer experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white overflow-hidden"
            >
              {amenity.image ? (
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="h-56 lg:h-64 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <div className="text-4xl mb-2">&#128170;</div>
                    <span className="text-sm tracking-wide">Fitness Center</span>
                  </div>
                </div>
              )}
              <div className="p-6 lg:p-8">
                <h3 className="font-serif text-xl text-navy mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
