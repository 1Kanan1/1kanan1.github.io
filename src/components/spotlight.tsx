"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base faint grid across the entire page */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Interactive Spotlight: reveals grid lines with higher intensity */}
      <div className="absolute inset-0 bg-grid spotlight-mask" />

      {/* Interactive Spotlight: soft ambient radial glow following cursor */}
      <div className="absolute inset-0 spotlight-glow" />
    </div>
  );
}
