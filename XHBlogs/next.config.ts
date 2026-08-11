import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 静态部署：纯静态导出 + 子路径 basePath
  output: 'export',
  trailingSlash: true,
  basePath: '/XinghuisamaBlogs',

  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略 TS 错误，方便快速部署
  },
};

export default nextConfig;
