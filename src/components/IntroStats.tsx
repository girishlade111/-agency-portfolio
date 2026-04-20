"use client";

import { motion } from "framer-motion";

export function IntroStats() {
  const stats = [
    { value: "$2M+", label: "Revenue Generated for Clients" },
    { value: "45+", label: "Countries Served" },
    { value: "100+", label: "Brands Scaled Successfully" },
  ];

  const logos = ["LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM"];

  return (
    <section className="py-24 md:py-40 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="text-2xl md:text-4xl lg:text-[40px] leading-tight md:leading-[1.2] font-medium max-w-4xl text-foreground mb-20 md:mb-32"
      >
        We're a creative agency helping ambitious brands go from "good enough" to
        unforgettable. Our work blends strategy, design, and technology to deliver
        results that actually move the needle.
      </motion.h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-b border-gray-200 pb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center md:items-start text-left"
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              {stat.value}
            </div>
            <div className="text-secondary text-sm md:text-base font-medium max-w-[200px]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full pt-16 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale"
      >
        {logos.map((logo, i) => (
          <div key={i} className="text-xl md:text-2xl font-black tracking-widest uppercase">
            {logo}
          </div>
        ))}
      </motion.div>
    </section>
  );
}