import React from 'react'
import { Bell, User, Menu } from 'lucide-react'

export default function Header({ MenuOpen, setMenuOpen }) {
  return (
    <div className='p-4 flex justify-between items-center h-24 shadow-xl bg-amber-50 border-b border-amber-200'>
      <h1 className='text-4xl flex px-7 w-1/4 h-24 items-center font-bold'>Codeyaan</h1>
     
      {/* Right side icons */}
      <div className='flex items-center gap-4'>
        {/* Notification Icon */}
        <button className='p-2 hover:bg-amber-100 rounded-full transition-colors relative'>
          <Bell size={24} className='text-amber-700' />
          {/* Notification badge */}
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
            3
          </span>
        </button>
        
        {/* Profile Icon */}
        <button className='p-2 hover:bg-amber-100 rounded-full transition-colors'>
          <User size={24} className='text-amber-700' />
        </button>
        
        {/* Mobile Sidebar Toggle (hidden on large screens, visible on small screens) */}
        <button 
          className='p-2 hover:bg-amber-100 rounded-full transition-colors md:hidden'
          onClick={() => setMenuOpen(!MenuOpen)}
        >
          <Menu size={24} className='text-amber-700' />
        </button>
      </div>
    </div>
  )
}