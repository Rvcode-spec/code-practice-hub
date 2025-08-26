import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import CompanyItem from "../components/CompanyItem";
import Header from "./Header";

const Sidebar = ({ 
  filteredCompanies, 
  searchTerm, 
  setSearchTerm, 
  selectedCompany, 
  handleCompanySelect,
  onClose // Added for better parent control
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Handle company selection with auto-close on mobile
  const handleCompanyClick = (company) => {
    handleCompanySelect(company);
    setIsOpen(false); // Auto close on mobile after selection
    if (onClose) onClose(); // Call parent's onClose if provided
  };

  const closeSidebar = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Top Navbar with Hamburger - Only visible on mobile */}
      <div className="lg:hidden flex items-center justify-between p-3 sm:p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-40 border-b border-gray-200">
        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          StockVision
        </h1>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 active:scale-95"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Desktop Sidebar - Always visible on large screens */}
      <div className="hidden lg:flex w-80 xl:w-96 bg-white shadow-2xl border-r border-gray-200 flex-col h-full">
        <Header />

        {/* Search Section */}
        <div className="p-4 xl:p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100 flex-shrink-0">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" size={18} />
            <input
              type="text"
              placeholder="Search stocks, sectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
            />
          </div>
        </div>

        {/* Company List */}
        <div className="flex-1 overflow-y-auto py-2 min-h-0">
          {filteredCompanies.length > 0 ? (
            <div className="space-y-1 px-2">
              {filteredCompanies.map((company, index) => (
                <CompanyItem
                  key={company.id || company.symbol || index}
                  company={company}
                  isActive={selectedCompany?.id === company.id || selectedCompany?.symbol === company.symbol}
                  onClick={() => handleCompanyClick(company)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-32 text-center px-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <Search size={20} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">
                {searchTerm ? 'No companies found matching your search' : 'No companies available'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay and Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeSidebar}
            aria-hidden="true"
          />

          {/* Slide-in Sidebar */}
          <div className="relative w-80 sm:w-96 bg-white shadow-2xl border-r border-gray-200 flex flex-col h-full transform transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 z-10"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="pr-12 flex-shrink-0"> {/* Add padding to avoid close button */}
              <Header />
            </div>

            {/* Search Section */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100 flex-shrink-0">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" size={18} />
                <input
                  type="text"
                  placeholder="Search stocks, sectors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            {/* Company List */}
            <div className="flex-1 overflow-y-auto py-2 min-h-0">
              {filteredCompanies.length > 0 ? (
                <div className="space-y-1 px-2">
                  {filteredCompanies.map((company, index) => (
                    <CompanyItem
                      key={company.id || company.symbol || index}
                      company={company}
                      isActive={selectedCompany?.id === company.id || selectedCompany?.symbol === company.symbol}
                      onClick={() => handleCompanyClick(company)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-32 text-center px-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm">
                    {searchTerm ? 'No companies found matching your search' : 'No companies available'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;