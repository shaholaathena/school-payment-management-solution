import {
  Building2,
  CreditCard,
  Database,
  FileCheck2,
  KeyRound,
  Server,
  Smartphone,
  ShieldCheck,
  Eye,
  type LucideIcon,
} from 'lucide-react';

/* ── How it works ─────────────────────────────────────────────────────── */

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  /** Who acts at this step */
  actor: string;
}

export const JOURNEY: JourneyStep[] = [
  {
    step: 1,
    title: 'Create Fee',
    description:
      'The institution defines the fee structure and publishes dues against the relevant class, section or campus.',
    actor: 'School Admin',
  },
  {
    step: 2,
    title: 'Notify Parent',
    description:
      'Guardians receive an SMS and email notification that a due is available, with the amount and deadline.',
    actor: 'Platform',
  },
  {
    step: 3,
    title: 'Parent Pays',
    description:
      'The guardian reviews the fee breakdown and pays by card, mobile financial service or net banking.',
    actor: 'Parent / Guardian',
  },
  {
    step: 4,
    title: 'Payment Confirmed',
    description:
      'SSLCOMMERZ confirms the transaction, the due is marked settled, and a confirmation goes back to the guardian.',
    actor: 'SSLCOMMERZ',
  },
  {
    step: 5,
    title: 'Reconcile & Report',
    description:
      'The payment appears against the student record, and collection reports reflect the updated position.',
    actor: 'Finance Team',
  },
];

/* ── Payment methods ──────────────────────────────────────────────────── */

/**
 * Methods confirmed by the source content brief. Availability ultimately
 * follows the SSLCOMMERZ merchant configuration — verify the live list before
 * launch and edit here.
 *
 * `placeholderMark: true` means the official brand asset has not been
 * licensed yet, so only the wordmark is shown. Never approximate a payment
 * brand's logo — that is a trademark issue as well as a trust one.
 */
export interface PaymentMethod {
  name: string;
  category: string;
  icon: LucideIcon;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  { name: 'Visa', category: 'Card', icon: CreditCard },
  { name: 'Mastercard', category: 'Card', icon: CreditCard },
  { name: 'bKash', category: 'Mobile financial service', icon: Smartphone },
  { name: 'Nagad', category: 'Mobile financial service', icon: Smartphone },
  { name: 'Rocket', category: 'Mobile financial service', icon: Smartphone },
  { name: 'Net Banking', category: 'Direct bank payment', icon: Building2 },
];

/* ── Technology & security ────────────────────────────────────────────── */

export interface TechLayer {
  layer: string;
  value: string;
}

export const TECH_STACK: TechLayer[] = [
  { layer: 'Mobile applications', value: 'Flutter — Android & iOS' },
  { layer: 'Web frontend', value: 'React.js with Material UI' },
  { layer: 'Backend', value: 'PHP — Laravel / Core PHP' },
  { layer: 'API', value: 'RESTful API' },
  { layer: 'Database', value: 'MySQL with optimized indexing' },
  { layer: 'Notifications', value: 'Firebase Cloud Messaging + SMS gateway' },
  { layer: 'Payment gateway', value: 'SSLCOMMERZ' },
];

/**
 * Security posture as described in the source brief.
 *
 * ⚠️ Do NOT add specific certifications here (ISO, SOC 2, PCI-DSS scope
 * claims for this platform) without documentation from compliance. The
 * SSLCOMMERZ gateway's own PCI-DSS certification is the confirmed claim;
 * the education platform inheriting it is a separate statement.
 */
export interface SecurityPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    icon: ShieldCheck,
    title: 'Secure payment processing',
    description:
      'Transactions are processed through the SSLCOMMERZ gateway. Cardholder data is handled by the gateway rather than stored on the education platform.',
  },
  {
    icon: KeyRound,
    title: 'Role-based access control',
    description:
      'Administrators, accountants, operators and teaching staff each see only what their role permits, with permissions set per user.',
  },
  {
    icon: Eye,
    title: 'Transaction visibility',
    description:
      'Every payment is traceable to a student, a fee and a method, so finance teams can review activity without leaving the platform.',
  },
  {
    icon: FileCheck2,
    title: 'Auditability',
    description:
      'Payment and notification events are recorded against student and institutional records, giving a reviewable history of activity.',
  },
  {
    icon: Database,
    title: 'Data protection',
    description:
      'Student and payment data is held in a single system with access governed by role, reducing the spread of records across spreadsheets and inboxes.',
  },
  {
    icon: Server,
    title: 'Reliable infrastructure',
    description:
      'A RESTful API serves the web portal and the mobile applications from the same backend, keeping records consistent across surfaces.',
  },
];
