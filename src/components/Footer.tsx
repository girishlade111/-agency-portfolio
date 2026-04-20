"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-medium mb-8">Stay connected</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-sm">
              Join our newsletter for the latest updates on the world of brand and digital design.
            </p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-zinc-700 text-white px-4 py-3 w-full focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors">
                Submit
              </button>
            </div>
          </div>
          
          <div className="md:col-span-7 flex flex-wrap gap-16 md:justify-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Explore</h4>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Home</Link>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Projects</Link>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Studio</Link>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Social</h4>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Twitter</Link>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Behance</Link>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Instagram</Link>
              <Link href="#" className="text-sm font-medium hover:text-zinc-400 transition-colors">Dribbble</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Contact Us</h4>
              <p className="text-sm font-medium">hello@auvrastudio.com</p>
              <p className="text-sm font-medium">+1 (123) 345 6789</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="w-full flex justify-center border-b border-zinc-800 pb-12 mb-8"
        >
          {/* Extremely large typography for AUVRA */}
          <h1 className="text-[15vw] leading-none font-bold tracking-tighter text-white/90">
            AUVRA<span className="text-[8vw] align-top">®</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
          <p>&copy; {new Date().getFullYear()} AUVRA Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}