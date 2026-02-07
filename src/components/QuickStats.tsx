"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "3", label: "Bedrooms", sublabel: "King · Queen · 2 Twins" },
  { number: "2.5", label: "Bathrooms", sublabel: "Ensuite · Full · Half" },
  { number: "6", label: "Guests", sublabel: "Maximum occupancy" },
  { number: "2", label: "Pools", sublabel: "Community access" },
];

export default function QuickStats() {
  return (
    <section className="bg-white py-16 px-6 lg:px-8 border-b border-sand">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl lg:text-5xl text-navy font-light">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-foreground/40 mt-0.5">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
