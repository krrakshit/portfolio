import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static optimization
  output: "export",
  trailingSlash: true,

  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/webp", "image/avif"],
  },

  // Compression and performance
  compress: true,

  // SEO and metadata
  generateEtags: true,
};

export default nextConfig;
