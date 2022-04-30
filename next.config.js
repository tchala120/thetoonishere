/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['scontent.cdninstagram.com', 'scontent-mia3-2.cdninstagram.com'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
