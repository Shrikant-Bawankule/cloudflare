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
    <div className="fixed bottom-6 right-6 max-w-md bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-6 z-50 animate-slide-up">
      <p className="text-sm text-gray-300 mb-4">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
      </p>
      <div className="flex gap-3 justify-end">
        <Button onClick={handleDecline} variant="outline" size="sm">
          Decline
        </Button>
        <Button onClick={handleAccept} size="sm">
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
