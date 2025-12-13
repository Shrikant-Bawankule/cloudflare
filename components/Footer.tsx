import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Send, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll for anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Referrix</span>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Connecting talent with opportunities through verified employee referrals.
          </p>
          <a
            href="https://t.me/+lLd2h5Iae204Nzk1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Send className="w-4 h-4" />
            Join Community
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund" className="text-slate-400 hover:text-white transition-colors text-sm">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-indigo-400" />
              <a href="mailto:referrix.team@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                referrix.team@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Referrix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
