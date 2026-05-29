import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center  justify-center bg-[#f8f3ee] text-center px-4">
           {/* 404 Number */}
      <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-9xl font-bold text-[#6f4e37]"> 404 </motion.h1>
      {/* Heading */}
      <motion.h2 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} tansition={{ delay: 0.3 }}
        className="mt-4 text-2xl md:text-4xl font-semibold text-[#3e2723]"> Oops! Page Not Found</motion.h2>
      {/* Text */}
      <p className="mt-4 text-gray-600 max-w-md">The page you are looking for doesn’t exist or has been moved.</p>
      {/* Button */}
      <Link to="/" className="mt-8 px-6 py-3 bg-[#6f4e37] text-white rounded-full hover:bg-[#5a3b2e] transition">Back To Home</Link>
    </div>
  );
}