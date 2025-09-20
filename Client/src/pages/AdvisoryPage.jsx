import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdvisoryPage = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showAdvisorOnboarding, setShowAdvisorOnboarding] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I\'m your financial advisory assistant. How can I help you today?' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const advisors = [
    {
      name: "Rohit Sharma",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      specialization: "Equity, Mutual Funds",
      qualifications: "CFP, NISM",
      bio: "10+ years of experience in Indian equity and mutual funds. SEBI Registered.",
      rating: 4.9,
      experience: "12 years",
      location: "Mumbai",
      videoRate: 1200,
      audioRate: 900,
      chatRate: 500
    },
    {
      name: "Priya Mehta",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      specialization: "Retirement, Tax Planning",
      qualifications: "CA, NISM",
      bio: "Specialist in retirement and tax planning for salaried professionals.",
      rating: 4.8,
      experience: "8 years",
      location: "Delhi",
      videoRate: 1000,
      audioRate: 700,
      chatRate: 400
    },
    {
      name: "Amit Verma",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
      specialization: "Insurance, Estate Planning",
      qualifications: "CWM, NISM",
      bio: "Expert in insurance and estate planning for HNIs and families.",
      rating: 4.7,
      experience: "15 years",
      location: "Bangalore",
      videoRate: 1500,
      audioRate: 1200,
      chatRate: 600
    }
  ];

  const advisorsPerPage = 2;

  const filteredAdvisors = advisors.filter(advisor => {
    if (currentFilter !== 'all') {
      if (!advisor.specialization.toLowerCase().includes(currentFilter.replace('-', ' '))) {
        return false;
      }
    }
    if (currentSearch) {
      const searchLower = currentSearch.toLowerCase();
      return advisor.name.toLowerCase().includes(searchLower) ||
             advisor.specialization.toLowerCase().includes(searchLower) ||
             advisor.location.toLowerCase().includes(searchLower);
    }
    return true;
  });

  const displayedAdvisors = filteredAdvisors.slice(0, currentPage * advisorsPerPage);

  const openConsultationModal = (advisor) => {
    setSelectedAdvisor(advisor);
    setShowConsultationModal(true);
  };

  const closeConsultationModal = () => {
    setShowConsultationModal(false);
    setSelectedAdvisor(null);
  };

  const openAdvisorOnboarding = () => {
    setShowAdvisorOnboarding(true);
  };

  const closeAdvisorOnboarding = () => {
    setShowAdvisorOnboarding(false);
    setCurrentStep(1);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAdvisorOnboarding(false);
    setShowSuccessModal(true);
    setCurrentStep(1);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setChatMessages(prev => [...prev, { type: 'user', message: currentMessage }]);
      setCurrentMessage('');
      // In a real application, you would send this message to a backend API
      // For now, we'll simulate a bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { type: 'bot', message: 'This is a simulated response. I\'m here to help!' }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Find Your Perfect <span className="text-green-600">Financial Advisor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with SEBI-registered, verified financial advisors for personalized guidance. Access professional-grade advisory services used by successful investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/xtin_capital_group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Telegram Group
              </a>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition">
                View Demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Stats Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative">
              <div className="text-sm text-gray-500 mb-2">RETURN</div>
              <div className="flex items-end gap-4">
                <div className="text-4xl font-bold text-gray-900">₹45,234</div>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>+152%</span>
                  <i className="fas fa-arrow-up ml-1"></i>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Search Financial Advisors</h2>
            <p className="text-gray-600">Find verified SEBI-registered advisors by specialization, location, or expertise</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-lg shadow-lg flex items-center px-4 py-3 w-full max-w-md">
              <i className="fas fa-search text-green-600 mr-3"></i>
              <input 
                type="text" 
                placeholder="Search by specialization, location, or name..."
                className="flex-1 border-none outline-none text-gray-900"
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {['all', 'equity', 'mutual-funds', 'retirement', 'tax-planning', 'insurance'].map(filter => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    currentFilter === filter
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  onClick={() => setCurrentFilter(filter)}
                >
                  {filter === 'all' ? 'All Advisors' : 
                   filter === 'mutual-funds' ? 'Mutual Funds' :
                   filter === 'tax-planning' ? 'Tax Planning' :
                   filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-green-600 text-3xl mr-3"></i>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How XTIN Advisory Works
              </h2>
            </div>
            <p className="text-gray-600 text-lg">Everything you need to succeed in financial advisory services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fas fa-search', title: 'Browse & Filter', desc: 'Search verified advisors by expertise, location, and ratings' },
              { icon: 'fas fa-calendar-check', title: 'Book Consultation', desc: 'Schedule calls or video sessions at your convenience' },
              { icon: 'fas fa-comments', title: 'Get Expert Advice', desc: 'Receive personalized financial guidance from certified professionals' },
              { icon: 'fas fa-star', title: 'Rate & Review', desc: 'Share your experience to help other users find the best advisors' }
            ].map((step, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-4xl text-green-600 mb-4">
                  <i className={step.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Advisors Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Financial Advisors
            </h2>
            <p className="text-gray-600 text-lg">
              Top-rated SEBI registered advisors available for consultation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedAdvisors.map((advisor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={advisor.photo} 
                    alt={advisor.name} 
                    className="w-16 h-16 rounded-full border-2 border-green-600 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{advisor.name}</h3>
                    <p className="text-green-600 font-medium">{advisor.specialization}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div><i className="fas fa-graduation-cap text-green-600 mr-2"></i>{advisor.qualifications}</div>
                  <div><i className="fas fa-map-marker-alt text-green-600 mr-2"></i>{advisor.location}</div>
                  <div><i className="fas fa-briefcase text-green-600 mr-2"></i>{advisor.experience}</div>
                  <div><i className="fas fa-star text-green-600 mr-2"></i>{advisor.rating}</div>
                </div>
                <p className="text-gray-700 mb-4">{advisor.bio}</p>
                <button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                  onClick={() => openConsultationModal(advisor)}
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
          
          {filteredAdvisors.length > displayedAdvisors.length && (
            <div className="text-center">
              <button 
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Load More Advisors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">₹2.5B+</div>
              <div className="text-gray-600">Trading Volume</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">0.1ms</div>
              <div className="text-gray-600">Avg Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of successful traders using Xtin Capital's advanced algorithms.
          </p>
          <a 
            href="https://t.me/xtin_capital_group"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Join Telegram Group
          </a>
        </div>
      </section>

      {/* Join as Advisor CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join XTIN Advisory as a Financial Advisor</h2>
                <p className="text-gray-700 mb-6">
                  Expand your client base and grow your practice with our verified advisor platform
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-center"><i className="fas fa-check text-green-600 mr-2"></i>Access to verified client base</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-600 mr-2"></i>Flexible consultation scheduling</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-600 mr-2"></i>Competitive commission structure</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-600 mr-2"></i>Professional profile management</li>
                </ul>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  onClick={openAdvisorOnboarding}
                >
                  Join as Advisor
                </button>
              </div>
              <div className="text-center">
                <div className="text-6xl text-green-600">
                  <i className="fas fa-chart-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultationModal && selectedAdvisor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Book Consultation</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeConsultationModal}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedAdvisor.name}</h3>
                <p className="text-gray-600">{selectedAdvisor.specialization}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Consultation Type</h3>
                <div className="space-y-3">
                  {[
                    { type: 'video', icon: 'fas fa-video', label: 'Video Call', price: '₹500/hour' },
                    { type: 'chat', icon: 'fas fa-comments', label: 'Text Chat', price: '₹200/hour' }
                  ].map((option, index) => (
                    <label key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="consultationType" value={option.type} className="mr-3" />
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <i className={`${option.icon} text-green-600 mr-3`}></i>
                          <span className="font-medium">{option.label}</span>
                        </div>
                        <span className="text-green-600 font-semibold">{option.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://calendly.com/your-calendly-link" 
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

      {/* Advisor Onboarding Modal */}
      {showAdvisorOnboarding && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Join XTIN Advisory</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeAdvisorOnboarding}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                        <select required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                          <option value="">Select Experience</option>
                          <option value="1-3">1-3 years</option>
                          <option value="4-7">4-7 years</option>
                          <option value="8-15">8-15 years</option>
                          <option value="15+">15+ years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Details */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">SEBI Registration Number *</label>
                        <input type="text" placeholder="INA123456789" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications *</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['CFP', 'CFA', 'CA', 'CWM', 'NISM'].map(qual => (
                            <label key={qual} className="flex items-center">
                              <input type="checkbox" value={qual} className="mr-2" />
                              <span className="text-sm">{qual}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Expertise *</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Equity Investments', 'Mutual Funds', 'Retirement Planning', 'Tax Planning', 'Insurance Planning', 'Estate Planning'].map(area => (
                            <label key={area} className="flex items-center">
                              <input type="checkbox" value={area.toLowerCase().replace(' ', '-')} className="mr-2" />
                              <span className="text-sm">{area}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Profile & Pricing */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile & Pricing</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Professional Bio *</label>
                        <textarea rows="4" placeholder="Tell clients about your experience and approach..." required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Video Consultation Rate (₹/hour) *</label>
                          <input type="number" min="200" max="5000" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Audio Consultation Rate (₹/hour) *</label>
                          <input type="number" min="150" max="3000" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                        <input type="file" accept="image/*" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">SEBI Registration Document *</label>
                        <input type="file" accept=".pdf,.jpg,.png" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  {currentStep > 1 && (
                    <button 
                      type="button" 
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition"
                      onClick={previousStep}
                    >
                      Previous
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button 
                      type="button" 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                    >
                      Submit Application
                    </button>
                  )}
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
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <i className="fas fa-check-circle text-green-600 mr-2"></i>
                Application Submitted!
              </h2>
              <button 
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeSuccessModal}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="text-center">
                <p className="text-gray-700 mb-4">Thank you for your application to join XTIN Advisory!</p>
                <p className="text-gray-700 mb-6">We will review your submission and get back to you within 3-5 business days.</p>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  onClick={closeSuccessModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat Interface */}
        {showChatbot && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 h-96 mb-4 flex flex-col">
            {/* Chat Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Financial Advisor Bot</h3>
                  <p className="text-sm text-green-100">Online now</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChatbot(false)}
                className="text-white hover:text-green-100 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && currentMessage.trim()) {
                      handleSendMessage();
                    }
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim()}
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
        >
          {showChatbot ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default AdvisoryPage; 