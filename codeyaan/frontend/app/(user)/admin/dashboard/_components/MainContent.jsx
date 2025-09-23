"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

export default function MainContent({ children }) {
  const pathname = usePathname()
  
  const getPageTitle = () => {
    const titles = {
      '/dashboard': 'Dashboard Overview',
      '/payments': 'Payment Management',
      '/analytics': 'Analytics & Reports',
      '/manage-courses': 'Course Management',
      '/manage-users': 'User Management',
      '/notebook': 'My Notebook'
    }
    return titles[pathname] || 'Page'
  }

  return (
    <div className="min-h-screen p-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getPageTitle()}
        </h1>
        <p className="text-gray-600">
          Welcome to your {getPageTitle().toLowerCase()} section
        </p>
      </div>
      
      {/* Main content box */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 min-h-[600px] p-6">
        {children}
      </div>
    </div>
  )
}


