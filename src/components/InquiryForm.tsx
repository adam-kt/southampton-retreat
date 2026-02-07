"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Users, Mail, Phone, MessageSquare } from "lucide-react";

export default function InquiryForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-white border border-sand-dark focus:border-navy focus:outline-none transition-colors duration-300 text-sm placeholder:text-foreground/30";

  return (
    <section
      id="inquire"
      className="py-20 lg:py-28 bg-navy px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Inquire
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mt-3 mb-6">
              Plan Your Hamptons Summer
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              Available for weekly or monthly rentals throughout the summer
              season. Reach out to check availability, pricing, and to
              discuss your stay.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Calendar size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Season</div>
                  <div className="text-xs text-white/50">
                    Memorial Day through Labor Day
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Users size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Sleeps 6</div>
                  <div className="text-xs text-white/50">
                    King + Queen + 2 Twins
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    Direct Booking
                  </div>
                  <div className="text-xs text-white/50">
                    No platform fees &mdash; book directly with the owner
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gold/20 mb-6">
                  <Send className="text-gold" size={24} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">
                  Thank You
                </h3>
                <p className="text-white/60 text-sm">
                  Your inquiry has been received.
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone
                        size={14}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"
                      />
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className={`${inputClasses} pl-10`}
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                      Number of Guests
                    </label>
                    <select
                      value={formState.guests}
                      onChange={(e) =>
                        setFormState({ ...formState, guests: e.target.value })
                      }
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Select</option>
                      <option value="1-2">1-2 guests</option>
                      <option value="3-4">3-4 guests</option>
                      <option value="5-6">5-6 guests</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                    Preferred Dates
                  </label>
                  <div className="relative">
                    <Calendar
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"
                    />
                    <input
                      type="text"
                      value={formState.dates}
                      onChange={(e) =>
                        setFormState({ ...formState, dates: e.target.value })
                      }
                      className={`${inputClasses} pl-10`}
                      placeholder="e.g., July 4 – July 11, 2026"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={14}
                      className="absolute left-4 top-4 text-foreground/30"
                    />
                    <textarea
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={`${inputClasses} pl-10 h-28 resize-none`}
                      placeholder="Tell us about your trip..."
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
                <p className="text-white/30 text-xs text-center mt-2">
                  We typically respond within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
