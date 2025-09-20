import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AlgosPage = () => {
  const [activeTab, setActiveTab] = useState('xtin-algos');
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showPublisherModal, setShowPublisherModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  const scheduleConsultation = () => {
    setShowConsultationModal(true);
  };

  const closeConsultationModal = () => {
    setShowConsultationModal(false);
  };

  const openPublisherForm = () => {
    setShowPublisherModal(true);
  };

  const closePublisherForm = () => {
    setShowPublisherModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-400 mb-4">
            XTIN Algos
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional trading algorithms and community marketplace for algorithmic trading strategies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'xtin-algos' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
              onClick={() => switchTab('xtin-algos')}
            >
              XTIN Algos
            </button>
            <button 
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'algo-market' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
              onClick={() => switchTab('algo-market')}
            >
              AlgoMarket
            </button>
          </div>
        </div>
      </section>

      {/* XTIN Algos Section */}
      {activeTab === 'xtin-algos' && (
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                XTIN Exclusive Algorithms
              </h2>
              <p className="text-gray-600 text-lg">
                Premium trading strategies developed by our expert team
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Alpha 1.0 Algorithm Card */}
              <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="bg-green-600 text-white text-sm font-semibold rounded-lg px-4 py-2 inline-block mb-4">
                  XTIN Exclusive
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">XTIN Alpha 1.0</h3>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-600 text-sm font-semibold rounded-lg px-3 py-1">
                      Live Algorithm
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Backtested Return:</span>
                    <span className="font-semibold text-green-600">+17.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-gray-900">74%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Drawdown:</span>
                    <span className="font-semibold text-gray-900">17.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit Factor:</span>
                    <span className="font-semibold text-gray-900">1.18</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Advanced momentum-based strategy tested on 50 NIFTY stocks with proven 74% success rate. Built for Indian equity markets with comprehensive risk management.
                  </p>
                  <ul className="text-gray-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Tested on 50 NIFTY stocks (15-minute timeframe)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Advanced momentum indicators combination
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Built-in risk management & position sizing
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Real-time alerts and signals
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Compatible with Pine Script v5
                    </li>
                  </ul>
                  
                  <div className="mb-4">
                    <h5 className="text-green-600 font-semibold mb-2">Top Performers:</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-green-700 text-sm">BEL: +114.53%</span>
                      <span className="text-green-700 text-sm">SHRIRAMFIN: +108.42%</span>
                      <span className="text-green-700 text-sm">ADANIENT: +95.07%</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                  onClick={scheduleConsultation}
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Coming Soon Placeholder */}
              <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More XTIN Exclusive Algorithms</h3>
                <p className="text-gray-700 mb-6">
                  Our team is developing additional premium strategies. Stay tuned for more advanced algorithms with proven backtesting results.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter email for updates" 
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-100 hover:bg-green-200 text-green-600 font-semibold px-4 py-2 rounded-lg transition">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AlgoMarket Section */}
      {activeTab === 'algo-market' && (
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AlgoMarket
              </h2>
              <p className="text-gray-600 text-lg">
                Community-driven algorithm marketplace
              </p>
            </div>

            {/* Publisher CTA */}
            <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Publish Your Algorithm?</h3>
                  <p className="text-gray-700 mb-6">
                    Join our marketplace and monetize your trading strategies. We review all submissions to ensure quality and performance standards.
                  </p>
                  <button 
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    onClick={openPublisherForm}
                  >
                    Apply to Publish
                  </button>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-green-600">📊</div>
                </div>
              </div>
            </div>

            {/* Make Your Own Algo Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-xl p-8 mb-12 border border-blue-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Make Your Own Algorithm</h3>
                  <p className="text-gray-700 mb-6">
                    Don't have an algorithm yet? Create your own custom trading strategy with our comprehensive algo development tools and resources.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">🚀</span>
                      <span className="text-gray-700">Visual Strategy Builder</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">⚡</span>
                      <span className="text-gray-700">Backtesting Engine</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">📈</span>
                      <span className="text-gray-700">Real-time Testing</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">🎯</span>
                      <span className="text-gray-700">Risk Management Tools</span>
                    </div>
                  </div>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  >
                    Start Building Algo
                  </button>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-blue-600">🔧</div>
                  <p className="text-blue-600 font-medium mt-2">Algo Builder Studio</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Community Algorithms Coming Soon */}
              <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Algorithms Coming Soon</h3>
                <p className="text-gray-700 mb-6">
                  We're building our community marketplace where verified traders can publish their strategies. Be among the first to access community-driven algorithms.
                </p>
                <div className="text-left mb-6">
                  <p className="text-gray-700 mb-2"><strong>Expected Launch:</strong> Q3 2025</p>
                  <p className="text-gray-700"><strong>Features:</strong> Verified publishers, performance tracking, ratings & reviews</p>
                </div>
                <button 
                  className="bg-green-100 hover:bg-green-200 text-green-600 font-semibold px-6 py-3 rounded-lg transition"
                  onClick={openPublisherForm}
                >
                  Join Publisher Waitlist
                </button>
              </div>

              {/* For Algorithm Publishers */}
              <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Algorithm Publishers</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Monetize your trading strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Reach thousands of traders
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Professional verification process
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Performance tracking & analytics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Revenue sharing model
                  </li>
                </ul>
                <div className="text-center">
                  <button 
                    className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition"
                    onClick={openPublisherForm}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Schedule Algorithm Consultation</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeConsultationModal}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    30-minute personalized session with our algorithm expert
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Detailed explanation of Alpha 1.0 features and performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Implementation guidance for your trading setup
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Q&A session tailored to your requirements
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://calendly.com/xtincapital/30min" 
                  width="100%" 
                  height="500" 
                  frameBorder="0"
                  title="Schedule Consultation"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publisher Modal */}
      {showPublisherModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Apply to Publish Your Algorithm</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closePublisherForm}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Algorithm Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Strategy Type *</label>
                  <select 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Strategy Type</option>
                    <option value="trend">Trend Following</option>
                    <option value="mean-reversion">Mean Reversion</option>
                    <option value="breakout">Breakout</option>
                    <option value="scalping">Scalping</option>
                    <option value="momentum">Momentum</option>
                    <option value="options">Options Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Asset Class *</label>
                  <select 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Asset Class</option>
                    <option value="stocks">Stocks</option>
                    <option value="forex">Forex</option>
                    <option value="crypto">Cryptocurrency</option>
                    <option value="commodities">Commodities</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Price (INR) *</label>
                  <input 
                    type="number" 
                    min="100" 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Backtesting Results Summary *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Provide key metrics like returns, win rate, max drawdown, etc."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Algorithm Description *</label>
                  <textarea 
                    rows="5" 
                    required 
                    placeholder="Describe your algorithm, its logic, and unique features"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Trading Experience *</label>
                  <select 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    required 
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-green-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-green-600 hover:underline">Revenue Share Agreement</a> *
                  </label>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button" 
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition"
                    onClick={closePublisherForm}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">✅ Thank You!</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeSuccessModal}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Thanks for your enquiry! One of our Alpha 1.0 algorithm experts will join your scheduled meeting to explain all features and guide implementation.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AlgosPage; 