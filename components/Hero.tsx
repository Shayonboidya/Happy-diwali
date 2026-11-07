"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Diya from "./Diya";
import Mandala from "./Mandala";

const words = ["✨", "Happy", "Diwali", "✨"];

export default function Hero({ onCelebrate }: { onCelebrate: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Mandala className="mandala absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 opacity-[.13]" />

      <motion.div initial={{ opacity: 0, scale: 0.6, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 mb-6">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <Diya size={260} className="mx-auto w-52 sm:w-64 md:w-80" />
        </motion.div>
      </motion.div>

      <h1 className="relative z-10 font-display text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
        {words.map((w, i) => (
          <motion.span key={i} initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5 + i * 0.22, duration: 0.9 }} className={`mr-3 inline-block last:mr-0 ${i % 3 === 0 ? "" : "text-gold"}`}>
            {w}
          </motion.span>
        ))}
      </h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1.2 }}
        className="relative z-10 mt-6 max-w-xl font-body text-xl italic leading-relaxed text-amber-100/90 sm:text-2xl">
        May the Festival of Lights Fill Your Life With Happiness, Peace &amp; Prosperity.
      </motion.p>

      <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} onClick={onCelebrate}
        className="relative z-10 mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron px-8 py-4 font-display text-sm font-bold text-night shadow-[0_0_40px_rgba(255,153,51,.55)] outline-none transition-shadow hover:shadow-[0_0_70px_rgba(255,190,80,.8)] focus-visible:ring-4 focus-visible:ring-amber-200 sm:text-base">
        Celebrate the Magic <Sparkles className="h-5 w-5" aria-hidden="true" />
      </motion.button>

      <a href="#diyas" aria-label="Scroll to the diyas" className="absolute bottom-8 z-10 text-gold/80 outline-none focus-visible:ring-2 focus-visible:ring-gold">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block"><ChevronDown className="h-8 w-8" /></motion.span>
      </a>
    </section>
  );
}
