/**
 * ⚠️ TESTIMONIALS ARE UNVERIFIED PLACEHOLDERS.
 *
 * Every entry is `pending: true`, so each card renders bracketed placeholder
 * text plus a visible "awaiting verified quote" marker instead of a real
 * endorsement. Fabricating a customer quote on a payment product is a claim the
 * company has to stand behind — replace each with a real, attributable quote
 * (with the institution's written permission), fill name/role/institution, and
 * set `pending: false`. Delete the whole section rather than shipping invented
 * praise.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  institution: string;
  /** 0–5 whole stars; only shown once the quote is verified */
  rating: number;
  pending: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '[PLACEHOLDER — a real, attributable quote about the collection experience]',
    name: '[Name]',
    role: '[Role]',
    institution: '[Institution]',
    rating: 5,
    pending: true,
  },
  {
    quote: '[PLACEHOLDER — what changed for guardians once payments went digital]',
    name: '[Name]',
    role: '[Role]',
    institution: '[Institution]',
    rating: 5,
    pending: true,
  },
  {
    quote: '[PLACEHOLDER — the reporting and visibility gain for the finance team]',
    name: '[Name]',
    role: '[Role]',
    institution: '[Institution]',
    rating: 5,
    pending: true,
  },
];
