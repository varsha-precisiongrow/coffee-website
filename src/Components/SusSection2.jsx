

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import bgImg from "../assets/sustainability/sustainability_section2.webp";

export default function SusSection2() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [-100, 120]);
  const scale = useSpring(scaleRaw, { stiffness: 80, damping: 20 });
  const yBg = useSpring(yRaw, { stiffness: 80, damping: 20 });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  return (   
     <section
      ref={ref}
      id="next-section"
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden " >
      {/* Background */}
    <motion.div
      style={{ scale, y: yBg }}
      className="absolute inset-0 w-full h-full">
      <img src={bgImg} alt="Our Commitment" loading="lazy" className="w-full h-full object-cover object-center" />
    </motion.div>
      {/* Content */}
      <motion.div  style={{ y }} className="relative z-10 max-w-5xl px-6 md:px-10 text-center">
        <motion.h2
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-8xl font-bold mb-6 uppercase text-[#603913]" > Our Commitment </motion.h2>
        <motion.p
          initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-900">
           Sustainability is not a trend for us it’s a responsibility. At Coffee Institute, we focus on creating a positive impact across the entire coffee journey. We believe great coffee should support both people and the planet.   As you enjoy your favorite cup of coffee, have you ever considered its impact on the world? This page explores how the coffee industry is working toward a more sustainable future.
          Ensuring that coffee can be grown responsibly while protecting natural resources is essential. It also supports over 25 million smallholder farmers worldwide, along with millions of livelihoods connected to coffee production.
        </motion.p>
        </motion.div>
    </section>
  );
}
