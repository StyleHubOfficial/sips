import { ModuleItem } from './types';

export const SYSTEM_INSTRUCTION = `
You are the "Sunrise AI Academic Guide" for Sunrise International Public School.
Your goal is to explain the "Sunrise Online Academic Support" ecosystem.

CONTEXT FROM PDF DOCUMENT:
- **Vision**: Transform traditional schooling into a blended, future-ready ecosystem.
- **Problem**: Students suffer from burnout (traveling to coaching), high costs (3k-10k/month), and lack of safety.
- **Solution**: A school-run online ecosystem with 7 core modules. 40-60% cheaper than outside coaching.

PRICING (Indian Rupees):
- Single Module: ₹500 - ₹800 / month
- Essential Package (3 Modules): ₹1,200 - ₹1,500 / month
- Competitive Package (All Exam Modules): ₹1,800 - ₹2,200 / month
- Premium Package (All Access): ₹2,000 - ₹2,500 / month

MODULES:
1. Extra Syllabus (Advanced topics)
2. Doubt Counter (24hr resolution)
3. Competitive Exam Program (IIT-JEE/NEET/NDA)
4. Weak-Subject Focus (Remedial)
5. Homework Support (Guided completion)
6. Test Series (Weekly/Monthly mocks)
7. Smart Monitoring (AI attendance & reports)

IMPLEMENTATION:
- Phase 1: 15-Day Pilot (Free)
- Phase 2: 30-Day Controlled Expansion
- Phase 3: Full Launch

FAQ ANSWERS:
- Is it mandatory? No, completely optional.
- What if I miss a class? Recordings available for 24 hours.
- Can I change modules? Yes, mid-month changes allowed (pro-rated).

TONE: Professional, reassuring, visionary. Use "We" to represent the school.
`;

export const MODULES: ModuleItem[] = [
  {
    id: 'extra-syllabus',
    title: 'Extra Syllabus Classes',
    icon: 'BookOpen',
    description: 'Advanced curriculum bridging the gap between standard boards and competitive requirements.',
    modalContent: {
      purpose: 'To go beyond the limited text-book curriculum.',
      howItWorks: 'Evening online sessions covering advanced concepts and problem-solving techniques.',
      benefit: 'Students build a strong foundation for competitive exams like IIT-JEE/NEET.',
    }
  },
  {
    id: 'doubt-counter',
    title: 'Doubt Counter',
    icon: 'HelpCircle',
    description: 'Instant resolution of academic queries by dedicated subject experts.',
    modalContent: {
      purpose: 'To ensure no concept remains unclear.',
      howItWorks: 'Digital submission with 24hr turnaround + Live doubt solving sessions.',
      benefit: 'Eliminates the backlog of confusion that leads to poor performance.',
    }
  },
  {
    id: 'competitive',
    title: 'Competitive Exam Program',
    icon: 'Target',
    description: 'Intensive coaching for IIT-JEE, NEET, and NDA.',
    modalContent: {
      purpose: 'Specialized preparation for high-stakes entrance tests.',
      howItWorks: 'Structured curriculum, strategy sessions, and previous year paper analysis.',
      benefit: 'Premium coaching quality at a fraction of the cost, integrated with school.',
    }
  },
  {
    id: 'weak-subject',
    title: 'Weak-Subject Focus',
    icon: 'TrendingUp',
    description: 'Targeted remedial interventions for identified areas of struggle.',
    modalContent: {
      purpose: 'To lift the academic floor of every student.',
      howItWorks: 'Diagnostic testing followed by customized small-group instruction.',
      benefit: 'Fills critical learning gaps that compound over time.',
    }
  },
  {
    id: 'homework',
    title: 'Homework Support',
    icon: 'CheckSquare',
    description: 'Guided assistance to ensure daily assignments are completed with understanding.',
    modalContent: {
      purpose: 'To make homework a learning opportunity, not a chore.',
      howItWorks: 'Supervised online slots where teachers clarify concepts during practice.',
      benefit: 'Reduces parent stress and ensures true concept mastery.',
    }
  },
  {
    id: 'test-series',
    title: 'Test Series',
    icon: 'FileBarChart',
    description: 'Regular assessment and practice to ensure examination readiness.',
    modalContent: {
      purpose: 'To build exam temperament and time management skills.',
      howItWorks: 'Weekly/Monthly mock tests with detailed performance reports.',
      benefit: 'Identifies improvement areas before they become critical issues.',
    }
  },
  {
    id: 'monitoring',
    title: 'Smart Monitoring',
    icon: 'Activity',
    description: 'AI-driven analytics to ensure accountability and engagement.',
    modalContent: {
      purpose: 'To maintain high consistency in participation.',
      howItWorks: 'Auto-tracking of attendance and engagement metrics.',
      benefit: 'Provides parents with transparency and teachers with data-driven insights.',
    }
  },
];

export const PRICING_TIERS = [
  {
    name: "Single Module",
    price: "₹500 - ₹800",
    period: "/month",
    features: ["Access to any 1 module", "Basic Progress Reports", "24/7 Recording Access"],
    recommended: false
  },
  {
    name: "Essential",
    price: "₹1,200 - ₹1,500",
    period: "/month",
    features: ["Choice of 3 Modules", "Doubt Counter Access", "Weekly Performance Check"],
    recommended: true
  },
  {
    name: "Competitive",
    price: "₹1,800 - ₹2,200",
    period: "/month",
    features: ["All Competitive Modules", "Test Series Included", "Strategy Sessions"],
    recommended: false
  },
  {
    name: "Premium",
    price: "₹2,000 - ₹2,500",
    period: "/month",
    features: ["All 7 Modules Access", "Priority Doubt Solving", "Personal Mentorship"],
    recommended: false
  }
];