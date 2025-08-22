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

    // ✅ Calculate change + %
    const change = Number(selectedCompany?.change || 0);
    const changePercent = Number(
        selectedCompany?.change_percent ?? selectedCompany?.changePercent ?? 0
    );

    return (
        <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Sidebar */}
            <Sidebar
                companies={companies}
                filteredCompanies={filteredCompanies}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCompany={selectedCompany}
                handleCompanySelect={handleCompanySelect}
            />

            {/* Main Panel */}
            <div className="flex-1 flex flex-col overflow-y-auto ">
                {/* Company Info + Metrics */}
                {selectedCompany && (
                    <div className="p-6 bg-white shadow-sm border-b border-gray-200 pt-16 lg:pt-3">
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
                                    subValue={`${change >= 0 ? "+" : ""}₹${change.toFixed(
                                        2
                                    )} (${changePercent.toFixed(2)}%)`}
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

                {/* Chart & AI Prediction */}
{/* Chart & AI Prediction */}
<div className="flex-1 p-6">
  {selectedCompany ? (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Chart Area */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 h-full flex flex-col overflow-hidden">
        <div className="w-full p-6">
          <ChartArea
            selectedCompany={selectedCompany}
            isLoading={isLoading}
            chartData={chartData}
          />
        </div>
      </div>

      {/* AI Prediction */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-4">
        <AIPrediction company={selectedCompany} isLoading={isLoading} />
      </div>
    </div>
  ) : (
    // ✅ Full width WelcomeMessage when no company is selected
    <div className="w-full h-full flex items-center justify-center">
      <WelcomeMessage />
    </div>
  )}
</div>



            </div>
        </div>
    );
};

export default StockDashboard;
