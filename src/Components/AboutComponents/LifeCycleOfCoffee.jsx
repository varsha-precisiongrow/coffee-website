
import React, { useState } from "react";
import { motion } from "framer-motion";
import sideimgs from '../../assets/about/coffee-plant-illustration-min.avif'
import coffeedecaf from '../../assets/about/coffee_decap.webp'
import rostedBeans from '../../assets/roasting-coffee-beans.webp'
const tabs = [
  {
    title: "How is coffee grown?",
    content: [
      "The path to your next coffee begins with the delicate seedlings of the coffee tree. (As a quick reminder, the seeds of coffee cherries are the same thing as coffee beans.) Here, you’ll find the answer to a common question: “How are coffee beans grown?”",
      "Coffee seedlings are generally planted in large beds in shaded nurseries. They’re watered frequently and protected from bright sunlight until they’re ready to be permanently planted. Often, they’re planted during the wet season so that the soil remains moist while the roots become firmly established. It then takes approximately 3 to 4 years for the coffee trees to bear fruit, depending on the variety. Coffee cherries turn a deep red/purplish color when they are ripe and ready to be harvested.",
    ],
    image: "https://www.aboutcoffee.org/wp-content/uploads/2024/10/coffee-plantation-in-costa-rica-2800x1600.jpg",
  },

  {
    title: "How is coffee harvested?",
    paragraphs: [
      "In most coffee-growing regions, there is one major harvest each year. In countries like Colombia, where there are two flowerings annually, there is a main crop and secondary crop.",
      "When it’s time, how is coffee harvested? It varies. In most countries, the crop is picked by hand, which is a difficult, time-consuming process. In places like Brazil, where there are immense, relatively flat coffee fields, the larger farms may use mechanized processes.",
    ],
    bullets: [
      {
        title: "Strip Picked:",
        desc: "All cherries are stripped from the branch at one time.",
      },
      {
        title: "Selectively Picked:",
        desc: "Pickers rotate among the coffee trees every 8 to 10 days, individually picking only the ripe cherries.",
      },
    ],
    image: "https://www.aboutcoffee.org/wp-content/uploads/2024/10/hand-picking-coffee-from-tree-2880x1920-1-2800x1600.jpg",
  },

  {
    title: "How is coffee processed?",
    content: [
      {
        type: "paragraph",
        text: "After harvesting, coffee cherries must be processed as quickly as possible to prevent spoilage. How is coffee processed today? Through one of two contrasting methods (or a third hybrid of both methods): one centuries-old, one technology driven.",
      },
      {
        type: "section",
        heading: "Natural Process (Dry Method)",
        text: "In this time-tested method, freshly picked coffee cherries are spread on huge surfaces to dry in the sun, then hulled to remove the skin and pulp.",
      },
      {
        type: "section",
        heading: "Washed Process (Wet Method)",
        text: "This modern method involves several steps to remove the skin and pulp from the coffee cherry, then drying the beans in the sun or by machine.",
      },
      {
        type: "section",
        heading: "Semi-Washed or Honey Process",
        text: "This blended method of processing removes the pulp of the coffee cherry but leaves at least some of the mucilage layer intact prior to the drying process.",
      },
    ],
    image: "https://www.aboutcoffee.org/wp-content/uploads/2024/10/drying-coffee-beans-in-the-sun-2880x1760-1-2800x1600.jpg",
  },

  {
    title: "How is coffee roasted?",
    content: [
      "It’s finally time to transform those green coffee seeds into the delicious smelling brown beans we know and love. How is coffee roasted? In roasting machines, generally referred to as coffee roasters, where the beans are kept moving continuously to prevent burning.",
      "Next, we get to the heart of the roasting process. When the beans reach an internal temperature of about 400 degrees Fahrenheit, they begin to turn brown. The caffeol, a fragrant oil locked inside the beans, also begins to emerge, producing coffee’s signature flavor and aroma.",
      "After roasting, the beans are immediately cooled either by air or water, then packaged for distribution. Roasting is generally performed in the country where the beans will be sold, as freshly roasted beans must reach the consumer as quickly as possible.",
    ],
    image: rostedBeans,
  },

  {
    title: "How are blends made?",
    content: [
        "If you’ve ever paused to ask, “What is blended coffee, and does it involve a blender?” just know you’re not alone. However, blended coffee or coffee blends simply combine coffees from different places that have complementary flavors, aromas, and other characteristics. (They’re often made by professional roasters, but it can be done at home. Grab a coffee grinder, not a blender!)",
        "Coffee blends are generally made with the goal of creating unique, balanced flavor profiles. When crafting their blends, roasters consider the variety of each component coffee, the region and altitude where it was grown, and how it was processed to create an optimal balance of flavors. Blended coffee tends to be more consistent in its flavor profile and is more likely to be available year-round than a single origin coffee.",
        "The different types of coffee in a blend can be combined before or after roasting. If all the beans in a blend have similar densities and moisture content, combining them first allows for a more consistently roasted batch. However, if the density and moisture content of the beans vary significantly, roasting them separately allows for a more controlled roast and flavor.",
    ],
    image: "https://www.aboutcoffee.org/wp-content/uploads/2024/10/coffee-in-roasting-machine-2800x1600.jpg",
  },

  {
    title: "How is decaf coffee made?",
paragraphs: [
      "All coffee begins as green, unroasted beans. How is decaf coffee made? All decaffeinated coffee is made through chemistry!",
      "To remove around 97% of the caffeine found naturally in coffee, green coffee beans are warmed and soaked in liquid in one of four ways. All are equally safe and FDA compliant, and the most common is the European Method. Then, the beans are washed, steamed, and roasted at very high temperatures that evaporate all or nearly all liquid used in decaffeination.",
      "The most common is the European Method, which has five steps. ",
    ],
    bullets: [
      {
        title: "Step 1 :",
        desc: "The coffee beans are steamed to open their “pores” and make the caffeine more accessible.",
      },
      {
        title: "Step 2 :",
        desc: "The beans are rinsed with a liquid solvent, which bonds to and removes caffeine.",
      },  {
        title: "Step 3 :",
        desc: "The liquid solution – which now contains the caffeine extracted from the beans is removed.",
      },
      {
        title: "Step 4 :",
        desc: "The caffeine is extracted from the solution for use in other products, and nearly 100% of the solution is captured and reused to decaffeinate more coffee beans.",
      },
       {
        title: "Step 5 :",
        desc: "The decaffeinated coffee beans are dried and roasted at a temperature high enough to evaporate the methylene chloride, removing it from the beans.",
      },
    ],
    image:coffeedecaf,
  },

 {
  title: "Recycling grounds",
  richText: {
    intro:
      "Before we talk about how to recycle coffee grounds, let’s talk about how NOT to do it: reusing your coffee grounds to make coffee. The brewing process extracts coffee flavors you want to taste and leaves only bitter flavors behind. Fortunately, there are better ways to put those grounds to good use and we’ll get you started!",
    
    heading: "Three simple ideas for recycling coffee grounds",

    points: [
      {
        title: "Help your plants thrive.",
        desc: "Used coffee grounds can help both indoor and outdoor plants absorb more water and nutrients, fertilize the soil, and even deter some pests. Just do your homework first—there are different ways to do this for different types of plants.",
      },
      {
        title: "Safely discard old meds.",
        desc: "If you have pills or liquids that should not be flushed, the U.S. Food and Drug Administration recommends putting them in a sealable container (like a plastic baggie) with used coffee grounds, which can help deter children and animals.",
      },
      {
        title: "Deodorize your kitchen.",
        desc: "Dry your used coffee grounds and place them in an uncovered container anywhere in your kitchen to absorb unpleasant smells. Coffee is a hero! (You can also smell coffee beans to clear your nose while testing different scents, but that’s a general tip rather than how to recycle coffee grounds.)",
      },
    ],
  },
  image: "https://www.aboutcoffee.org/wp-content/uploads/2024/10/recycling-coffee-grounds-to-use-as-plant-fertilizer-2800x1600.jpg",
}
];

