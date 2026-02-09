import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, TrendingUp } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="glass-panel p-8 rounded-2xl border-t border-white/10 hover:border-cyan-500/30 transition-colors group"
  >
    <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
      <Icon className="text-cyan-400" size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-[Exo 2]">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const WhySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why This Program Exists</h2>
                <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card 
                    icon={TrendingUp} 
                    title="Hyper-Competition" 
                    desc="With IIT, NEET, and NDA cutoffs soaring, standard schooling isn't enough. We bridge the gap without the burnout." 
                    delay={0.1}
                />
                <Card 
                    icon={AlertTriangle} 
                    title="The Coaching Trap" 
                    desc="External coaching centers are expensive, distant, and disconnected from the school curriculum, leading to student stress." 
                    delay={0.2}
                />
                <Card 
                    icon={ShieldCheck} 
                    title="The Safe Ecosystem" 
                    desc="Sunrise offers a trusted, safe, and integrated environment where teachers know your child's name and needs." 
                    delay={0.3}
                />
            </div>
        </div>
    </section>
  );
};

export default WhySection;
