/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['scontent.cdninstagram.com', '*.cdninstagram.com'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
