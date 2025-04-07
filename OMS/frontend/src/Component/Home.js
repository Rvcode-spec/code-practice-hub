import React from 'react'

export default function Home() {
    const user = JSON.parse(localStorage.getItem("admin"));
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
  <h2>Welcome To OMS, {user?.name || "Guest"}!</h2>
</div>
  )
};









