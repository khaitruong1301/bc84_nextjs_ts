import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Expose SITE_URL to the app (useful for sitemap/robots generation)
  env: {
    SITE_URL: process.env.SITE_URL || "https://bc84-nextjs-ts-vjf5.vercel.app",
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      // cho phép load ảnh từ domain của project trên Vercel
      { protocol: "https", hostname: "bc84-nextjs-ts-vjf5.vercel.app", pathname: "/**" },
      // ví dụ thêm nguồn ảnh ngoài nếu cần
      { protocol: "https", hostname: "cybersoft.edu.vn", pathname: "/**" },
    ],
  },

  eslint: {
    // tắt ESLint khi build để tránh fail build do lỗi lint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
