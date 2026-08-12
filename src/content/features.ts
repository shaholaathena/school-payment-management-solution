import {
  Bell,
  CreditCard,
  FileBarChart,
  Landmark,
  LayoutDashboard,
  Link2,
  Receipt,
  RefreshCw,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

/**
 * `confirmed`   — described in the source content brief
 *                 (Payment_Management_Solution_Website_content_Public_facing_Page.pdf)
 * `needs-review`— requested by the design brief but NOT confirmed by the source.
 *                 Verify with product before launch, or remove the feature.
 * `placeholder` — copy not yet written; text below is a stand-in.
 */
export type FeatureStatus = 'confirmed' | 'needs-review' | 'placeholder';

export interface Feature {
  index: string;
  slug: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  /** Short outcome line for the customer */
  outcome: string;
  icon: LucideIcon;
  status: FeatureStatus;
  /** Concrete capabilities shown as a list in the storytelling layout */
  details: string[];
}

export const FEATURES: Feature[] = [
  {
    index: '01',
    slug: 'fee-collection',
    category: 'Fee collection',
    title: 'Centralized Fee Management',
    headline: 'Define every fee structure once, apply it everywhere.',
    description:
      'Set up fee structures by class, section and campus, then let the platform handle calculation, assignment and tracking across the institution.',
    outcome: 'Less manual coordination and clearer visibility of fee data.',
    icon: Landmark,
    status: 'confirmed',
    details: [
      'Fee structures by class, section and campus',
      'Automated calculation and assignment',
      'Collection tracking against each structure',
      'Admission and recurring fee handling',
    ],
  },
  {
    index: '02',
    slug: 'online-payments',
    category: 'Online payments',
    title: 'Digital Payment Gateway',
    headline: 'Fee payments settle through SSLCOMMERZ.',
    description:
      'The platform integrates the SSLCOMMERZ payment gateway, so guardians complete payments through a familiar, established checkout rather than an unfamiliar one.',
    outcome: 'Guardians pay digitally through an established gateway.',
    icon: Wallet,
    status: 'confirmed',
    details: [
      'SSLCOMMERZ gateway integration',
      'Cardholder data stays with the gateway',
      'Instant payment confirmation to the portal',
      'Transaction records against each student',
    ],
  },
  {
    index: '03',
    slug: 'payment-methods',
    category: 'Payment methods',
    title: 'Multiple Payment Methods',
    headline: 'Let guardians choose how they pay.',
    description:
      'Cards, mobile financial services and direct bank payments are all supported through the gateway, so families are not forced into a single channel.',
    outcome: 'Fewer failed payments caused by an unavailable channel.',
    icon: CreditCard,
    status: 'confirmed',
    details: [
      'Cards — Visa, Mastercard and others',
      'Mobile financial services — bKash, Nagad, Rocket',
      'Net banking from leading banks',
      'Method availability follows the gateway configuration',
    ],
  },
  {
    index: '04',
    slug: 'recurring-fees',
    category: 'Recurring payments',
    title: 'Recurring & Scheduled Fees',
    headline: 'Monthly and term fees generate on schedule.',
    description:
      'Regular fee cycles are issued automatically against the published schedule, so recurring dues do not have to be raised by hand each period.',
    outcome: 'Routine fee cycles run without manual re-entry.',
    icon: RefreshCw,
    status: 'needs-review',
    details: [
      'Monthly and term-based fee cycles',
      'Scheduled generation against fee structures',
      'Per-period dues visible to guardians',
      'Confirm automation depth with product',
    ],
  },
  {
    index: '05',
    slug: 'payment-links',
    category: 'Payment links',
    title: 'Payment Links',
    headline: 'Send a payable link for any fee.',
    description:
      'Share a direct payment link for a specific due so a guardian can settle it without navigating the portal first.',
    outcome: 'A shorter path from reminder to completed payment.',
    icon: Link2,
    status: 'needs-review',
    details: [
      'Link tied to a specific due',
      'Shareable over the existing notification channels',
      'Payment recorded against the student',
      'Not described in the source brief — verify availability',
    ],
  },
  {
    index: '06',
    slug: 'notifications',
    category: 'Notifications',
    title: 'Automated Notifications & Reminders',
    headline: 'Dues and confirmations reach guardians automatically.',
    description:
      'The platform sends SMS and email notifications for upcoming dues, received payments and institutional updates, using an SMS gateway and Firebase Cloud Messaging.',
    outcome: 'Less manual follow-up on outstanding fees.',
    icon: Bell,
    status: 'confirmed',
    details: [
      'SMS and email notifications',
      'Due reminders and payment confirmations',
      'Push notifications through Firebase Cloud Messaging',
      'Messaging management from the school portal',
    ],
  },
  {
    index: '07',
    slug: 'transaction-tracking',
    category: 'Transaction tracking',
    title: 'Transaction & Invoice Visibility',
    headline: 'Every payment is traceable to a student and a fee.',
    description:
      'Administrators, students and guardians can see what was charged, what was paid, when, and through which method — from the same record.',
    outcome: 'Payment questions get answered without a phone call.',
    icon: Receipt,
    status: 'confirmed',
    details: [
      'Transaction history per student',
      'Invoice and due detail',
      'Payment method and timestamp on each record',
      'Transactions overview across the institution',
    ],
  },
  {
    index: '08',
    slug: 'reporting',
    category: 'Reconciliation & reporting',
    title: 'Reporting & Reconciliation',
    headline: 'Collection reports and gateway records in one view.',
    description:
      'Generate reports on collections and outstanding dues, and review gateway settlement records alongside institutional fee data.',
    outcome: 'Finance teams close the period from one place.',
    icon: FileBarChart,
    status: 'needs-review',
    details: [
      'Collection and outstanding reports',
      'SSLCOMMERZ gateway reporting',
      'Export for finance workflows',
      'Confirm automated matching depth with product',
    ],
  },
  {
    index: '09',
    slug: 'parent-student-experience',
    category: 'Parent & student experience',
    title: 'Student & Guardian Experience',
    headline: 'Dues, history and payment in one place — web or mobile.',
    description:
      'Students and guardians see outstanding dues, review the fee breakdown, pay, and keep a record — through a responsive web portal or the Android and iOS apps.',
    outcome: 'Families spend less time working out what they owe.',
    icon: Users,
    status: 'confirmed',
    details: [
      'Responsive web portal',
      'Android and iOS applications built with Flutter',
      'Outstanding dues and fee breakdown',
      'Payment history and receipts',
    ],
  },
  {
    index: '10',
    slug: 'merchant-panel',
    category: 'Merchant panel',
    title: 'Merchant Panel',
    headline: 'Centralized operational control over payment activity.',
    // PLACEHOLDER — final copy pending from the product team.
    // Replace `description`, `outcome` and `details` when supplied.
    description:
      'Manage payment activity, transaction visibility and operational controls from a centralized merchant panel.',
    outcome: 'Operational oversight of the payment ecosystem.',
    icon: LayoutDashboard,
    status: 'placeholder',
    details: [
      'Payment activity management',
      'Transaction visibility',
      'Operational controls',
      'Final copy pending from product',
    ],
  },
];
