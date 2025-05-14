import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [new URL("https://fakeimg.pl/**")],
  },
};

export default nextConfig;
