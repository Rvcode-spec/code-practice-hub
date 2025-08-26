import { TrendingUp, TrendingDown } from "lucide-react";

const MetricCard = ({ label, value, icon: Icon, trend, subValue }) => (
  <div className="group bg-white rounded-2xl p-2 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
          <Icon size={8} className="text-blue-600" />
        </div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</div>
      </div>
      {trend && (
        <div
          className={`flex items-center text-xs px-2 py-1 rounded-full ${
            trend > 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}
        >
          {trend > 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
        </div>
      )}
    </div>
    <div className="space-y-1">
      <div className="text-xl font-bold text-gray-900">{value}</div>
      {subValue && <div className="text-xs text-gray-500">{subValue}</div>}
    </div>
  </div>
);

export default MetricCard;
