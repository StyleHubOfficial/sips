import React, { useState } from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ModulesSection from './components/ModulesSection';
import PilotRoadmap from './components/PilotRoadmap';
import AiAssistant from './components/AiAssistant';
import { Bot, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { PRICING_TIERS } from './constants';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  const scrollToModules = () => {
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      
      {/* Floating Action Button for AI */}
      <button
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform hover:rotate-12"
        aria-label="Open AI Assistant"
      >
        <Bot size={24} className="text-white" />
      </button>

      <Hero onExplore={scrollToModules} onAskAI={() => setIsAiOpen(true)} />
      
      <div className="relative z-20 bg-slate-950 shadow-[0_-50px_100px_rgba(2,6,23,1)]">
        <WhySection />
        
        <div id="modules">
            <ModulesSection />
        </div>
        
        {/* Pricing Section (New) */}
        <section className="py-24 px-6 bg-[#020617] relative">
           <div className="container mx-auto">
             <div className="text-center mb-16">
               <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">Investment in Excellence</span>
               <h2 className="text-3xl md:text-5xl font-bold mt-2">Flexible Subscription Tiers</h2>
               <p className="text-slate-400 mt-4 max-w-2xl mx-auto">40-60% more affordable than external coaching centers while ensuring student safety and curriculum alignment.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRICING_TIERS.map((tier, idx) => (
                  <div key={idx} className={`relative p-6 rounded-2xl border ${tier.recommended ? 'border-cyan-500 bg-cyan-950/10' : 'border-white/10 bg-white/5'} flex flex-col hover:-translate-y-2 transition-transform duration-300`}>
                    {tier.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-slate-500 text-sm">{tier.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0"/>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${tier.recommended ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                      Choose Plan
                    </button>
                  </div>
                ))}
             </div>
           </div>
        </section>

        <div className="py-24 px-6 bg-[#030712] border-y border-white/5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">Intelligent Integration</h2>
                    <p className="text-slate-400 text-lg">
                        Traditional schools are isolated islands. Sunrise is a connected continent. 
                        By integrating school data with after-school support, we eliminate redundancy and maximize potential.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"/> No travel time wasted (Safety & Energy)
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"/> Trusted faculty who know your child
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"/> Real-time progress tracking for parents
                        </li>
                    </ul>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden glass-panel flex items-center justify-center border border-white/5">
                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20" />
                     <div className="text-center p-8 relative z-10">
                        <h3 className="text-7xl font-bold text-white/10 select-none">EVOLUTION</h3>
                        <p className="text-cyan-400 mt-2 font-mono">Traditional → Hybrid → Future</p>
                     </div>
                </div>
            </div>
        </div>

        <PilotRoadmap />
      </div>

      <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">SUNRISE</h2>
                <p className="text-slate-500 max-w-sm">
                    Redefining education by merging traditional values with futuristic academic support infrastructure.
                </p>
            </div>
            <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                    <li className="flex items-center justify-center md:justify-start gap-2"><MapPin size={14}/> Sunrise Campus</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><Phone size={14}/> +91 98765 43210</li>
                    <li className="flex items-center justify-center md:justify-start gap-2"><Mail size={14}/> academicsupport@sunriseschool.edu</li>
                </ul>
            </div>
            <div>
                 <h3 className="text-white font-bold mb-4">Quick Links</h3>
                 <ul className="space-y-2 text-slate-500 text-sm">
                    <li className="hover:text-cyan-400 cursor-pointer">Technical Support</li>
                    <li className="hover:text-cyan-400 cursor-pointer">Billing & Subscriptions</li>
                 </ul>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
            © {new Date().getFullYear()} Sunrise International Public School. Powered by Gemini AI.
        </div>
      </footer>

      <AiAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </div>
  );
};

export default App;