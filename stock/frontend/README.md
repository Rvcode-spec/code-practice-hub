📈 Stock Market Dashboard

A responsive stock market dashboard that lets users browse companies, view historical stock price charts, and gain insights with key market metrics.

🚀 Project Overview

This project demonstrates a clean UI, solid API design, and practical handling of stock market data.
It features a left sidebar company list and a main dashboard area that visualizes historical prices of the selected company.

🛠️ Tech Stack
Frontend

⚛️ React (Vite for fast builds)

📊 react-chartjs-2 (Chart.js wrapper for charts)

🔄 TanStack Query (server state & caching)

Backend

🟢 Node.js + Express (REST API)

Data

📝 Mock JSON dataset (stable for dev)

🌐 Optional live data via yahoo-finance2

Deployment

🎨 Frontend → Vercel

⚙️ Backend → Render

✨ Features

📌 Left Sidebar Panel → scrollable list of 10+ companies with search functionality.

📈 Main Dashboard → interactive line chart of Close Price vs. Date.

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
1. Clone Repository
git clone https://github.com/yourusername/stock-market-dashboard.git
cd stock-market-dashboard

2. Install Dependencies
Frontend
cd frontend
npm install
npm run dev

Backend
cd backend
npm install
npm run dev

3. Deployment

Push frontend to Vercel.

Push backend to Render.

📸 Screenshots

(Add your app screenshots here)

📜 License

MIT License © 2025





     

    



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

























