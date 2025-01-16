const path = require("path");
const fs = require("fs");
const Sitemap = require("vue-router-sitemap").default;
const router = require("../src/router").default;

// Get website domain (change this to your site URL)
const hostname = "https://wkdkavishka.com";

// Output path
const DESTINATION = path.resolve(__dirname, "../public/sitemap.xml");

// Generate the sitemap
const sitemap = new Sitemap(router)
  .setHostname(hostname)
  .generate()
  .save(DESTINATION);

console.log("✅ Sitemap generated successfully at: ", DESTINATION);
