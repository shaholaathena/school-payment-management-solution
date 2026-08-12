import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveals an element once, the first time it scrolls into view.
 *
 * Returns a ref plus the props to spread onto the element. The visual
 * transition lives in `global.css` under `[data-reveal]`, so this hook only
 * flips a data attribute — no inline style thrash, no layout reads.
 */
export default function useReveal<T extends HTMLElement = HTMLDivElement>(
  delayMs = 0
) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (delayMs > 0) {
          const t = window.setTimeout(() => setRevealed(true), delayMs);
          return () => window.clearTimeout(t);
        }
        setRevealed(true);
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs, revealed]);

  return {
    ref,
    props: { 'data-reveal': '', 'data-revealed': String(revealed) },
  } as const;
}
