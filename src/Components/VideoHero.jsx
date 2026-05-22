import React from "react";
import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* 🎬 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/coffee.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

 
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Coffee Institute
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Brewing sustainability, one cup at a time.
        </p>
      </motion.div>
    </section>
  );
}