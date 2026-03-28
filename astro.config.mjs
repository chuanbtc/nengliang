import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind"; // 引入 Tailwind 集成

// 部署到 trx25.com 根路径，因此强制 base 为 "/"
const BASE_URL = "/";

export default defineConfig({
  site: "https://trx25.com", // 你的域名
  base: BASE_URL,
  trailingSlash: "always",
  integrations: [sitemap(), tailwind()], // 添加 Tailwind 集成
});
