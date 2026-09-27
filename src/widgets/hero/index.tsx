"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById("skills")?.scrollIntoView();
  };

  return (
    <section
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden font-sans text-foreground select-none"
    >
      {/* Center Giant Stacked Typography */}
      <div className="pointer-events-none relative z-20">
        <h1 className="text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] font-black leading-[0.75] tracking-tighter flex flex-col items-center">
          <span className="text-foreground">KANAN</span>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--border)" }}>
            HASANZADE
          </span>
        </h1>
      </div>

      {/* Centered Scroll Prompt */}
      <div className="absolute bottom-8 z-30">
        <button
          type="button"
          onClick={scrollToExperience}
          className="group flex cursor-pointer items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}
