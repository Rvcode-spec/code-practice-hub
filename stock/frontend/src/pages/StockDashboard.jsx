import React, { useState, useEffect } from 'react';
import { Eye, BarChart3, Volume2, Activity } from "lucide-react";
import MetricCard from '../components/MetricCard';
import WelcomeMessage from '../components/WelcomeMessage';
import Sidebar from '../components/Sidebar';
import ChartArea from '../components/ChartArea';
import AIPrediction from '../components/AIPrediction';
import { fetchCompanies } from '../utils/api';

const StockDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);


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

  const filteredCompanies = companies.filter(
    (c) =>
      c?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c?.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

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

  const change = Number(selectedCompany?.change || 0);
  const changePercent = Number(
    selectedCompany?.change_percent ?? selectedCompany?.changePercent ?? 0
  );

  return (
    <div className="flex bg-gradient-to-br from-slate-50 to-blue-50 h-screen">
      {/* Sidebar - Always visible on desktop, overlay on mobile */}
      <Sidebar
        companies={companies}
        filteredCompanies={filteredCompanies}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCompany={selectedCompany}
        handleCompanySelect={handleCompanySelect}
        onClose={() => {}}
      />

      {/* Main Panel */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Company Header - Responsive */}
        {selectedCompany && (
          <div className="p-3 sm:p-4 lg:p-6 bg-white shadow-sm border-b border-gray-200 flex-shrink-0 mt-16 lg:mt-0">
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Company Info - Responsive Layout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl shadow-lg flex-shrink-0">
                    {selectedCompany.symbol?.substring(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 truncate">
                      {selectedCompany.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                      <span className="px-2 sm:px-3 py-0.5 bg-blue-50 text-blue-700 rounded-full font-medium">
                        {selectedCompany.symbol}
                      </span>
                      <span className="hidden sm:inline">NSE</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="truncate">{selectedCompany.sector}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-3 lg:gap-4">
                <MetricCard
                  label="Price"
                  value={`₹${Number(selectedCompany?.current_price || 0).toFixed(2)}`}
                  icon={Eye}
                  subValue={`${change >= 0 ? "+" : ""}₹${change.toFixed(2)} (${changePercent.toFixed(2)}%)`}
                  className="text-xs sm:text-sm"
                />
                <MetricCard
                  label="Market Cap"
                  value={selectedCompany?.market_cap || "—"}
                  icon={BarChart3}
                  subValue="Total value"
                  className="text-xs sm:text-sm"
                />
                <MetricCard
                  label="Volume"
                  value={selectedCompany?.volume || "—"}
                  icon={Volume2}
                  subValue="Today's trading"
                  className="text-xs sm:text-sm"
                />
                <MetricCard
                  label="P/E Ratio"
                  value={selectedCompany?.pe || "—"}
                  icon={Activity}
                  subValue="Price to earnings"
                  className="text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content Area - Chart & AI Prediction */}
        <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto min-h-0">
          <div className={selectedCompany ? "" : "pt-16 lg:pt-0"}>
            {selectedCompany ? (
              <div className="h-full">
                {/* Desktop: Side by side layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-6 h-full min-h-[600px]">
                  {/* Chart */}
                  <div className="bg-white rounded-2xl xl:rounded-3xl shadow-xl border border-gray-200 flex flex-col overflow-hidden">
                    <ChartArea
                      selectedCompany={selectedCompany}
                      isLoading={isLoading}
                      chartData={chartData}
                    />
                  </div>

                  {/* AI Prediction */}
                  <div className="bg-white rounded-2xl xl:rounded-3xl shadow-xl border border-gray-200 p-6">
                    <AIPrediction company={selectedCompany} isLoading={isLoading} />
                  </div>
                </div>

                {/* Mobile/Tablet: Stacked layout */}
                <div className="lg:hidden space-y-4 sm:space-y-6">
                  {/* Chart */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200">
                    <ChartArea
                      selectedCompany={selectedCompany}
                      isLoading={isLoading}
                      chartData={chartData}
                    />
                  </div>

                  {/* AI Prediction */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6">
                    <AIPrediction company={selectedCompany} isLoading={isLoading} />
                  </div>
                </div>
              </div>
            ) : (
              // Welcome Message
              <div className="w-full h-full flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
                <div className="max-w-md mx-auto px-4">
                  <WelcomeMessage />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;