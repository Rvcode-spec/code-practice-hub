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
  { key: "1D", label: "1 Day", days: 1 },
  { key: "1W", label: "1 Week", days: 7 },
  { key: "1M", label: "1 Month", days: 30 },
  { key: "3M", label: "3 Months", days: 90 },
  { key: "1Y", label: "1 Year", days: 365 },
];

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
      ticks: { color: "#6b7280", font: { size: 11 } },
    },
    y: {
      grid: { color: "rgba(0, 0, 0, 0.04)" },
      ticks: {
        color: "#6b7280",
        font: { size: 11 },
        callback: (value) => `₹${value.toLocaleString()}`,
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

const ChartArea = ({ selectedCompany, isLoading }) => {
  const [timePeriod, setTimePeriod] = useState("1M");

  // ✅ Filtered data based on timePeriod
  const filteredData = useMemo(() => {
    if (!selectedCompany?.historical_data) return [];

    const days = timePeriods.find((t) => t.key === timePeriod)?.days || 30;
    return selectedCompany.historical_data.slice(-days); // last N days ka data
  }, [selectedCompany, timePeriod]);

  // ✅ Chart data
  const chartData =
    filteredData.length > 0
      ? {
          labels: filteredData.map((d) => d.date || ""),
          datasets: [
            {
              data: filteredData.map((d) => d.close || d.price || 0),
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.08)",
              borderWidth: 3,
              fill: true,
            },
          ],
        }
      : null;

  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 h-full flex flex-col overflow-hidden">
        {selectedCompany && (
          <>
            {/* Chart Header */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    Price Chart
                  </h2>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Live
                  </span>
                </div>
                <div className="flex gap-2">
                  {timePeriods.map((period) => (
                    <button
                      key={period.key}
                      onClick={() => setTimePeriod(period.key)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        timePeriod === period.key
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="flex-1 p-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-purple-300 animate-ping"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Loading Market Data
                  </h3>
                  <p className="text-gray-500 text-center">
                    Fetching real-time prices and technical indicators...
                  </p>
                </div>
              ) : chartData ? (
                <div className="h-[400px]">   {/* 👈 yaha height set karo */}
              <Line data={chartData} options={chartOptions} />
             </div>
              ) : (
                <p className="text-gray-400 text-center">
                  No historical data available
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChartArea;
