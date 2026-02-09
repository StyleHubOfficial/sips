import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { phase: "Phase 1", title: "Awareness & Registration", desc: "Open enrollment for interested students. Diagnostic test." },
    { phase: "Phase 2", title: "The Experience", desc: "2-Week Free Pilot Classes. Access to Doubt Counter." },
    { phase: "Phase 3", title: "Feedback & Launch", desc: "Parent consultation, performance review, and final batch allocation." }
];

const PilotRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Deployment Roadmap</h2>
            
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 md:-translate-x-1/2" />

                <div className="space-y-12">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full md:w-1/2 flex justify-start md:justify-end px-4 md:px-0 pl-12 md:pl-0">
                                <div className={`glass-panel p-6 rounded-xl border-l-4 border-cyan-500 w-full max-w-md ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                                    <span className="text-cyan-400 font-mono text-sm">{step.phase}</span>
                                    <h3 className="text-xl font-bold mt-1 mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-sm">{step.desc}</p>
                                </div>
                            </div>
                            
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                            
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
