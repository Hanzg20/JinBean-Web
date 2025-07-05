# Cloudflare Workers 部署指南

## 概述

admin 端已配置为部署到 Cloudflare Workers，支持 Next.js 15 的 SSR 功能。

## 配置要求

### 1. Cloudflare 账户设置

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 获取以下信息：
   - **Account ID**: 在 Dashboard 右侧边栏查看
   - **API Token**: 创建具有 Pages 和 Workers 权限的 API Token

### 2. GitHub Secrets 配置

在 GitHub 仓库设置中添加以下 Secrets：

```
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

## 部署方式

### 自动部署 (推荐)

1. 推送代码到 `main` 分支
2. GitHub Actions 会自动触发构建和部署
3. 部署完成后，admin 端将在 `https://jinbean-admin.pages.dev` 可用

### 手动部署

```bash
# 安装 wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
cd apps/admin
npm run build:cf

# 部署到 Workers
wrangler pages deploy .vercel/output/static --project-name=jinbean-admin
```

## 环境变量

在 Cloudflare Dashboard 中配置以下环境变量：

```
NODE_ENV=production
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
# 其他必要的环境变量
```

## 优势

- ✅ 支持 Next.js 15 所有 SSR 功能
- ✅ 支持动态路由和 API 路由
- ✅ 支持服务端数据获取
- ✅ 支持 Server Actions
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS

## 故障排除

### 构建失败
- 检查 Node.js 版本 (需要 20+)
- 增加内存限制: `NODE_OPTIONS='--max-old-space-size=8192'`

### 部署失败
- 验证 API Token 权限
- 检查 Account ID 是否正确
- 确认项目名称唯一性

### 运行时错误
- 检查环境变量配置
- 查看 Cloudflare Workers 日志
- 验证数据库连接 (如果使用)

## 监控

- 在 Cloudflare Dashboard 查看访问统计
- 监控 Workers 执行时间和错误率
- 设置告警通知 