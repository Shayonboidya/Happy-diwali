"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Celebration({ onLaunch, onFinale }: { onLaunch: () => void; onFinale: () => void }) {
  const btn = "inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3 font-display text-sm font-bold outline-none transition focus-visible:ring-4 focus-visible:ring-amber-200";
  return (
    <section className="relative px-6 py-32 text-center">
      <SectionTitle title="Light Up the Sky" sub="Launch a burst of fireworks, or let the grand finale begin." />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
        <button onClick={onLaunch} className={`${btn} bg-gold/10 text-gold hover:bg-gold hover:text-night`}>
          <Rocket className="h-4 w-4" aria-hidden="true" /> Launch fireworks
        </button>
        <button onClick={onFinale} className={`${btn} bg-gradient-to-r from-saffron to-gold text-night shadow-[0_0_30px_rgba(255,153,51,.5)] hover:scale-105`}>
          Grand finale
        </button>
      </motion.div>
    </section>
  );
}
