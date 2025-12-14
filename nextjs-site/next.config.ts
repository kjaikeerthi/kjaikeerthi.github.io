import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  // Images must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // Configure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,

  // Disable server-side features for static export
  reactStrictMode: true,

  // Configure base path and asset prefix if deploying to subdirectory
  // For custom domain (jaikeerthi.in), these should be empty
  // basePath: '',
  // assetPrefix: '',

  // Page extensions for MDX support
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
