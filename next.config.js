/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bored-gold-wombat.cyclic.app",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
