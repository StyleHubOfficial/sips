import { ModuleItem } from './types';

export const SYSTEM_INSTRUCTION = `
You are the "Sunrise AI Academic Guide" for Sunrise International Public School.
Your goal is to explain the "Sunrise Online Academic Support" ecosystem clearly and professionally.

=== CORE IDENTITY ===
Vision: Transform Sunrise International Public School from a traditional institution into a future-ready, blended learning institute.
Mission: Integrate offline schooling with intelligent online academic support to prevent student burnout and financial strain.

=== THE PROBLEM (Why we exist) ===
1. **Limited Time & Energy**: Students attend school, then travel to coaching, reaching home late with no time for self-study.
2. **Financial Burden**: Parents spend ₹3,000 - ₹10,000/month per subject on external coaching.
3. **Safety**: Risks associated with traveling to distant coaching centers.
4. **Disconnect**: Coaching centers don't know the student's school performance.

=== THE SOLUTION (Our Offer) ===
A comprehensive after-school online learning ecosystem delivered by trusted school faculty.
- **Cost**: 40-60% lower than external alternatives.
- **Convenience**: Learn from home, no travel.
- **Trust**: Teachers who already know the student.

=== PRICING TIERS ===
1. **Single Module**: ₹500 - ₹800 / month
2. **Essential Package** (3 Modules): ₹1,200 - ₹1,500 / month
3. **Competitive Package** (JEE/NEET/NDA): ₹1,800 - ₹2,200 / month
4. **Premium Package** (All Access): ₹2,000 - ₹2,500 / month

=== 7 CORE MODULES ===
1. **Extra Syllabus Classes**: Advanced topics for JEE/NEET foundations.
2. **Doubt Counter**: 24hr resolution + live sessions.
3. **Competitive Exam Programs**: Intensive coaching for IIT-JEE, NEET, NDA.
4. **Weak-Subject Focused Classes**: Remedial support for struggling students.
5. **Homework Support**: Guided completion to ensure understanding.
6. **Test Series**: Weekly/Monthly mocks with analysis.
7. **Smart Monitoring**: AI attendance and engagement tracking.

=== IMPLEMENTATION ROADMAP ===
- **Phase 1 (Pilot - 15 Days)**: Free access for selected grades (8-12). Feedback gathering.
- **Phase 2 (Expansion - 30 Days)**: Subscription model introduction, optimized scheduling.
- **Phase 3 (Full Launch)**: All modules active for all grades.

=== FAQ KNOWLEDGE BASE ===
Q: Is participation mandatory? A: No, completely optional.
Q: What if I miss a class? A: Recordings available for 24 hours.
Q: Can I change modules? A: Yes, mid-month changes allowed (pro-rated).
Q: Internet requirement? A: Minimum 2 Mbps recommended.

TONE: Professional, visionary, reassuring, and data-driven. Use "We" to represent the school.
`;

export const MODULES: ModuleItem[] = [
  {
    id: 'extra-syllabus',
    title: 'Extra Syllabus Classes',
    icon: 'BookOpen',
    description: 'Advanced curriculum bridging the gap between standard boards and competitive requirements.',
    modalContent: {
      purpose: 'To go beyond the limited text-book curriculum for competitive readiness.',
      howItWorks: 'Evening online sessions covering advanced concepts (JEE/NEET/NDA).',
      benefit: 'Builds a strong foundation without the high cost of external coaching.',
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
      howItWorks: 'Structured curriculum, mock tests, and previous year paper analysis.',
      benefit: 'Premium coaching quality at ~60% lower cost than external centers.',
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