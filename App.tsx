import React, { useState } from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ModulesSection from './components/ModulesSection';
import PilotRoadmap from './components/PilotRoadmap';
import AiAssistant from './components/AiAssistant';
import { Bot, MapPin, Mail, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  const scrollToModules = () => {
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      
      {/* Floating Action Button for AI (Mobile mainly, but persistent) */}
      <button
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform"
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
        
        <div className="py-24 px-6 bg-[#030712]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">Intelligent Integration</h2>
                    <p className="text-slate-400 text-lg">
                        Traditional schools are isolated islands. Sunrise is a connected continent. 
                        By integrating school data with after-school support, we eliminate redundancy and maximize potential.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"/> No travel time wasted
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"/> Trusted school faculty
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"/> 60% lower cost than external coaching
                        </li>
                    </ul>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden glass-panel flex items-center justify-center border border-white/5">
                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20" />
                     <div className="text-center p-8 relative z-10">
                        <h3 className="text-7xl font-bold text-white/10">EVOLUTION</h3>
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
                    <li className="flex items-center justify-center md:justify-start gap-2"><Mail size={14}/> support@sunrise.edu</li>
                </ul>
            </div>
            <div>
                 <h3 className="text-white font-bold mb-4">Legal</h3>
                 <ul className="space-y-2 text-slate-500 text-sm">
                    <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-cyan-400 cursor-pointer">Terms of Service</li>
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
