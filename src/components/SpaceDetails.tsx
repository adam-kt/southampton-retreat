"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  UtensilsCrossed,
  Sofa,
  TreePine,
  Wifi,
  AirVent,
  ParkingSquare,
  Tv,
  WashingMachine,
  Armchair,
} from "lucide-react";

const rooms = [
  {
    name: "Primary Bedroom",
    description: "King bed with full ensuite bathroom and walk-in shower",
    icon: BedDouble,
  },
  {
    name: "Second Bedroom",
    description: "Queen bed with access to full bath with tub",
    icon: BedDouble,
  },
  {
    name: "Third Bedroom",
    description: "Two twin beds, perfect for kids or guests",
    icon: BedDouble,
  },
  {
    name: "Living Room",
    description: "Open-concept living area with sectional sofa and wet bar",
    icon: Sofa,
  },
  {
    name: "Full Kitchen",
    description: "White cabinetry, stainless appliances, and dining nook",
    icon: UtensilsCrossed,
  },
  {
    name: "Lower-Level Bonus Room",
    description: "Den with seating, TV, and full bathroom \u2014 extra living space",
    icon: Armchair,
  },
  {
    name: "Private Patio",
    description:
      "Composite deck with dining set, lounge chairs, hammock, and Weber grill",
    icon: TreePine,
  },
];

const features = [
  { label: "High-Speed WiFi", icon: Wifi },
  { label: "Central A/C", icon: AirVent },
  { label: "Smart TV", icon: Tv },
  { label: "2 Parking Spots", icon: ParkingSquare },
  { label: "Washer & Dryer", icon: WashingMachine },
  { label: "2.5 Bathrooms", icon: Bath },
];

export default function SpaceDetails() {
  return (
    <section id="space" className="py-20 lg:py-28 bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              The Space
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy mt-3 mb-6">
              Your Southampton Retreat
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                This beautifully appointed three-bedroom condo offers the
                perfect blend of comfort and convenience for your Hamptons
                getaway. Recently updated with modern finishes, the unit
                features an open-concept living and dining area that flows
                seamlessly into the private outdoor patio.
              </p>
              <p>
                The primary suite boasts a king-size bed and a full ensuite
                bathroom with a walk-in shower. The second bedroom features a
                queen bed, while the third bedroom is fitted with two twin
                beds &mdash; ideal for families or groups.
              </p>
              <p>
                A finished lower level adds a bonus den with comfortable seating,
                TV, and its own full bathroom &mdash; great for late-night movie
                sessions or extra privacy. Step outside to your private patio
                with a hammock, Weber grill, and dining set for summer evenings.
              </p>
            </div>

            {/* Quick features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <feat.icon size={18} className="text-gold flex-shrink-0" />
                  <span>{feat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Room breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Room by Room
            </span>
            <h3 className="font-serif text-2xl text-navy mt-3 mb-8">
              Every Detail Considered
            </h3>
            <div className="space-y-0">
              {rooms.map((room, i) => (
                <motion.div
                  key={room.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-5 py-5 border-b border-sand-dark/50 last:border-b-0"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-sand flex-shrink-0">
                    <room.icon size={18} className="text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">{room.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {room.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
