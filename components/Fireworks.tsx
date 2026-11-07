"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export type FireworksHandle = { launch: (count?: number) => void; finale: () => void };

type Spark = { x: number; y: number; vx: number; vy: number; life: number; max: number; hue: number; size: number; gold: boolean };
type Rocket = { x: number; y: number; vy: number; targetY: number; hue: number };

const MAX_SPARKS = 900;

/** Full-screen canvas fireworks. Random bursts in the sky + imperative launch() for buttons. */
const Fireworks = forwardRef<FireworksHandle>(function Fireworks(_, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const api = useRef<FireworksHandle>({ launch: () => {}, finale: () => {} });

  useImperativeHandle(ref, () => ({ launch: (n) => api.current.launch(n), finale: () => api.current.finale() }), []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, timer = 0, last = 0;
    const sparks: Spark[] = [];
    const rockets: Rocket[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const burst = (x: number, y: number, hue: number) => {
      const count = w < 640 ? 45 : 80;
      for (let i = 0; i < count; i++) {
        const a = (Math.PI * 2 * i) / count + Math.random() * 0.2;
        const sp = 1.2 + Math.random() * (w < 640 ? 3 : 4.2);
        const gold = Math.random() < 0.35;
        sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0, max: 60 + Math.random() * 45, hue: gold ? 43 : hue, size: 1 + Math.random() * 1.6, gold });
      }
      if (sparks.length > MAX_SPARKS) sparks.splice(0, sparks.length - MAX_SPARKS);
    };

    const launchOne = () => {
      rockets.push({ x: w * (0.12 + Math.random() * 0.76), y: h, vy: -(9 + Math.random() * 4), targetY: h * (0.12 + Math.random() * 0.33), hue: [15, 30, 45, 330, 190, 280][Math.floor(Math.random() * 6)] });
    };

    api.current = {
      launch: (n = 1) => { for (let i = 0; i < n; i++) window.setTimeout(launchOne, i * 220); },
      finale: () => { for (let i = 0; i < 12; i++) window.setTimeout(launchOne, i * 160); },
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (t - last < 14) return;
      last = t;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy; r.vy *= 0.985;
        ctx.fillStyle = "#ffe9a8"; ctx.beginPath(); ctx.arc(r.x, r.y, 2, 0, 7); ctx.fill();
        if (r.y <= r.targetY || r.vy > -2) { burst(r.x, r.y, r.hue); rockets.splice(i, 1); }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++; s.vx *= 0.975; s.vy = s.vy * 0.975 + 0.045; s.x += s.vx; s.y += s.vy;
        if (s.life > s.max) { sparks.splice(i, 1); continue; }
        const k = 1 - s.life / s.max;
        ctx.fillStyle = `hsla(${s.hue},100%,${s.gold ? 68 : 60}%,${k})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size * (0.4 + k), 0, 7); ctx.fill();
        if (s.gold && Math.random() < 0.08) { ctx.fillStyle = `rgba(255,240,180,${k})`; ctx.fillRect(s.x + Math.random() * 6 - 3, s.y + Math.random() * 6 - 3, 1.2, 1.2); }
      }
    };

    const schedule = () => {
      timer = window.setTimeout(() => { if (!document.hidden) launchOne(); schedule(); }, 1800 + Math.random() * 2200);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(frame);
    if (!reduced) schedule();
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
});

export default Fireworks;
