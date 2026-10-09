/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This machine's Application Control policy blocks native file-watching
  // (same reason the native SWC compiler is blocked) — fall back to polling
  // in dev so file saves actually trigger Fast Refresh instead of needing a
  // manual browser reload.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 800,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

export default nextConfig
