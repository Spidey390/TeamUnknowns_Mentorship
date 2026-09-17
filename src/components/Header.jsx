import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Search,
  BookOpen,
  Layers,
  TrendingUp,
  BarChart2,
  Clock,
  Target,
  Sparkles,
  Zap,
  Sliders
} from 'lucide-react';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('module1');
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModules, setExpandedModules] = useState({
    module1: true,
    module2: false,
    module3: false,
    module4: false,
    module5: false,
    module6: false,
    module7: false
  });

  const modulesData = [
    {
      id: "module1",
      num: "01",
      title: "Basics & Foundations",
      short: "Basics",
      href: "#module1",
      icon: BookOpen,
      topics: [
        { title: "1.1 What is Forex?", href: "#topic-1-1" },
        { title: "1.2 Stock Market vs Forex", href: "#topic-1-2" },
        { title: "1.3 Currency Pairs & Gold", href: "#pairs" },
        { title: "1.4 Pips & Pip Calculator", href: "#pips-section" },
        { title: "1.5 Lots & Position Sizing", href: "#lots-section" },
        { title: "1.6 Profit & Loss Simulator", href: "#profit-section" },
        { title: "1.7 Broker Architecture Visualizer", href: "#broker-section" },
        { title: "1.8 Trading Glossary Table", href: "#revision-section" },
        { title: "1.9 Trading Style Quiz", href: "#quiz-section" }
      ]
    },
    {
      id: "module2",
      num: "02",
      title: "Candlestick Anatomy",
      short: "Candlesticks",
      href: "#module2",
      icon: BarChart2,
      topics: [
        { title: "2.1 Anatomy of a Candlestick", href: "#topic-2-1" },
        { title: "2.2 Bullish vs Bearish Anatomy", href: "#topic-2-1" },
        { title: "2.3 Key Candlestick Patterns", href: "#topic-2-2" },
        { title: "2.4 Interactive Pattern Explorer", href: "#topic-2-2" }
      ]
    },
    {
      id: "module3",
      num: "03",
      title: "Market Structure",
      short: "Price Action",
      href: "#module3",
      icon: TrendingUp,
      topics: [
        { title: "3.1 Market Structure (HH, HL, LH, LL)", href: "#topic-3-1" },
        { title: "3.2 Break of Structure (BOS)", href: "#topic-3-2" },
        { title: "3.3 Change of Character (CHoCH)", href: "#topic-3-3" },
        { title: "3.4 Market Structure Shift (MSS)", href: "#topic-3-4" }
      ]
    },
    {
      id: "module4",
      num: "04",
      title: "Market Liquidity & Pools",
      short: "Liquidity",
      href: "#module4",
      icon: Target,
      topics: [
        { title: "4.1 What is Liquidity?", href: "#topic-4-1" },
        { title: "4.2 Buy-Side (BSL) vs Sell-Side (SSL)", href: "#topic-4-2" },
        { title: "4.3 High-Probability Resting Pools (EQH/EQL/PDH/PDL)", href: "#topic-4-3" },
        { title: "4.4 Sweeps vs Liquidity Runs", href: "#topic-4-3" },
        { title: "4.5 Displacement & Market Delivery", href: "#topic-4-4" },
        { title: "4.6 Order Book & Slippage Simulator", href: "#topic-4-5" }
      ]
    },
    {
      id: "module5",
      num: "05",
      title: "Sessions & Killzones",
      short: "Sessions",
      href: "#module5",
      icon: Clock,
      topics: [
        { title: "5.1 Global Trading Sessions (IST / EST)", href: "#topic-5-1" },
        { title: "5.2 ICT Killzones (London, NY, Asian)", href: "#topic-5-2" },
        { title: "5.3 Power of 3 (PO3 / AMD)", href: "#topic-5-3" },
        { title: "5.4 Multi-Timeframe Alignment", href: "#topic-5-4" }
      ]
    },
    {
      id: "module6",
      num: "06",
      title: "PD Array (Premium & Discount)",
      short: "PD Array",
      href: "#module6",
      icon: Layers,
      topics: [
        { title: "6.1 Premium vs Discount & Equilibrium", href: "#topic-6-1" },
        { title: "6.2 The 7-Tier PD Array Hierarchy Matrix", href: "#topic-6-2" },
        { title: "6.3 Order Blocks, Breakers & Inversion FVGs", href: "#topic-6-3" },
        { title: "6.4 Optimal Trade Entry (OTE 62% - 79%)", href: "#topic-6-4" },
        { title: "6.5 Algorithmic Confluence Rules", href: "#topic-6-5" }
      ]
    },
    {
      id: "module7",
      num: "07",
      title: "Strategy & Execution",
      short: "Execution",
      href: "#module7",
      icon: Zap,
      topics: [
        { title: "7.1 Daily Bias Identification", href: "#topic-7-1" },
        { title: "7.2 The Silver Bullet Strategy Model", href: "#topic-7-2" }
      ]
    }
  ];

  // Toggle module expansion in sidebar
  const toggleModule = (id) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Smooth centering navigation handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsSidebarOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      if (targetId.startsWith('module')) {
        // Scroll so the full-screen hero section fills the viewport, centering its content
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Topic card: scroll with offset for the top header
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      window.history.pushState(null, '', href);
    }
  };

  // Scroll listener for blur effect and Active Section Tracker (ScrollSpy)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = modulesData.map(m => document.getElementById(m.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(modulesData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: Press Escape to close sidebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Filter modules/topics based on search query
  const filteredModules = modulesData.map(m => {
    if (!searchQuery.trim()) return m;
    const query = searchQuery.toLowerCase();
    const matchesModule = m.title.toLowerCase().includes(query) || m.num.includes(query);
    const matchingTopics = m.topics.filter(t => t.title.toLowerCase().includes(query));
    if (matchesModule || matchingTopics.length > 0) {
      return {
        ...m,
        topics: matchingTopics.length > 0 ? matchingTopics : m.topics
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <>
      {/* =========================================================
          TOP HEADER BAR (Clean, Minimalist, W3S / GFG Inspired)
      ========================================================= */}
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brandDarker/90 backdrop-blur-xl border-b border-brandGold/20 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Left: Menu Trigger Button + Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center justify-center bg-brandGold/10 hover:bg-brandGold hover:text-brandDark border border-brandGold/30 text-brandGold p-2 rounded-xl transition-all duration-300 shadow-sm group active:scale-95"
              aria-label="Open Course Menu"
              type="button"
            >
              <Menu className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <a
              href="#module1"
              onClick={(e) => handleNavClick(e, '#module1')}
              className="text-base sm:text-lg font-black tracking-widest font-display flex items-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brandGold to-yellow-500 flex items-center justify-center text-brandDark shadow-md shadow-brandGold/20 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-white tracking-wider">
                TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">UNKNOWNS</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================
          W3SCHOOLS / GFG STYLE OFF-CANVAS SIDEBAR DRAWER
      ========================================================= */}
      
      {/* Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* Slide-out Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 sm:w-96 bg-brandDarker border-r border-brandGold/20 z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Course Table of Contents"
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-brandGold flex items-center justify-center text-brandDark">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display uppercase tracking-wider text-white">
                Course Syllabus
              </h3>
              <p className="text-[10px] text-brandGold font-mono uppercase">
                ICT Mentorship Program
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search / Filter Input (W3S / GFG Search Style) */}
        <div className="p-4 border-b border-white/5 bg-black/20">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g. FVG, Order Block, Sessions)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brandGold font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Modules & Topics Scrollable Tree View */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-xs">
          {filteredModules.length === 0 ? (
            <div className="p-6 text-center text-gray-500 space-y-2">
              <Search className="w-8 h-8 mx-auto opacity-30" />
              <p className="text-xs">No topics matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredModules.map((m) => {
              const isActive = activeSection === m.id;
              const isExpanded = expandedModules[m.id] || searchQuery.trim().length > 0;
              const IconComponent = m.icon;

              return (
                <div
                  key={m.id}
                  className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.02]"
                >
                  {/* Module Header Bar */}
                  <div
                    className={`flex items-center justify-between p-3 cursor-pointer transition-all ${
                      isActive
                        ? 'bg-brandGold/15 border-l-4 border-l-brandGold text-white font-bold'
                        : 'hover:bg-white/[0.04] text-gray-300'
                    }`}
                    onClick={() => toggleModule(m.id)}
                  >
                    <a
                      href={m.href}
                      onClick={(e) => handleNavClick(e, m.href)}
                      className="flex items-center gap-2.5 flex-1 pr-2 truncate"
                    >
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                        isActive ? 'bg-brandGold text-brandDark' : 'bg-white/10 text-brandGold'
                      }`}>
                        {m.num}
                      </span>
                      <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? 'text-brandGold' : 'text-gray-400'}`} />
                      <span className="truncate font-sans font-semibold text-xs">{m.title}</span>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleModule(m.id);
                      }}
                      className="p-1 text-gray-500 hover:text-white"
                      aria-label="Toggle subtopics"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Subtopics Accordion List */}
                  {isExpanded && (
                    <div className="bg-black/40 border-t border-white/5 py-1.5 px-2 space-y-1 font-sans text-xs">
                      {m.topics.map((t, idx) => (
                        <a
                          key={idx}
                          href={t.href}
                          onClick={(e) => handleNavClick(e, t.href)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-brandGold hover:bg-brandGold/5 transition-all text-[11px] leading-relaxed group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-brandGold transition-colors shrink-0"></span>
                          <span className="truncate">{t.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 bg-black/60 text-center space-y-1">
          <span className="text-[10px] text-gray-500 font-mono block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">ESC</kbd> to close
          </span>
          <span className="text-[10px] text-brandGold font-mono block">
            Forex &amp; ICT Mentorship Program
          </span>
        </div>
      </aside>
    </>
  );
}
