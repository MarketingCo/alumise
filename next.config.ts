import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/external-sliding-doors/:slug*',
        destination: '/products/sliding-doors',
        permanent: true,
      },
      {
        source: '/external-bifold-doors-2/:slug*',
        destination: '/products/bifold-doors',
        permanent: true,
      },
      {
        source: '/aluminium-doors/:slug*',
        destination: '/products/entrance-doors',
        permanent: true,
      },
      {
        source: '/aluminium-windows/:slug*',
        destination: '/products/casement-windows',
        permanent: true,
      },
      {
        source: '/glass-rooflight/:slug*',
        destination: '/products/roof-lanterns',
        permanent: true,
      },
      {
        source: '/bespoke-glass-solutions/:slug*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/windows-doors-supply',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/commercial-glazing',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/aluminium-shopfronts',
        destination: '/products/commercial-shopfronts',
        permanent: true,
      },
      {
        source: '/curtain-walling',
        destination: '/services/curtain-walling',
        permanent: true,
      },
      {
        source: '/get-a-quote',
        destination: '/quote',
        permanent: true,
      },
      {
        source: '/buy-direct-local-glazing-manufacturer-edinburgh',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/aluminium-rooflights',
        destination: '/products/roof-lanterns',
        permanent: true,
      },
      {
        source: '/aluminium-front-doors',
        destination: '/products/entrance-doors',
        permanent: true,
      },
      {
        source: '/external-sliding-doors-near-me',
        destination: '/products/sliding-doors',
        permanent: true,
      },
      {
        source: '/41-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/23-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/53-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/199-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/44-2',
        destination: '/',
        permanent: true,
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
