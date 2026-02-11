import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Building2, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    role: "Students",
    icon: GraduationCap,
    points: [
      "Round-the-clock academic support from trusted teachers.",
      "No travel required – saves energy and reduces burnout.",
      "Clear visibility of strengths and weaknesses via tracking.",
      "Safe, familiar environment reducing anxiety."
    ]
  },
  {
    role: "Parents",
    icon: Users,
    points: [
      "Significant cost savings (40-60%) vs external coaching.",
      "Real-time transparency into child's attendance & progress.",
      "Peace of mind knowing children are safe at home.",
      "Modular pricing to fit family budgets."
    ]
  },
  {
    role: "Institution",
    icon: Building2,
    points: [
      "Establishes Sunrise as an innovative educational leader.",
      "Improves student retention by meeting all academic needs.",
      "Creates additional revenue for facility improvements.",
      "Enhanced faculty satisfaction via supplemental income."
    ]
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
       
       <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ecosystem Benefits</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Creating value for every stakeholder in the education journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-950 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-950/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{item.role}</h3>
                <ul className="space-y-4">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-400 text-sm">
                      <HeartHandshake size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default BenefitsSection;