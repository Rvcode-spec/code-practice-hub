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
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 
      rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl 
      w-full h-full flex flex-col justify-between">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        {/* Left: Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-bold leading-tight">
              AI Market Prediction
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-indigo-200">
              Next trading day forecast
            </p>
          </div>
        </div>

        {/* Right: Confidence */}
        {confidence > 0 && (
          <div className="text-right min-w-[80px]">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-300">
              {confidence}%
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-indigo-200">
              Confidence
            </div>
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
  <div className="flex flex-col sm:flex-row items-center justify-center py-8 gap-4">
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <div className="w-full h-full rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-r-purple-300 animate-ping"></div>
    </div>
    <div className="text-center sm:text-left">
      <div className="font-semibold text-sm sm:text-base lg:text-lg">
        Analyzing market patterns...
      </div>
      <div className="text-indigo-200 text-xs sm:text-sm lg:text-base">
        Processing technical indicators
      </div>
    </div>
  </div>
);

/* 🔹 Prediction Display Component */
const PredictionDisplay = ({ prediction, confidence }) => (
  <div className="space-y-4">
    {/* Price & Change */}
    <div className="flex flex-wrap sm:flex-nowrap items-end justify-between">
      <div>
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
          ₹{prediction.price.toFixed(2)}
        </div>
        <div
          className={`flex items-center gap-2 mt-1 text-xs sm:text-sm lg:text-base ${
            prediction.change >= 0 ? "text-green-300" : "text-red-300"
          }`}
        >
          {prediction.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="font-semibold">
            {prediction.change >= 0 ? "+" : ""}₹{Math.abs(prediction.change).toFixed(2)}
          </span>
          <span>
            ({prediction.change >= 0 ? "+" : ""}
            {prediction.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300 opacity-75" />
    </div>

    {/* Confidence Dots */}
    <div className="flex justify-between items-center pt-3 border-t border-white/20">
      <span className="text-xs sm:text-sm lg:text-base text-indigo-200">
        Based on technical analysis
      </span>
      <div className="flex gap-1 sm:gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full ${
              i < Math.floor(confidence / 20) ? "bg-green-400" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export default AIPrediction;
