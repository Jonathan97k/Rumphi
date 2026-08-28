import type { NextConfig } from "next";
import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  turbopack: {},
};

export default (phase: string, { defaultConfig }: { defaultConfig: NextConfig }) => {
  const plugins = [pwaConfig];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...nextConfig });
};