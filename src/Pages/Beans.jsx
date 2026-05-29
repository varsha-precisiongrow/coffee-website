import { motion } from "framer-motion";
import arabiaRobusta from '../assets/beans/Arabica-left-robusta-right.jpg'
import arabica from '../assets/beans/arabica-img.jpg'
import robusta from '../assets/beans/robusta-img.jpg'
import CoffeeProcessing from "../Components/CoffeeProcessing";
import { Helmet } from 'react-helmet-async';
import coffee3bean from '../assets/side-icon/3Coffee-Bean.png'
import coffeebeans from '../assets/side-icon/coffee-beans.png'

const text = "Coffee Beans Varieties";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};
const textLines = [
  "Coffee varieties (also known as varietals) refer to the different types of coffee beans similar to how apples come in many kinds. Each variety has its own unique set of characteristics, including flavor, body (texture and richness), acidity, sweetness, finish, and caffeine content.",
  "These qualities are not only defined by the variety itself but are also shaped by the environment in which the coffee is grown. Factors like soil quality, climate, altitude, sunlight, and nearby vegetation all influence the final taste this combination is known as terroir.",
  "Terroir plays a major role in single-origin coffees, which are sourced from one specific farm, region, or country. These coffees highlight distinct and complex flavor profiles that reflect their place of origin.",
  "Additionally, the methods used for harvesting and processing the beans before roasting also impact the overall flavor, giving each coffee its own unique identity."
];

const container1 = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const child1 = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const containerText = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childText = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imgVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


