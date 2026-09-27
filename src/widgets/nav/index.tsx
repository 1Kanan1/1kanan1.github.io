"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { value: "home", label: "Home" },
  { value: "skills", label: "Skills" },
  { value: "experience", label: "Experience" },
  { value: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [pill, setPill] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    navItems.forEach(({ value }) => {
      const section = document.getElementById(value);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Measure the active link and drive the sliding pill. Same approach
  // Tabs.Indicator used internally, minus the tab semantics.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-value="${active}"]`);
    if (!list || !link) return;

    const measure = () =>
      setPill({
        left: link.offsetLeft,
        top: link.offsetTop,
        width: link.offsetWidth,
        height: link.offsetHeight,
      });

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(link);
    observer.observe(list);
    return () => observer.disconnect();
  }, [active]);

  return (
    <nav className="pointer-events-none fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <ul
        ref={listRef}
        className="pointer-events-auto relative isolate flex w-max max-w-full items-center gap-2 overflow-x-auto rounded-full border border-border bg-background/80 p-1 shadow-lg backdrop-blur-md"
      >
        {pill && (
          <span
            aria-hidden="true"
            className="absolute z-0 rounded-full bg-muted shadow-xs transition-[left,top,width,height] duration-300 ease-out"
            style={{ left: pill.left, top: pill.top, width: pill.width, height: pill.height }}
          />
        )}

        {navItems.map((item) => (
          <li key={item.value}>
            <a
              href={`#${item.value}`}
              data-value={item.value}
              aria-current={active === item.value ? "true" : undefined}
              className="relative z-10 block rounded-full px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:text-foreground aria-[current]:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
