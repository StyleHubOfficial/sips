import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { 
      phase: "Phase 1: Pilot", 
      time: "15 Days",
      title: "Test & Validate", 
      desc: "Free access for select classes (grades 8-12). Focus on feedback gathering and system testing." 
    },
    { 
      phase: "Phase 2: Refine", 
      time: "30 Days",
      title: "Controlled Expansion", 
      desc: "Optimizing content delivery, introducing subscription models, and expanding to more batches." 
    },
    { 
      phase: "Phase 3: Launch", 
      time: "Ongoing",
      title: "Full Implementation", 
      desc: "Complete rollout of all 7 modules across all grades. Continuous improvement via AI analytics." 
    }
];

const PilotRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                 <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">Implementation Strategy</span>
                <h2 className="text-4xl font-bold mt-2">Phased Deployment</h2>
            </motion.div>
            
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 md:-translate-x-1/2" />

                <div className="space-y-16">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full md:w-1/2 flex justify-start md:justify-end px-4 md:px-0 pl-12 md:pl-0">
                                <div className={`glass-panel p-6 rounded-xl border-l-4 border-cyan-500 w-full max-w-md hover:neon-glow-blue transition-all duration-300 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                                    <div className={`flex items-center gap-2 mb-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <span className="text-cyan-400 font-bold text-sm bg-cyan-950/50 px-2 py-1 rounded">{step.phase}</span>
                                        <span className="text-slate-500 text-xs uppercase tracking-wider">{step.time}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                            
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-950 rounded-full border-4 border-cyan-500 md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10" />
                            
                            <div className="w-full md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default PilotRoadmap;