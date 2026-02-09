import { ModuleItem } from './types';

export const SYSTEM_INSTRUCTION = `
You are "Sunrise AI Academic Guide", the advanced AI assistant for the "Sunrise Online Academic Support" ecosystem by Sunrise International Public School.
Your goal is to explain this futuristic, hybrid education model to parents and students.

TONE:
- Ultra-professional, polite, academic, and visionary.
- Use metaphors comparing traditional schooling to "future-ready integrated ecosystems".
- Be precise and reassuring.

KNOWLEDGE BASE:
1. THE CORE PROBLEM:
   - High competition (IIT/NEET/NDA).
   - Traditional schooling leaves gaps.
   - External coaching is unsafe, expensive, and stressful (travel time).

2. THE SUNRISE SOLUTION:
   - "Offline Schooling + Intelligent Online Academic Support".
   - A safe, integrated school-run ecosystem.

3. PROGRAM MODULES (Explain these when asked):
   - Extra Syllabus Classes: Advanced topics beyond NCERT.
   - Doubt Counter: 1-on-1 resolution with trusted faculty.
   - Competitive Exam & Foundation: Pre-preparation for JEE/NEET.
   - Weak-Subject Focused Classes: Targeted remedial help.
   - Homework Helping: Ensuring assignments are done correctly.
   - Test Series: Regular benchmarking.
   - Random Monitoring: Ensuring student accountability.

4. PILOT/DEMO PLAN:
   - Phase 1: Awareness & Registration.
   - Phase 2: Free 2-week trial classes.
   - Phase 3: Feedback & Final Enrollment.

5. BENEFITS:
   - For Students: Less stress, no travel, trusted teachers.
   - For Parents: Safety, cost-effective, transparency.

If a user asks about pricing, say: "The investment structure is designed to be significantly more affordable than external coaching while providing premium quality. Please contact the school administration for the detailed fee structure for the current academic year."

Never hallucinate features not listed here. If unsure, politely refer them to the school administration.
`;

export const MODULES: ModuleItem[] = [
  {
    id: 'extra-syllabus',
    title: 'Extra Syllabus Classes',
    icon: 'BookOpen',
    description: 'Advanced curriculum bridging the gap between standard boards and competitive requirements.',
    modalContent: {
      purpose: 'To go beyond the limited text-book curriculum.',
      howItWorks: 'Evening online sessions covering advanced concepts.',
      benefit: 'Students stay ahead of the curve for future entrance exams.',
    }
  },
  {
    id: 'doubt-counter',
    title: 'Doubt Counter',
    icon: 'HelpCircle',
    description: 'Instant resolution of academic queries by dedicated subject experts.',
    modalContent: {
      purpose: 'To ensure no concept remains unclear.',
      howItWorks: 'Digital "Doubt Rooms" where students can drop in to ask specific questions.',
      benefit: 'Eliminates the backlog of confusion that leads to poor performance.',
    }
  },
  {
    id: 'competitive',
    title: 'Competitive Foundation',
    icon: 'Target',
    description: 'Integrated preparation for IIT-JEE, NEET, and NDA starting early.',
    modalContent: {
      purpose: 'Building the aptitude required for high-stakes testing.',
      howItWorks: 'Specialized strategy sessions and high-order thinking problems.',
      benefit: 'Reduces the need for stressful crash courses later in life.',
    }
  },
  {
    id: 'weak-subject',
    title: 'Weak-Subject Focus',
    icon: 'TrendingUp',
    description: 'Targeted remedial interventions for identified areas of struggle.',
    modalContent: {
      purpose: 'To lift the academic floor of every student.',
      howItWorks: 'AI-identified weak spots trigger invitation to small-group focus classes.',
      benefit: 'Transforms academic weaknesses into strengths.',
    }
  },
  {
    id: 'homework',
    title: 'Homework Completion',
    icon: 'CheckSquare',
    description: 'Guided assistance to ensure daily assignments are completed with understanding.',
    modalContent: {
      purpose: 'To make homework a learning tool, not a chore.',
      howItWorks: 'Supervised online study hours.',
      benefit: 'Frees up family time and ensures consistent academic discipline.',
    }
  },
  {
    id: 'monitoring',
    title: 'Smart Monitoring',
    icon: 'Activity',
    description: 'Randomized checks and AI-driven analytics to ensure accountability.',
    modalContent: {
      purpose: 'To maintain high engagement levels.',
      howItWorks: 'Random attendance snaps and participation tracking.',
      benefit: 'Keeps students focused and parents informed.',
    }
  },
];
