/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nodetour-1-t6280858.deta.app",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
