import React, { useEffect, useRef } from 'react';
import Button from './Button';
import KineticText from './KineticText';
import { ArrowRight, CheckCircle2, Briefcase, Star, MousePointer2 } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Subtle Background Gradient (Day Mode) */}
        <div className="absolute inset-0 bg-gradient-hero-light dark:bg-none -z-20 pointer-events-none"></div>

        {/* Aesthetic Blobs & Elements */}
        <div className="aesthetic-blob blob-1"></div>
        <div className="decorative-circle circle-1"></div>

        {/* Progressive Blur Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-20 pointer-events-none"></div>

        {/* Background Blobs (Existing - kept as per design but lower opacity overlap) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-400 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-400 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center relative">
            
            {/* Notification Badge - Deconstructed Top Element */}
            <div className="parallax mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300" data-speed="-0.2">
                <div className="inline-flex items-center space-x-2 glass-premium rounded-full px-4 py-1.5 shadow-lg border border-indigo-100/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                        New: Resume Templates Added
                    </span>
                </div>
            </div>

            {/* Headlines - Deconstructed & Kinetic */}
            <div className="relative mb-8 perspective-1000">
                <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
                    <div className="parallax" data-speed="0.1">
                        <KineticText text="Get Quality" type="word" />
                    </div>
                    <div className="parallax" data-speed="0.05">
                        <KineticText text="Job Referrals" type="word" delay={200} className="text-3d" />
                    </div>
                    <div className="parallax mt-2" data-speed="-0.1">
                         <span className="text-transparent bg-clip-text text-gradient-animate block md:inline-block">
                             From Real Employees
                         </span>
                    </div>
                </h1>
            </div>

            <p className="mt-8 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 parallax leading-relaxed" data-speed="0.2">
                Stop applying into the void. Access exclusive job postings and get verified referrals 
                from professionals at top companies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 parallax" data-speed="0.3">
                <Button 
                    variant="gradient" 
                    size="lg"
                    rightIcon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                >
                    Start Applying Now
                </Button>
                <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group glass-card border-none hover:bg-white/50 dark:hover:bg-white/10"
                >
                    How It Works
                </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col items-center parallax" data-speed="0.4">
                <div className="flex items-center gap-4 glass-premium px-6 py-3 rounded-full">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                        <img
                            key={i}
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 transition-transform hover:scale-110 hover:z-10"
                            src={`https://picsum.photos/40/40?random=${i}`}
                            alt="User"
                            loading="lazy"
                            decoding="async"
                        />
                        ))}
                    </div>
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                    <div className="flex flex-col items-start">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-3 w-3 text-amber-500 fill-current" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                            850+ Happy Job Seekers
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Floating Abstract Elements (Deconstructed Layout) */}
        
        {/* Left Floating Card */}
        <div className="hidden lg:block absolute top-[25%] left-0 xl:-left-12 transform -translate-y-1/2 parallax" data-speed="-0.3">
            <div className="glass-premium p-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-t border-white/20 -rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-110">
                <div className="h-12 w-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Status</p>
                    <p className="text-base font-bold text-slate-800 dark:text-white">Referral Confirmed</p>
                </div>
            </div>
        </div>

        {/* Right Floating Card */}
        <div className="hidden lg:block absolute bottom-1/3 right-0 xl:-right-12 transform parallax" data-speed="-0.4">
            <div className="glass-premium p-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-t border-white/20 rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-110">
                <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Interview</p>
                    <p className="text-base font-bold text-slate-800 dark:text-white">Google • 2:00 PM</p>
                </div>
            </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-amber-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-indigo-400 rounded-lg animate-float animation-delay-2000 opacity-60 rotate-45"></div>

      </div>
    </section>
  );
};

export default Hero;