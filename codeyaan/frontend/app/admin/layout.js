"use client"
import React, { useState } from 'react'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'
import WelcomeMessage from './_components/WelcomeMessage' 

export default function AdminLayout() {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [selectedPage, setSelectedPage] = useState(null) // page state

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar 
          MenuOpen={MenuOpen} 
          setMenuOpen={setMenuOpen} 
          onSelect={setSelectedPage} // pass callback
        />

        {/* Main Content */}
        <main className="flex-1 p-4">
          {!selectedPage ? (
            <WelcomeMessage />   // Default panel
          ) : (
            <div>
              <h1 className="text-2xl font-bold">{selectedPage}</h1>
              {selectedPage}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
