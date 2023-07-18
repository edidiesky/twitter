// /** @type {import('next').NextConfig} */
// const webpack = require("webpack");

// const nextConfig = {
//   reactStrictMode: true,
//   presets: ['next/babel'],
//   plugins: [['styled-components', { ssr: false }]],

//   images: {
//     domains: ["avada.website", "kalanidhithemes.com"],
//     formats: ["image/avif", "image/webp"],
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery",
//       })
//     );
//     return config;
//   },
//   compiler: {
//     reactStrictMode: true,
//     styledComponents: true,
//   },
//   rules: {
//     "react/no-unescaped-entities": "off",
//     "@next/next/no-page-custom-font": "off",
//   },
// };
// module.exports = nextConfig;


const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avada.website", "kalanidhithemes.com"],
    formats: ["image/avif", "image/webp"],
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
};

