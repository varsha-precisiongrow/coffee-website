import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CinematicSection({ bg, title, text }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={bg} alt="bg" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-white text-center max-w-3xl px-6" >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl">{text}</p>
      </motion.div>
    </section>
  );
}