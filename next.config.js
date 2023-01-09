/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supplier.meesho.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.meeshosupplyassets.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "meesho-backend.onrender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.meesho.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
