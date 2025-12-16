# Cloudflare Pages 部署指南

## 部署前准备清单

### ✅ 已完成的工作

1. ✅ 更新了 `index.html` 的 SEO meta 信息
2. ✅ 创建了 `public/_redirects` 文件支持 SPA 路由
3. ✅ 创建了 `cloudflare.json` 配置文件
4. ✅ 更新了 `vite.config.ts` 构建配置

## 部署步骤

### 方法一：通过 Cloudflare Dashboard（推荐）

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 登录您的账户

2. **创建新项目**
   - 进入 **Pages** → **Create a project**
   - 选择 **Connect to Git**（如果使用 Git）或 **Upload assets**（直接上传）

3. **连接 Git 仓库（如果使用 Git）**
   - 选择您的 Git 提供商（GitHub/GitLab/Bitbucket）
   - 授权 Cloudflare 访问您的仓库
   - 选择要部署的仓库和分支（通常是 `main` 或 `master`）

4. **配置构建设置**
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`（项目根目录）

5. **环境变量（如果需要）**
   - 在 **Environment variables** 中添加任何需要的环境变量
   - 目前项目不需要环境变量

6. **部署**
   - 点击 **Save and Deploy**
   - 等待构建完成（通常 2-5 分钟）

### 方法二：使用 Wrangler CLI

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

4. **部署到 Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name=jinbean-website
   ```

### 方法三：通过 Git 推送自动部署

1. **确保代码已推送到 Git 仓库**

2. **在 Cloudflare Dashboard 中设置自动部署**
   - 连接 Git 仓库后，每次推送到主分支都会自动触发部署
   - 可以在 **Settings** → **Builds & deployments** 中配置

## 部署后检查

### 1. 验证路由是否正常工作
访问以下 URL 确保都能正常显示：
- `https://your-domain.pages.dev/` - 首页
- `https://your-domain.pages.dev/providers` - 服务者页面
- `https://your-domain.pages.dev/apply` - 申请页面
- `https://your-domain.pages.dev/privacy` - 隐私政策
- `https://your-domain.pages.dev/terms` - 服务条款

### 2. 检查控制台错误
- 打开浏览器开发者工具（F12）
- 检查 Console 和 Network 标签页是否有错误

### 3. 测试多语言切换
- 测试中英文切换功能
- 确认语言偏好被正确保存

### 4. 测试响应式设计
- 在不同设备上测试（手机、平板、桌面）
- 确认移动端菜单正常工作

## 自定义域名设置

1. **在 Cloudflare Dashboard 中**
   - 进入您的 Pages 项目
   - 点击 **Custom domains** → **Set up a custom domain**
   - 输入您的域名（如 `jinbean.com`）

2. **DNS 配置**
   - 添加 CNAME 记录指向 Cloudflare Pages 提供的地址
   - 或使用 Cloudflare 的 DNS 服务自动配置

## 性能优化建议

### 已配置的优化
- ✅ 静态资源缓存（通过 `cloudflare.json`）
- ✅ 代码分割（vendor 和 UI 组件分离）
- ✅ 图片优化（使用 WebP 格式）

### 可选的进一步优化
1. **启用 Cloudflare 的自动优化**
   - 在 Cloudflare Dashboard 中启用 **Auto Minify**
   - 启用 **Brotli** 压缩

2. **使用 Cloudflare Images**
   - 将图片上传到 Cloudflare Images
   - 使用 Cloudflare 的图片优化服务

3. **启用 Cloudflare Workers**
   - 可以添加边缘计算功能
   - 实现 API 代理或缓存策略

## 常见问题

### Q: 部署后路由 404 错误？
A: 确保 `public/_redirects` 文件存在且内容正确。Cloudflare Pages 会自动读取此文件。

### Q: 构建失败？
A: 检查：
- Node.js 版本（建议使用 Node.js 18+）
- 依赖是否正确安装
- 构建日志中的错误信息

### Q: 静态资源加载失败？
A: 检查：
- `vite.config.ts` 中的 `base` 配置是否正确
- 资源路径是否使用相对路径

### Q: 如何回滚到之前的版本？
A: 在 Cloudflare Dashboard 中：
- 进入 **Deployments**
- 找到之前的部署版本
- 点击 **Retry deployment** 或 **Rollback to this deployment**

## 监控和维护

1. **查看部署日志**
   - 在 Cloudflare Dashboard 中查看构建日志
   - 检查是否有警告或错误

2. **设置部署通知**
   - 在 **Settings** → **Notifications** 中配置
   - 可以发送邮件或 Slack 通知

3. **性能监控**
   - 使用 Cloudflare Analytics 查看访问统计
   - 监控页面加载速度和错误率

## 技术支持

如有问题，请参考：
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)

