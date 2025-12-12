import React, { useState, useEffect } from 'react';
import Button from './Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 dark:text-slate-300 text-sm">
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;