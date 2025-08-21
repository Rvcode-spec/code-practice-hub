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