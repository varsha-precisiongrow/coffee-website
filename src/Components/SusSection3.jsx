
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import section3img from "../assets/sustainability/Colombian-coffee-farmer-among-coffee-trees.jpg";

const SusSection3 = () => {

  const { scrollY } = useScroll();

  // Same cinematic animation style
//   const xLeft = useTransform(scrollY, [200, 800], [-100, 0]);
//   const xRight = useTransform(scrollY, [200, 800], [100, 0]);
//   const opacity = useTransform(scrollY, [200, 600], [0, 1]);

const xLeft = useTransform(scrollY, [0, 1200], [-60, 0]);
const xRight = useTransform(scrollY, [0, 1200], [60, 0]);
const opacity = useTransform(scrollY, [100, 700], [0, 1]);

const item = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // smooth cubic easing (premium feel)
    },
  },
};
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between lines
    },
  },
};


  return (
    <section className="w-full bg-[#f4efe9] font-serif relative overflow-hidden relative">

     <img src="https://api.ecrop.co/assets/precisiongrow/cdnassets/coffe3.webp" alt="coffee3" loading="lazy" className="absolute -left-4 -bottom-8 w-96 hidden lg:block" />
     
      <div className="max-w-[80%] ml-auto flex flex-col md:flex-row items-stretch">

        {/* LEFT CONTENT */}
      <motion.div
        style={{ x: xLeft, opacity }}
        className="w-full md:w-1/2 flex items-center py-12 md:py-20 px-4 sm:px-6 md:px-10"
        >
         <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-5 "
        >
        <motion.h3
            variants={item}
            className="text-3xl md:text-4xl font-bold text-[#603913] mb-6"
        >
            Supporting a Sustainable Environment
        </motion.h3>

        <motion.p variants={item} className="text-base md:text-lg leading-relaxed">
            Many people associate coffee with health benefits, but every cup begins with a tree. Coffee beans are actually seeds from coffee cherries. These trees take a few years to grow, produce for decades, and can live up to 100 years.
        </motion.p>

        <motion.p variants={item} className="text-base md:text-lg leading-relaxed">
            Like other trees, coffee plants absorb carbon dioxide and release oxygen while supporting biodiversity. However, they are highly sensitive to climate change, which can impact growth, increase pests, and damage crops.
        </motion.p>

        <motion.p variants={item} className="text-base md:text-lg leading-relaxed">
            To build a sustainable future, farmers adopt practices like growing coffee with diverse forest species helping improve carbon absorption, protect ecosystems, and create additional income sources.
        </motion.p>
        </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
      <motion.div
        style={{ x: xRight, opacity }}
        className="w-full md:w-1/2 flex justify-center"
        >
        <img
            src={section3img}
            alt="Sustainable Coffee"
            className="w-full max-w-sm md:max-w-full h-auto md:h-full object-cover"
        />
        </motion.div>

      </div>
    </section>
  );
};

export default SusSection3;