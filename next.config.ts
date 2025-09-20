import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cybersoft.edu.vn/**')],
  },
  eslint: {
    // Tắt ESLint khi chạy build hoặc start
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
