'use client';

import React, { useState, useEffect } from 'react';
import WorldClock from '@/components/WorldClock';
import Stopwatch from '@/components/Stopwatch';
import Timer from '@/components/Timer';
import Alarms from '@/components/Alarms';

type TabType = 'clock' | 'stopwatch' | 'timer' | 'alarms';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('clock');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <main className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`border-b ${isDarkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">⏰ Chrono Master Pro</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={`border-b ${isDarkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0">
            {(['clock', 'stopwatch', 'timer', 'alarms'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? `border-blue-500 text-blue-500`
                    : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'clock' && <WorldClock isDarkMode={isDarkMode} />}
        {activeTab === 'stopwatch' && <Stopwatch isDarkMode={isDarkMode} />}
        {activeTab === 'timer' && <Timer isDarkMode={isDarkMode} />}
        {activeTab === 'alarms' && <Alarms isDarkMode={isDarkMode} />}
      </div>
    </main>
  );
}
