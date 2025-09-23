"use client"
import React from 'react'
import StaffNavbar from '../_components/Navbar'
import StaffSidebar from '../_components/StaffSidebar'

export default function MainLayout({ children }) {
  return (
    <>
      <StaffNavbar />
      <div className="flex mt-20 h-screen">
        <StaffSidebar />
        <main className="flex-1 bg-gray-500 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  )
}