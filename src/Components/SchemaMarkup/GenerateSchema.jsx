export const GenerateSchema = (type, data = {}) => {

  const baseUrl = "https://coffeeinstitute.co.in";
  
    const commonAddress = {
    "@type": "PostalAddress",
    "streetAddress": "Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Ghansoli",
    "addressLocality": "Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400710",
    "addressCountry": "IN"
  };

  const commonOrganization = {
    "@type": "Organization",

    "@id": `${baseUrl}/#organization`,

    "name": "Coffee Institute",

    "url": baseUrl,

      "logo": {
      "@type": "ImageObject",
      "url": "https://coffeeinstitute.co.in/Coffee_institute.webp",
      "width": 250,
      "height": 60
    },

    "sameAs" : [
      "https://www.facebook.com/PrecisionGrow",
      "https://twitter.com/precision_grow",
      "https://www.instagram.com/precisiongrow_/",
      "https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g",
      "https://www.linkedin.com/company/precisiongrow"
    ],
      "email": "info@coffeeinstitute.co.in",
      "telephone": "+91-8097283444",
      "address": commonAddress,
  };
     const commonContact = {
    "@type": "ContactPoint",
    "telephone": "+91-8097283444",
    "contactType": "customer support",
    "email": "info@coffeeinstitute.co.in",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  };

  switch (type) {

    // ================= HOME PAGE =================

    case "HomePage":
      return {
        "@context": "https://schema.org",

        "@graph": [
          {
            "@type": "WebSite",

            name: "Coffee Institute",

            url: baseUrl,
          },

          {
            ...commonOrganization,
          },
        ],
      };


    // ================= BASIC PAGES =================

    case "BasicPage":
      return {
        "@context": "https://schema.org",

        "@graph": [
          {
            "@type": "WebPage",

            name: data.name,

            url: data.url,

            description: data.description,
          },

          {
            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",

                position: 1,

                name: "Home",

                item: baseUrl,
              },

              {
                "@type": "ListItem",

                position: 2,

                name: data.name,

                item: data.url,
              },
            ],
          },
        ],
      };


    // ================= BLOG PAGE =================

    case "BlogPage":
      return {
        "@context": "https://schema.org",

        "@graph": [
          {
            "@type": "Blog",

            "@id": `${baseUrl}/blog`,

            name: "Coffee Institute Blog",

            url: `${baseUrl}/blog`,

            description:
              "Read the latest coffee blogs, brewing guides, coffee health tips, and specialty coffee insights from Coffee Institute.",

            publisher: commonOrganization,
          },

          {
            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",

                position: 1,

                name: "Home",

                item: baseUrl,
              },

              {
                "@type": "ListItem",

                position: 2,

                name: "Blog",

                item: `${baseUrl}/blog`,
              },
            ],
          },
        ],
      };


    // ================= BLOG DETAIL PAGE =================

    case "BlogDetail":
      return {
        "@context": "https://schema.org",

        "@graph": [
          {
            "@type": "Article",

            "@id": data.url,

            headline: data.title,

            description: data.description,

            image: data.image,

            author: {
              "@type": "Person",

              name: data.author || "Coffee Institute",
            },

            publisher: {
              "@type": "Organization",

              name: "Coffee Institute",

              logo: {
                "@type": "ImageObject",

                url: "https://coffeeinstitute.co.in/Coffee_institute.webp",
              },
            },

            datePublished: data.datePublished,

            dateModified:
              data.dateModified || data.datePublished,

            mainEntityOfPage: {
              "@type": "WebPage",

              "@id": data.url,
            },

            url: data.url,
          },

          {
            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",

                position: 1,

                name: "Home",

                item: baseUrl,
              },

              {
                "@type": "ListItem",

                position: 2,

                name: "Blog",

                item: `${baseUrl}/blog`,
              },

              {
                "@type": "ListItem",

                position: 3,

                name: data.title,

                item: data.url,
              },
            ],
          },
        ],
      };

    default:
      return null;
  }
};