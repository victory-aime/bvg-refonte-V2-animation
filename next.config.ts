import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is RuleSetRule =>
        typeof rule === "object" &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { svgo: false, icon: true } }],
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
