import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/ambru.cc",
  assetPrefix: "/ambru.cc/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
