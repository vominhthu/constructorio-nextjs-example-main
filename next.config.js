/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "dev02-web-michaelhill.demandware.net" ]
  }
}

module.exports = nextConfig
