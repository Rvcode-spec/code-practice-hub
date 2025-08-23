## 📈 Stock Market Dashboard##
         A responsive stock market dashboard that enables users to browse companies, view  historical stock price charts, and analyze key market metrics with a clean and interactive UI.
----------


## 🚀 Project Overview ##

This project demonstrates:

- A modern frontend UI for seamless navigation
- A robust backend API design for structured data access
- Practical handling of stock market data
-It features a scrollable left sidebar company list and a main dashboard area that          visualizes historical stock prices of the selected company.

---

## 🛠️ Tech Stack ##
##Frontend##
⚛️ React (Vite for fast builds)
📊 react-chartjs-2 (Chart.js wrapper for charts)
🔄 TanStack Query (server state & caching)

Backend

🟢 Node.js + Express (REST API)

Data

📝 Mock JSON dataset (stable for development)

🌐 Optional live data via yahoo-finance2

Deployment

🎨 Frontend → Vercel

⚙️ Backend → Render

✨ Features
📌 Left Sidebar Panel → scrollable list of 10+ companies with search functionality
📈 Main Dashboard → interactive line chart of Close Price vs. Date
🔍 Extra Insights (Bonus):

52-week high & low
Average trading volume
Current stock price with positive/negative indicators

🔗 API Design
GET /api/companies
Returns a list of companies with their stock symbols and names.

Example Response:

[
  { "symbol": "AAPL", "name": "Apple Inc." },
  { "symbol": "MSFT", "name": "Microsoft Corporation" },
  { "symbol": "GOOGL", "name": "Alphabet Inc." }
]

📦 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/stock-market-dashboard.git
cd stock-market-dashboard

2️⃣ Install Dependencies

Frontend

cd frontend
npm install
npm run dev


Backend

cd backend
npm install
npm run dev

3️⃣ Deployment

Push frontend to Vercel

Push backend to Render

📸 Screenshots

(Add your app screenshots here)

⚡ Challenges Encountered

⏳ Frontend development took additional time due to:

Designing a clean & responsive UI layout

Integrating chart rendering with live API data

Handling state management for company switching efficiently

📜 License

MIT License © 2025








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

// ✅ Chart.js 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartArea = ({ selectedCompany, isLoading, chartData }) => {
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
      },
    },
  };

  // ✅ Ensure chartData has a proper label
  const fixedChartData = chartData
    ? {
        ...chartData,
        datasets: chartData.datasets.map((ds) => ({
          ...ds,
          label: selectedCompany?.name || "Price", // 👈 Fix legend here
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.2)",
          tension: 0.3,
        })),
      }
    : null;

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
              ) : fixedChartData ? (
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
                  <Line data={fixedChartData} options={chartOptions} />
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
