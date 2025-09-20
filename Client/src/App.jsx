import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPages';
import AlgosPage from './pages/AlgosPage';
import AdvisoryPage from './pages/AdvisoryPage';
import ToolsPage from './pages/tools';
import LearnPage from './pages/learn';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CAGRCalculator from './components/calculators/cagr';
import CourseDetail from "./components/learn-page/CourseDetail";
import PurchasePage from "./components/learn-page/PurchasePage";
// Minimal placeholder pages for calculators
const Placeholder = ({ title }) => <div style={{ marginTop: 64, padding: 24 }}> {title} </div>;
const ToolsIndex = () => <Placeholder title="Tools Index" />;
const CagrPage = () => <Placeholder title="CAGR Calculator" />;
const CompoundInterestPage = () => <Placeholder title="Compound Interest Calculator" />;
const ElssPage = () => <Placeholder title="ELSS Calculator" />;
const EpfPage = () => <Placeholder title="EPF Calculator" />;
const FdPage = () => <Placeholder title="FD Calculator" />;
const GratuityPage = () => <Placeholder title="Gratuity Calculator" />;
const HraPage = () => <Placeholder title="HRA Calculator" />;
const IncomeTaxPage = () => <Placeholder title="Income Tax Calculator" />;
const InflationPage = () => <Placeholder title="Inflation Calculator" />;
const LumpsumPage = () => <Placeholder title="Lumpsum Calculator" />;
const NpsPage = () => <Placeholder title="NPS Calculator" />;
const PpfPage = () => <Placeholder title="PPF Calculator" />;
const RdPage = () => <Placeholder title="RD Calculator" />;
const RetirementPage = () => <Placeholder title="Retirement Calculator" />;
const SimpleInterestPage = () => <Placeholder title="Simple Interest Calculator" />;
const SipPage = () => <Placeholder title="SIP Calculator" />;
const SsyPage = () => <Placeholder title="SSY" />;
const SsyCalculatorPage = () => <Placeholder title="SSY Calculator" />;
const StepUpSipPage = () => <Placeholder title="Step-Up SIP" />;
const SwpPage = () => <Placeholder title="SWP Calculator" />;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/index" element={<ToolsIndex />} />
        <Route path="/tools/cagr" element={<CAGRCalculator />} />
        <Route path="/tools/compound-interest" element={<CompoundInterestPage />} />
        <Route path="/tools/elss" element={<ElssPage />} />
        <Route path="/tools/epf" element={<EpfPage />} />
        <Route path="/tools/fd" element={<FdPage />} />
        <Route path="/tools/gratuity" element={<GratuityPage />} />
        <Route path="/tools/hra" element={<HraPage />} />
        <Route path="/tools/income-tax" element={<IncomeTaxPage />} />
        <Route path="/tools/inflation" element={<InflationPage />} />
        <Route path="/tools/lumpsum" element={<LumpsumPage />} />
        <Route path="/tools/nps" element={<NpsPage />} />
        <Route path="/tools/ppf" element={<PpfPage />} />
        <Route path="/tools/rd" element={<RdPage />} />
        <Route path="/tools/retirement" element={<RetirementPage />} />
        <Route path="/tools/simple-interest" element={<SimpleInterestPage />} />
        <Route path="/tools/sip" element={<SipPage />} />
        <Route path="/tools/ssy" element={<SsyPage />} />
        <Route path="/tools/ssy-calculator" element={<SsyCalculatorPage />} />
        <Route path="/tools/step-up-sip" element={<StepUpSipPage />} />
        <Route path="/tools/swp" element={<SwpPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/courses/:courseId/purchase" element={<PurchasePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/algos" element={<AlgosPage />} />
        <Route path="/advisory" element={<AdvisoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
