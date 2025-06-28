import { setRequestLocale } from 'next-intl/server';

type IDashboardProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IDashboardProps) {
  await props.params;

  return {
    title: '管理后台 - 金豆荚 JinBean',
    description: '金豆荚管理后台，管理用户、服务和内容',
  };
}

export default async function Dashboard(props: IDashboardProps) {
  await props.params;
  setRequestLocale((await props.params).locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">管理后台</h1>
            <p className="mt-1 text-sm text-gray-500">
              欢迎回来，管理员
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Users */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">总用户数</p>
                <p className="text-2xl font-bold text-gray-900">12,847</p>
                <p className="text-sm text-green-600">+12% 较上月</p>
              </div>
            </div>
          </div>

          {/* Active Services */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🔧</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">活跃服务</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
                <p className="text-sm text-green-600">+8% 较上月</p>
              </div>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📦</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">今日订单</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-green-600">+5% 较昨日</p>
              </div>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">今日收入</p>
                <p className="text-2xl font-bold text-gray-900">$8,432</p>
                <p className="text-sm text-green-600">+15% 较昨日</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">快速操作</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button type="button" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#2E8B57] hover:bg-green-50 transition-colors">
                <div className="w-10 h-10 bg-[#2E8B57] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">👤</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-gray-900">用户管理</p>
                  <p className="text-sm text-gray-500">查看和管理用户</p>
                </div>
              </button>

              <button type="button" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#2E8B57] hover:bg-green-50 transition-colors">
                <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center">
                  <span className="text-[#2E8B57] text-lg">🔧</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-gray-900">服务审核</p>
                  <p className="text-sm text-gray-500">审核新服务申请</p>
                </div>
              </button>

              <button type="button" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#2E8B57] hover:bg-green-50 transition-colors">
                <div className="w-10 h-10 bg-[#B22222] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📝</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-gray-900">内容管理</p>
                  <p className="text-sm text-gray-500">管理博客和公告</p>
                </div>
              </button>

              <button type="button" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#2E8B57] hover:bg-green-50 transition-colors">
                <div className="w-10 h-10 bg-[#4A90E2] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📊</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-gray-900">数据报表</p>
                  <p className="text-sm text-gray-500">查看详细数据</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">最近活动</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">新用户注册</p>
                  <p className="text-sm text-gray-500">张女士完成了注册，成为第12,847位用户</p>
                </div>
                <span className="text-sm text-gray-400">2分钟前</span>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">服务申请待审核</p>
                  <p className="text-sm text-gray-500">李师傅提交了家政服务申请，等待审核</p>
                </div>
                <span className="text-sm text-gray-400">15分钟前</span>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📝</span>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">新博客发布</p>
                  <p className="text-sm text-gray-500">《海外生活必备技能指南》已发布</p>
                </div>
                <span className="text-sm text-gray-400">1小时前</span>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💰</span>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">大额订单</p>
                  <p className="text-sm text-gray-500">完成了一笔$500的搬家服务订单</p>
                </div>
                <span className="text-sm text-gray-400">2小时前</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">系统状态</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h3 className="font-medium text-gray-900">服务器状态</h3>
                <p className="text-sm text-green-600">正常运行</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-2xl">📊</span>
                </div>
                <h3 className="font-medium text-gray-900">数据库</h3>
                <p className="text-sm text-blue-600">连接正常</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 text-2xl">⚠️</span>
                </div>
                <h3 className="font-medium text-gray-900">存储空间</h3>
                <p className="text-sm text-yellow-600">75% 已使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
