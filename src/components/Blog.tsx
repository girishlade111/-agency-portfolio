"use client";

import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Visual Shapes What Users Remembers",
    category: "CULTURE",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Why seamless UX design builds trust",
    category: "DESIGN",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Storytelling design turns visitors into fans",
    category: "STRATEGY",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Blog() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-md leading-tight">
          Team insights that shape real brands
        </h2>
        <p className="text-secondary text-sm max-w-xs md:text-right">
          Not trend-chasing theory. Just straight talk from the trenches of design, tech, and brand building.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="group cursor-pointer flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">
                {post.category}
              </p>
              <h3 className="text-xl font-medium leading-snug group-hover:translate-x-2 transition-transform duration-300">
                {post.title}
              </h3>
              <div className="mt-4 h-px w-full bg-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-black group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}