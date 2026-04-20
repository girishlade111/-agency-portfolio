"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20 max-w-5xl mx-auto text-center border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-medium mb-12">
          "Working with this team was the difference between having a website and having a digital brand. Our bounce rate dropped by nearly half within the first month, and the site finally feels like it represents us."
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover grayscale"
            src="https://i.pravatar.cc/150?img=32"
            alt="Emma Carter"
          />
          <div>
            <div className="font-bold text-sm">Emma Carter</div>
            <div className="text-secondary text-xs font-medium">Creative Director, Vena Fashion</div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-24 pt-16 border-t border-gray-200"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-10">We've worked with the best</p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 grayscale">
          {["LOGOIPSUM", "NOIREPO", "CODAGRID", "CRATETUNE", "LOGOIPSUM"].map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-black tracking-widest uppercase">
              {logo}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}