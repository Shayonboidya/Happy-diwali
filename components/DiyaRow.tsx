"use client";

import { motion } from "framer-motion";
import Diya from "./Diya";
import SectionTitle from "./SectionTitle";
import { rand } from "@/lib/rand";

const SIZES = [120, 160, 200, 160, 120];

export default function DiyaRow() {
  return (
    <section id="diyas" className="relative py-28">
      <SectionTitle title="A Row of Glowing Diyas" sub="Hover over a diya and watch its light grow." />
      <ul className="mx-auto flex max-w-6xl flex-wrap items-end justify-center gap-x-6 gap-y-14 px-6">
        {SIZES.map((size, i) => (
          <motion.li key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.9 }}>
            <motion.div animate={{ y: [0, -9 - i, 0] }} transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              tabIndex={0} className="diya relative cursor-pointer">
              {Array.from({ length: 5 }, (_, k) => (
                <motion.span key={k} aria-hidden="true" className="absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_#ffb347]"
                  style={{ left: `${15 + rand(i * 7 + k, 11) * 70}%`, top: `${rand(i * 7 + k, 12) * 40}%` }}
                  animate={{ y: [0, -40, -70], opacity: [0, 1, 0] }} transition={{ duration: 3 + rand(k, i) * 2, repeat: Infinity, delay: rand(i + k, 13) * 3 }} />
              ))}
              <Diya size={size} className="w-28 sm:w-auto" />
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
