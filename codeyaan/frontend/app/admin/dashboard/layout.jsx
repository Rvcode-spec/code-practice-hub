'use client'

import React, { useState } from 'react'
import Header from '../_components/Header'
import Sidebar from '../_components/Sidebar'

export default function Layout({ children }) {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
      
      <div className="flex flex-1">
        <Sidebar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
        
        {/* Main Content */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}