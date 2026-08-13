/**
 * Site-wide copy and navigation. Edit here — components read from this file.
 */

export const brand = {
  name: 'Education Payments',
  /** Short product description used in the footer and meta */
  tagline: 'Fee collection, digital payments and financial visibility for educational institutions.',
  parent: 'SSLWIRELESS',
  gateway: 'SSLCOMMERZ',
} as const;

export interface NavItem {
  label: string;
  to: string;
}

/**
 * Navigation labels follow the approved design. Targets keep the existing
 * routes reachable rather than collapsing the site into a single page: the two
 * landing-page anchors point at `/#…`, and the rest resolve to real routes.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Platform', to: '/#platform' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Product', to: '/#product' },
  { label: 'Security', to: '/how-it-works#technology' },
  { label: 'FAQ', to: '/faq' },
];

export const FOOTER_LINKS: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Payment Methods', to: '/how-it-works#payment-methods' },
      { label: 'Technology & Security', to: '/how-it-works#technology' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About SSLWIRELESS', to: '/contact' },
      { label: 'SSLCOMMERZ Gateway', to: '/how-it-works#payment-methods' },
      { label: 'Contact', to: '/contact' },
      { label: 'Request a Demo', to: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Use Cases', to: '/#use-cases' },
      { label: 'For Schools', to: '/#stakeholders' },
      { label: 'For Guardians', to: '/#stakeholders' },
    ],
  },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: 'Privacy Policy', to: '/contact' },
  { label: 'Terms of Service', to: '/contact' },
];

/**
 * ⚠️ PLACEHOLDER — replace with the real support channel before launch.
 * Do not publish a personal number; use the official support line only.
 */
export const CONTACT = {
  email: '[SUPPORT_EMAIL]',
  phone: '[SUPPORT_PHONE]',
  address: 'Dhaka, Bangladesh',
} as const;

export const CTA = {
  primary: 'Book a Demo',
  secondary: 'Explore Features',
  /** Quiet text link beside the navbar's primary action */
  navSecondary: 'See the product',
} as const;
