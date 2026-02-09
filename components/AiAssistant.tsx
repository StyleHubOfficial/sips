import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, Bot, User, BrainCircuit } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToAI } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTIONS = [
  "Which program is best for weak students?",
  "How does the pilot demo work?",
  "Is this beneficial for Class 11 NEET?",
  "Pricing and safety structure?"
];

const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the **Sunrise AI Academic Guide**. How may I assist you in understanding our future-ready ecosystem?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ 
          role: m.role, 
          parts: [{ text: m.text }] 
      }));
      
      const responseText = await sendMessageToAI(text, history);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText || "I apologize, I could not process that request." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "System connection error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="w-full max-w-2xl h-[80vh] bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
        style={{ boxShadow: '0 0 50px rgba(6, 182, 212, 0.15)' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-900/50 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center relative">
                <Sparkles className="text-cyan-400 w-5 h-5 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">SUNRISE AI GUIDE</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-slate-400">Gemini 3 Pro / 2.5 Flash • Active</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-cyan-950 border border-cyan-500/30'}`}>
                {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-cyan-400" />}
              </div>
              <div className={`max-w-[85%] rounded-2xl p-4 text-sm ${
                msg.role === 'user' 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-900/80 border border-white/5 text-slate-200'
              }`}>
                 {msg.role === 'model' ? (
                   <ReactMarkdown
                      components={{
                        strong: ({node, ...props}) => <span className="text-cyan-400 font-bold" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
                        li: ({node, ...props}) => <li className="marker:text-cyan-500 pl-1" {...props} />,
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                        h1: ({node, ...props}) => <h1 className="text-lg font-bold text-white mb-2" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-base font-bold text-white mb-2" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-sm font-bold text-cyan-200 mb-1" {...props} />,
                      }}
                   >
                     {msg.text}
                   </ReactMarkdown>
                 ) : (
                    <p className="leading-relaxed">{msg.text}</p>
                 )}
              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center">
                   <BrainCircuit size={14} className="text-purple-400 animate-spin" />
               </div>
               <span className="text-xs text-cyan-500 font-mono animate-pulse">Computing optimal response...</span>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
            <div className="px-6 pb-2">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Suggested Queries</p>
                <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s, i) => (
                        <button 
                            key={i}
                            onClick={() => handleSend(s)}
                            className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors text-left"
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Input */}
        <div className="p-4 bg-slate-900 border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="Ask about classes, eligibility, or pilot program..."
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-4 pr-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button 
                onClick={() => handleSend(input)}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 p-2 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 disabled:opacity-50 disabled:hover:bg-cyan-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AiAssistant;