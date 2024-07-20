/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", //the link starts by (images.pexels) //then you can put whatever from this website
      },
    ],
  },
};

module.exports = nextConfig;
