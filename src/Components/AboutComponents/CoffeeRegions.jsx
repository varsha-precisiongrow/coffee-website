import React, { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/about/coffee_website.webp";

const CoffeeRegions = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Coffee Regions" loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* FIXED overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-4 md:px-8">

        {/* Heading */}
            <h6
        className={` uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c1712] relative inline-block transition-all duration-700 mb-10 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        >
        Coffee Regions of the World

        {/* centered underline */}
        <span
            className={`absolute left-1/2 -translate-x-1/2 -bottom-6 h-[4px] bg-[#c89563] transition-all duration-700 ${
            show ? "w-24" : "w-0"
            }`}
        ></span>
        </h6>

        {/* Paragraph 1 */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl max-w-5xl font-medium italic leading-relaxed transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
       Coffee is grown in more than 40 countries, mainly within a narrow belt around the Equator, between the Tropics of Cancer and Capricorn (25°N to 30°S)!.
        </p>

        {/* Paragraph 2 */}
        <p
          className={`mt-4 text-base sm:text-lg md:text-xl max-w-5xl font-medium italic leading-relaxed transition-all duration-700 delay-400 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
   These regions provide the perfect environment for coffee cultivation, including fertile soil, moderate temperatures, consistent rainfall, and balanced sunlight. Coffee plants are quite sensitive, and outside these specific conditions, they struggle to grow properly.
        </p>

        {/* Paragraph 3 */}
        <p
          className={`mt-4 text-base sm:text-lg md:text-xl max-w-5xl font-medium italic leading-relaxed transition-all duration-700 delay-600 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
       While many coffees available today are blends sourced from multiple regions, single-origin coffees come from one specific farm, region, or country. These coffees highlight unique flavor characteristics that reflect their place of origin, offering a distinct and authentic tasting experience.
        </p>

      </div>
    </section>
  );
};

export default CoffeeRegions;