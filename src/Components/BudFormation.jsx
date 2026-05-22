import React from "react";
import { motion } from "framer-motion";
import budImg from "../assets/home/Life_cycle_coffee.webp";

function BudFormation() {
  return (
<section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 
bg-[url('/bud-formation-bg.webp')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
<div className="absolute inset-0 
bg-gradient-to-b from-[#f5e6d3]/100 via-transparent to-[#f5e6d3]/50">
</div>
  <div className="relative max-w-7xl mx-auto">

    {/* HEADING */}
    <motion.h3
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#5c3b2a] uppercase text-center"
    >
      Bud Formation of Coffee
    </motion.h3>

    {/* UNDERLINE */}
    <div className="w-20 md:w-24 h-1 bg-[#d4a373] mx-auto mt-3 md:mt-4 rounded-full"></div>

    {/* CONTENT */}
    <div className="mt-10 gap-8 md:gap-12 items-center">

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center"
      >
        <img
          src={budImg}
          alt="Bud Formation of Coffee"
          loading="lazy"
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-full
          h-auto object-contain rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="text-[#3b2318] text-sm sm:text-base md:text-lg leading-relaxed mt-10 text-justify"
      >

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Bud formation is an important stage in the life cycle of coffee plants.
          It marks the beginning of flowering, which eventually leads to coffee bean production.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Environmental factors such as rainfall, temperature, and sunlight play a
          crucial role in triggering bud development. Proper care during this stage ensures better flowering, higher yield,
          and improved coffee quality.
        </motion.p>

      </motion.div>

    </div>
  </div>

</section>
);
}

export default BudFormation;