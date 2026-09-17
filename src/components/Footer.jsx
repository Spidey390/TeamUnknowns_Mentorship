import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-brandGold/20 mt-12 relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-2xl font-black font-display tracking-widest uppercase mb-8">
          TEAM <span className="text-brandGold">UNKNOWNS</span>
        </div>
        
        <p className="text-brandGold text-sm tracking-[0.2em] uppercase font-bold mb-4">
          "The future of money is digital. Are you ready to embrace it?"
        </p>
      </div>
    </footer>
  );
}
