"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car, Waves, Flag, ShoppingBag, Wine } from "lucide-react";

const distances = [
  {
    icon: ShoppingBag,
    place: "Southampton Village",
    distance: "< 2 miles",
    time: "5 min drive",
  },
  {
    icon: Waves,
    place: "Coopers Beach",
    distance: "< 3 miles",
    time: "7 min drive",
  },
  {
    icon: Flag,
    place: "Shinnecock Hills Golf Club",
    distance: "1.5 miles",
    time: "4 min drive",
  },
  {
    icon: Wine,
    place: "Hamptons Restaurants & Nightlife",
    distance: "2-5 miles",
    time: "5-10 min",
  },
  {
    icon: Car,
    place: "Montauk",
    distance: "~30 miles",
    time: "45 min drive",
  },
  {
    icon: MapPin,
    place: "NYC (via LIE)",
    distance: "~90 miles",
    time: "~2 hours",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Map / Location visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Location
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy mt-3 mb-6">
              Heart of the Hamptons
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Perfectly situated in Southampton, this property places you at
              the center of everything the East End has to offer. Minutes from
              world-class beaches, championship golf, and the charming shops
              and restaurants of Southampton Village.
            </p>

            {/* Embedded map */}
            <div className="relative w-full aspect-[4/3] bg-sand overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Southampton,+NY+11968&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property location map"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Distances */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Getting Around
            </span>
            <h3 className="font-serif text-2xl text-navy mt-3 mb-8">
              Everything Within Reach
            </h3>

            <div className="space-y-0">
              {distances.map((item, i) => (
                <motion.div
                  key={item.place}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-5 py-5 border-b border-sand-dark/50 last:border-b-0 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-sand group-hover:bg-navy transition-colors duration-300 flex-shrink-0">
                    <item.icon
                      size={18}
                      className="text-navy group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-navy text-sm">
                      {item.place}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-foreground/50 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin size={10} />
                        {item.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {item.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Southampton highlights */}
            <div className="mt-10 p-6 bg-cream">
              <h4 className="font-serif text-navy text-lg mb-4">
                Southampton Highlights
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  Coopers Beach &mdash; consistently ranked among the top beaches in America
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  Southampton Village &mdash; boutique shopping, fine dining, art galleries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  Shinnecock Hills &mdash; host of multiple US Open championships
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  Hamptons wine country &mdash; dozens of vineyards and tasting rooms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  Water sports &mdash; surfing, kayaking, paddle boarding, and sailing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
