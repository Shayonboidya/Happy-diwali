"use client";

import { motion } from "framer-motion";
import { Flame, Heart, Sun } from "lucide-react";
import SectionTitle from "./SectionTitle";

const WISHES = [
  { icon: Sun, text: "May your life shine as bright as the Diwali lights." },
  { icon: Flame, text: "May happiness and prosperity always surround you." },
  { icon: Heart, text: "Let positivity, love and kindness illuminate your world." },
];

export default function Wishes() {
  return (
    <section className="relative px-6 py-28">
      <SectionTitle title="Diwali Wishes" />
      <ul className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {WISHES.map(({ icon: Icon, text }, i) => (
          <motion.li key={text} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.15, duration: 0.8 }} whileHover={{ y: -10, scale: 1.02 }}
            className="glass group rounded-3xl p-8 text-center transition-shadow hover:shadow-[0_0_50px_rgba(255,170,60,.35)]">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold transition-transform duration-500 group-hover:rotate-[360deg]">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="text-2xl italic leading-relaxed text-amber-50">{text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
