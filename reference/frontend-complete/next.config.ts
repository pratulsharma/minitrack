import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cache Components lets static UI and request-time data coexist in one route.
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
