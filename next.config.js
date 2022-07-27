/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["randomuser.me"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
