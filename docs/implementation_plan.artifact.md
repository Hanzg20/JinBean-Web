# 官网“模仿思特奇 (Si-Tech) 架构”重写计划 (保留现有配色)

我们将深度借鉴思特奇 (si-tech.com.cn) 的**内容架构与信息组织方式**，将金宏天官网从“服务平台”转向“企业级解决方案供应商”风格。

## 用户审核需求

> [!IMPORTANT]
> **视觉要求**：**保留当前已配置的颜色体系**（暖金、自然绿、深海蓝），不改为思特奇的深蓝色。
> **内容转型**：重组板块分类，使其更像一份“企业白皮书”或“产品说明书”。增加信息密度，强调公司的技术底座与行业地位。
> **文案本地化**：使用口语化、接地气的词汇（收钱稳、管账准、活儿省心），同时保持企业级的严谨感。

## 拟议变更

### 1. 核心架构重组 (Structural Reorganization)

#### [MODIFY] [Header.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/components/Header.tsx)
- **菜单导航**：首页、产品与解决方案、创新中心（Demo）、案例展示、关于金宏天。
- **功能区**：显眼的“客服热线：15663626777”。

#### [MODIFY] [HeroSection.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/components/HeroSection.tsx)
- **视觉**：采用国内主流的大图/宽屏 Banner，右侧展示**多设备协同场景（手机+POS机+电脑端）**的业务配图。
- **文案**：主打 **“收钱稳、管账准、活儿省心 —— 懂业务的智慧支付与物联专家”**。

#### [MODIFY] [ServicesSection.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/components/ServicesSection.tsx)
- **重构为“核心业务矩阵”**：
  - **板块 A：支付与协议底座**（5G业务支撑、POS/NFC协议、聚合网关）。
  - **板块 B：垂直场景解决方案**（水电气暖、智慧工地、房产监管、AI 助学）。
- **样式**：采用高信息密度的平铺矩阵，每个项增加“核心功能点列表”，让客户一眼看懂产品力。

#### [MODIFY] [ValuePropsSection.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/components/ValuePropsSection.tsx)
- **转型为“企业优势与资质”**：
  - 展示：20年行业积累、银行直连合规标准、本地化快速响应服务、加拿大 GoldSky 国际协同。

#### [MODIFY] [Footer.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/components/Footer.tsx)
- **布局**：四列或五列详细列表（快速入口、联系方式、法律声明、关于我们）。
- **元素**：增加二维码（微信公众号）占位，清晰展示完整备案信息及哈尔滨办公地址。

---

### 2. 页面增强 (New Content Sections)

#### [NEW] `lib/components/NewsSection.tsx`
- 模拟思特奇展示“新闻动态”和“行业资讯”，体现企业活跃度。

---

## 验证计划

### 手动验证
- 预览页面是否具有“企业说明书”式的条理感。
- 确认现有颜色（暖金/自然绿）在新的密集布局下是否协调。
- 验证所有跳转链接是否指向正确的业务分类。
