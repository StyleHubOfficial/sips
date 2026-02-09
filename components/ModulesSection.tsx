import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { MODULES } from '../constants';
import { ModuleItem } from '../types';

const ModulesSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            className="mb-20 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            Academic Arsenal
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Exo 2] tracking-tight">
            Program Modules
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            An integrated suite of tools designed to elevate student performance through precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((module, idx) => {
            const IconComponent = (Icons as any)[module.icon] || Icons.Box;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                onClick={() => setSelectedModule(module)}
                className="group relative h-full cursor-pointer perspective-1000"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Card Container */}
                <div className="relative h-full bg-[#0a0f1e]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#0f172a]/80 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden">
                    
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#1e293b]/50 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all duration-500">
                             <IconComponent size={28} className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                             <Icons.ArrowUpRight size={14} className="text-cyan-400" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 font-[Exo 2] group-hover:text-cyan-200 transition-colors">{module.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{module.description}</p>
                    
                    {/* Bottom active line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)]"
            >
               {/* Modal Content Background */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
               
               {/* Close Button */}
               <button 
                  onClick={() => setSelectedModule(null)}
                  className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
               >
                  <Icons.X size={20} />
               </button>

               <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-900/20">
                           {(() => {
                                const Icon = (Icons as any)[selectedModule.icon] || Icons.Box;
                                return <Icon size={32} className="text-cyan-400" />;
                           })()}
                      </div>
                      <div>
                          <h3 className="text-3xl font-bold text-white font-[Exo 2]">{selectedModule.title}</h3>
                          <span className="text-cyan-500 text-sm font-medium tracking-wide">Module Details</span>
                      </div>
                  </div>

                  <div className="space-y-8">
                      <div className="group">
                          <h4 className="flex items-center gap-2 text-xs uppercase text-cyan-400 font-bold tracking-[0.15em] mb-3">
                              <Icons.Goal size={14} /> Purpose
                          </h4>
                          <p className="text-slate-300 text-lg font-light leading-relaxed pl-4 border-l-2 border-cyan-500/30 group-hover:border-cyan-500/80 transition-colors">
                              {selectedModule.modalContent.purpose}
                          </p>
                      </div>

                      <div className="group">
                          <h4 className="flex items-center gap-2 text-xs uppercase text-purple-400 font-bold tracking-[0.15em] mb-3">
                              <Icons.Cpu size={14} /> How It Works
                          </h4>
                          <p className="text-slate-300 text-lg font-light leading-relaxed pl-4 border-l-2 border-purple-500/30 group-hover:border-purple-500/80 transition-colors">
                              {selectedModule.modalContent.howItWorks}
                          </p>
                      </div>

                      <div className="group">
                          <h4 className="flex items-center gap-2 text-xs uppercase text-green-400 font-bold tracking-[0.15em] mb-3">
                              <Icons.Zap size={14} /> Student Benefit
                          </h4>
                          <div className="bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent p-5 rounded-xl border border-green-500/20">
                              <p className="text-green-100 text-lg font-medium">
                                  {selectedModule.modalContent.benefit}
                              </p>
                          </div>
                      </div>
                  </div>
               </div>

               {/* Footer Decor */}
               <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ModulesSection;