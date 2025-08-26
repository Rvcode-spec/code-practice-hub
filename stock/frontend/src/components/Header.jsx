import { BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <div className="p-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <BarChart3 size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">StockVision</h1>
          <p className="text-blue-200 text-sm">JarNox Assignment</p>
        </div>
      </div>
      <div className="flex gap-4 text-sm text-blue-100">
        <span>NSE</span>
        <span>•</span>
        <span>Live Data</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Active
        </span>
      </div>
    </div>
  );
};

export default Header;