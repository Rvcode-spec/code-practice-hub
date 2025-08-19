import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, TrendingDown, BarChart3, Brain, Volume2,  Eye, Star, Activity } from 'lucide-react';

// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Mock stock data generator
const generateRandomData = (days, basePrice, volatility) => {
  const data = [];
  const labels = [];
  let price = basePrice;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    
    price += (Math.random() - 0.5) * volatility;
    data.push(parseFloat(price.toFixed(2)));
  }
  
  return { labels, data };
};

// Enhanced stock data with more realistic info
const stockData = {
  'RELIANCE': {
    name: 'Reliance Industries Ltd.',
    symbol: 'RELIANCE',
    sector: 'Oil & Gas',
    currentPrice: 2847.50,
    change: 45.30,
    changePercent: 1.62,
    weekHigh: 3024.90,
    weekLow: 2220.00,
    volume: '15.2M',
    marketCap: '19.2L Cr',
    pe: 28.5,
    historicalData: generateRandomData(30, 2800, 100)
  },
  'TCS': {
    name: 'Tata Consultancy Services',
    symbol: 'TCS',
    sector: 'IT Services',
    currentPrice: 4156.75,
    change: -28.90,
    changePercent: -0.69,
    weekHigh: 4592.25,
    weekLow: 3311.00,
    volume: '8.7M',
    marketCap: '15.1L Cr',
    pe: 32.1,
    historicalData: generateRandomData(30, 4150, 150)
  },
  'INFY': {
    name: 'Infosys Limited',
    symbol: 'INFY',
    sector: 'IT Services',
    currentPrice: 1789.30,
    change: 12.45,
    changePercent: 0.70,
    weekHigh: 1953.90,
    weekLow: 1351.65,
    volume: '12.3M',
    marketCap: '7.4L Cr',
    pe: 29.8,
    historicalData: generateRandomData(30, 1790, 80)
  },
  'HDFC': {
    name: 'HDFC Bank Limited',
    symbol: 'HDFC',
    sector: 'Banking',
    currentPrice: 1654.20,
    change: -15.60,
    changePercent: -0.93,
    weekHigh: 1720.00,
    weekLow: 1363.55,
    volume: '18.9M',
    marketCap: '12.6L Cr',
    pe: 18.9,
    historicalData: generateRandomData(30, 1650, 90)
  },
  'ICICIBANK': {
    name: 'ICICI Bank Limited',
    symbol: 'ICICIBANK',
    sector: 'Banking',
    currentPrice: 1089.45,
    change: 8.75,
    changePercent: 0.81,
    weekHigh: 1181.75,
    weekLow: 916.15,
    volume: '22.1M',
    marketCap: '7.8L Cr',
    pe: 16.2,
    historicalData: generateRandomData(30, 1090, 70)
  },
  'BHARTIARTL': {
    name: 'Bharti Airtel Limited',
    symbol: 'BHARTIARTL',
    sector: 'Telecom',
    currentPrice: 1156.85,
    change: 22.10,
    changePercent: 1.95,
    weekHigh: 1222.00,
    weekLow: 868.35,
    volume: '9.8M',
    marketCap: '6.4L Cr',
    pe: 24.7,
    historicalData: generateRandomData(30, 1157, 85)
  },
  'MARUTI': {
    name: 'Maruti Suzuki India Ltd',
    symbol: 'MARUTI',
    sector: 'Automobiles',
    currentPrice: 12456.75,
    change: 156.90,
    changePercent: 1.28,
    weekHigh: 13680.00,
    weekLow: 9737.80,
    volume: '4.1M',
    marketCap: '3.8L Cr',
    pe: 26.4,
    historicalData: generateRandomData(30, 12460, 300)
  },
  'BAJFINANCE': {
    name: 'Bajaj Finance Limited',
    symbol: 'BAJFINANCE',
    sector: 'Financial Services',
    currentPrice: 7234.50,
    change: -89.20,
    changePercent: -1.22,
    weekHigh: 8192.20,
    weekLow: 6187.80,
    volume: '3.7M',
    marketCap: '4.5L Cr',
    pe: 31.8,
    historicalData: generateRandomData(30, 7235, 200)
  }
};