const Beans = () => {

  return (
    <>
     < Helmet>
        <title>Coffee Bean Varieties | Arabica, Robusta & Processing</title>

        <meta
          name="description"
          content="Explore coffee bean varieties, Arabica vs. Robusta; terroir; and coffee processing methods that shape flavor, aroma, and coffee quality."
        />

        <meta
          name="keywords"
          content="coffee bean varieties, Arabica vs. Robusta, coffee processing methods, specialty coffee beans, singleorigin coffee"
        />
        <link rel="canonical" href="https://coffeeinstitute.co.in/beans" />
     </Helmet>
      {/* ========================================================================= banner ============================================================================== */}
    <section className="relative w-full h-[70vh] md:h-[55vh] flex items-center bg-[url('/bean_banner.webp')] bg-cover bg-center md:bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight " >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
    {/* =========================================================================section 1 ============================================================================== */}
    <section className="w-full h-auto  pl-4 py-12 bg-[url('/bud-formation-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[80%] w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5" >
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b2e2b] mb-4">
            Coffee Varieties
          </h2>
          <motion.div  initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.7 }}  viewport={{ once: true }}  className="h-1 bg-[#d4a373] mr-auto mt-2 rounded-full" />
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              variants={child1}
              className="text-gray-700 text-base md:text-base leading-relaxed" >
              {line}
            </motion.p>
          ))}
        </motion.div>
      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center" >
        <img
          src={arabiaRobusta}
          alt="CoffeeBeans"
          loading="lazy"
          className="rounded-tl-2xl rounded-bl-2xl shadow-xl w-full h-96 object-cover" />
        {/* TEXT BELOW IMAGE */}
        <p className="mt-3 text-center  text-sm md:text-xs max-w-md">
          Roasted Arabica bean (left) compared to Robusta bean (right)
        </p>
      </motion.div>
      </div>  
    </section>
      {/* ================================================================== section 3 ===============================================================================*/}
   <section  className="w-full py-12 relative" >
     <motion.img src={coffee3bean} alt="Coffee Beans" loading="lazy" animate={{ rotate: 360, y: [0, -20, 0] }} transition={{ rotate: { repeat: Infinity, duration: 12, ease:    "linear" }, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-40  object-contain z-10 pointer-events-none sepia hue-rotate-[330deg] saturate-[400%] brightness-75 mix-blend-multiply opacity-20" />
      <motion.img src={coffeebeans} alt="coffee art"  loading="lazy" animate={{ rotate: 360, }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear", }}
        className="mt-10 w-28 sm:w-36 md:w-96 lg:w-48  top-1/2 -translate-y-1/2 w-40 object-cover right-10 hidden lg:block absolute" />
      {/* HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#4b2e2b] mb-2">
          The most common varieties of coffee
        </h3>
        <motion.div initial={{ width: 0 }}
          whileInView={{ width: 96 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="h-1 bg-[#d4a373] mx-auto mb-4 rounded-full" />
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
         Most of the coffee consumed worldwide comes from two main species: arabica and robusta. While other types exist, these two dominate global production and offer very different flavor experiences, growing conditions, and characteristics.
        </p>
      </div>
      {/* CARDS */}
      <div className="max-w-[80%] mx-auto flex flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ========================================================== ARABICA ========================================================================== */}
         <div className="grid grid-cols-1 md:grid-cols-[30%_70%] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out
          shadow-[10px_10px_25px_rgba(75,46,43,0.25)] hover:shadow-[15px_15px_40px_rgba(75,46,43,0.35)]
           hover:border-b-4 hover:border-r-4 hover:border-[#4b2e2b]  hover:-translate-y-2 hover:translate-x-1">
          <motion.div variants={imgVariant}
            initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-56 sm:h-64 md:h-full" >
            <motion.img src={arabica}
              alt="Arabica Coffee" loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }} />
          </motion.div>
          {/* CONTENT */}
          <motion.div variants={containerText}
            initial="hidden" whileInView="show"
            viewport={{ once: true }} className="p-6 flex flex-col justify-center space-y-2" >
            <motion.h4 variants={childText} className="text-2xl font-bold text-[#4b2e2b]">
              🌿 Arabica
            </motion.h4>
            <motion.p variants={childText} className="text-base">
              Coffea arabica traces its origins to the first coffee trees discovered in Ethiopia. It is prized for producing smooth, mild, and aromatic coffee, often considered premium and commanding higher prices in the global market
            </motion.p>
            <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Popular Varieties - </h5>
              <p className="text-sm">Bourbon, Caturra, Geisha, Yirgacheffe, Typica</p>
            </motion.div>
            <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Global Production Share - </h5>
              <p className="text-sm">Around 62% of the world’s coffee supply</p>
            </motion.div>
            <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Growing Regions - </h5>
              <p className="text-sm">Central & South America, East Africa, and parts of Asia</p>
            </motion.div>
             <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Trees - </h5>
              <p className="text-sm">Arabica plants are more expensive to cultivate due to their preference for steep terrains and their vulnerability to diseases, requiring careful maintenance.</p>
            </motion.div>
              <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Beans - </h5>
              <p className="text-sm">Arabica beans are flatter and more elongated, with lower caffeine content compared to Robusta, contributing to their smoother taste.</p>
            </motion.div>
          </motion.div>
        </div>
        {/* =============================================================== ROBUSTA ==================================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out
          shadow-[10px_10px_25px_rgba(75,46,43,0.25)] hover:shadow-[15px_15px_40px_rgba(75,46,43,0.35)]
           hover:border-l-4 hover:border-b-4 hover:border-[#4b2e2b]
          hover:-translate-y-2 hover:translate-x-1">
          {/* CONTENT */}
          <motion.div
            variants={containerText}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-6 flex flex-col justify-center space-y-4 order-2 md:order-1" >
            <motion.h4 variants={childText} className="text-2xl font-bold text-[#4b2e2b]">
              🌱 Robusta
            </motion.h4>
              <motion.p variants={childText} className=" text-base">
            Coffea robusta originates from the dense forests of central and western sub-Saharan Africa. It is known for its strong, bold flavor with slightly bitter notes. Robusta is widely used in coffee blends and instant coffee, and is especially popular in espresso blends for its rich crema and intense profile.
            </motion.p>
            <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Production - </h5>
              <p className="text-sm">Roughly 38% of global coffee production, with increasing output</p>
            </motion.div>
            <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Growing Regions - </h5>
              <p className="text-sm">Central & Western Africa, Southeast Asia (including Indonesia and Vietnam), and Brazil.</p>
            </motion.div>          
              <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Trees - </h5>
              <p className="text-sm">Robusta plants are hardier and more resistant to pests and diseases, making them easier and more cost-effective to grow.</p>
            </motion.div>
            <motion.div variants={childText} className="flex flex-wrap items-center gap-2">
              <h5 className="font-semibold">Beans - </h5>
              <p className="text-sm">Robusta beans produce a stronger, more intense flavor and contain 50–60% more caffeine than Arabica.</p>
            </motion.div>
          </motion.div>   
          <motion.div variants={imgVariant}
          initial="hidden"  whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full h-56 sm:h-64 md:h-full order-1 md:order-2">
          <motion.img src={robusta}
            alt="Robusta Coffee" loading="lazy"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }} />
        </motion.div>
        </div>
      </div>
    </section>
    {/*========================================================================= section 4 ===================================================================*/}
    <CoffeeProcessing />
    </>
  );
};

export default Beans;