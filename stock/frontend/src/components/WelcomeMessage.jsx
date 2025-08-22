import { BarChart3, Brain, Activity, Star } from "lucide-react";

const WelcomeMessage = () => (
  
  <div className="flex flex-col items-center justify-center h-full text-center p-8">
    <div className="relative ">
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

export default WelcomeMessage;
