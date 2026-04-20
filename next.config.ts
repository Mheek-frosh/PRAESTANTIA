import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Allow connections from local network IP for HMR
  allowedDevOrigins: ["172.20.10.2", "10.26.220.10"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
