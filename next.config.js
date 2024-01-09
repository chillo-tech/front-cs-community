/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  generateEtags: false,
  env: {
    APPLICATION_URL: process.env.APPLICATION_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  publicRuntimeConfig: {
    APPLICATION_URL: process.env.APPLICATION_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
}

module.exports = nextConfig
