"use client"
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex mt-20 h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-500 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  )
}