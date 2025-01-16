const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const generateSitemap = () => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const homepage = `   <url>\n      <loc>https://wkdkavishka.com/</loc>\n      <lastmod>${
    new Date().toISOString().split("T")[0]
  }</lastmod>\n      <changefreq>weekly</changefreq>\n      <priority>1.0</priority>\n   </url>`;
  const urls = [homepage];

  // Read all .vue files in src/views
  const viewsDir = path.join(__dirname, "src", "views");
  const files = fs
    .readdirSync(viewsDir)
    .filter((file) => file.endsWith(".vue"));

  files.forEach((file) => {
    const filename = path.basename(file, ".vue");
    const url = `   <url>\n      <loc>https://wkdkavishka.com/${filename}</loc>\n      <lastmod>${
      new Date().toISOString().split("T")[0]
    }</lastmod>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n   </url>`;
    urls.push(url);
  });

  const sitemapContent = `${sitemapHeader}\n${urls.join("\n")}\n</urlset>`;
  const filePath = path.join(__dirname, "public", "sitemap.xml");

  fs.writeFileSync(filePath, sitemapContent);
  console.log("sitemap.xml has been saved!");
};

generateSitemap();
