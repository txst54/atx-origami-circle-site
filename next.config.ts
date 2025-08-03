import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'essential-flowers-5c236a3fba.media.strapiapp.com',
        pathname: '/**'
      }
    ],
  },
};

export default nextConfig;
