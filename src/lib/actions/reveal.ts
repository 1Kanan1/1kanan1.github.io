interface RevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
  threshold?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { delay = 0, duration = 800, y = 30, threshold = 0.1 } = options;

  // Initial state
  node.style.opacity = "0";
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = `opacity ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`;
  node.style.willChange = "opacity, transform";

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
        observer.unobserve(node);
      }
    },
    {
      threshold,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  // Small delay to prevent immediate firing on page load if elements are near viewport bottom
  setTimeout(() => observer.observe(node), 10);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
