import { getTranslations, setRequestLocale } from 'next-intl/server';

type IContentProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IContentProps) {
  const { locale } = await props.params;

  return {
    title: '内容管理 - 金豆荚 JinBean',
    description: '管理博客文章、公告和页面内容',
  };
}

export default async function Content(props: IContentProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">内容管理</h1>
            <p className="mt-1 text-sm text-gray-500">
              管理博客文章、公告和页面内容
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center px-6 py-3 bg-[#2E8B57] text-white rounded-lg hover:bg-[#276947] transition-colors">
              <span className="text-lg mr-2">📝</span>
              新建文章
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-[#FFD700] text-[#2E8B57] rounded-lg hover:bg-[#FFC300] transition-colors font-semibold">
              <span className="text-lg mr-2">📢</span>
              发布公告
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-[#B22222] text-white rounded-lg hover:bg-[#8B0000] transition-colors">
              <span className="text-lg mr-2">🌐</span>
              页面管理
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors">
              <span className="text-lg mr-2">📊</span>
              内容统计
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button className="border-b-2 border-[#2E8B57] py-4 px-1 text-sm font-medium text-[#2E8B57]">
                博客文章
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                公告
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                页面内容
              </button>
            </nav>
          </div>

          {/* Blog Articles */}
          <div className="p-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="搜索文章标题或内容..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]"
                />
              </div>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]">
                <option value="">分类</option>
                <option value="life-tips">生活技巧</option>
                <option value="community">社区故事</option>
                <option value="platform">平台动态</option>
                <option value="health">健康生活</option>
                <option value="parenting">育儿经验</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]">
                <option value="">状态</option>
                <option value="published">已发布</option>
                <option value="draft">草稿</option>
                <option value="scheduled">定时发布</option>
              </select>

              <button className="px-6 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#276947] transition-colors">
                搜索
              </button>
            </div>

            {/* Articles Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      文章信息
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      分类
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      作者
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      发布时间
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Article 1 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">海外华人居家生活必备技能指南</div>
                        <div className="text-sm text-gray-500">在海外生活，掌握一些基本的居家技能非常重要...</div>
                        <div className="text-sm text-gray-400">阅读时间：15分钟 | 浏览量：1,234</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        生活技巧
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        已发布
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#2E8B57] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">金</span>
                        </div>
                        <span className="ml-2 text-sm text-gray-900">金豆荚编辑</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024-01-15 14:30
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">预览</button>
                      <button className="text-red-600 hover:text-red-900">删除</button>
                    </td>
                  </tr>

                  {/* Article 2 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">10道简单易学的家常菜，让海外生活更有家的味道</div>
                        <div className="text-sm text-gray-500">在海外生活，最想念的就是家乡的味道...</div>
                        <div className="text-sm text-gray-400">阅读时间：8分钟 | 浏览量：856</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        生活技巧
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        已发布
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                          <span className="text-[#2E8B57] text-xs font-semibold">李</span>
                        </div>
                        <span className="ml-2 text-sm text-gray-900">李华</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024-01-12 10:15
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">预览</button>
                      <button className="text-red-600 hover:text-red-900">删除</button>
                    </td>
                  </tr>

                  {/* Article 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">从陌生人到邻居：金豆荚社区里的温暖故事</div>
                        <div className="text-sm text-gray-500">在金豆荚社区里，每天都在发生着温暖的故事...</div>
                        <div className="text-sm text-gray-400">阅读时间：12分钟 | 浏览量：1,567</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        社区故事
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        已发布
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#B22222] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">王</span>
                        </div>
                        <span className="ml-2 text-sm text-gray-900">王芳</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024-01-10 16:45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">预览</button>
                      <button className="text-red-600 hover:text-red-900">删除</button>
                    </td>
                  </tr>

                  {/* Article 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">金豆荚App 2.0版本发布：全新界面，更好体验</div>
                        <div className="text-sm text-gray-500">金豆荚App迎来重大更新！2.0版本带来了全新的用户界面设计...</div>
                        <div className="text-sm text-gray-400">阅读时间：5分钟 | 浏览量：2,341</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        平台动态
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        草稿
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">陈</span>
                        </div>
                        <span className="ml-2 text-sm text-gray-900">陈强</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">预览</button>
                      <button className="text-red-600 hover:text-red-900">删除</button>
                    </td>
                  </tr>

                  {/* Article 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">海外就医指南：如何选择合适的医疗服务</div>
                        <div className="text-sm text-gray-500">在海外生活，了解当地的医疗体系非常重要...</div>
                        <div className="text-sm text-gray-400">阅读时间：15分钟 | 浏览量：987</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        健康生活
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        定时发布
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#50C878] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">刘</span>
                        </div>
                        <span className="ml-2 text-sm text-gray-900">刘敏</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024-01-25 09:00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">预览</button>
                      <button className="text-red-600 hover:text-red-900">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                显示 1-5 条，共 23 条记录
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  上一页
                </button>
                <button className="px-3 py-1 bg-[#2E8B57] text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">4</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">5</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  下一页
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
