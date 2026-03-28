import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 部署到 trx25.com 根路径，因此强制 base 为 "/"
const BASE_URL = "/";

export default defineConfig({
  site: "https://trx25.com", // 你的域名
  base: BASE_URL,
  trailingSlash: "always",
  integrations: [sitemap()],
});
