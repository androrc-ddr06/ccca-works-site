import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/the-why", permanent: true },
      { source: "/testimonials", destination: "/process", permanent: true },
    ];
  },
};

export default nextConfig;
