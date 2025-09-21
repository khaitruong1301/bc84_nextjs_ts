/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bc84-nextjs-ts-vjf5.vercel.app',
  generateRobotsTxt: true, // Tạo luôn robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
};
