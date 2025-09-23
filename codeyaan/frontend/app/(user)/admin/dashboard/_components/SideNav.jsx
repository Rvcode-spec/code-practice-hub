"use client"

import React from 'react'
import {
  PanelsTopLeft,
  IndianRupee,
  BarChart3,
  BookOpen,
  Users,
  Notebook,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const path = usePathname()
  const MenuOption = [
    { id: 1, name: 'Dashboard', path: '/dashboard', icon: PanelsTopLeft },
    { id: 2, name: 'Payments', path: '/payments', icon: IndianRupee },
    { id: 3, name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { id: 4, name: 'Manage Courses', path: '/manage-courses', icon: BookOpen },
    { id: 5, name: 'Manage Users', path: '/manage-users', icon: Users },
    { id: 6, name: 'Notebook', path: '/notebook', icon: Notebook },
  ]

  return (
    <div className="fixed left-0 top-20 w-72 h-screen bg-black shadow-2xl z-40 overflow-y-auto border-r border-gray-200">
      {/* Navigation Menu */}
      <div className="p-6 space-y-3">
        {MenuOption.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                path === item.path
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 hover:shadow-md'
              }`}
            >
              {/* Active indicator */}
              {path === item.path && (
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-purple-400 to-purple-600 rounded-r-full" />
              )}
              
              <div className="flex items-center space-x-4">
                <item.icon 
                  className={`w-6 h-6 transition-all duration-300 ${
                    path === item.path ? 'scale-110 text-white' : 'group-hover:scale-110 group-hover:text-purple-600'
                  }`} 
                />
                <span className="font-semibold text-base tracking-wide">{item.name}</span>
              </div>
              
              <ChevronRight 
                className={`w-5 h-5 transition-all duration-300 ${
                  path === item.path 
                    ? 'text-white transform rotate-90' 
                    : 'text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1'
                }`} 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}