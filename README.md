# 能量站 Nengliang（Astro 静态站）

面向 SEO 的静态官网模板：首页 + 帮助/关于/条款等卫星页，构建产物为纯 HTML，适合托管在 **GitHub Pages** 或任意静态托管。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开终端里提示的地址（默认 `http://localhost:4324/nengliang/` 或根路径，以终端为准）。

## 构建

```bash
npm run build
```

输出目录：`dist/`。

## GitHub Pages 部署

1. 仓库设置 **Settings → Pages**：Source 选 **GitHub Actions**（推荐）或 `gh-pages` 分支。
2. 若使用自定义域名且网站在域名根路径，请修改 `astro.config.mjs`：
   - `site: 'https://你的域名'`
   - `base: '/'`
3. 当前配置假定项目地址为：`https://chuanbtc.github.io/nengliang/`（与仓库名一致）。

### 使用 Actions 时（示例思路）

在 `.github/workflows/deploy.yml` 中：`npm ci` → `npm run build` → 用 `actions/upload-pages-artifact` 上传 `dist`（需按官方文档配置 `permissions`）。你可使用 Astro 官方文档中的 [GitHub Pages 部署说明](https://docs.astro.build/en/guides/deploy/github/) 复制模板。

## 上线前请修改

- `astro.config.mjs` 中的 `site` / `base`
- `public/robots.txt` 里的 Sitemap 地址
- 各页面文案、联系方式、备案与法律条款
- `src/layouts/Layout.astro` 中的站点名称

## 首次推送到 GitHub

```bash
git add .
git commit -m "Initial commit: Astro site"
git branch -M main
git push -u origin main
```
