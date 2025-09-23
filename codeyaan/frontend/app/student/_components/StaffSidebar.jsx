"use client"

import React from 'react'
import { 
  PanelsTopLeft, 
  FilePlus2, 
  ClipboardList, 
  BookOpen, 
  BarChart3, 
  FileQuestion, 
  Bell 
} from "lucide-react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StaffSidebar() {
  const path = usePathname()
  
  const MenuOption = [
  { id: 1, name: 'Dashboard', path: '/admin/dashboard', icon: PanelsTopLeft },
  { id: 2, name: 'My Courses', path: '/admin/create-course', icon: FilePlus2 }, 
  { id: 3, name: 'Assignments', path: '/admin/assignments', icon: ClipboardList },
  { id: 4, name: 'Certificates', path: '/admin/manage-courses', icon: BookOpen },
  { id: 5, name: 'Community', path: '/admin/reports', icon: BarChart3 },
  { id: 6, name: 'Support/Help', path: '/admin/quizzes', icon: FileQuestion },
  { id: 7, name: 'Notifications', path: '/admin/notifications', icon: Bell },
];

  return (
    <div className="fixed left-0 top-20 w-72 h-screen bg-black shadow-2xl z-40 overflow-y-auto border-r border-gray-200">
      {/* Navigation Menu */}
      <div className="grid p-4 py-6 md:gap-3 w-72 space-y-6">
        {MenuOption.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex items-center gap-4  md:gap-5 p-3 md:p-4
                          rounded-md cursor-pointer
                          bg-purple-100
                          hover:bg-purple-600 hover:text-white
                          transition-colors duration-200
                          ${path === item.path ? 'bg-purple-600 text-white' : ''}`}
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              <h2 className="text-base md:text-lg">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
