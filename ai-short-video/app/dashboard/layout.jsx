import React from 'react'
import Header from './_components/Header'

export default function Dashboardlayout({children}) {
  return (
    <div>
        <div>
           <Header/>
        {children}
        </div>
      
    </div>
  )
}
