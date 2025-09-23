import React from 'react'
import { CreditCard, Download, Filter } from 'lucide-react'

export default function PaymentsPage() {
  const payments = [
    { id: '001', user: 'John Doe', amount: '₹2,499', course: 'React Masterclass', date: '2024-01-15', status: 'Completed' },
    { id: '002', user: 'Jane Smith', amount: '₹1,999', course: 'JavaScript Basics', date: '2024-01-14', status: 'Pending' },
    { id: '003', user: 'Mike Johnson', amount: '₹3,499', course: 'Full Stack Course', date: '2024-01-13', status: 'Completed' },
  ]

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <CreditCard className="w-8 h-8 text-green-500 mb-3" />
          <p className="text-green-700 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-green-900">₹1,45,678</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <CreditCard className="w-8 h-8 text-blue-500 mb-3" />
          <p className="text-blue-700 text-sm">This Month</p>
          <p className="text-2xl font-bold text-blue-900">₹23,456</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
          <CreditCard className="w-8 h-8 text-orange-500 mb-3" />
          <p className="text-orange-700 text-sm">Pending</p>
          <p className="text-2xl font-bold text-orange-900">₹5,432</p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">#{payment.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.user}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.course}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      payment.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}