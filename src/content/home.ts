import {
  BadgeCheck,
  Building2,
  Eye,
  GraduationCap,
  ShieldCheck,
  Timer,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

/**
 * ⚠️ STATS ARE UNVERIFIED PLACEHOLDERS.
 *
 * Every entry is marked `pending: true`, which makes StatCard render an
 * em-dash plus a visible "awaiting verified figure" marker instead of a
 * number. Supply real figures from product/marketing and set `pending: false`,
 * or delete the section. Do not invent values — a fabricated collection rate
 * on a payment product is a claim the company has to stand behind.
 */
export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  pending: boolean;
}

export const STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Institutions onboarded', pending: true },
  { value: 1, suffix: 'M+', label: 'Payments processed', pending: true },
  { value: 250000, suffix: '+', label: 'Students served', pending: true },
  { value: 98, suffix: '%', label: 'Collection visibility', pending: true },
];

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Timer,
    title: 'Faster Collection',
    description:
      'Automated fee generation and reminders reduce the manual follow-up that slows collection down.',
  },
  {
    icon: Eye,
    title: 'Complete Visibility',
    description:
      'Collections, pending dues and transaction records sit in one place instead of across spreadsheets.',
  },
  {
    icon: Wallet,
    title: 'Better Parent Experience',
    description:
      'Guardians see what they owe and pay through the channel they already use — card, mobile banking or net banking.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description:
      'Payments run through the SSLCOMMERZ gateway with role-based access controls across the platform.',
  },
];

export interface Stakeholder {
  icon: LucideIcon;
  role: string;
  description: string;
  capabilities: string[];
  featured?: boolean;
}

export const STAKEHOLDERS: Stakeholder[] = [
  {
    icon: Building2,
    role: 'School Admin',
    description: 'Run fee collection for the whole institution from one portal.',
    capabilities: [
      'Define fee structures and schedules',
      'Track collections and outstanding dues',
      'Manage student records and user roles',
      'Generate reports and gateway records',
    ],
    featured: true,
  },
  {
    icon: Users,
    role: 'Parents & Guardians',
    description: 'See what is owed and settle it without a trip to the office.',
    capabilities: [
      'View outstanding dues and breakdown',
      'Receive SMS and email reminders',
      'Pay by card, mobile banking or net banking',
      'Keep a record of every payment',
    ],
  },
  {
    icon: GraduationCap,
    role: 'Students',
    description: 'Access fee information and payment history directly.',
    capabilities: [
      'Check dues and payment status',
      'Review transaction history',
      'Access academic and attendance records',
      'Use the web portal or mobile app',
    ],
  },
];

export interface UseCase {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const USE_CASES: UseCase[] = [
  {
    title: 'Monthly & Regular Fee Collection',
    problem: 'Recurring fees have to be raised, tracked and chased every single period.',
    solution: 'Fee structures drive generation, collection and tracking through the Fee Management module.',
    outcome: 'A centralized, repeatable collection process.',
  },
  {
    title: 'Digital Payment for Guardians',
    problem: 'Families need a convenient way to pay that fits how they already move money.',
    solution: 'Guardians pay by card, mobile financial service or net banking through SSLCOMMERZ.',
    outcome: 'Payment completes without a visit to the institution.',
  },
  {
    title: 'Payment History & Transaction Tracking',
    problem: 'Nobody can quickly answer what was paid, when, and what is still outstanding.',
    solution: 'The portal exposes dues, payment detail and full transaction history per student.',
    outcome: 'Transparency for families and administrators alike.',
  },
  {
    title: 'Centralized Student Information',
    problem: 'Academic, attendance and payment records live in separate processes.',
    solution: 'One unified system holds academic performance, attendance and payment records together.',
    outcome: 'A connected view of each student.',
  },
  {
    title: 'School Administration',
    problem: 'Administrators need one environment for records, fees, roles and reporting.',
    solution: 'The School Portal gives administrative control over each of those areas.',
    outcome: 'Centralized administration with clearer oversight.',
  },
  {
    title: 'Payment-Related Communication',
    problem: 'Reminders and confirmations depend on someone remembering to send them.',
    solution: 'Automated SMS and email notifications fire against payment events and due dates.',
    outcome: 'Consistent communication without manual effort.',
  },
];

/** Signals shown in the hero as floating cards. Illustrative, not live data. */
export const HERO_SIGNALS = [
  { icon: BadgeCheck, title: 'Payment received', meta: '৳ 9,200 · bKash', tone: 'success' as const },
  { icon: Users, title: '34 reminders sent', meta: 'Class 9 · Section B', tone: 'brand' as const },
];
