# 📈 Stock Market Dashboard

![License](https://img.shields.io/badge/License-MIT-00cc66?style=for-the-badge)
![Status](https://img.shields.io/badge/Stage-Project%20Starter-1f6feb?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge\&logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646cff?style=for-the-badge\&logo=vite\&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-react--chartjs--2-f77825?style=for-the-badge)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-Server%20State-FF4154?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Render](https://img.shields.io/badge/Backend-Render-0e83cd?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

> A responsive dashboard to browse companies, view historical stock price charts, and analyze key market metrics with a clean and interactive UI.

---

## 🚀 Overview

This project demonstrates:

* **Modern Frontend UI** for seamless navigation
* **Robust Backend API** for structured data access
* **Practical Stock Data Handling** with mock data by default and optional live data
* **UX Pattern:** Scrollable left sidebar with company list + main area showing historical prices

---

## 🧱 Architecture

```text
root
├─ frontend/          # React + Vite app (UI, charts)
│  ├─ src/
│  │  ├─ components/
│  │  ├─ features/companies/
│  │  ├─ hooks/ (TanStack Query)
│  │  └─ lib/
│  └─ vite.config.ts
└─ backend/           # Node + Express API
   ├─ src/
   │  ├─ routes/
   │  ├─ controllers/
   │  ├─ services/
   │  └─ data/ (mock JSON)
   └─ server.ts
```

---

## 🛠️ Tech Stack

**Frontend**

* ⚛️ React (Vite for fast builds)
* 📊 `react-chartjs-2` (Chart.js wrapper)
* 🔄 TanStack Query (server state & caching)

**Backend**

* 🟢 Node.js + Express (REST API)

**Data**

* 📝 Mock JSON dataset (stable for development)
* 🌐 Optional live data via `yahoo-finance2`

**Deployment**

* 🎨 Frontend → Vercel
* ⚙️ Backend → Render

---

## ✨ Features

* **Left Sidebar Panel** → Scrollable list of 10+ companies with search
* **Main Dashboard** → Interactive line chart of *Close Price vs Date*
* **Extra Insights (Bonus)**

  * 52-week high & low
  * Average trading volume
  * Current stock price with up/down indicator

---

## 🔗 API Design

### `GET /api/companies`

Returns a list of companies with their stock symbols and names.

**Example Response**

```json
[
  { "symbol": "AAPL", "name": "Apple Inc." },
  { "symbol": "MSFT", "name": "Microsoft Corporation" },
  { "symbol": "GOOGL", "name": "Alphabet Inc." }
]
```

> Extend with endpoints like `GET /api/prices/:symbol` to return historical OHLCV data.

**Example (historical)**

```json
{
  "symbol": "AAPL",
  "prices": [
    { "date": "2024-01-02", "open": 184.92, "high": 186.5, "low": 183.7, "close": 185.64, "volume": 35567890 },
    { "date": "2024-01-03", "open": 185.70, "high": 187.2, "low": 185.0, "close": 186.83, "volume": 28900421 }
  ]
}
```

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/stock-market-dashboard.git
cd stock-market-dashboard
```

### 2️⃣ Install Dependencies

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Backend**

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Environment Variables (optional for live data)

Create `.env` in **backend**:

```env
# If using yahoo-finance2, no API key needed by default.
# Example toggles
USE_LIVE_DATA=false
CACHE_TTL_SECONDS=600
PORT=9000
```

---

## 📡 Using the API in Frontend

```ts
// example with TanStack Query
import { useQuery } from '@tanstack/react-query';

export function useCompanies() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const res = await fetch('/api/companies');
      if (!res.ok) throw new Error('Failed to load companies');
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}
```

---

## 🖼️ Screenshots

> Add images inside `./docs/screenshots/` and link them here.

| Sidebar & List                           | Price Chart                          |
| ---------------------------------------- | ------------------------------------ |
| ![Sidebar](docs/screenshots/sidebar.png) | ![Chart](docs/screenshots/chart.png) |

---

## ⚡ Challenges Encountered

Frontend effort focused on:

* Designing a clean, responsive layout
* Integrating chart rendering with live API data
* Efficient state management for company switching

---

## ✅ Roadmap / TODO

* [ ] Add search debounce in sidebar
* [ ] Add date range picker (1M / 3M / 6M / 1Y / 5Y / Max)
* [ ] Add tooltips + crosshair on chart
* [ ] Add 52W high/low and avg volume widgets
* [ ] Implement `GET /api/prices/:symbol` with caching
* [ ] Wire up optional live quotes via `yahoo-finance2`

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/awesome-thing`
3. Commit changes: `git commit -m "feat: add awesome thing"`
4. Push: `git push origin feat/awesome-thing`
5. Open a Pull Request

---

## 📜 License

![Static Badge](https://img.shields.io/badge/License-MIT%20%E2%84%A2-00cc66?style=flat-square)

This project is licensed under the **MIT License © 2025**. See `LICENSE` for details.

---

## 🧩 MIT License (drop-in file)

Create a file named `LICENSE` in the repo root with the content below:

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔖 Badges (copy-paste snippets)

```md
![License](https://img.shields.io/badge/License-MIT-00cc66?style=for-the-badge)
![Status](https://img.shields.io/badge/Stage-Project%20Starter-1f6feb?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-react--chartjs--2-f77825?style=for-the-badge)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-Server%20State-FF4154?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Render](https://img.shields.io/badge/Backend-Render-0e83cd?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
```

---

## 🧪 Scripts

**Frontend**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**Backend**

```json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc -p .",
    "start": "node dist/server.js"
  }
}
```

---

## 📝 Notes

* Use absolute time ranges when comparing prices in docs.
* Keep mock data stable for deterministic snapshots.
* Prefer caching on the backend for live quote endpoints.
