"use client";

import { motion } from "framer-motion";

export function Impact() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20 bg-background text-foreground">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="lg:w-1/2 relative aspect-[4/5] bg-gray-200 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop"
            alt="Impact Portrait"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm shadow-xl flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Avatar"
                />
              ))}
            </div>
            <div>
              <div className="text-sm font-bold flex gap-1">
                <span>★★★★★</span>
              </div>
              <p className="text-xs font-medium text-secondary">Trusted by Founders</p>
            </div>
          </div>
        </motion.div>

        <div className="lg:w-1/2 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-lg mb-12">
              "Working with this team was the difference between having a good idea and having a global brand. Our bounce rate dropped by nearly half within the first month."
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-5xl md:text-7xl font-bold tracking-tight mb-2">$20M+</div>
                <p className="text-sm font-medium text-secondary">Revenue generated for clients</p>
                <div className="mt-8 h-16 w-full max-w-[150px] border-b border-l border-gray-300 relative">
                  {/* Minimal Graph line simulation */}
                  <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path d="M0,64 L30,40 L60,50 L90,20 L120,30 L150,0" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-bold tracking-tight mb-2">120+</div>
                <p className="text-sm font-medium text-secondary">Brands transformed globally</p>
                <div className="mt-8 flex gap-2 items-end h-16">
                  {/* Minimal Bar chart simulation */}
                  <div className="w-4 bg-gray-300 h-1/3"></div>
                  <div className="w-4 bg-gray-400 h-2/3"></div>
                  <div className="w-4 bg-gray-500 h-1/2"></div>
                  <div className="w-4 bg-gray-700 h-full"></div>
                  <div className="w-4 bg-black h-5/6"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}