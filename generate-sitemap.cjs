const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const domain = "https://coffeeinstitute.co.in/";

function getDynamicRoutes() {
 const routesDir = path.join(__dirname, "src", "Pages"); 
 const routeFiles = fs.readdirSync(routesDir);

 return routeFiles.map((file) => {
 const routePath = file.replace(".js", ""); 
 return { path: `/${routePath}` };
 });
}

const dynamicRoutes = getDynamicRoutes();

const allRoutes = [
 { path: "/" },
 { path: "/about" },
 { path: "/sustainability" },
 { path: "/story" },
 { path: "/beans" },
 { path: "/blog" },
 { path: "/post/:slug" },
 { path: "/health" },
 { path: "/contact" },

 ...dynamicRoutes,
];

const sitemap = new SitemapStream({ hostname: domain });

const writeStream = createWriteStream(
 path.join(__dirname, "public", "sitemap.xml")
);
sitemap.pipe(writeStream);

allRoutes.forEach((route) => {
 const lastModifiedDate = new Date().toISOString();
 sitemap.write({
 url: route.path,
 changefreq: "daily",
 priority: 0.8,
 lastmod: lastModifiedDate,
 });
});

sitemap.end();
streamToPromise(sitemap)
 .then(() => console.log("Sitemap.xml generated successfully!"))
 .catch((error) => console.error("Error generating sitemap:", error));