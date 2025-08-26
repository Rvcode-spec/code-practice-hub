import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useMemo } from "react";

// ✅ Chart.js register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const timePeriods = [
  { key: "1D", label: "1D", fullLabel: "1 Day", days: 1 },
  { key: "1W", label: "1W", fullLabel: "1 Week", days: 7 },
  { key: "1M", label: "1M", fullLabel: "1 Month", days: 30 },
  { key: "3M", label: "3M", fullLabel: "3 Months", days: 90 },
  { key: "1Y", label: "1Y", fullLabel: "1 Year", days: 365 },
];

const ChartArea = ({ selectedCompany, isLoading }) => {
  const [timePeriod, setTimePeriod] = useState("1M");

  // ✅ Filtered data based on timePeriod
  const filteredData = useMemo(() => {
    if (!selectedCompany?.historical_data) return [];

    const days = timePeriods.find((t) => t.key === timePeriod)?.days || 30;
    return selectedCompany.historical_data.slice(-days);
  }, [selectedCompany, timePeriod]);

  // Calculate price change
  const priceChange = useMemo(() => {
    if (filteredData.length < 2) return { change: 0, percentage: 0, isPositive: true };
    
    const firstPrice = filteredData[0]?.close || filteredData[0]?.price || 0;
    const lastPrice = filteredData[filteredData.length - 1]?.close || filteredData[filteredData.length - 1]?.price || 0;
    const change = lastPrice - firstPrice;
    const percentage = firstPrice !== 0 ? (change / firstPrice) * 100 : 0;
    
    return {
      change: Math.abs(change),
      percentage: Math.abs(percentage),
      isPositive: change >= 0
    };
  }, [filteredData]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#1f2937",
        bodyColor: "#374151",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (context) => `${context[0].label}`,
          label: (context) => `₹${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { 
          color: "#6b7280", 
          font: { size: window.innerWidth < 640 ? 10 : 11 },
          maxTicksLimit: window.innerWidth < 640 ? 4 : window.innerWidth < 768 ? 6 : 8,
        },
      },
      y: {
        grid: { color: "rgba(0, 0, 0, 0.04)" },
        ticks: {
          color: "#6b7280",
          font: { size: window.innerWidth < 640 ? 10 : 11 },
          callback: (value) => `₹${value.toLocaleString()}`,
          maxTicksLimit: window.innerWidth < 640 ? 5 : 7,
        },
      },
    },
    interaction: { intersect: false, mode: "index" },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6,
        backgroundColor: "#3b82f6",
        borderColor: "#ffffff",
        borderWidth: 3,
      },
      line: { tension: 0.4 },
    },
  };

  // ✅ Enhanced Chart Data with dynamic colors
  const fixedChartData =
    filteredData.length > 0
      ? {
          labels: filteredData.map((d) => {
            const date = new Date(d.date);
            return date.toLocaleDateString('en-IN', { 
              month: 'short', 
              day: 'numeric' 
            });
          }),
          datasets: [
            {
              data: filteredData.map((d) => d.close || d.price || 0),
              borderColor: priceChange.isPositive ? "#10b981" : "#ef4444",
              backgroundColor: priceChange.isPositive 
                ? "linear-gradient(180deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.02) 100%)"
                : "linear-gradient(180deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.02) 100%)",
              borderWidth: 3,
              fill: true,
              pointBackgroundColor: priceChange.isPositive ? "#10b981" : "#ef4444",
            },
          ],
        }
      : null;

  const currentPrice = filteredData.length > 0 
    ? filteredData[filteredData.length - 1]?.close || filteredData[filteredData.length - 1]?.price || 0
    : 0;

  return (
    <div className="w-full p-2 sm:p-4 md:p-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-200 h-full flex flex-col overflow-hidden min-h-[450px] sm:min-h-[500px] md:min-h-[550px]">
        {selectedCompany && (
          <>
            {/* Chart Header - Responsive */}
            <div className="p-3 sm:p-4 md:p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* Title, Price and Live Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      Price Chart
                    </h2>
                    <span className="px-2 py-1 sm:px-3 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                      Live
                    </span>
                  </div>
                  
                  {/* Current Price Display */}
                  {currentPrice > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">
                        ₹{currentPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </span>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                        priceChange.isPositive 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        <span className={`text-sm ${
                          priceChange.isPositive ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {priceChange.isPositive ? '↗' : '↘'}
                        </span>
                        <span className="text-sm font-semibold">
                          {priceChange.percentage.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Time Period Buttons - Fully Responsive */}
                <div className="grid grid-cols-5 gap-1 sm:flex sm:gap-2 sm:flex-wrap">
                  {timePeriods.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTimePeriod(t.key)}
                      className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 text-center ${
                        timePeriod === t.key
                         ? "bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                      }`}
                    >
                      {/* Mobile: Show short labels, Desktop: Show full labels */}
                      <span className="sm:hidden">{t.key}</span>
                      <span className="hidden sm:inline lg:hidden">{t.key}</span>
                      <span className="hidden lg:inline">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chart Content Area */}
            <div className="flex-1 p-3 sm:p-4 md:p-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[250px] sm:min-h-[300px]">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
                    <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-transparent border-r-purple-300 animate-ping"></div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2 text-center">
                    Loading Market Data
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 text-center px-4 max-w-md">
                    Fetching real-time prices and technical indicators...
                  </p>
                </div>
              ) : fixedChartData ? (
                <div className="w-full h-[250px] xs:h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] 2xl:h-[500px]">
                  <Line data={fixedChartData} options={chartOptions} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[250px] sm:min-h-[300px]">
                  <div className="text-center max-w-sm mx-auto">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">No Data Available</h3>
                    <p className="text-sm sm:text-base text-gray-500 px-4">
                      Historical data is not available for this selection
                    </p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChartArea;