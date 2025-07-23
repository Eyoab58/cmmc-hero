import React, { useState } from 'react';
import CallingCard from './components/CallingCard';
import ChartTable from './components/ChartTable';
import './App.css';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [fade, setFade] = useState(false);
  const [sprsScore, setSprsScore] = useState(-203); // Default or initial value

  const handleEnterDashboard = () => {
    setFade(true);
    setTimeout(() => {
      setShowDashboard(true);
      setFade(false);
    }, 500); // 500ms fade duration
  };

  if (!showDashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 transition-opacity duration-500 flex flex-col">
        {/* Banner Header at the very top */}
        <header className="w-full bg-blue-700 py-8 shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">CMMC HERO - CMMC L2 Certification Assessment System</h1>
        </header>
        <div className="flex flex-1 flex-col items-center justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-2xl shadow transition mt-8"
            onClick={handleEnterDashboard}
          >
            Assessment
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-blue-700 font-bold py-3 px-10 rounded-lg text-xl shadow transition mt-6"
            // Add onClick handler here if needed for reports
          >
            Reports
          </button>
          <div className="mt-8 text-gray-500 text-xs">&copy; {new Date().getFullYear()} CMMC HERO. All rights reserved.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 p-4 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      <div className="max-w-5xl mx-auto">
        <CallingCard sprsScore={sprsScore} />
        <ChartTable onSprsScoreChange={setSprsScore} />
      </div>
    </div>
  );
}

export default App;
