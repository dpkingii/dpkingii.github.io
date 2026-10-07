import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: no server, so no image optimizer or Cache Components.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
