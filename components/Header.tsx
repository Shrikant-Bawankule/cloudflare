import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';
import Button from './Button';
import { NAV_ITEMS } from '../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = href.replace('#', '');
    const element = document.getElementById(target);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled || isMobileMenuOpen
          ? 'glass-premium border-slate-200/50 dark:border-slate-800/50 py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo.png" 
              alt="Referrix Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold">Referrix</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{ filter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
                className="
                  px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 
                  rounded-lg transition-all duration-200 ease-out relative
                  hover:bg-indigo-50/15 dark:hover:bg-indigo-500/15
                  hover:text-indigo-600 dark:hover:text-white
                  hover:font-semibold
                  hover:-translate-y-0.5
                  hover:shadow-[0_4px_12px_rgba(99,102,241,0.3)]
                  active:translate-y-0 active:shadow-none
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:rotate-45"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button 
                variant="gradient" 
                size="sm"
                className="hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
            >
                Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-premium shadow-xl border-t border-slate-200 dark:border-slate-800 p-4 flex flex-col space-y-4 h-screen animate-fade-in-up">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800"
              >
                {item.label}
              </a>
            ))}
            <Button 
                variant="gradient" 
                className="w-full mt-4"
                onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate('/');
                    setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
            >
                Get Started
            </Button>
        </div>
      )}
    </header>
  );
};

export default Header;