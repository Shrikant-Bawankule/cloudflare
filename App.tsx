import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CookieBanner from './components/CookieBanner';

// Legal Pages (Inline for simplicity given strict file limits, but structure ready for splitting)
const LegalLayout = ({ title, description, children, lastUpdated }: { title: string, description: string, children?: React.ReactNode, lastUpdated: string }) => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-slate-800 dark:text-slate-200">
    <Helmet>
      <title>{title} | Referrix</title>
      <meta name="description" content={description} />
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-slate-500 mb-12">Last Updated: {lastUpdated}</p>
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  </div>
);

const Privacy = () => (
  <LegalLayout 
    title="Privacy Policy" 
    description="Read the Privacy Policy of Referrix to understand how we collect, use, and protect your data while you look for job referrals."
    lastUpdated="October 24, 2024"
  >
    <p>At Referrix, we take your privacy seriously...</p>
    <h3 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h3>
    <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
    <h3 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h3>
    <p>We use the information we collect to provide, maintain, and improve our services, such as facilitating job referrals and processing payments.</p>
  </LegalLayout>
);

const Terms = () => (
  <LegalLayout 
    title="Terms & Conditions" 
    description="Review the Terms & Conditions for using Referrix services, including our subscription plans and user guidelines."
    lastUpdated="October 24, 2024"
  >
    <p>Welcome to Referrix. By accessing our website, you agree to be bound by these terms...</p>
    <h3 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
    <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
    <h3 className="text-2xl font-bold mt-8 mb-4">2. Subscription Services</h3>
    <p>Referrix offers paid subscription plans. You agree to pay all fees associated with your chosen plan.</p>
  </LegalLayout>
);

const Refund = () => (
  <LegalLayout 
    title="Refund Policy" 
    description="Understand the Refund Policy at Referrix. We ensure fairness for all our premium and early access members."
    lastUpdated="October 24, 2024"
  >
    <p>We want you to be satisfied with Referrix...</p>
    <h3 className="text-2xl font-bold mt-8 mb-4">1. Refund Eligibility</h3>
    <p>Refunds are available if you do not receive the minimum guaranteed number of referral opportunities within your subscription period, provided you have met all profile completeness requirements.</p>
    <h3 className="text-2xl font-bold mt-8 mb-4">2. Processing Time</h3>
    <p>Refund requests are processed within 5-7 business days.</p>
  </LegalLayout>
);

const NotFound = () => (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <Helmet>
          <title>404 - Page Not Found | Referrix</title>
          <meta name="description" content="The page you are looking for does not exist." />
        </Helmet>
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <p className="text-2xl text-slate-700 dark:text-slate-300 mt-4">Page not found</p>
        <a href="/" className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Go Home</a>
    </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Toaster position="bottom-center" />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;