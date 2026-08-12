import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { prefersReducedMotion } from '../../hooks/useReveal';

/** Give a lazily-loaded route up to ~1.2s to mount before giving up. */
const MAX_ATTEMPTS = 40;

/**
 * Resets scroll on route change and honours `#hash` targets — including
 * cross-page links like `/how-it-works#technology`.
 *
 * Route components are code-split, so the target element does not exist on the
 * first frame after navigation: the Suspense fallback is still mounted. A
 * single rAF is not enough, hence the bounded retry.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    let raf = 0;
    let attempts = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;

      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
          block: 'start',
        });
        return;
      }

      if (++attempts < MAX_ATTEMPTS) {
        raf = requestAnimationFrame(tryScroll);
      }
      // Target never appeared — leave the scroll position alone rather than
      // yanking the reader to the top of a page they asked to deep-link into.
    };

    raf = requestAnimationFrame(tryScroll);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [pathname, hash]);

  return null;
}
