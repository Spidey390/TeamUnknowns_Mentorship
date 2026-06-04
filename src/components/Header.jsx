import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#module1", label: "1. Basics" },
    { href: "#module2", label: "2. Candlesticks" },
    { href: "#module3", label: "3. TradingView" },
    { href: "#module4", label: "4. Price Action" },
    { href: "#module5", label: "5. Sessions" },
    { href: "#module6", label: "6. Architecture" }
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass-panel border-b border-brandGold/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-5 flex justify-between items-center">
        <a href="#module1" className="text-base sm:text-xl font-bold tracking-widest font-display flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandGold flex items-center justify-center text-brandDark">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
          </div>
          <span>TEAM <span className="text-brandGold">UNKNOWNS</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 text-xs font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-white/80 hover:text-brandGold whitespace-nowrap transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brandGold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-brandGold focus:outline-none border border-brandGold/30 rounded-lg p-1.5 bg-brandGold/5"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          type="button"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-brandGold/20 bg-brandDarker/95 backdrop-blur-lg transition-all duration-300">
          <nav className="grid gap-2 p-4 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-white/90 hover:text-brandGold hover:border-brandGold/30 font-semibold uppercase tracking-widest text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
