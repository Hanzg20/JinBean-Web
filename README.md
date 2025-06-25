# JinBean Web Monorepo

本仓库采用 Monorepo 管理 JinBean 官网与管理后台，基于 Next.js 15 + TypeScript + Tailwind CSS 开发。

## 项目结构

```
/jinbean-web/
│
├── apps/
│   ├── web/        # 官网（jinbean.com）- 端口 3000
│   └── admin/      # 后台管理系统（admin.jinbean.com）- 端口 3001
│
├── libs/
│   ├── ui/         # 共用组件库
│   └── config/     # 主题、颜色、字体等配置
│
├── packages/
│   └── i18n/       # 多语言 JSON 字段
│
├── docs/           # 项目文档
├── README.md
├── package.json    # Monorepo 根配置
└── turbo.json      # Turborepo 配置
```

## 开发指南

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
# 启动所有项目
npm run dev

# 启动特定项目
npm run dev --filter=jinbean-web
npm run dev --filter=jinbean-admin
```

### 构建
```bash
# 构建所有项目
npm run build

# 构建特定项目
npm run build --filter=jinbean-web
npm run build --filter=jinbean-admin
```

### 其他命令
```bash
npm run lint        # 代码检查
npm run test        # 运行测试
npm run type-check  # 类型检查
npm run clean       # 清理构建文件
```

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **构建工具**: Turborepo
- **测试**: Vitest + Playwright
- **代码质量**: ESLint + Prettier
- **组件开发**: Storybook

## 端口配置

- **官网 (web)**: http://localhost:3000
- **后台 (admin)**: http://localhost:3001
- **Storybook (web)**: http://localhost:6006
- **Storybook (admin)**: http://localhost:6007

请在各子目录下按需开发和维护。 