"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-20 md:py-10 text-white"
    >
      <div className="text-xl md:text-2xl font-bold tracking-tight">
        <Link href="/">AUVRA®</Link>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <Link href="#work" className="hover:opacity-70 transition-opacity">Work</Link>
        <Link href="#studio" className="hover:opacity-70 transition-opacity">Projects</Link>
        <Link href="#studio" className="hover:opacity-70 transition-opacity">Studio</Link>
        <Link href="#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
          Get in touch
        </button>
      </nav>
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </motion.header>
  );
}