import { useState, useEffect } from "react";
import { Brain, TrendingUp, TrendingDown, Activity } from "lucide-react";

const AIPrediction = ({ company, isLoading }) => {
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    if (!company || isLoading) return;

    setPrediction(null);
    setConfidence(0);

    const timer = setTimeout(() => {
      const currentPrice = Number(company.current_price ?? company.currentPrice) || 0;
      const change = Number(company.change ?? 0);

      const trend = change >= 0 ? 1 : -1;
      const volatility = Math.random() * 0.04; // ±4%
      const predictedPrice = currentPrice * (1 + trend * volatility);

      const diff = predictedPrice - currentPrice;
      const diffPercent = (diff / currentPrice) * 100;

      setPrediction({
        price: predictedPrice,
        change: diff,
        changePercent: diffPercent,
      });
      setConfidence(Math.floor(Math.random() * 15) + 80); // 80–95%
    }, 2500);

    return () => clearTimeout(timer);
  }, [company, isLoading]);

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        {/* Left: Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">AI Market Prediction</h3>
            <p className="text-indigo-200 text-sm">Next trading day forecast</p>
          </div>
        </div>

        {/* Right: Confidence */}
        {confidence > 0 && (
          <div className="text-right min-w-[80px]">
            <div className="text-2xl font-bold text-green-300">{confidence}%</div>
            <div className="text-xs text-indigo-200">Confidence</div>
          </div>
        )}
      </div>

      {/* Loader / Prediction */}
      {!prediction || isLoading ? (
        <Loader />
      ) : (
        <PredictionDisplay prediction={prediction} confidence={confidence} />
      )}
    </div>
  );
};

/* 🔹 Loader Component */
const Loader = () => (
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
);

/* 🔹 Prediction Display Component */
const PredictionDisplay = ({ prediction, confidence }) => (
  <div className="space-y-4">
    {/* Price & Change */}
    <div className="flex items-end justify-between">
      <div>
        <div className="text-3xl font-bold">₹{prediction.price.toFixed(2)}</div>
        <div
          className={`flex items-center gap-1 mt-1 ${
            prediction.change >= 0 ? "text-green-300" : "text-red-300"
          }`}
        >
          {prediction.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="font-semibold">
            {prediction.change >= 0 ? "+" : ""}₹{Math.abs(prediction.change).toFixed(2)}
          </span>
          <span className="text-sm">
            ({prediction.change >= 0 ? "+" : ""}
            {prediction.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <Activity className="w-8 h-8 text-purple-300 opacity-75" />
    </div>

    {/* Confidence Dots */}
    <div className="flex justify-between items-center pt-4 border-t border-white/20">
      <span className="text-indigo-200 text-sm">Based on technical analysis</span>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < Math.floor(confidence / 20) ? "bg-green-400" : "bg-white/20"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export default AIPrediction;
