"use client";

import { Tabs, TabsIndicator, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { value: "home", label: "Home" },
  { value: "skills", label: "Skills" },
  { value: "experience", label: "Experience" },
  { value: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const isScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;

        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    navItems.forEach(({ value }) => {
      const section = document.getElementById(value);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    isScrolling.current = true;

    document.getElementById(id)?.scrollIntoView();

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  return (
    <nav className="pointer-events-none fixed top-6 inset-x-0 z-50 flex justify-center">
      <Tabs value={active} onValueChange={(val: string) => setActive(val)}>
        <TabsList className="pointer-events-auto relative isolate flex h-auto items-center gap-2 rounded-full border border-border bg-background/80 px-1 py-6 shadow-lg backdrop-blur-md">
          {/* Theme-aligned sliding pill */}
          <TabsIndicator className="rounded-full bg-muted shadow-xs" />

          {navItems.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              onClick={() => scrollTo(item.value)}
              className="relative z-10 rounded-full px-4 py-5 text-xs sm:text-sm font-medium transition-colors text-muted-foreground hover:text-foreground duration-300 data-active:text-foreground cursor-pointer"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
