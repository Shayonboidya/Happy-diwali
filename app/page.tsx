"use client";

import { useRef } from "react";
import Celebration from "@/components/Celebration";
import DiyaRow from "@/components/DiyaRow";
import Fireworks, { FireworksHandle } from "@/components/Fireworks";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Sky from "@/components/Sky";
import Wishes from "@/components/Wishes";

export default function Page() {
  const fw = useRef<FireworksHandle>(null);
  return (
    <>
      <Sky />
      <Fireworks ref={fw} />
      <main className="relative z-10">
        <Hero onCelebrate={() => fw.current?.finale()} />
        <DiyaRow />
        <Wishes />
        <Celebration onLaunch={() => fw.current?.launch(4)} onFinale={() => fw.current?.finale()} />
      </main>
      <div className="relative z-10"><Footer /></div>
    </>
  );
}
