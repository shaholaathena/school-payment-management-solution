/**
 * Synthetic data for the product UI mockups.
 *
 * ⚠️ PRIVACY — READ BEFORE EDITING
 * Everything here is invented. Students are referenced by masked ID, never by
 * name, and there are no phone numbers, addresses, guardian names, blood
 * groups, photographs or card details anywhere in this file.
 *
 * The site previously had real screenshots available (`src/assets/images/`),
 * two of which could NOT be published:
 *   • students-list.png — student names, IDs, phone numbers, guardian names,
 *     blood groups (health data), home addresses
 *   • app-home.png     — photograph of a named minor plus her school, student
 *     ID and daily punch-in / punch-out times
 * If those views are ever replaced with real captures, the data must be
 * scrubbed to this standard first, and any identifiable person needs written
 * consent. See docs/DESIGN_PLAN.md §8.
 *
 * The navigation labels below mirror the real product's information
 * architecture so the mockup is structurally honest even though the values
 * are not real.
 */

export const SIDEBAR_NAV = [
  'Dashboard',
  'Campus Management',
  'Class Management',
  'Student Management',
  'Fees Management',
  'Admission Management',
  'Transactions Overview',
  'Notifications & Reminders',
  'Messaging Management',
  'Operators',
  'SSLCOMMERZ Report',
] as const;

export type StatTone = 'brand' | 'success' | 'warning';

export interface MockStat {
  label: string;
  value: string;
  meta: string;
  metaTone: 'success' | 'warning';
  tone: StatTone;
}

export const OVERVIEW_STATS: MockStat[] = [
  { label: 'Received Amount', value: '৳ 18,42,500', meta: '68.4% collected', metaTone: 'success', tone: 'success' },
  { label: 'Payable Amount', value: '৳ 8,51,200', meta: '31.6% outstanding', metaTone: 'warning', tone: 'warning' },
  { label: 'Active Students', value: '1,486', meta: '12 campuses', metaTone: 'success', tone: 'brand' },
];

/** Monthwise dues collection — 12 points, values in thousands of BDT. */
export const COLLECTION_SERIES = [
  { month: 'Jan', value: 148 },
  { month: 'Feb', value: 172 },
  { month: 'Mar', value: 139 },
  { month: 'Apr', value: 196 },
  { month: 'May', value: 165 },
  { month: 'Jun', value: 218 },
  { month: 'Jul', value: 184 },
  { month: 'Aug', value: 242 },
  { month: 'Sep', value: 208 },
  { month: 'Oct', value: 231 },
  { month: 'Nov', value: 197 },
  { month: 'Dec', value: 176 },
];

export type TxStatus = 'Paid' | 'Pending' | 'Overdue';

export interface MockTransaction {
  /** Masked student reference — never a name */
  ref: string;
  cohort: string;
  feeType: string;
  amount: string;
  method: string;
  status: TxStatus;
}

export const TRANSACTIONS: MockTransaction[] = [
  { ref: 'STU-10428', cohort: 'Class 8 · A', feeType: 'Tuition — Aug', amount: '৳ 8,500', method: 'bKash', status: 'Paid' },
  { ref: 'STU-10431', cohort: 'Class 8 · A', feeType: 'Tuition — Aug', amount: '৳ 8,500', method: 'Card', status: 'Paid' },
  { ref: 'STU-10455', cohort: 'Class 9 · B', feeType: 'Exam — Aug', amount: '৳ 9,200', method: '—', status: 'Pending' },
  { ref: 'STU-10467', cohort: 'Class 9 · B', feeType: 'Tuition — Aug', amount: '৳ 9,200', method: 'Nagad', status: 'Paid' },
  { ref: 'STU-10490', cohort: 'Class 10 · A', feeType: 'Tuition — Jul', amount: '৳ 10,000', method: '—', status: 'Overdue' },
  { ref: 'STU-10502', cohort: 'Class 10 · A', feeType: 'Admission', amount: '৳ 15,000', method: 'Net Banking', status: 'Paid' },
];

export interface MockActivity {
  text: string;
  time: string;
  tone: 'success' | 'brand' | 'warning';
}

export const ACTIVITY: MockActivity[] = [
  { text: 'Payment received · STU-10467', time: '2 min ago', tone: 'success' },
  { text: 'Reminder sent to 34 guardians', time: '18 min ago', tone: 'brand' },
  { text: 'Fee schedule published · Class 9', time: '1 hr ago', tone: 'brand' },
  { text: 'Overdue flagged · STU-10490', time: '3 hr ago', tone: 'warning' },
];

/** Guardian-facing mobile view. Mirrors the real app's fee breakdown shape. */
export const GUARDIAN_VIEW = {
  /** A cohort label, deliberately not a student name */
  studentRef: 'STU-10455',
  cohort: 'Class 9 · Section B',
  totalDue: '৳ 9,200',
  dueDate: 'Due 15 Sep',
  breakdown: [
    { period: 'Aug 2026', item: 'Tuition Fee', amount: '৳ 5,200' },
    { period: 'Aug 2026', item: 'Exam Fee', amount: '৳ 2,000' },
    { period: 'Aug 2026', item: 'Library Fee', amount: '৳ 2,000' },
  ],
  methods: ['bKash', 'Nagad', 'Card / Net Banking'],
} as const;
