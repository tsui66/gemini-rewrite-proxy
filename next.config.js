/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://generativelanguage.googleapis.com/v1beta/:path*',
      },
    ]
  }
}

module.exports = nextConfig