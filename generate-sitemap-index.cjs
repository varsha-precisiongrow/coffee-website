const fs = require('fs');
const path = require('path');

const domain = 'https://coffeeinstitute.co.in/';

function updateSitemapIndex() {
 const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
 const sitemapIndexPath = path.join(__dirname, 'public', 'sitemap-index.xml');

 if (!fs.existsSync(sitemapPath)) {
 console.log('sitemap.xml not found. Cannot create sitemap index.');
 return;
 }

 const sitemapStats = fs.statSync(sitemapPath);
 const lastModifiedDate = sitemapStats.mtime.toISOString();

 const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <sitemap>
 
 <loc>${domain}sitemap.xml</loc>
 <lastmod>${lastModifiedDate}</lastmod>
 </sitemap>
</sitemapindex>`;

 fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);
 console.log('Sitemap index generated and updated successfully!');
}

updateSitemapIndex();