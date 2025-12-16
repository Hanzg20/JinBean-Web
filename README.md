# JinBean Web Monorepo

本仓库采用 Monorepo 管理 JinBean 官网项目，基于 Vite + React + TypeScript + Tailwind CSS 开发。

## 项目结构

```
/jinbean-web/
│
├── apps/
│   └── web/        # 官网项目（jinbean.com）
│       ├── src/    # 源代码
│       ├── public/ # 静态资源
│       ├── dist/   # 构建输出
│       └── ...
│
├── README.md
├── package.json    # Monorepo 根配置
└── cloudflare.json # Cloudflare Pages 配置

```

## 开发指南

### 安装依赖

```bash
# 在根目录安装所有工作区的依赖
npm install

# 或者在 apps/web 目录安装
cd apps/web && npm install
```

### 开发模式

```bash
# 从根目录运行
npm run dev

# 或者从 apps/web 目录运行
cd apps/web && npm run dev
```

### 构建

```bash
# 从根目录构建
npm run build

# 或者从 apps/web 目录构建
cd apps/web && npm run build
```

构建输出在 `apps/web/dist` 目录。

### 预览构建结果

```bash
cd apps/web && npm run preview
```

## Cloudflare Pages 部署

### 构建设置

在 Cloudflare Pages Dashboard 中配置：

- **Build command**: `cd apps/web && npm install && npm run build`
- **Build output directory**: `apps/web/dist`
- **Root directory**: `/`（留空）
- **Node.js version**: `20`（根据 .nvmrc）

### 自动部署

连接 GitHub 仓库后，每次推送到主分支都会自动触发部署。

## 技术栈

* **构建工具**: Vite 5
* **框架**: React 18
* **语言**: TypeScript
* **样式**: Tailwind CSS
* **UI 组件**: shadcn/ui (Radix UI)
* **路由**: React Router DOM
* **状态管理**: React Context API
* **包管理**: npm

## 端口配置

* **开发服务器**: http://localhost:8080

## 其他命令

```bash
npm run lint        # 代码检查
```

## 关于

金豆荚（JinBeanPod）是面向北美华人家庭的一站式生活服务平台。

© 2025 GoldSky Technologies
