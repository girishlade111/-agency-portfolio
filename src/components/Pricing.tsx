"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const features = [
    "Unlimited design requests",
    "Priority communications queue",
    "Dedicated creative director",
    "No hidden costs or surprise fees",
    "Delivery of high-res source files",
    "Weekly strategy syncs",
    "Audit and performance improvements",
    "Cancel, pause, or scale anytime"
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto border-t border-gray-200">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
              Personalized <br /> plans and pricing
            </h2>
            <p className="text-secondary text-base max-w-sm mb-12">
              We've structured our services to provide you with the transparency and flexibility you need. Get premium agency quality without the traditional overhead.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="Avatar"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold">★★★★★</div>
                <p className="text-xs font-medium text-secondary">Trusted by 100+ brands</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="lg:w-1/2 w-full bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        >
          <div className="flex gap-3 mb-8">
            <span className="px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-wider rounded">Monthly</span>
            <span className="px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-wider rounded">Custom Project</span>
          </div>

          <h3 className="text-2xl font-medium mb-3">Monthly Design Retainer</h3>
          <p className="text-secondary text-sm mb-8">One transparent, predictable rate for a dedicated team, priority tasks, and unlimited strategic outputs.</p>

          <div className="mb-10">
            <span className="text-5xl font-bold tracking-tight">$3,000</span>
            <span className="text-secondary font-medium">/m</span>
          </div>

          <button className="w-full py-4 bg-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors mb-12">
            Reserve a Spot <span className="text-xl leading-none">&rarr;</span>
          </button>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">What's included</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-secondary">
                  <Check className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}