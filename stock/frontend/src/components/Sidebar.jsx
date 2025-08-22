import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import CompanyItem from "../components/CompanyItem";
import Header from "./Header";

const Sidebar = ({ 
  filteredCompanies, 
  searchTerm, 
  setSearchTerm, 
  selectedCompany, 
  handleCompanySelect 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Top Navbar with Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-40">
        <h1 className="text-lg font-bold text-blue-600">StockVision</h1>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} className="text-gray-700" />
        </button>
      </div>

      {/* 🔹 Sidebar (hidden on mobile, visible on md+) */}
      <div className="hidden md:flex w-96 bg-white shadow-2xl border-r border-gray-200 flex-col">
        <Header />

        {/* Search */}
        <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search stocks, sectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Company List */}
        <div className="flex-1  py-2 pt-2" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((c) => (
              <CompanyItem
                key={c.id || c.symbol}
                company={c}
                isActive={selectedCompany?.id === c.id}
                onClick={() => handleCompanySelect(c)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-6">No companies found</p>
          )}
        </div>
      </div>

      {/* 🔹 Mobile Slide-in Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="relative w-80 bg-white shadow-xl border-r border-gray-200 flex flex-col animate-slideIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Header */}
            <Header />

            {/* Search */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search stocks, sectors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Company List */}
            <div className="flex-1 overflow-y-auto py-2" style={{ maxHeight: "calc(100vh - 200px)" }}>
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((c) => (
                  <CompanyItem
                    key={c.id || c.symbol}
                    company={c}
                    isActive={selectedCompany?.id === c.id}
                    onClick={() => {
                      handleCompanySelect(c);
                      setIsOpen(false); // auto close on select
                    }}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center mt-6">No companies found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
