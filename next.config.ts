import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Luups",
  assetPrefix: "/Luups/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
