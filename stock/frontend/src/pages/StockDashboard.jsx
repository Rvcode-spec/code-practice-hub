import { useEffect, useState } from "react";
import { Search, BarChart3, Volume2, Eye, Activity } from "lucide-react";
import CompanyItem from "../components/CompanyItem";
import MetricCard from "../components/MetricCard";
import AIPrediction from "../components/AIPrediction";
import WelcomeMessage from "../components/WelcomeMessage";
import ChartArea from "../components/ChartArea";
import { fetchCompanies } from "../utils/api";

const StockDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch companies on mount
  useEffect(() => {
    const loadCompanies = async () => {
      setIsLoading(true);
      try {
        const res = await fetchCompanies();
        setCompanies(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Error fetching companies:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCompanies();
  }, []);

  // ✅ Safe search
  const filteredCompanies = companies.filter(
    (c) =>
      c?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c?.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Handle selection
  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // mock load
  };

  // ✅ Prepare chart data
  const chartData =
    selectedCompany?.historical_data?.length > 0
      ? {
          labels: selectedCompany.historical_data.map((d) => d.date || ""),
          datasets: [
            {
              data: selectedCompany.historical_data.map(
                (d) => Number(d.close || d.price) || 0
              ),
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.08)",
              borderWidth: 3,
              fill: true,
            },
          ],
        }
      : { labels: [], datasets: [] };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <div className="w-96 bg-white shadow-2xl border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Company Info + Metrics */}
        {selectedCompany && (
          <div className="p-6 bg-white shadow-sm border-b border-gray-200">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              {/* Company Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {selectedCompany.symbol?.substring(0, 2)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {selectedCompany.name}
                  </h1>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                      {selectedCompany.symbol}
                    </span>
                    <span>NSE</span>
                    <span>•</span>
                    <span>{selectedCompany.sector}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                <MetricCard
                  label="Current Price"
                  value={`₹${Number(selectedCompany?.current_price).toFixed(2)}`}
                  icon={Eye}
                  subValue={`${
                    Number(selectedCompany?.change) >= 0 ? "+" : ""
                  }₹${Number(selectedCompany?.change || 0).toFixed(2)} (${
                    Number(
                      selectedCompany?.change_percent ??
                        selectedCompany?.changePercent
                    ).toFixed(2) || "0.00"
                  }%)`}
                />
                <MetricCard
                  label="Market Cap"
                  value={selectedCompany?.market_cap || "—"}
                  icon={BarChart3}
                  subValue="Total value"
                />
                <MetricCard
                  label="Volume"
                  value={selectedCompany?.volume || "—"}
                  icon={Volume2}
                  subValue="Today's trading"
                />
                <MetricCard
                  label="P/E Ratio"
                  value={selectedCompany?.pe || "—"}
                  icon={Activity}
                  subValue="Price to earnings"
                />
              </div>
            </div>
          </div>
        )}

        {/* Chart + AI Prediction / Welcome */}
        <div className="flex-1 p-6 grid grid-cols-3 gap-6">
          {selectedCompany ? (
            <>
              {/* Chart Area */}
              <div className="col-span-2">
                <ChartArea
                  selectedCompany={selectedCompany}
                  isLoading={isLoading}
                  chartData={chartData}
                />
              </div>

              {/* AI Predictions */}
              <div className="col-span-1 bg-white rounded-3xl shadow-xl border border-gray-200 p-4">
                <AIPrediction company={selectedCompany} isLoading={isLoading} />
              </div>
            </>
          ) : (
            <div className="col-span-3 flex items-center justify-center">
              <WelcomeMessage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
