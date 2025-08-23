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

// ✅ Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ✅ Time Period Filters
const timePeriods = [
  { key: "1D", label: "1 Day", days: 1 },
  { key: "1W", label: "1 Week", days: 7 },
  { key: "1M", label: "1 Month", days: 30 },
  { key: "3M", label: "3 Months", days: 90 },
  { key: "1Y", label: "1 Year", days: 365 },
];

const ChartArea = ({ selectedCompany, isLoading }) => {
  const [timePeriod, setTimePeriod] = useState("1M");

  // ✅ Filtered historical data
  const filteredData = useMemo(() => {
    if (!selectedCompany?.historical_data) return [];
    const days = timePeriods.find((t) => t.key === timePeriod)?.days || 30;
    return selectedCompany.historical_data.slice(-days); // last N days ka data
  }, [selectedCompany, timePeriod]);

  // ✅ Chart Data
  const chartData =
    filteredData.length > 0
      ? {
          labels: filteredData.map((d) => d.date || ""),
          datasets: [
            {
              label: selectedCompany?.name || "Price",
              data: filteredData.map((d) => d.close || d.price || 0),
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              borderWidth: 2,
              tension: 0.3,
              fill: true,
            },
          ],
        }
      : null;

  // ✅ Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => `₹${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `₹${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="w-full p-6">
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

                {/* Time Period Buttons */}
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
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
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
