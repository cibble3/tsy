/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  outputStandalone: true
});


const nextConfig = {
  // i18n: {
  //   locales: ["default", "en", "de", "fr", "da", "es", "is", "it", "nl", "sv"], // Add more locales if needed
  //   defaultLocale: "default",
  // },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: '/sitemap-:lang.xml',
        destination: '/api/sitemap/:lang',
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
  // reactStrictMode: true,
  images: {
    domains: [
      "galleryn0.vcmdiawe.com",
      "galleryn1.vcmdiawe.com",
      "galleryn2.vcmdiawe.com",
      "galleryn3.vcmdiawe.com",
      "roomimg.stream.highwebmedia.com",
      "nude-cam-model-pics.s3-us-west-2.amazonaws.com",
      "galleryn3.awemwh.com",
      "imgx0.dditscdn.com",
      "tssx3.s3-us-west-2.amazonaws.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },
  // plugins: [
  //   "postcss-flexbugs-fixes",
  //   [
  //     "postcss-preset-env",
  //     {
  //       autoprefixer: {
  //         flexbox: "no-2009",
  //       },
  //       stage: 3,
  //       features: {
  //         "custom-properties": false,
  //       },
  //     },
  //   ],
  //   [
  //     "@fullhuman/postcss-purgecss",
  //     {
  //       content: [
  //         "./pages/**/*.{js,jsx,ts,tsx}",
  //         "./components/**/*.{js,jsx,ts,tsx}",
  //       ],
  //       defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  //       safelist: ["html", "body"],
  //     },
  //   ],
  // ],
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  // },
};

module.exports = nextConfig;
