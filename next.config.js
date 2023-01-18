/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["yesno.wtf"],
  },
};

module.exports = nextConfig;