const LifeCycleOfCoffee = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}; 
  return (
   <motion.section  initial="hidden"  whileInView="show"  viewport={{ once: true }} className="relative w-full bg-gray-100 py-10 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#f5e6d3] via-white to-[#f5e6d3]">
    <motion.img variants={fadeUp} src={sideimgs} alt="sideimgs" loading="lazy" className="absolute -left-24 bottom-0 w-96 h-[70%] hidden md:block " />  
      {/* Heading */}
      <motion.div variants={fadeUp} className="text-center max-w-7xl mx-auto mb-8">
        <h4 className="text-3xl md:text-4xl font-bold mb-3 text-[#603911]">
          Lifecycle of Coffee
        </h4>
        <p className="text-lg">
        Every delicious cup of coffee is the result of a little magic in the form of a series of carefully planned steps taken by millions of people around the world who work together to produce and distribute our favorite beverage.
        Below, we take a quick look at some of the main steps in the lifecycle of coffee. You can explore the most frequently asked questions and popular topics and click through if you’d like more details. It’s quite a journey from seedling to recycling!
        </p>
      </motion.div>
      {/* Counter */}
      <motion.div variants={fadeUp}className="max-w-7xl mx-auto mb-4 pl-4">
        {active + 1} / {tabs.length}
      </motion.div>
      {/* Tabs */}
      <motion.div variants={fadeUp}className="flex flex-nowrap justify-start gap-2 mb-10 max-w-7xl mx-auto overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`px-4 py-4 rounded-lg text-start font-semibold border-2 border-gray-100 ${
              active === i ? "bg-[#603911] text-white" : "bg-white"
            }`} > {tab.title}
          </button>
        ))}
      </motion.div>
      {/* CONTENT */}
     <motion.div variants={fadeUp} className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 ">
        {/* LEFT */}
        <motion.div variants={fadeUp} className="w-full lg:w-1/2 ">
          {/* SIMPLE CONTENT */}
          {current.content &&
            current.content.map((item, i) => {
              if (typeof item === "string") {
                return (
                  <p key={i} className="mb-5 text-lg" >
                    {item}
                  </p>
                );
              }
              if (item.type === "paragraph") {
                return (
                  <p key={i} className="mb-5 text-lg ">
                    {item.text}
                  </p>
                );
              }
              if (item.type === "section") {
                return (
                  <div variants={fadeUp} key={i} className="mb-6">
                    <h5 className="text-xl font-bold mb-2">
                      {item.heading}
                    </h5>
                    <p className="text-lg">{item.text}</p>
                  </div>
                );
              }
              return null;
            })}
          {/* PARAGRAPHS */}
          {current.paragraphs &&
            current.paragraphs.map((para, i) => (
              <p key={i} className="mb-5 text-lg">
                {para}
              </p>
            ))}
          {/* BULLETS */}
          {current.bullets && (
            <ul className="list-disc pl-5 space-y-2">
              {current.bullets.map((b, i) => (
                <li key={i}>
                  <span className="font-bold">{b.title}</span> {b.desc}
                </li>
              ))}
            </ul>
          )}
          {/* ✅ RICH TEXT (LAST TAB DESIGN) */}
        {current.richText && (
        <div variants={fadeUp} className="space-y-6">
            {/* Intro */}
            <p className="leading-relaxed text-lg">{current.richText.intro} </p>
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900"> {current.richText.heading} </h2>
            {/* Points */}
            <div variants={fadeUp} className="space-y-4">
            {current.richText.points.map((item, i) => (
                <p key={i} className=" leading-relaxed text-lg"> <span className="font-bold">{item.title}</span>{" "} {item.desc} </p>
            ))}
            </div>
        </div>
        )}
        </motion.div>
        {/* RIGHT IMAGE */}
        <motion.div variants={fadeUp} className="w-full lg:w-1/2">
         <motion.img variants={fadeUp} src={current.image}
            alt="fadeUpimg" loading="lazy" className="w-full h-full object-cover rounded-lg" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LifeCycleOfCoffee;