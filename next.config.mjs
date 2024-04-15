import withBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";
import { env } from "./env.mjs";

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins(
  [[withBundleAnalyzer({ enabled: env.ANALYZE })]],
  {
    reactStrictMode: true,
    experimental: { instrumentationHook: true },
    basePath: '/next-enterprise',  // Replace [repository-name] with your actual repository name
    assetPrefix: '/next-enterprise/',  // Replace [repository-name] with your actual repository name
    output: 'standalone',
    rewrites() {
      return [
        { source: "/healthz", destination: "/api/health" },
        { source: "/api/healthz", destination: "/api/health" },
        { source: "/health", destination: "/api/health" },
        { source: "/ping", destination: "/api/health" },
      ];
    },
  }
);

export default config;
