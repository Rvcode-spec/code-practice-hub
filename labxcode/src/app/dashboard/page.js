"use client";

import React, { useState } from "react";
import { LayoutDashboard, Users, Settings, BarChart3, LogOut } from "lucide-react";

export default function Dashboard() {
  const [active, setActive] = useState("Overview");

  const menu = [
    { name: "Overview", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Reports", icon: BarChart3 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-cyan-400 mb-8 text-center">My Dashboard</h1>
        <nav className="flex-1 space-y-2">
          {menu.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-300 
                ${active === item.name ? "bg-cyan-600 text-white" : "hover:bg-slate-800"}`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>
        <button className="flex items-center gap-3 px-4 py-3 mt-4 rounded-xl hover:bg-slate-800 transition">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold">{active}</h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Welcome, Ravi</span>
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold">
              R
            </div>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Users</h3>
            <p className="text-gray-400">1,245 Active Users</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-gray-400">$12,350 This Month</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            <p className="text-gray-400">92% Uptime</p>
          </div>
        </section>
      </main>
    </div>
  );
}