// Enhanced Company Item Component
const CompanyItem = ({ company, symbol, isActive, onClick }) => {
  const isPositive = company.change >= 0;
  
  return (
    <div
      className={`group p-4 mx-2 my-1 rounded-2xl cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-1 ${
        isActive
          ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-2xl scale-[1.02]'
          : 'bg-white hover:bg-gray-50 hover:shadow-xl border border-gray-100'
      }`}
      onClick={onClick}
    >
      {/* Company Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-sm leading-tight mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {company.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              isActive ? 'bg-white/20 text-blue-100' : 'bg-gray-100 text-gray-600'
            }`}>
              {company.symbol}
            </span>
            <span className={`text-xs ${isActive ? 'text-blue-200' : 'text-gray-500'}`}>
              {company.sector}
            </span>
          </div>
        </div>
        {isActive && <Star className="w-4 h-4 text-yellow-300 fill-current" />}
      </div>

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-end justify-between">
          <span className={`text-lg font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>
            ₹{company.currentPrice.toLocaleString()}
          </span>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
            isActive
              ? (isPositive ? 'bg-green-500/30 text-green-100' : 'bg-red-500/30 text-red-100')
              : (isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700')
          }`}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {isPositive ? '+' : ''}{company.changePercent.toFixed(2)}%
          </div>
        </div>
        
        {/* Additional Info */}
        <div className={`flex justify-between text-xs ${
          isActive ? 'text-blue-100' : 'text-gray-500'
        }`}>
          <span>Vol: {company.volume}</span>
          <span>P/E: {company.pe}</span>
        </div>
      </div>
    </div>
  );
};

