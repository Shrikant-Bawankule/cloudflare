import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Send, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-1.5 rounded-lg">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Referrix</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering career growth through the power of community and verified referrals.
              Stop applying alone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
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
                <Link to="/privacy" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-slate-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:referrix.team@gmail.com" className="hover:text-white">referrix.team@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-slate-400">
                <Send className="h-4 w-4" />
                <a href="https://t.me/referrix_community" target="_blank" rel="noreferrer" className="hover:text-white">Join Community</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex justify-center items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Referrix. Made with ❤️ for job seekers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;