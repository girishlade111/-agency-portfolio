"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your brand, understanding your challenges, audience, and goals. We establish the foundation of our strategy.",
  },
  {
    num: "02",
    title: "Designing",
    desc: "Translating strategy into visual language. We explore concepts and refine directions until we reach a compelling aesthetic.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Bringing the design to life with modern, scalable code. We ensure performance, accessibility, and smooth animations.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We test rigorously before the final push. Post-launch we monitor performance and provide ongoing support.",
  },
];

export function Process() {
  return (
    <section className="bg-black text-white pb-24 md:pb-32 px-6 md:px-20 border-t border-zinc-900">
      <div className="max-w-[1440px] mx-auto pt-24 border-t border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col group cursor-default"
            >
              <div className="text-zinc-600 text-sm font-medium mb-6 md:mb-12 flex items-center gap-2">
                <span>[ {step.num} ]</span>
                <div className="h-px bg-zinc-800 flex-1 group-hover:bg-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}