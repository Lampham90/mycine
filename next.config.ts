import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cho phép chạy trên môi trường Edge của Cloudflare
  typescript: {
    ignoreBuildErrors: true, // Bỏ qua lỗi ép kiểu để build nhanh
  },
  eslint: {
    ignoreDuringBuilds: true, // Bỏ qua lỗi format
  },
  images: {
    unoptimized: true, // Bắt buộc nếu dùng Cloudflare Pages
  },
};
