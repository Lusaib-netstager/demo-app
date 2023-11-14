/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pakainfo.com",
        port: "",
        pathname: "/wp-content/uploads/2021/09/*",
      },
    ],
  },
};

module.exports = nextConfig;
