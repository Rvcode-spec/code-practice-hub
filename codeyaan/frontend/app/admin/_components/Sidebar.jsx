'use client'

import {
  PanelsTopLeft,
  IndianRupee,
  BarChart3,
  BookOpen,
  Users,
  Notebook,
  Settings,
  Eye,
  UserCheck,
  User,
  Bell,
  GraduationCap,
  MessageSquare,
  FileText,
  Calendar,
  Award,
  Shield,
  Database,
  Mail,
  HelpCircle,
  Zap,
  X
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Sidebar({ MenuOpen, setMenuOpen, onSelect }) {
  const path = usePathname();


  const MenuSections = [
    {
      title: "Main",
      items: [
        { id: 2, name: 'Overview', path: '/admin/overview', icon: Eye },
        { id: 3, name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
      ]
    },
    {
      title: "Course Management",
      items: [
        { id: 4, name: 'Manage Courses', path: '/admin/manage-courses', icon: BookOpen },
        { id: 5, name: 'Course Categories', path: '/admin/course-categories', icon: GraduationCap },
        { id: 6, name: 'Assignments', path: '/admin/assignments', icon: FileText },
        { id: 7, name: 'Certificates', path: '/admin/certificates', icon: Award },
      ]
    },
    {
      title: "User Management",
      items: [
        { id: 8, name: 'Manage Users', path: '/admin/manage-users', icon: Users },
        { id: 9, name: 'Instructors', path: '/admin/instructors', icon: UserCheck },
        { id: 10, name: 'Students', path: '/admin/students', icon: GraduationCap },
        { id: 11, name: 'User Roles', path: '/admin/user-roles', icon: Shield },
      ]
    },
    {
      title: "Financial",
      items: [
        { id: 12, name: 'Payments', path: '/admin/payments', icon: IndianRupee },
        { id: 13, name: 'Revenue Reports', path: '/admin/revenue-reports', icon: BarChart3 },
      ]
    },
    {
      title: "Communication",
      items: [
        { id: 14, name: 'Messages', path: '/admin/messages', icon: MessageSquare },
        { id: 15, name: 'Notifications', path: '/admin/notifications', icon: Bell },
        { id: 16, name: 'Email Templates', path: '/admin/email-templates', icon: Mail },
        { id: 17, name: 'Announcements', path: '/admin/announcements', icon: Zap },
      ]
    },
    {
      title: "Tools & Others",
      items: [
        { id: 18, name: 'Calendar', path: '/admin/calendar', icon: Calendar },
        { id: 19, name: 'Notebook', path: '/admin/notebook', icon: Notebook },
        { id: 20, name: 'Reports', path: '/admin/reports', icon: Database },
        { id: 21, name: 'Help Center', path: '/admin/help-center', icon: HelpCircle },
      ]
    },
    {
      title: "Account",
      items: [
        { id: 22, name: 'My Account', path: '/admin/my-account', icon: User },
        { id: 23, name: 'Team', path: '/admin/team', icon: Users },
        { id: 24, name: 'Settings', path: '/admin/settings', icon: Settings },
      ]
    }
  ]

  return (
    <>

      {/* Mobile Overlay */}

      {MenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gray-100/80 backdrop-blur-sm z-20"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      {MenuOpen && (
        <div className="fixed z-50 top-0 left-0 h-full w-64 bg-gradient-to-b from-amber-50 to-orange-50 border-r border-amber-200 overflow-y-auto md:hidden transition-transform duration-300">
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-amber-200 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={24} className="text-amber-700" />
          </button>
          {/* Logo/Brand Section */}
          <div className="p-6 border-b border-amber-200">
            <h1 className="text-xl font-bold text-gray-800">Codeyaan</h1>
            <p className="text-sm text-gray-600">Learning Management</p>
          </div>
          {/* Menu Sections */}
          <div className="flex-1 p-4 space-y-6">
            {MenuSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-2">
                <div className="space-y-1">
                  {section.items.map((item, index) => (
                    <Link href={item.path} key={item.id} onClick={() => setMenuOpen(false)}>
                      <div
                        className={`flex items-center gap-3 px-3 py-2.5
                                    rounded-lg cursor-pointer
                                    transition-all duration-200
                                    hover:bg-purple-100 hover:shadow-sm
                                    group
                                    ${path === item.path
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'text-gray-700 hover:text-purple-700'
                          }`}
                      >
                        <item.icon
                          className={`w-5 h-5 transition-colors duration-200
                                      ${path === item.path
                              ? 'text-white'
                              : 'text-gray-500 group-hover:text-purple-600'
                            }`}
                        />
                        <span className="text-sm font-medium">{item.name}</span>
                        {path === item.path && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Section - User Profile/Logout */}
          <div className="p-4 border-t border-amber-200 bg-amber-100/50">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden z-40 md:flex md:flex-col w-64 md:w-74 bg-gradient-to-b from-amber-50 to-orange-50 border-r border-amber-200 h-screen overflow-y-auto">
        {/* Logo/Brand Section */}
        <div className="p-6 border-b border-amber-200 md:hidden">
          <h1 className="text-xl font-bold text-gray-800">LMS Admin</h1>
          <p className="text-sm text-gray-600">Learning Management</p>
        </div>

        {/* Menu Sections */}
        <div className="flex-1 p-4 space-y-6">
          {MenuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-2">
              {/* Section Items */}
              <div className="space-y-1">
                {section.items.map((item, index) => (
                  <Link href={item.path} key={item.id} onClick={() => onSelect(item.name)}>
                    <div
                      className={`flex items-center gap-4 px-4 py-3 my-2 md:text-xl
                                  rounded-lg cursor-pointer
                                  transition-all duration-200
                                  hover:bg-purple-100 hover:shadow-sm
                                  group
                                  ${path === item.path
                          ? 'bg-purple-600 text-white shadow-md'
                          : 'text-gray-700 hover:text-purple-700'
                        }`}
                    >
                      <item.icon
                        className={`w-5 h-5 transition-colors duration-200
                                    ${path === item.path
                            ? 'text-white'
                            : 'text-gray-500 group-hover:text-purple-600'
                          }`}
                      />
                      <span className="text-md font-medium">{item.name}</span>

                      {/* Active indicator */}
                      {path === item.path && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - User Profile/Logout */}
        <div className="p-4 border-t border-amber-200 bg-amber-100/50">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


