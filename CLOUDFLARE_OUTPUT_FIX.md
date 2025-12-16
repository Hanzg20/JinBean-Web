# Cloudflare Pages 输出目录配置

## 问题

构建成功，但 Cloudflare Pages 报错：
```
Error: Output directory "out" not found.
Failed: build output directory not found
```

## 原因

Cloudflare Pages 默认查找 `out` 目录，但我们的构建输出在 `apps/web/dist`。

## 解决方案

### 方法一：在 Cloudflare Dashboard 中设置（推荐）

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 进入您的 Pages 项目

2. **进入构建设置**
   - 点击 **Settings** → **Builds & deployments**

3. **更新输出目录**
   - 找到 **Build output directory** 字段
   - 将值从 `out` 或 `dist` 改为：`apps/web/dist`
   - 点击 **Save**

4. **重新部署**
   - 进入 **Deployments** 页面
   - 点击 **Retry deployment** 或等待自动重新部署

### 方法二：使用环境变量（如果 Dashboard 设置不生效）

在 Cloudflare Dashboard 的 **Settings** → **Environment variables** 中添加：

- **Variable name**: `CF_PAGES_OUTPUT_DIR`
- **Value**: `apps/web/dist`

### 当前配置

- **Build command**: `cd apps/web && npm install && npm run build`
- **Build output directory**: `apps/web/dist`（需要在 Dashboard 中设置）
- **Root directory**: `/`（留空）

## 验证

部署成功后，应该能看到：
- ✅ 构建成功
- ✅ 找到输出目录 `apps/web/dist`
- ✅ 网站正常访问

## 注意事项

- `cloudflare.json` 和 `wrangler.toml` 文件已创建，但 Cloudflare Pages 主要依赖 Dashboard 中的设置
- 确保 Dashboard 中的 **Build output directory** 设置为 `apps/web/dist`
- 如果仍有问题，检查构建日志确认 `apps/web/dist` 目录确实存在

