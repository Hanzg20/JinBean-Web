import { setRequestLocale } from 'next-intl/server';

type IServicesProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IServicesProps) {
  // const { locale } = await props.params;
  await props.params;

  return {
    title: '服务审核 - 金豆荚 JinBean',
    description: '审核和管理平台服务申请',
  };
}

export default async function Services(props: IServicesProps) {
  // const { locale } = await props.params;
  setRequestLocale((await props.params).locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">服务审核</h1>
            <p className="mt-1 text-sm text-gray-500">
              审核和管理平台服务申请
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">待审核</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">已通过</p>
                <p className="text-2xl font-bold text-gray-900">1,156</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✗</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">已拒绝</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">通过率</p>
                <p className="text-2xl font-bold text-gray-900">92.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="搜索服务名称或提供者..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]"
              />
            </div>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]">
              <option value="">服务类型</option>
              <option value="cleaning">家政保洁</option>
              <option value="repair">维修保养</option>
              <option value="gardening">园艺护理</option>
              <option value="moving">搬家服务</option>
              <option value="pet">宠物护理</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57]">
              <option value="">审核状态</option>
              <option value="pending">待审核</option>
              <option value="approved">已通过</option>
              <option value="rejected">已拒绝</option>
            </select>

            <button type="button" className="px-6 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#276947] transition-colors">
              搜索
            </button>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">服务申请列表</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    服务信息
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    提供者
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    服务类型
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    申请时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Service 1 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">专业家政保洁服务</div>
                      <div className="text-sm text-gray-500">提供专业的家庭清洁服务，包括日常保洁、深度清洁等</div>
                      <div className="text-sm text-gray-500">价格: $25-35/小时</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2E8B57] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">李</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">李阿姨</div>
                        <div className="text-sm text-gray-500">li@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      家政保洁
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      待审核
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 10:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button type="button" className="text-[#2E8B57] hover:text-[#276947] mr-3">查看详情</button>
                    <button type="button" className="text-green-600 hover:text-green-900 mr-3">通过</button>
                    <button type="button" className="text-red-600 hover:text-red-900">拒绝</button>
                  </td>
                </tr>

                {/* Service 2 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">水电维修服务</div>
                      <div className="text-sm text-gray-500">专业的水电维修，解决各种家居维修问题</div>
                      <div className="text-sm text-gray-500">价格: $50-80/次</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                        <span className="text-[#2E8B57] text-xs font-semibold">王</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">王师傅</div>
                        <div className="text-sm text-gray-500">wang@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      维修保养
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      待审核
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 09:15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button type="button" className="text-[#2E8B57] hover:text-[#276947] mr-3">查看详情</button>
                    <button type="button" className="text-green-600 hover:text-green-900 mr-3">通过</button>
                    <button type="button" className="text-red-600 hover:text-red-900">拒绝</button>
                  </td>
                </tr>

                {/* Service 3 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">园艺护理服务</div>
                      <div className="text-sm text-gray-500">专业的园艺护理，包括修剪、施肥、病虫害防治</div>
                      <div className="text-sm text-gray-500">价格: $40-60/小时</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#B22222] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">陈</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">陈师傅</div>
                        <div className="text-sm text-gray-500">chen@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      园艺护理
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      已通过
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-19 16:45
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button type="button" className="text-[#2E8B57] hover:text-[#276947] mr-3">查看详情</button>
                    <button type="button" className="text-gray-400 cursor-not-allowed mr-3">通过</button>
                    <button type="button" className="text-gray-400 cursor-not-allowed">拒绝</button>
                  </td>
                </tr>

                {/* Service 4 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">宠物护理服务</div>
                      <div className="text-sm text-gray-500">专业的宠物护理，包括遛狗、喂食、清洁等</div>
                      <div className="text-sm text-gray-500">价格: $20-30/小时</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">刘</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">刘女士</div>
                        <div className="text-sm text-gray-500">liu@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-800">
                      宠物护理
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      已拒绝
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-18 14:20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button type="button" className="text-[#2E8B57] hover:text-[#276947] mr-3">查看详情</button>
                    <button type="button" className="text-gray-400 cursor-not-allowed mr-3">通过</button>
                    <button type="button" className="text-gray-400 cursor-not-allowed">拒绝</button>
                  </td>
                </tr>

                {/* Service 5 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">搬家服务</div>
                      <div className="text-sm text-gray-500">专业的搬家服务，包括包装、搬运、安装等</div>
                      <div className="text-sm text-gray-500">价格: $80-150/次</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#50C878] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">赵</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">赵师傅</div>
                        <div className="text-sm text-gray-500">zhao@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      搬家服务
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      待审核
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-20 11:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button type="button" className="text-[#2E8B57] hover:text-[#276947] mr-3">查看详情</button>
                    <button type="button" className="text-green-600 hover:text-green-900 mr-3">通过</button>
                    <button type="button" className="text-red-600 hover:text-red-900">拒绝</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                显示 1-5 条，共 23 条记录
              </div>
              <div className="flex items-center space-x-2">
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  上一页
                </button>
                <button type="button" className="px-3 py-1 bg-[#2E8B57] text-white rounded text-sm">1</button>
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">4</button>
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">5</button>
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
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

