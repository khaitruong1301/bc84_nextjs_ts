import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [new URL('https://cybersoft.edu.vn/**')],
  }
};

export default nextConfig;
