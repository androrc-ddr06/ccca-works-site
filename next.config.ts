import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (~25-30% smaller than WebP) and fall back to WebP.
    // Biggest win on mobile / cellular, where photo bytes dominate the payload.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/the-why", permanent: true },
      { source: "/testimonials", destination: "/process", permanent: true },
    ];
  },
};

export default nextConfig;
