/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'scontent-iad3-1.cdninstagram.com',
      'scontent-iad3-2.cdninstagram.com',
      'scontent-bos3-1.cdninstagram.com',
      'upload.wikimedia.org',
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
