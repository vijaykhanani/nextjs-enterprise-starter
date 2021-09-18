/** @type {import('next').NextConfig} */
module.exports = {
  productionBrowserSourceMaps: true, //to enable browser source map generation during the production build
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  reactStrictMode: true,
};
