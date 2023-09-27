/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // }

  staticPageGenerationTimeout: 1000000,
  plugins: {
    autoprefixer: {},
  },

}

module.exports = nextConfig
