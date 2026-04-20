"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    content: "We align the foundational pillars of your brand to create a robust narrative, positioning, and visual direction. We determine how your brand should look, feel, and communicate.",
    tags: ["Brand Positioning", "Visual Identity", "Messaging Framework", "Market Research"],
  },
  {
    title: "Website Design",
    content: "Creating digital experiences that captivate and convert. We design tailored websites focused on aesthetics and usability.",
    tags: ["UI/UX Design", "Wireframing", "Prototyping", "Interaction Design"],
  },
  {
    title: "Content Creation",
    content: "High-quality photography, videography, and copywriting that tells your brand's unique story and engages your audience.",
    tags: ["Photography", "Videography", "Copywriting", "Art Direction"],
  },
  {
    title: "Product Design",
    content: "Building intuitive and scalable digital products that solve real user problems while achieving business goals.",
    tags: ["User Research", "Design Systems", "Usability Testing", "App Design"],
  },
  {
    title: "Digital Experience",
    content: "Immersive online campaigns, interactive webGL experiences, and tailored e-commerce platforms.",
    tags: ["E-Commerce", "WebGL", "Campaigns", "Interactive"],
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden bg-zinc-900">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
            alt="Services"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12">
            A studio cut for brands <br className="hidden md:block" />
            that refuse to play safe
          </h2>
          
          <div className="border-t border-zinc-800">
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-zinc-800">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-8 flex justify-between items-center text-left hover:text-gray-300 transition-colors"
                  >
                    <span className="text-2xl md:text-4xl font-medium">{service.title}</span>
                    <span className="text-zinc-500">
                      {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
                          <p className="mb-6">{service.content}</p>
                          <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, i) => (
                              <span key={i} className="text-xs border border-zinc-700 px-3 py-1 rounded-full text-zinc-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}