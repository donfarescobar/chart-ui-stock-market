import React from 'react';
import { Search, Bell, Settings, TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-gray-900 p-4 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-blue-500" size={24} />
          <div className="text-xl font-bold text-white"> Stock Market</div>
        </div>
        <nav className="flex space-x-4 text-gray-400">
          <button className="hover:text-white">All</button>
          <button className="hover:text-white">US</button>
          <button className="hover:text-white">HK</button>
          <button className="hover:text-white">CN</button>
          <button className="hover:text-white">Futures</button>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search stocks..."
            className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <Bell className="text-gray-400 cursor-pointer hover:text-white" size={20} />
        <Settings className="text-gray-400 cursor-pointer hover:text-white" size={20} />
      </div>
    </div>
  );
}