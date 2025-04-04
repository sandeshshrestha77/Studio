/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks']
  },
  // Optimize for Vercel deployment
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // Improve build performance
  typescript: {
    ignoreBuildErrors: false,
  },
  // Handle potential memory issues
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;