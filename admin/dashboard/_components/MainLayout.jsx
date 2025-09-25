"use client"
// import Navbar from './Navbar'


export default function MainLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex  mt-20 h-screen">
       {/* < Sidebar /> */}
        <main className="flex-1 bg-amber-50 p-6 overflow-y-hidden">
          {children}
        </main>
      </div>
    </>
  )
}