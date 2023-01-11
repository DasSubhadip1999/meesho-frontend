/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "supplier.meesho.com",
      "images.meeshosupplyassets.com",
      "meesho-backend.onrender.com",
      "images.meesho.com",
    ],
  },
};

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "supplier.meesho.com",
//       pathname: "/images/**",
//     },
//     {
//       protocol: "https",
//       hostname: "images.meeshosupplyassets.com",
//       pathname: "/**",
//     },
//     {
//       protocol: "https",
//       hostname: "meesho-backend.onrender.com",
//       pathname: "/**",
//     },
//     {
//       protocol: "https",
//       hostname: "images.meesho.com",
//       pathname: "/**",
//     },
//   ],
// },

module.exports = nextConfig;
