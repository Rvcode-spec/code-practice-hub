/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true, // Use true for 301 permanent redirect
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin',
      },
    ];
  },
};

export default nextConfig;
