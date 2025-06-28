import { setRequestLocale } from 'next-intl/server';

type IUsersProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IUsersProps) {
  await props.params;

  return {
    title: '用户管理 - 金豆荚 JinBean',
    description: '管理金豆荚平台的用户账户',
  };
}

export default async function Users(props: IUsersProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">用户管理</h1>
            <p className="mt-1 text-sm text-gray-500">
              管理平台用户账户和权限
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="搜索用户姓名、邮箱或手机号..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]">
                <option value="">用户类型</option>
                <option value="user">普通用户</option>
                <option value="provider">服务提供者</option>
                <option value="admin">管理员</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]">
                <option value="">状态</option>
                <option value="active">活跃</option>
                <option value="inactive">非活跃</option>
                <option value="suspended">已暂停</option>
              </select>

              <button className="px-6 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#276947] transition-colors">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">用户列表</h2>
            <button className="px-4 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#276947] transition-colors">
              添加用户
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    用户信息
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    类型
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    注册时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    最后登录
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* User 1 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#2E8B57] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">张</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">张女士</div>
                        <div className="text-sm text-gray-500">zhang@example.com</div>
                        <div className="text-sm text-gray-500">+1 (555) 123-4567</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      普通用户
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      活跃
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 14:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                    <button className="text-red-600 hover:text-red-900">暂停</button>
                  </td>
                </tr>

                {/* User 2 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                        <span className="text-[#2E8B57] font-semibold">李</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">李师傅</div>
                        <div className="text-sm text-gray-500">li@example.com</div>
                        <div className="text-sm text-gray-500">+1 (555) 234-5678</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      服务提供者
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      活跃
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 16:45
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                    <button className="text-red-600 hover:text-red-900">暂停</button>
                  </td>
                </tr>

                {/* User 3 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#B22222] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">王</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">王女士</div>
                        <div className="text-sm text-gray-500">wang@example.com</div>
                        <div className="text-sm text-gray-500">+1 (555) 345-6789</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      普通用户
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      已暂停
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-05
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-18 09:15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                    <button className="text-green-600 hover:text-green-900">恢复</button>
                  </td>
                </tr>

                {/* User 4 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">陈</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">陈先生</div>
                        <div className="text-sm text-gray-500">chen@example.com</div>
                        <div className="text-sm text-gray-500">+1 (555) 456-7890</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      管理员
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      活跃
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-01
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 18:20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#2E8B57] hover:text-[#276947] mr-3">编辑</button>
                    <button className="text-gray-400 cursor-not-allowed">暂停</button>
                  </td>
                </tr>

                {/* User 5 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#50C878] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">刘</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">刘师傅</div>
                        <div className="text-sm text-gray-500">liu@example.com</div>
                        <div className="text-sm text-gray-500">+1 (555) 567-8901</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      服务提供者
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      待审核
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 10:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#2E8B57] hover:text-[#276947] mr-3">审核</button>
                    <button className="text-red-600 hover:text-red-900">拒绝</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                显示 1-10 条，共 1,247 条记录
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  上一页
                </button>
                <button className="px-3 py-1 bg-[#2E8B57] text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">125</button>
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
