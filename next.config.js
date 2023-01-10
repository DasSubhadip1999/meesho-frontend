/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supplier.meesho.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.meeshosupplyassets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "meesho-backend.onrender.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.meesho.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
