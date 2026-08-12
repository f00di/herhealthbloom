import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH?.trim().replace(/\/$/, "") ?? "";

if (basePath && !basePath.startsWith("/")) {
  throw new Error("PAGES_BASE_PATH must be empty or start with '/'.");
}

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
