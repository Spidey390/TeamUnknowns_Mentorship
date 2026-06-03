import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 glass-panel border-b border-brandGold/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-xl font-bold tracking-widest font-display flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandGold flex items-center justify-center text-brandDark">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
          </div>
          <span>TEAM <span className="text-brandGold">UNKNOWNS</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 text-xs font-semibold tracking-widest uppercase">
          <a href="#module1" className="text-white/80 hover:text-brandGold whitespace-nowrap transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brandGold hover:after:w-full after:transition-all after:duration-300">1. Basics</a>
          <a href="#module2" className="text-white/80 hover:text-brandGold whitespace-nowrap transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brandGold hover:after:w-full after:transition-all after:duration-300">2. TradingView</a>
          <a href="#module3" className="text-white/80 hover:text-brandGold whitespace-nowrap transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brandGold hover:after:w-full after:transition-all after:duration-300">3. Candlesticks</a>
          <a href="#module4" className="text-white/80 hover:text-brandGold whitespace-nowrap transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brandGold hover:after:w-full after:transition-all after:duration-300">4. Sessions</a>
          <a href="#module5" className="text-white/80 hover:text-brandGold whitespace-nowrap transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brandGold hover:after:w-full after:transition-all after:duration-300">5. Architecture</a>
        </nav>

        <button className="md:hidden text-brandGold focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
