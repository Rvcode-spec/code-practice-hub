import { TrendingUp, TrendingDown, Star } from "lucide-react";

const CompanyItem = ({ company, isActive, onClick }) => {
  const isPositive = company.change >= 0;

  return (
    <div
      className={`group p-4 mx-2 my-1 rounded-2xl cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-1 ${
        isActive
          ? "bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-2xl scale-[1.02]"
          : "bg-white hover:bg-gray-50 hover:shadow-xl border border-gray-100"
      }`}
      onClick={onClick}
    >
      {/* Company Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-sm leading-tight mb-1 ${isActive ? "text-white" : "text-gray-900"}`}>
            {company.name}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                isActive ? "bg-white/20 text-blue-100" : "bg-gray-100 text-gray-600"
              }`}
            >
              {company.symbol}
            </span>
            <span className={`text-xs ${isActive ? "text-blue-200" : "text-gray-500"}`}>{company.sector}</span>
          </div>
        </div>
        {isActive && <Star className="w-4 h-4 text-yellow-300 fill-current" />}
      </div>

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-end justify-between">
          <span className={`text-lg font-bold ${isActive ? "text-white" : "text-gray-900"}`}>
            ₹{company.current_price.toLocaleString()}
          </span>
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
              isActive
                ? isPositive
                  ? "bg-green-500/30 text-green-100"
                  : "bg-red-500/30 text-red-100"
                : isPositive
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {isPositive ? "+" : ""}
            {company.change_percent.toFixed(2)}%
          </div>
        </div>

        {/* Additional Info */}
        <div className={`flex justify-between text-xs ${isActive ? "text-blue-100" : "text-gray-500"}`}>
          <span>Vol: {company.volume}</span>
          <span>P/E: {company.pe}</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
