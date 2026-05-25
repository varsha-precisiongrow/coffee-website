import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import useSchemaMarkup from "./useSchemaMarkup";

const SchemaInjector = () => {

  const location = useLocation();

  const [schemaType, setSchemaType] =
    useState(null);

  const [schemaData, setSchemaData] =
    useState(null);

  useEffect(() => {

    const path = location.pathname;

    const baseUrl =
      "https://coffeeinstitute.co.in";

    // ✅ Reset previous schema
    setSchemaType(null);

    setSchemaData(null);

    // ================= HOME PAGE =================

    if (path === "/") {

      setSchemaType("HomePage");

      return;
    }

    // ================= BLOG PAGE =================

    if (path === "/blog") {

      setSchemaType("BlogPage");

      return;
    }

    // ================= BLOG DETAIL PAGE =================

    if (path.startsWith("/blog/")) {

      const slug =
        path.split("/blog/")[1];

      setSchemaType("BlogDetail");

      setSchemaData({

        title: slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) =>
            char.toUpperCase()
          ),

        description:
          "Read coffee related blog article from Coffee Institute.",

        image:
          "https://coffeeinstitute.co.in/Coffee_institute.webp",

        author: "Coffee Institute",

        datePublished: "2026-05-25",

        url: `${baseUrl}${path}`,
      });

      return;
    }

    // ================= OTHER PAGES =================

    const pages = {

      "/about": {
        name: "About",

        description:
          "Learn about our passion for specialty coffee, sustainable sourcing, coffee education, and premium coffee experiences.",
      },

      "/beans": {
        name: "Beans",

        description:
          "Discover Arabica, Robusta, single-origin coffee, and coffee processing methods that shape flavor and aroma.",
      },

      "/story": {
        name: "Our Story",

        description:
          "Explore our coffee journey from mountain-grown beans to expertly crafted specialty coffee with rich aroma and flavor.",
      },

      "/health": {
        name: "Health",

        description:
          "Discover the science-backed health benefits of coffee for energy, focus, wellness, brain health, and daily performance.",
      },

      "/contact": {
        name: "Contact",

        description:
          "Get in touch for coffee inquiries, partnerships, support, and collaboration. We’re here to help coffee lovers worldwide.",
      },

      "/sustainability": {
        name: "Sustainability",

        description:
          "Learn how sustainable coffee farming, ethical sourcing, and ecofriendly practices support farmers and the planet.",
      },
    };

    // ================= MATCH PAGE =================

    if (pages[path]) {

      setSchemaType("BasicPage");

      setSchemaData({
        ...pages[path],

        url: `${baseUrl}${path}`,
      });
    }

  }, [location.pathname]);

  useSchemaMarkup(schemaType, schemaData);

  return null;
};

export default SchemaInjector;