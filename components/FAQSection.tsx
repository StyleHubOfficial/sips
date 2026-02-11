import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is participation mandatory?",
    answer: "No. All modules are completely optional. Students can choose which modules to join based on their individual needs and schedules."
  },
  {
    question: "What if my child misses a live session?",
    answer: "All sessions are recorded and made available for review within 24 hours. Students can watch recordings at their convenience to catch up."
  },
  {
    question: "Can I change my subscription modules mid-month?",
    answer: "Yes. We offer flexibility to add or remove modules with pro-rated adjustments to your subscription fee."
  },
  {
    question: "How do you ensure my child is actually attending and engaged?",
    answer: "We track attendance automatically via AI, monitor participation through platform analytics, and provide regular progress reports to parents showing engagement levels."
  },
  {
    question: "What internet speed is required?",
    answer: "A minimum of 2 Mbps is recommended for smooth video streaming, though our platform can adapt to lower bandwidth when necessary."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-lg bg-slate-900/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="text-cyan-400 shrink-0" />
                ) : (
                  <Plus className="text-slate-500 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 border-t border-white/5 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;