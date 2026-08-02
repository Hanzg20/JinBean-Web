export interface NewsItem {
  id: string;
  date: string;
  category: { zh: string; en: string };
  title: { zh: string; en: string };
  desc: { zh: string; en: string };
  content: { zh: string; en: string };
  image?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 'ai-pos-exploration',
    date: '2026-08-02',
    category: { zh: '行业洞察', en: 'Industry Insight' },
    title: {
      zh: 'AI在POS领域的探索与应用',
      en: 'Exploration and Application of AI in the POS Field'
    },
    desc: {
      zh: '从交易终端到智慧交互中心，AI如何重塑现代支付体验与运营效率。',
      en: 'From transaction terminals to smart interaction hubs, how AI is reshaping modern payment experience and operational efficiency.'
    },
    content: {
      zh: `
        <p>随着人工智能（AI）技术的迅猛发展，传统的销售点（POS）终端正在经历一场深刻的变革。POS系统已经不再仅仅是处理交易的工具，而是逐渐演变成为了集个性化体验、自动化运营和高级安全于一体的“智慧交互中心”。</p>

        <h3>1. 增强客户个性化体验</h3>
        <p>AI正在将POS终端从单一的刷卡工具转化为智能互动节点。通过集成人脸识别技术，AI可以识别回头客，并根据其消费历史提供个性化的推荐和奖励。此外，AI语音助手（类似于Siri）正被集成到POS系统中，引导客户完成自助结账，并即时回答产品相关问题。</p>

        <h3>2. 无人值守零售的进化</h3>
        <p>AI是推动“无人零售”或自主零售环境的核心引擎。先进的计算机视觉算法不仅能识别商品，还能监控库存并实现“拿了就走”的无感支付。这种技术的普及使得零售服务可以更灵活地部署在社区、办公楼和交通枢纽，极大地提升了消费便捷性。</p>

        <h3>3. 运营效率与任务自动化</h3>
        <p>在后端，AI正被用于处理复杂且重复的任务。从自动化的库存管理到基于大数据预测的智能排班，AI释放了人力资源，让员工能够专注于更高价值的服务活动。POS系统现在能够分析海量数据，识别消费模式，并预测未来的市场趋势。</p>

        <h3>4. 后疫情时代的安全性</h3>
        <p>疫情加速了AI驱动的非接触式技术应用。AI引导的NFC和移动钱包支付减少了物理接触。同时，无人化解决方案有助于保持社交距离，部分智慧终端甚至集成了自动表面消毒等健康安全功能。在网络安全方面，AI也被广泛用于防御针对POS系统的复杂网络攻击。</p>

        <h3>5. 支付技术的无缝集成</h3>
        <p>行业普遍认为，POS的未来在于多种AI能力的“无缝集成”。通过将NFC读卡、语音指令、人脸识别和远程设备管理整合到单一设备中，金宏天科技正在构建一个更加摩擦力小、更加智能的支付生态系统。</p>
      `,
      en: `
        <p>With the rapid development of Artificial Intelligence (AI) technology, traditional Point of Sale (POS) terminals are undergoing a profound transformation. POS systems are no longer just tools for processing transactions; they are evolving into "Smart Interaction Hubs" that integrate personalized experiences, automated operations, and advanced security.</p>

        <h3>1. Enhanced Customer Personalization</h3>
        <p>AI is transforming POS terminals from simple payment devices into intelligent interaction nodes. By integrating facial recognition, AI can identify returning customers and provide personalized recommendations and rewards based on their purchase history. Furthermore, AI voice assistants (similar to Siri) are being integrated into POS systems to guide customers through self-checkout and answer product-related questions in real-time.</p>

        <h3>2. Evolution of Unattended Retail</h3>
        <p>AI is the core engine driving the shift toward "unmanned" or autonomous retail environments. Advanced computer vision algorithms can not only identify products but also monitor inventory and enable "Grab and Go" frictionless payments. The popularity of this technology allows retail services to be deployed flexibly in communities, office buildings, and transportation hubs, greatly improving consumer convenience.</p>

        <h3>3. Operational Efficiency and Task Automation</h3>
        <p>On the backend, AI is being used to handle complex and repetitive tasks. From automated inventory management to intelligent scheduling based on big data forecasting, AI releases human resources, allowing employees to focus on higher-value service activities. POS systems are now capable of analyzing massive datasets to identify spending patterns and predict future market trends.</p>

        <h3>4. Security in the Post-Pandemic Era</h3>
        <p>The pandemic has accelerated the adoption of AI-driven contactless technologies. AI-guided NFC and mobile wallet payments reduce physical contact. Simultaneously, unmanned solutions help maintain social distancing, and some smart terminals even integrate health safety features like automated surface disinfection. In terms of cybersecurity, AI is also widely used to defend against sophisticated network attacks targeting POS systems.</p>

        <h3>5. Seamless Integration of Payment Technologies</h3>
        <p>The industry consensus is that the future of POS lies in the "seamless integration" of multiple AI capabilities. By consolidating NFC reading, voice commands, facial recognition, and remote device management into a single device, GoldSky is building a more frictionless and intelligent payment ecosystem.</p>
      `
    }
  },
  {
    id: '14th-five-year-plan',
    date: '2026-07-28',
    category: { zh: '企业荣誉', en: 'Awards' },
    title: {
      zh: '金宏天科技入选“十四五”数字化转型示范案例',
      en: 'Selected as 14th Five-Year Digital Transformation Case'
    },
    desc: {
      zh: '凭借在公用事业交费领域的突出贡献，我司方案被正式纳入国家级数字化转型库。',
      en: 'Recognized for contributions in the utility payment sector.'
    },
    content: { zh: '<p>内容完善中...</p>', en: '<p>Content coming soon...</p>' }
  },
  {
    id: 'ai-voice-sdk-v2',
    date: '2026-07-15',
    category: { zh: '技术动态', en: 'Tech' },
    title: {
      zh: '联合加拿大 GoldSky 发布 AI 智能语音交互支付 SDK V2.0',
      en: 'Joint Release of AI Voice Payment SDK V2.0'
    },
    desc: {
      zh: '新版本显著提升了在嘈杂环境下的语音识别率，支持多方言交互。',
      en: 'Significantly improved recognition in noisy environments.'
    },
    content: { zh: '<p>内容完善中...</p>', en: '<p>Content coming soon...</p>' }
  }
];
