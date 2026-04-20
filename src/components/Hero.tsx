"use client";

import { motion } from "framer-motion";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-end pb-20 px-6 md:px-20 overflow-hidden bg-black">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2800&auto=format&fit=crop"
          alt="Hero Model"
          className="w-full h-full object-cover object-top opacity-60"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-7xl lg:text-[80px] leading-[1.05] font-semibold text-white tracking-tight"
        >
          We build brands, campaigns, <br className="hidden md:block" />
          and digital experience
        </motion.h1>
      </motion.div>
    </section>
  );
}