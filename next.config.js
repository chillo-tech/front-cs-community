/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  generateEtags: false,
  env: {
    APPLICATION_URL: process.env.APPLICATION_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    NEXT_PUBLIC_BACKEND_API_TOKEN: process.env.BACKEND_API,
    NEXT_PUBLIC_BACKOFFICE_API: process.env.NEXT_PUBLIC_BACKOFFICE_API,
    NEXT_PUBLIC_BACKOFFICE_API_TOKEN: process.env.NEXT_PUBLIC_BACKOFFICE_API_TOKEN
  },
  publicRuntimeConfig: {
    APPLICATION_URL: process.env.APPLICATION_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    NEXT_PUBLIC_BACKEND_API_TOKEN: process.env.NEXT_PUBLIC_BACKEND_API_TOKEN,
    NEXT_PUBLIC_BACKOFFICE_API: process.env.NEXT_PUBLIC_BACKOFFICE_API,
    NEXT_PUBLIC_BACKOFFICE_API_TOKEN: process.env.NEXT_PUBLIC_BACKOFFICE_API_TOKEN
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: ' 192.168.1.101:8060',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'chillo.tech',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
