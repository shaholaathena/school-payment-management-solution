import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './useReveal';

/**
 * Counts 0 → `target` once the element enters the viewport. Fires a single
 * time and honours prefers-reduced-motion by jumping straight to the value.
 */
export default function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  durationMs = 1500
) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    if (prefersReducedMotion()) {
      started.current = true;
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1);
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
          setValue(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return [ref, value] as const;
}
