import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 若部署到自定义域名或根路径，可设置环境变量 `PUBLIC_BASE_URL`
// 默认（如 GitHub Pages 项目站）base 为 `/nengliang`
const BASE_URL = process.env.PUBLIC_BASE_URL || "/nengliang";

export default defineConfig({
  site: "https://chuanbtc.github.io", // 你的域名，这里是 GitHub Pages 的主域名，腾讯云建议改成你自己的域名
  base: BASE_URL,
  trailingSlash: "always",
  integrations: [sitemap()],
});
