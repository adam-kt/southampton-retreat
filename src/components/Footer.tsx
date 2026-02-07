"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-serif text-white text-lg">
              Southampton Retreat
            </h3>
            <div className="flex items-center gap-1.5 text-white/40 text-sm mt-1">
              <MapPin size={12} />
              <span>Southampton, New York</span>
            </div>
          </motion.div>
          <div className="flex items-center gap-8 text-white/40 text-sm">
            <a href="#gallery" className="hover:text-white/70 transition-colors">
              Gallery
            </a>
            <a href="#space" className="hover:text-white/70 transition-colors">
              The Space
            </a>
            <a href="#amenities" className="hover:text-white/70 transition-colors">
              Amenities
            </a>
            <a href="#inquire" className="hover:text-white/70 transition-colors">
              Inquire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
