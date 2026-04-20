"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Can you design my logo or full brand identity?",
    a: "Yes, we specialize in comprehensive brand identity design, encompassing logo creation, typography, color palettes, and comprehensive brand guidelines.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely. We offer dedicated retainers to ensure your digital presence is constantly optimized, updated, and performing at its best.",
  },
  {
    q: "Do you only work in Webflow or Framer?",
    a: "While we love Webflow and Framer for their agility, we also build custom solutions using React, Next.js, and headless CMS platforms depending on your specific needs.",
  },
  {
    q: "What's not included?",
    a: "Our standard retainer does not cover paid media spend, third-party software licenses, or complex backend database engineering unless specified in a custom scope.",
  },
  {
    q: "How does payment work?",
    a: "We operate on a transparent subscription model or milestone-based payments for custom projects, typically starting with a 50% deposit.",
  },
  {
    q: "What if I already have a design?",
    a: "We are happy to take your existing Figma or Adobe XD designs and develop them into fully functional, high-performance websites.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
      <div className="lg:w-1/3">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
          Curious About <br /> Something?
        </h2>
        <div className="bg-gray-100 p-8 flex flex-col gap-4">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Contact"
            className="w-12 h-12 rounded-full grayscale"
          />
          <div>
            <h3 className="font-bold text-lg mb-2">Short on time?</h3>
            <p className="text-sm text-secondary mb-6">
              You can read the docs all day, but we'd love to chat and answer your questions directly.
            </p>
            <button className="bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">
              Book a quick call
            </button>
          </div>
          <div className="mt-4 text-xs text-secondary font-medium">
            Or drop us a line: hello@auvra.com
          </div>
        </div>
      </div>

      <div className="lg:w-2/3 border-t border-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 md:py-8 flex justify-between items-center text-left hover:text-secondary transition-colors group"
              >
                <span className="text-lg md:text-xl font-medium pr-8">{faq.q}</span>
                <span className="text-black group-hover:text-secondary transition-colors shrink-0">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}