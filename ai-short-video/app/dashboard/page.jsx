"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'
import Link from 'next/link'

export default function Dashboard() {
  const [videoList, setVideoList] = useState([])

  return (
    <div className="p-6">
      <div className='flex justify-between items-center mb-6'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href='/dashboard/create-new'>
          <Button  aria-hidden="true">+ Create New</Button>
        </Link>
      </div>

      {/* Empty State */}
      {videoList.length === 0 && <EmptyState />}
    </div>
  )
}
