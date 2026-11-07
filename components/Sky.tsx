"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { rand } from "@/lib/rand";

const STARS = Array.from({ length: 70 }, (_, i) => ({
  left: `${(rand(i, 1) * 100).toFixed(1)}%`, top: `${(rand(i, 2) * 130).toFixed(1)}vh`,
  size: 1 + rand(i, 3) * 2.2, d: `${(2 + rand(i, 4) * 4).toFixed(1)}s`, delay: `${(rand(i, 5) * 5).toFixed(1)}s`,
}));
const SPARKS = Array.from({ length: 26 }, (_, i) => ({
  "--x": `${(rand(i, 6) * 100).toFixed(1)}%`, "--s": `${(3 + rand(i, 7) * 4).toFixed(1)}px`,
  "--d": `${(9 + rand(i, 8) * 10).toFixed(1)}s`, "--delay": `-${(rand(i, 9) * 18).toFixed(1)}s`,
  "--dx": `${((rand(i, 10) - 0.5) * 140).toFixed(0)}px`,
}) as React.CSSProperties);

const starStyle = (s: (typeof STARS)[number]) =>
  ({ left: s.left, top: s.top, width: s.size, height: s.size, "--d": s.d, "--delay": s.delay }) as React.CSSProperties;

/** Fixed night-sky backdrop: parallax stars, moon glow and rising golden embers. */
export default function Sky() {
  const { scrollYProgress } = useScroll();
  const far = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const near = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const moon = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: moon }} className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-amber-100/10 blur-3xl" />
      <motion.div style={{ y: far }} className="absolute inset-0">
        {STARS.filter((_, i) => i % 2 === 0).map((s, i) => (
          <span key={i} className="star absolute rounded-full bg-amber-100" style={starStyle(s)} />
        ))}
      </motion.div>
      <motion.div style={{ y: near }} className="absolute inset-0">
        {STARS.filter((_, i) => i % 2 === 1).map((s, i) => (
          <span key={i} className="star absolute rounded-full bg-white shadow-[0_0_6px_#fff]" style={starStyle(s)} />
        ))}
      </motion.div>
      <div className="absolute inset-0">{SPARKS.map((st, i) => <span key={i} className="spark" style={st} />)}</div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ember/10 to-transparent" />
    </div>
  );
}
