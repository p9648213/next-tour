/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-tour-production.up.railway.app",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