// Enhanced Metric Card Component
const MetricCard = ({ label, value, icon: Icon, trend, subValue }) => (
  <div className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
          <Icon size={16} className="text-blue-600" />
        </div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</div>
      </div>
      {trend && (
        <div className={`flex items-center text-xs px-2 py-1 rounded-full ${
          trend > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {trend > 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
        </div>
      )}
    </div>
    <div className="space-y-1">
      <div className="text-xl font-bold text-gray-900">{value}</div>
      {subValue && <div className="text-xs text-gray-500">{subValue}</div>}
    </div>
  </div>
);

// Enhanced AI Prediction Component
const AIPrediction = ({ company, isLoading }) => {
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(0);
  
  useEffect(() => {
    if (company && isLoading) {
      setPrediction(null);
      setConfidence(0);
      
      const timer = setTimeout(() => {
        const trend = company.change >= 0 ? 1 : -1;
        const volatility = Math.random() * 0.04;
        const predictedPrice = company.currentPrice * (1 + (trend * volatility));
        const change = predictedPrice - company.currentPrice;
        const changePercent = (change / company.currentPrice) * 100;
        
        setPrediction({ price: predictedPrice, change, changePercent });
        setConfidence(Math.floor(Math.random() * 15) + 80); // 80-95% confidence
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [company, isLoading]);
  
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">AI Market Prediction</h3>
            <p className="text-indigo-200 text-sm">Next trading day forecast</p>
          </div>
        </div>
        {confidence > 0 && (
          <div className="text-right">
            <div className="text-2xl font-bold text-green-300">{confidence}%</div>
            <div className="text-xs text-indigo-200">Confidence</div>
          </div>
        )}
      </div>
      
      {!prediction || isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-r-purple-300 animate-ping"></div>
          </div>
          <div className="ml-4">
            <div className="font-semibold">Analyzing market patterns...</div>
            <div className="text-indigo-200 text-sm">Processing technical indicators</div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-3xl font-bold">₹{prediction.price.toLocaleString()}</div>
              <div className={`flex items-center gap-1 mt-1 ${
                prediction.change >= 0 ? 'text-green-300' : 'text-red-300'
              }`}>
                {prediction.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span className="font-semibold">
                  {prediction.change >= 0 ? '+' : ''}₹{Math.abs(prediction.change).toFixed(2)}
                </span>
                <span className="text-sm">
                  ({prediction.change >= 0 ? '+' : ''}{prediction.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
            <div className="text-right">
              <Activity className="w-8 h-8 text-purple-300 opacity-75" />
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-white/20">
            <span className="text-indigo-200 text-sm">Based on technical analysis</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${
                  i < Math.floor(confidence / 20) ? 'bg-green-400' : 'bg-white/20'
                }`}></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Welcome Component
const WelcomeMessage = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8">
    <div className="relative mb-8">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
        <BarChart3 size={40} className="text-white" />
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
        <Star size={16} className="text-yellow-800" />
      </div>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">StockVision</span>
    </h2>
    
    <p className="text-gray-600 text-lg max-w-md leading-relaxed mb-8">
      Select any company from the sidebar to unlock detailed analytics, AI predictions, and real-time market insights
    </p>
    
    <div className="grid grid-cols-3 gap-6 text-center">
      <div className="space-y-2">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
          <BarChart3 size={24} className="text-blue-600" />
        </div>
        <div className="text-sm font-medium text-gray-700">Live Charts</div>
      </div>
      <div className="space-y-2">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
          <Brain size={24} className="text-purple-600" />
        </div>
        <div className="text-sm font-medium text-gray-700">AI Predictions</div>
      </div>
      <div className="space-y-2">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
          <Activity size={24} className="text-green-600" />
        </div>
        <div className="text-sm font-medium text-gray-700">Real-time Data</div>
      </div>
    </div>
  </div>
);

// Main Dashboard Component
const StockDashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [timePeriod, setTimePeriod] = useState('1M');
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredCompanies = Object.entries(stockData).filter(([symbol, company]) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleCompanySelect = (symbol) => {
    setSelectedCompany(symbol);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };
  
  const timePeriods = [
    { key: '1D', label: '1 Day' },
    { key: '1W', label: '1 Week' },
    { key: '1M', label: '1 Month' },
    { key: '3M', label: '3 Months' },
    { key: '1Y', label: '1 Year' }
  ];
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#374151',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (context) => `${context[0].label}`,
          label: (context) => `₹${context.parsed.y.toLocaleString()}`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#6b7280', font: { size: 11 } }
      },
      y: {
        grid: { color: 'rgba(0, 0, 0, 0.04)' },
        ticks: {
          color: '#6b7280',
          font: { size: 11 },
          callback: (value) => `₹${value.toLocaleString()}`
        }
      }
    },
    interaction: { intersect: false, mode: 'index' },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6,
        backgroundColor: '#3b82f6',
        borderColor: '#ffffff',
        borderWidth: 3
      },
      line: { tension: 0.4 }
    }
  };
  
  const chartData = selectedCompany ? {
    labels: stockData[selectedCompany].historicalData.labels,
    datasets: [
      {
        data: stockData[selectedCompany].historicalData.data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.08)',
        borderWidth: 3,
        fill: true
      }
    ]
  } : null;
  
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Sidebar */}
      <div className="w-96 bg-white shadow-2xl border-r border-gray-200">
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
        
        {/* Enhanced Search */}
        <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
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
        <div className="flex-1 overflow-y-auto py-2" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {filteredCompanies.map(([symbol, company]) => (
            <CompanyItem
              key={symbol}
              company={company}
              symbol={symbol}
              isActive={selectedCompany === symbol}
              onClick={() => handleCompanySelect(symbol)}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Main Panel */}
      <div className="flex-1 flex flex-col">
        {/* Enhanced Header */}
        {selectedCompany && (
          <div className="p-6 bg-white shadow-sm border-b border-gray-200">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {stockData[selectedCompany].symbol.substring(0, 2)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {stockData[selectedCompany].name}
                  </h1>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                      {stockData[selectedCompany].symbol}
                    </span>
                    <span>NSE</span>
                    <span>•</span>
                    <span>{stockData[selectedCompany].sector}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                <MetricCard
                  label="Current Price"
                  value={`₹${stockData[selectedCompany].currentPrice.toLocaleString()}`}
                  icon={Eye}
                  subValue={`${stockData[selectedCompany].change >= 0 ? '+' : ''}${stockData[selectedCompany].change.toFixed(2)} (${stockData[selectedCompany].changePercent.toFixed(2)}%)`}
                />
                <MetricCard
                  label="Market Cap"
                  value={stockData[selectedCompany].marketCap}
                  icon={BarChart3}
                  subValue="Total value"
                />
                <MetricCard
                  label="Volume"
                  value={stockData[selectedCompany].volume}
                  icon={Volume2}
                  subValue="Today's trading"
                />
                <MetricCard
                  label="P/E Ratio"
                  value={stockData[selectedCompany].pe}
                  icon={Activity}
                  subValue="Price to earnings"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced Chart Area */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 h-full flex flex-col overflow-hidden">
            {selectedCompany ? (
              <>
                {/* Chart Header */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-gray-900">Price Chart</h2>
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
                              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-105'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
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
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Loading Market Data</h3>
                      <p className="text-gray-500 text-center">Fetching real-time prices and technical indicators...</p>
                    </div>
                  ) : (
                    <Line data={chartData} options={chartOptions} />
                  )}
                </div>
                
                {/* AI Prediction */}
                <div className="p-6 bg-gray-50">
                  <AIPrediction company={stockData[selectedCompany]} isLoading={isLoading} />
                </div>
              </>
            ) : (
              <WelcomeMessage />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;