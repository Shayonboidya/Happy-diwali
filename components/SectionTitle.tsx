"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
      className="mx-auto mb-14 max-w-2xl px-6 text-center">
      <h2 className="text-gold font-display text-3xl font-bold sm:text-5xl">{title}</h2>
      <div aria-hidden="true" className="mx-auto mt-5 flex items-center justify-center gap-3 text-gold/80">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" /><span>🪔</span><span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
      </div>
      {sub && <p className="mt-5 text-xl italic text-amber-100/75">{sub}</p>}
    </motion.header>
  );
}
