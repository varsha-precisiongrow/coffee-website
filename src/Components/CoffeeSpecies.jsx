import { motion } from "framer-motion";
import SpeciesCard from "./SpeciesCard";
import arabicaImg from "../assets/side-icon/Arabica-Coffee.webp";
import robustaImg from '../assets/side-icon/Robusta-coffee.webp'
import libericaImg from '../assets/side-icon/Liberica-coffee.webp'
import excelsaImg from '../assets/side-icon/Excelsa-coffee.webp'

const speciesData = [
  {
    title: "Arabica Coffee",
     image: arabicaImg,
    description:
      "Arabica beans are oval with a curved crease and are grown at higher altitudes. They produce a smooth, aromatic coffee with sweet, fruity, and slightly acidic notes, making them the most refined and widely preferred species.",
  },
  {
    title: "Robusta Coffee",
    image: robustaImg,
    description:
      "Robusta beans are rounder and smaller, grown at lower altitudes in harsher climates. They contain more caffeine and deliver a strong, bold flavor with earthy and bitter notes, often used for intense espresso blends.",
  },
  {
    title: "Liberica Coffee",
    image: libericaImg,
    description:
      "Liberica beans are larger and irregular in shape, known for their unique structure. They produce a smoky, woody aroma with a bold and unusual flavor profile, making them rare and distinct from other coffee species.",
  },
  {
  title: "Excelsa Coffee",
  image: excelsaImg,
  description:
    "Excelsa beans are elongated and grow on large trees in Southeast Asia. They offer a unique flavor profile combining tart, fruity notes with deep, dark undertones, adding complexity and contrast compared to other coffee species.",
}
];

// ✨ Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92, y: 60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // luxury smooth easing
    },
  },
};

const CoffeeSpecies = () => {

  return (

  <section className="relative py-24 overflow-hidden bg-[url('/src/assets/bg-img/bg-img-coffee.jpg')] bg-cover bg-center">
     <div className="absolute top-0 left-0 w-full h-40 bg-black/30"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h4 variants={item} initial="hidden"  whileInView="show"  viewport={{ once: true }} className="text-4xl font-bold text-[#d4a373] mb-4 uppercase" >
          Coffee Species</motion.h4>
        <div className="w-20 md:w-24 h-1 bg-[#d4a373] mx-auto my-5 md:mt-4 rounded-full"></div>
        {/* Description */}
        <motion.p variants={item}  initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-gray-900 max-w-7xl mx-auto mb-14 text-lg leading-relaxed text-white">
           Coffee is more than a beverage it begins with the species of the bean. Each coffee species grows in unique environments and carries distinct 
            characteristics, influencing flavor, aroma, and overall experience.

            From the smooth notes of Arabica to the bold strength of Robusta and the rare complexity of Liberica, understanding these species is essential 
            for anyone passionate about coffee. Explore how each variety shapes the journey from farm to cup.
        </motion.p>
        {/* Cards */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speciesData.map((itemData, index) => (
            <motion.div key={index} variants={item}>
             <motion.div key={index} variants={item} className="h-full">
                <SpeciesCard 
                    title={itemData.title}
                    description={itemData.description}
                     image={itemData.image} />
                </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
</section>
  );
};

export default CoffeeSpecies;