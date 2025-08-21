import { Search } from "lucide-react";
import CompanyItem from "../components/CompanyItem";
import Header from "./Header";

const Sidebar = ({ 
  companies, 
  filteredCompanies, 
  searchTerm, 
  setSearchTerm, 
  selectedCompany, 
  handleCompanySelect 
}) => {
  return (
    <div className="w-96 bg-white shadow-2xl border-r border-gray-200 flex flex-col">
      {/* Header */}
      <Header />

      {/* Search */}
      <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            size={18}
          />
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
      <div className="flex-1 overflow-y-auto py-2">
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
  );
};

export default Sidebar;