import type { FaqItem } from '../components/ui/FaqAccordion';

/**
 * Answers are grounded in the source content brief. Where the brief is silent
 * (refunds, onboarding timeline), the answer says so rather than inventing a
 * policy — replace with the real policy when it is available.
 */
export const FAQS: FaqItem[] = [
  {
    question: 'What is the Education Payment Management Solution?',
    answer:
      'A centralized platform for educational institutions to manage fee structures, collect payments digitally, hold student information, and handle payment-related communication — across a web portal and mobile applications.',
  },
  {
    question: 'Who can use the platform?',
    answer:
      'It is built around four groups: institutions and their administrators, finance and operations staff, students, and parents or guardians. Each group works through a portal scoped to their role.',
  },
  {
    question: 'How do payments actually work?',
    answer:
      'The institution publishes a fee due. The guardian is notified, opens the due in the portal or mobile app, and pays through the SSLCOMMERZ gateway. On confirmation, the due is marked settled and the payment is recorded against the student.',
  },
  {
    question: 'Which payment methods are supported?',
    answer:
      'Cards including Visa and Mastercard, mobile financial services including bKash, Nagad and Rocket, and direct bank payments via net banking. The exact live list follows the SSLCOMMERZ merchant configuration for your institution.',
  },
  {
    question: 'How does fee collection get set up?',
    answer:
      'Administrators define fee structures against classes, sections and campuses in the School Portal. Once a structure is published, dues are generated and tracked against it rather than being raised by hand.',
  },
  {
    question: 'What notifications does the platform send?',
    answer:
      'SMS and email notifications for upcoming dues, received payments and institutional updates, plus push notifications through Firebase Cloud Messaging in the mobile apps. Messaging is managed from the School Portal.',
  },
  {
    question: 'How are refunds handled?',
    answer:
      'Refund handling depends on your institution’s policy and the SSLCOMMERZ merchant agreement. The refund workflow is not described in the current product documentation — please raise it during your demo so we can confirm the process for your setup.',
  },
  {
    question: 'Is the platform secure?',
    answer:
      'Payments are processed by the SSLCOMMERZ gateway, which is PCI-DSS certified, so cardholder data is handled by the gateway rather than stored on the education platform. The platform itself applies role-based access controls so users only reach what their role permits.',
  },
  {
    question: 'What reporting is available?',
    answer:
      'Reports covering collections and outstanding dues, a transactions overview across the institution, and SSLCOMMERZ gateway reporting. Records can be exported for use in existing finance workflows.',
  },
  {
    question: 'How does reconciliation work?',
    answer:
      'Each payment is recorded against a student, a fee and a method, and gateway records are available alongside institutional fee data for review. The depth of automated matching against bank statements should be confirmed for your specific setup during the demo.',
  },
  {
    question: 'Is there a mobile application?',
    answer:
      'Yes — Android and iOS applications built with Flutter, alongside a responsive web interface. Guardians and students can view dues, pay, and see payment history from either.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Request a demo and we will walk through fee structures, payment methods and reporting against your institution’s actual setup. Onboarding timelines depend on the size of the institution and the state of your existing student records — we will scope that with you directly.',
  },
];
