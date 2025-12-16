# Cloudflare Pages 构建问题修复指南

## 问题描述

Cloudflare Pages 在构建时检测到 `bun.lockb` 文件，自动使用 `bun install`，但 lockfile 不匹配导致构建失败。

## 已实施的修复

### 1. 删除 bun.lockb
- ✅ 已从仓库中删除 `bun.lockb` 文件
- ✅ 更新 `.gitignore` 忽略所有 lockfile（bun.lockb, yarn.lock, pnpm-lock.yaml）

### 2. 强制使用 npm
- ✅ 在 `package.json` 中添加 `"packageManager": "npm@10.9.2"` 字段
- ✅ 创建 `.nvmrc` 文件指定 Node.js 版本为 20
- ✅ 确保只有 `package-lock.json` 存在于仓库中

### 3. 提交记录
- `5554e49` - 删除 bun.lockb，使用 npm
- `a4b319c` - 强制 Cloudflare Pages 使用 npm

## 在 Cloudflare Dashboard 中的操作

### 重要：手动触发重新部署

由于 Cloudflare Pages 可能仍在使用缓存的旧提交，您需要：

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 进入您的 Pages 项目

2. **检查当前部署**
   - 进入 **Deployments** 页面
   - 查看最新的部署是否使用了最新的提交（应该是 `a4b319c`）

3. **如果仍在使用旧提交，手动触发重新部署**
   - 点击 **Retry deployment** 或 **Create deployment**
   - 选择最新的提交（`a4b319c` 或更新）

4. **验证构建设置**
   - 进入 **Settings** → **Builds & deployments**
   - 确认以下设置：
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/`（留空）
     - **Node.js version**: `20`（根据 .nvmrc）

5. **环境变量（可选）**
   - 如果需要，可以添加环境变量：
     - `NPM_FLAGS`: 留空或 `--legacy-peer-deps`（如果需要）

## 验证修复

构建日志应该显示：
```
Installing project dependencies: npm install
```

而不是：
```
Installing project dependencies: bun install --frozen-lockfile
```

## 如果问题仍然存在

### 方案 1：清除 Cloudflare Pages 缓存
1. 在 Cloudflare Dashboard 中删除项目
2. 重新创建项目并连接 Git 仓库
3. 确保选择最新的提交

### 方案 2：使用 Wrangler CLI 部署
```bash
# 安装 Wrangler
npm install -g wrangler

# 登录
wrangler login

# 构建
npm run build

# 部署
wrangler pages deploy dist --project-name=your-project-name
```

### 方案 3：检查 Git 仓库
确保远程仓库中确实没有 `bun.lockb`：
```bash
git ls-files | grep bun.lockb
# 应该没有输出
```

## 预期结果

修复后，Cloudflare Pages 应该：
- ✅ 使用 `npm install` 安装依赖
- ✅ 使用 `npm run build` 构建项目
- ✅ 成功部署到 `dist` 目录
- ✅ 所有路由正常工作

## 联系支持

如果问题持续存在，可以：
1. 查看 Cloudflare Pages 构建日志的完整输出
2. 联系 Cloudflare 支持
3. 参考 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

