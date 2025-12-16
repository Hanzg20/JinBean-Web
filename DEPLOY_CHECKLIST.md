# Cloudflare Pages 部署前检查清单

## ✅ 已完成的准备工作

### 1. SEO 优化
- [x] 更新 `index.html` 的 meta 标签
- [x] 添加 Open Graph 标签
- [x] 添加 Twitter Card 标签
- [x] 设置正确的语言属性（zh-CN）

### 2. 路由配置
- [x] 创建 `public/_redirects` 文件（SPA 路由支持）
- [x] 配置所有路由重定向到 `index.html`

### 3. 构建配置
- [x] 更新 `vite.config.ts` 构建选项
- [x] 配置代码分割（vendor 和 UI 组件）
- [x] 设置正确的输出目录（`dist`）
- [x] 配置资源目录（`assets`）

### 4. Cloudflare 配置
- [x] 创建 `cloudflare.json` 配置文件
- [x] 配置安全响应头
- [x] 配置静态资源缓存策略

### 5. 文档
- [x] 创建部署指南（`DEPLOY.md`）

## 📋 部署前需要做的事情

### 1. 本地测试构建（重要！）
```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

**检查项：**
- [ ] 构建成功，没有错误
- [ ] 预览时所有页面都能正常访问
- [ ] 路由跳转正常（/providers, /apply 等）
- [ ] 中英文切换功能正常
- [ ] 主题切换功能正常
- [ ] 静态资源（图片、字体）加载正常

### 2. 检查文件结构
确保以下文件存在：
- [ ] `public/_redirects` 文件存在
- [ ] `cloudflare.json` 文件存在
- [ ] `index.html` 已更新
- [ ] `vite.config.ts` 已更新

### 3. Git 提交（如果使用 Git）
```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "准备 Cloudflare Pages 部署配置"

# 推送到远程仓库
git push
```

### 4. Cloudflare Pages 配置

在 Cloudflare Dashboard 中设置：

**构建设置：**
- [ ] Framework preset: `Vite`
- [ ] Build command: `npm run build`
- [ ] Build output directory: `dist`
- [ ] Root directory: `/`（留空或填 `/`）
- [ ] Node.js version: `18` 或 `20`（推荐）

**环境变量：**
- [ ] 目前不需要环境变量，但如果有 API 密钥等，需要在这里配置

**自定义域名（可选）：**
- [ ] 如果需要，配置自定义域名
- [ ] 设置 DNS 记录

## 🚀 部署步骤

### 方法一：通过 Cloudflare Dashboard（最简单）

1. [ ] 登录 https://dash.cloudflare.com/
2. [ ] 进入 **Pages** → **Create a project**
3. [ ] 选择 **Connect to Git** 或 **Upload assets**
4. [ ] 如果使用 Git：
   - [ ] 连接 GitHub/GitLab/Bitbucket
   - [ ] 选择仓库和分支
5. [ ] 配置构建设置（见上方）
6. [ ] 点击 **Save and Deploy**
7. [ ] 等待构建完成（2-5 分钟）

### 方法二：使用 Wrangler CLI

1. [ ] 安装 Wrangler: `npm install -g wrangler`
2. [ ] 登录: `wrangler login`
3. [ ] 构建: `npm run build`
4. [ ] 部署: `wrangler pages deploy dist --project-name=jinbean-website`

## ✅ 部署后验证

### 功能测试
- [ ] 首页正常加载
- [ ] 导航菜单工作正常
- [ ] 所有路由页面可访问：
  - [ ] `/` - 首页
  - [ ] `/providers` - 服务者页面
  - [ ] `/apply` - 申请页面
  - [ ] `/privacy` - 隐私政策
  - [ ] `/terms` - 服务条款
- [ ] 中英文切换功能正常
- [ ] 主题切换（深色/浅色）正常
- [ ] 移动端响应式布局正常
- [ ] 表单提交功能正常（虽然目前只是前端）

### 性能检查
- [ ] 页面加载速度正常
- [ ] 图片加载正常
- [ ] 字体加载正常
- [ ] 没有控制台错误

### SEO 检查
- [ ] 查看页面源代码，确认 meta 标签正确
- [ ] 使用浏览器开发者工具检查 SEO 标签
- [ ] 测试社交媒体分享预览（Open Graph）

## 🔧 常见问题排查

### 如果路由返回 404
- 检查 `public/_redirects` 文件是否存在
- 确认文件内容为：`/*    /index.html   200`

### 如果静态资源加载失败
- 检查 `vite.config.ts` 中的 `base` 配置
- 确认资源路径使用相对路径

### 如果构建失败
- 检查 Node.js 版本（需要 18+）
- 查看构建日志中的错误信息
- 确认所有依赖都已安装

## 📝 注意事项

1. **首次部署可能需要 5-10 分钟**
2. **DNS 传播可能需要 24-48 小时**（如果使用自定义域名）
3. **建议先在预览环境测试**，确认无误后再部署到生产环境
4. **定期检查部署日志**，确保没有警告或错误

## 📞 需要帮助？

- 查看详细部署指南：`DEPLOY.md`
- Cloudflare Pages 文档：https://developers.cloudflare.com/pages/
- Vite 部署指南：https://vitejs.dev/guide/static-deploy.html

