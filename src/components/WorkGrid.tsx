"use client";

import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    title: "Sora - Sports Club Website",
    year: "2024",
    img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-7 aspect-[4/3]",
  },
  {
    id: 2,
    title: "Vena - High Fashion Promo",
    year: "2025",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-5 aspect-[3/4] md:mt-24",
  },
  {
    id: 3,
    title: "Nora Stone - Digital Fashion Platform",
    year: "2023",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-12 aspect-[21/9]",
  },
  {
    id: 4,
    title: "EOS - Form meets Performance",
    year: "2024",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-5 aspect-[4/5]",
  },
  {
    id: 5,
    title: "Studio - Haute Label Partner",
    year: "2025",
    img: "https://images.unsplash.com/photo-1605206259021-3958cc5c9704?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-7 aspect-[16/10] md:mt-auto",
  },
];

export function WorkGrid() {
  return (
    <section id="work" className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-md leading-tight">
          Collective built for the next era of brands
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-sm md:text-right">
          With unmatched creative direction and visual identities we build brands that
          leave a lasting impression.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {works.map((work) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className={`group relative overflow-hidden cursor-pointer flex flex-col gap-4 ${work.className}`}
          >
            <div className="relative w-full h-full overflow-hidden bg-gray-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center text-sm font-medium">
              <span>{work.title}</span>
              <span className="text-secondary">{work.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-secondary hover:border-secondary transition-colors">
          View All Work &rarr;
        </button>
      </div>
    </section>
  );
}