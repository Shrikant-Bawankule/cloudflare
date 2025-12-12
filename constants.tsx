import { Users, Send, Building2, TrendingUp, CheckCircle2, UserPlus, Mail, Briefcase } from 'lucide-react';
import { NavItem, Plan, Testimonial, FAQItem, StatItem, StepItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Stories', href: '#stories' },
];

export const STATS: StatItem[] = [
  { label: 'Job Seekers', value: '850+', icon: Users },
  { label: 'Referrals Sent', value: '420+', icon: Send },
  { label: 'Companies', value: '60+', icon: Building2 },
  { label: 'Success Rate', value: '68%', icon: TrendingUp },
];

export const STEPS: StepItem[] = [
  {
    number: 1,
    title: 'Choose Plan',
    description: 'Select a membership that fits your career goals and timeline.',
    icon: CheckCircle2,
  },
  {
    number: 2,
    title: 'Join Group',
    description: 'Get instant access to our exclusive Telegram channels.',
    icon: UserPlus,
  },
  {
    number: 3,
    title: 'Get Referrals',
    description: 'Receive daily verified job openings sent directly to you.',
    icon: Mail,
  },
  {
    number: 4,
    title: 'Get Hired',
    description: 'Apply with referrals to skip the line and land interviews.',
    icon: Briefcase,
  },
];

export const PRICING_PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Explorer Plan',
    price: { bimonthly: 0, quarterly: 0 },
    buttonText: 'Join Community',
    features: [
      'Free community access',
      'Basic job alerts (4-5 daily)',
      'Telegram group access',
      'Monthly career newsletter'
    ],
    unavailableFeatures: [
      'Verified referrals (48hr)',
      'LinkedIn Optimization',
      'Resume Review',
      'Priority Support'
    ],
    link: 'https://t.me/+lLd2h5Iae204Nzk1'
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    isPopular: true,
    badge: 'Most Popular',
    timingBadge: '48-Hour Priority Access',
    price: { bimonthly: 199, quarterly: 269 },
    buttonText: 'Get Started',
    features: [
      'Daily Curated Referrals (25-30 opportunities)',
      'Verified Opportunity Access',
      '48-Hour Referral Processing',
      'Advanced LinkedIn Profile Boost',
      'Career Growth Insights',
      'Enhanced Job Visibility'
    ],
    unavailableFeatures: [
      'Professional Resume Audit',
      'Priority Member Support',
      'Deep ATS Score Analysis',
      'ATS-Optimized Templates'
    ],
    link: {
      bimonthly: 'https://payments.cashfree.com/forms/referrix-premium-2m',
      quarterly: 'https://payments.cashfree.com/forms/referrix-premium-3m'
    }
  },
  {
    id: 'early',
    name: 'Early Access',
    badge: 'Best Value',
    timingBadge: '24-Hour Exclusive First Access',
    price: { bimonthly: 299, quarterly: 382 },
    buttonText: 'Go Premium',
    features: [
      'Everything in Premium Plan',
      'Max Referral Volume (35-40 daily)',
      'Professional Resume Audit',
      'Priority Member Support',
      'Deep ATS Score Analysis',
      'ATS-Optimized Resume Templates',
      '24-Hour First Access Advantage',
      'Complete Premium Bundle'
    ],
    link: {
      bimonthly: 'https://payments.cashfree.com/forms/referrix-early-2m',
      quarterly: 'https://payments.cashfree.com/forms/referrix-early-3m'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ananya R.',
    company: 'Fintech Startup',
    text: "The referral system is a game changer. I got my interview scheduled within 3 days of joining the premium group.",
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul K.',
    company: 'Oracle',
    text: "I was skeptical at first, but the quality of leads is unmatched. Real employees referring you makes a huge difference.",
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah M.',
    company: 'Swiggy',
    text: "The community support is amazing. Not just referrals, but the resume tips helped me crack the ATS screen.",
    rating: 5
  },
  {
    id: 4,
    name: 'Abhishek S.',
    company: 'Cognizant',
    text: "Applying to jobs was hard for me. Referrix made it simple to get referrals and the process was very smooth.",
    rating: 4
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How does the referral system work?",
    answer: "We connect you with verified employees at top companies. When a job opens, we notify you, and if you match the criteria, we facilitate a direct referral submission."
  },
  {
    question: "Are referrals guaranteed?",
    answer: "While we cannot guarantee a job offer, we guarantee that your profile will be reviewed for referral submission by our network of professionals."
  },
  {
    question: "How specific are the roles?",
    answer: "We cover a wide range of roles including Software Engineering, Product Management, Data Science, and Marketing across tech and non-tech sectors."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a refund if you do not receive the promised number of verified job leads within your subscription period. See our Refund Policy page for details."
  },
  {
    question: "How do verify referrers?",
    answer: "Every referrer in our network goes through a strict verification process using their corporate email and LinkedIn verification."
  }
];