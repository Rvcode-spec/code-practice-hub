import { TrendingUp, TrendingDown, Star } from "lucide-react";

const CompanyItem = ({ company, isActive, onClick }) => {
  const isPositive = company.change >= 0;

  // Safe value helpers
  const safeLocale = (val) =>
    val !== undefined && val !== null ? val.toLocaleString() : "N/A";
  const safeFixed = (val, digits = 2) =>
    typeof val === "number" ? val.toFixed(digits) : "N/A";

  return (
    <div
      className={`group p-5 mx-2 my-4 rounded-2xl cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-1 ${
        isActive
          ? "bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-2xl scale-[1.02]"
          : "bg-white hover:bg-gray-50 hover:shadow-xl border border-gray-100"
      }`}
      onClick={onClick}
    >
      {/* Company Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-base leading-snug mb-2 ${
              isActive ? "text-white" : "text-gray-900"
            }`}
          >
            {company.name}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                isActive
                  ? "bg-white/20 text-blue-100"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {company.symbol}
            </span>
            <span
              className={`text-xs ${
                isActive ? "text-blue-200" : "text-gray-500"
              }`}
            >
              {company.sector}
            </span>
          </div>
        </div>
        {isActive && (
          <Star className="w-5 h-5 text-yellow-300 fill-current mt-1" />
        )}
      </div>

      {/* Price Section */}
      <div className="space-y-3">
        <div className="flex items-end justify-between">
          <span
            className={`text-lg font-bold ${
              isActive ? "text-white" : "text-gray-900"
            }`}
          >
            ₹{safeLocale(company.current_price)}
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
            {safeFixed(company.change_percent)}%
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`flex justify-between text-xs ${
            isActive ? "text-blue-100" : "text-gray-500"
          }`}
        >
          <span>Vol: {safeLocale(company.volume)}</span>
          <span>P/E: {safeFixed(company.pe, 2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
