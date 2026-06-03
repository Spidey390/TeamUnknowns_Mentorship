import React, { useState } from 'react';

export default function TraderQuiz() {
  const questions = [
    {
      text: "How much time can you spend monitoring the charts daily?",
      options: [
        { text: "Virtually all day — I want constant action", score: { scalper: 3, day: 1 } },
        { text: "2 to 4 hours — during specific session opens", score: { day: 3, scalper: 1, swing: 1 } },
        { text: "1 to 2 hours — checking morning/evening", score: { swing: 3, position: 1 } },
        { text: "1 to 2 hours a week — macro tracking only", score: { position: 3, swing: 1 } }
      ]
    },
    {
      text: "What is your risk tolerance and decision-making style?",
      options: [
        { text: "High speed, high stress, instant decisions", score: { scalper: 3 } },
        { text: "Moderate speed, execution discipline, daily closure", score: { day: 3 } },
        { text: "Patient, relaxed, comfortable carrying overnight trades", score: { swing: 3 } },
        { text: "Long-term vision, completely unfazed by short-term noise", score: { position: 3 } }
      ]
    },
    {
      text: "What is your target hold duration for a trade?",
      options: [
        { text: "In and out within seconds to minutes", score: { scalper: 3 } },
        { text: "Closed by the end of the trading session", score: { day: 3 } },
        { text: "Several days to a couple of weeks", score: { swing: 3 } },
        { text: "Months or years to capture macroeconomic cycles", score: { position: 3 } }
      ]
    }
  ];

  const profiles = {
    scalper: {
      title: "Scalper ⚡",
      desc: "You thrive in high-speed, intense environments. You focus on securing quick micro-profits (1-5 pips) from minor price action spikes, completing dozens of trades a day on 1-minute and 5-minute timeframes.",
      psychology: "Requires absolute discipline to cut losses immediately. Overtrading and high transaction costs (spreads) are your main enemies.",
      concept: "ICT Liquidity Runs, Order Flow, and fair value gaps on ultra-low timeframes (1m/15s).",
      icon: "⚡",
      bgClass: "bg-sky-500/20 text-sky-400 border-sky-500/20"
    },
    day: {
      title: "Day Trader ☀️",
      desc: "You prefer a structured trading day and want to sleep soundly without carrying any overnight market risk. You focus on capturing larger moves during specific session opens (London / New York) and close everything before market close.",
      psychology: "Requires patience to wait for key session opens and control to avoid taking trades during slower mid-day periods.",
      concept: "ICT Killzones, Judas Swings, and Daily Bias expansion templates.",
      icon: "☀️",
      bgClass: "bg-yellow-500/20 text-brandGold border-yellow-500/20"
    },
    swing: {
      title: "Swing Trader 🌊",
      desc: "You have a balanced approach, seeking larger trends on 4-hour and daily charts. You hold positions for days or weeks, allowing the market structure to play out and targeting larger pip values.",
      psychology: "Patience is key. You must resist the urge to constantly check your phone or exit early during normal minor counter-trend pullbacks.",
      concept: "Weekly templates, Daily Order Blocks, and Market Structure Shifts (MSS).",
      icon: "🌊",
      bgClass: "bg-purple-500/20 text-purple-400 border-purple-500/20"
    },
    position: {
      title: "Position Trader 🏢",
      desc: "You are the macro investor of the trading world. You track long-term trends on weekly and monthly charts, keeping trades open for months or years. You base decisions on central bank interest rates and macro economics.",
      psychology: "Requires the highest level of mental stamina. You must remain completely unaffected by short-term news, volatility, or hundreds of pips of drawdown.",
      concept: "HTF (High Timeframe) Liquidity Pools, Monthly fair value gaps, and institutional hedging.",
      icon: "🏢",
      bgClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
    }
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ scalper: 0, day: 0, swing: 0, position: 0 });
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionClick = (score) => {
    const updatedScores = { ...scores };
    for (let key in score) {
      updatedScores[key] = (updatedScores[key] || 0) + score[key];
    }
    setScores(updatedScores);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion >= questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(nextQuestion);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ scalper: 0, day: 0, swing: 0, position: 0 });
    setQuizFinished(false);
  };

  // Determine highest score
  let bestMatch = 'day';
  let highestScore = -1;
  for (let key in scores) {
    if (scores[key] > highestScore) {
      highestScore = scores[key];
      bestMatch = key;
    }
  }
  const profile = profiles[bestMatch];

  const progressPercent = ((currentQuestion + (quizFinished ? 0 : 0)) / questions.length) * 100;
  // Keep the progress bar at 100% when finished, otherwise display current question progress
  const progressBarWidth = quizFinished ? '100%' : `${((currentQuestion + 1) / questions.length) * 100}%`;

  return (
    <div className="glass-panel border border-brandGold/20 p-8 sm:p-10 rounded-xl relative overflow-hidden bg-brandDarker/50">
      <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-brandGold opacity-5 rounded-full blur-2xl"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-brandGold">🎯</span> Find Your Trading Style
          </h3>
          <p className="text-gray-400 text-sm font-light mt-1">Answer 3 questions to see which style fits your personality and schedule.</p>
        </div>

        {quizFinished && (
          <button
            onClick={resetQuiz}
            className="text-xs bg-white/10 hover:bg-brandGold hover:text-brandDark px-4 py-2 rounded-lg font-bold tracking-wider uppercase transition-colors duration-300"
          >
            Restart Quiz
          </button>
        )}
      </div>

      {/* Quiz Progress Bar */}
      {!quizFinished && (
        <div id="quiz-progress-container" className="w-full bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
          <div
            id="quiz-progress-bar"
            className="bg-brandGold h-full transition-all duration-300"
            style={{ width: progressBarWidth }}
          ></div>
        </div>
      )}

      {/* Quiz Content Area */}
      <div id="quiz-card" className="min-h-[220px] flex flex-col justify-between">
        {!quizFinished ? (
          <div id="quiz-question-container">
            <h4 id="quiz-question" className="text-lg font-semibold text-white mb-6">
              {questions[currentQuestion].text}
            </h4>
            <div id="quiz-options" className="grid sm:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt.score)}
                  className="w-full bg-black/40 hover:bg-brandGold hover:text-brandDark border border-white/10 hover:border-brandGold p-4 rounded-lg text-left text-sm transition-all duration-300 font-light hover:-translate-y-0.5 hover:shadow-md"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Results Container */
          <div id="quiz-results" className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div
                id="result-icon-container"
                className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl shrink-0 border ${profile.bgClass}`}
              >
                {profile.icon}
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brandGold mb-1">Recommended Style</div>
                <h4 id="result-title" className="text-2xl font-black font-display text-white">
                  {profile.title}
                </h4>
                <p id="result-desc" className="text-gray-300 text-sm font-light mt-2 leading-relaxed">
                  {profile.desc}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-xs text-gray-400 font-light">
              <div className="bg-black/30 p-4 rounded border border-white/5">
                <h5 className="font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGold"></span> Psychology Tip
                </h5>
                <p id="result-psychology">{profile.psychology}</p>
              </div>
              <div className="bg-black/30 p-4 rounded border border-white/5">
                <h5 className="font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGold"></span> Preferred ICT Concept
                </h5>
                <p id="result-concept">{profile.concept}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
