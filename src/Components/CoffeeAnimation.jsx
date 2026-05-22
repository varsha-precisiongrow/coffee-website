
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coffee from "../assets/side-icon/coffee_bean.webp";

const coffees = [
  { id: 1, img: coffee },
  { id: 2, img: coffee },
  { id: 3, img: coffee },
  { id: 4, img: coffee },
];

export default function CoffeeAnimation({ onFinish }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < coffees.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const doneTimer = setTimeout(() => {
        onFinish();
      }, 800);
      return () => clearTimeout(doneTimer);
    }
  }, [visibleCount, onFinish]);

  return (
    <div className="h-screen w-full flex items-center justify-center relative
    bg-[linear-gradient(130deg,#d4a373_0%,#2b1712_50%,#d4a373_100%)]">

      {/* ☕ COFFEE BEANS (TRUE CENTER) */}
      <div className="grid grid-cols-4 gap-3 mt-32">
        {coffees.slice(0, visibleCount).map((coffee) => (
          <motion.div
            key={coffee.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center"
          >
            <img
              src={coffee.img}
              alt="coffee" loading="lazy"
              className="w-12 sm:w-16 md:w-20 lg:w-24"
            />
          </motion.div>
        ))}
      </div>

      {/* 🔥 LOGO ABOVE CENTER */}
      <motion.img
        src="/Coffee_institute.webp"
        alt="logo" loading="lazy"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: -120 }} 
        transition={{ duration: 0.8 }}
        className="absolute w-28 sm:w-32 md:w-40 lg:w-72 object-contain"
      />

    </div>
  );
}