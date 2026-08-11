import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 静态部署：纯静态导出
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略 TS 错误，方便快速部署
  },
};

export default nextConfig;
