import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages 项目站：https://chuanbtc.github.io/nengliang/
// 若改用自定义域名并部署在根路径，把 site 改成你的域名，并删除或改为 base: "/"
export default defineConfig({
  site: "https://chuanbtc.github.io",
  base: "/", // 部署到域名根路径时使用此配置
  trailingSlash: "always",
  integrations: [sitemap()],
});
