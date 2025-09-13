/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.jsdelivr.net'],
    unoptimized: true
  },
  experimental: {
    turbo: true,
  },
};

module.exports = nextConfig;
