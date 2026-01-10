import React from 'react';
import Hero from '../components/Hero';
import { STATS, STEPS, TESTIMONIALS, FAQS } from '../constants';
import { Reveal } from '../components/Reveal';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Button from '../components/Button';
import CustomCursor from '../components/CustomCursor';
import KineticText from '../components/KineticText';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ArrowRight, Database, ExternalLink, Quote, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden selection:bg-indigo-500 selection:text-white light-mode-mesh-bg">
      <Helmet>
        <title>Referrix - Get Quality Job Referrals</title>
        <meta name="description" content="Stop applying into the void. Access exclusive job postings and get verified referrals from professionals at top companies." />
      </Helmet>

      <CustomCursor />
      
      <Hero />

      <div className="gradient-line"></div>

      {/* Stats Section - Soft Peach to Yellow Gradient */}
      <section className="py-12 bg-gradient-to-r from-[#fef3f2] via-[#fff7ed] to-[#fefce8] dark:bg-none dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
        {/* Aesthetic Elements */}
        <div className="aesthetic-blob blob-3" style={{ top: '50%', left: '80%', transform: 'scale(0.6)' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center group cursor-default glass-section-bg rounded-2xl p-4 transition-all hover:shadow-lg">
                  <div className="inline-flex p-4 rounded-2xl bg-white/50 dark:bg-slate-800 mb-4 transition-transform group-hover:-translate-y-2 group-hover:rotate-6 duration-300">
                    <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">
                      {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line"></div>

      {/* How It Works - Subtle Slate Gradient */}
      <section id="how-it-works" className="py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-900 relative overflow-hidden">
        {/* Aesthetic Elements */}
        <div className="aesthetic-blob blob-2" style={{ top: '20%', left: '-10%' }}></div>
        <div className="decorative-circle circle-3" style={{ bottom: '10%', right: '10%' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              <KineticText text="How It Works" type="word" />
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              Your streamlined journey to your dream job, visualized.
            </p>
          </div>
          
          <BentoGrid>
            {STEPS.map((step, i) => {
                return (
                    <BentoItem 
                        key={i} 
                        span={1} 
                        delay={i * 100}
                        className="p-8 flex flex-col justify-between h-full min-h-[280px]"
                    >
                        <div className="flex justify-between items-start mb-4">
                             <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
                                {step.number}
                            </div>
                            <step.icon className="h-10 w-10 text-indigo-200 dark:text-slate-700 opacity-50" />
                        </div>
                       
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
                    </BentoItem>
                );
            })}
          </BentoGrid>
        </div>
      </section>

      <div className="gradient-line"></div>

      <Pricing />

      <div className="gradient-line"></div>

      {/* Resources Section - Soft Aesthetic Lavender to Sky mesh */}
      <section id="resources" className="py-32 bg-gradient-to-br from-[#f8fafc] via-[#fdf2f8]/40 to-[#eff6ff]/40 dark:from-slate-800 dark:to-slate-800 relative overflow-hidden transition-colors">
         {/* Aesthetic Elements */}
         <div className="aesthetic-blob blob-1" style={{ top: '50%', right: '5%', opacity: 0.1 }}></div>
         <div className="aesthetic-blob blob-2" style={{ top: '10%', left: '10%', opacity: 0.05 }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal width="100%">
            <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden p-8 md:p-20 text-center lg:text-left group shadow-2xl shadow-indigo-500/10">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/30 transition-colors duration-700"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
                
                {/* Grain overlay */}
                 <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-8 shadow-lg shadow-amber-500/20 animate-pulse-slow">
                            LIMITED TIME OFFER
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Ultimate Job <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Seekers Toolkit</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
                            Get instant access to 1800+ HR emails, mass hiring company lists, Cover Letter and proven cold email templates. 
                            Stop searching, start connecting.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Button 
                                variant="amber" 
                                size="lg" 
                                className="rounded-full px-8 hover:scale-105 transition-transform" 
                                rightIcon={<Database className="h-4 w-4" />}
                                onClick={() => window.open('https://payments.cashfree.com/forms/job-seekers-toolkit', '_blank')}
                            >
                                Get Job Toolkit
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-amber-500/20 blur-2xl rounded-full"></div>
                        <div className="glass-premium rounded-3xl p-8 border border-white/10 text-center max-w-sm w-full transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <p className="text-slate-300 mb-2 uppercase tracking-widest text-xs font-bold">One-time purchase</p>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <span className="text-6xl font-black text-white tracking-tighter">₹50</span>
                                <span className="text-2xl text-slate-500 line-through font-medium">₹250</span>
                            </div>
                            <ul className="text-left space-y-4 text-slate-300 mb-8">
                                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-amber-500" /> 1800+ HR Contacts</li>
                                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-amber-500" /> Cold Email Templates</li>
                                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-amber-500" /> Mass Hiring List</li>
                                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-amber-500" /> Cover Letter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Reveal>
        </div>
      </section>

      <div className="gradient-line"></div>

      {/* Stories - Soft Mint to Indigo Aesthetic Gradient */}
      <section id="stories" className="py-32 bg-gradient-to-b from-[#f8fafc] via-[#ecfdf5]/30 to-[#f5f3ff]/30 dark:from-slate-900 dark:to-slate-900 transition-colors relative overflow-hidden">
        {/* Aesthetic Elements */}
        <div className="aesthetic-blob blob-3" style={{ bottom: '10%', right: '50%', opacity: 0.08 }}></div>
        <div className="decorative-circle circle-2" style={{ top: '20%', right: '10%', opacity: 0.5 }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Success Stories</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">See how Referrix is changing careers.</p>
            </div>
            
            <BentoGrid>
                {TESTIMONIALS.map((story, i) => (
                    <BentoItem 
                        key={story.id} 
                        delay={i * 150}
                        span={1} 
                        className="p-8 flex flex-col h-full glass-section-bg border-indigo-100/50 dark:border-slate-700/50"
                    >
                        <div className="flex text-amber-400 mb-6">
                            {[...Array(story.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                            {[...Array(5 - story.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-slate-300 dark:text-slate-700" />)}
                        </div>
                        <div className="relative mb-8 flex-grow">
                             <Quote className="absolute -top-2 -left-2 h-8 w-8 text-indigo-500/10 dark:text-indigo-400/10 transform -scale-x-100" />
                             <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed relative z-10 italic font-medium">"{story.text}"</p>
                        </div>
                        
                        <div className="flex items-center mt-auto border-t border-slate-100 dark:border-slate-700 pt-6">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                                {story.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white text-lg">{story.name}</div>
                                <div className="text-sm text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-[10px] md:text-xs">{story.company}</div>
                            </div>
                        </div>
                    </BentoItem>
                ))}
            </BentoGrid>
        </div>
      </section>

      <div className="gradient-line"></div>

      {/* FAQ - Soft Slate to Mint Gradient */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-emerald-50/50 dark:from-slate-800 dark:to-slate-800 relative overflow-hidden">
        {/* Aesthetic Elements */}
        <div className="decorative-circle circle-1" style={{ top: '10%', left: '10%' }}></div>
        <div className="aesthetic-blob blob-2" style={{ bottom: '-10%', right: '-10%' }}></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-16">
                Frequently Asked <span className="text-indigo-600">Questions</span>
            </h2>
            <div className="space-y-4">
                {FAQS.map((faq, i) => (
                    <Reveal key={i} delay={i * 50}>
                        <details className="group glass-card border border-slate-200 dark:border-slate-700 rounded-2xl [&_summary::-webkit-details-marker]:hidden cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg open:bg-indigo-50/50 dark:open:bg-indigo-900/10">
                            <summary className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-lg p-6">
                                {faq.question}
                                <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180 bg-slate-100 dark:bg-slate-700 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0">
                                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                                    {faq.answer}
                                </p>
                            </div>
                        </details>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* CTA - Large */}
      <section className="py-32 bg-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Reveal>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Don't search alone.</h2>
                <p className="text-2xl text-indigo-200 mb-12 font-light max-w-2xl mx-auto">
                    Join the community of <span className="font-bold text-white">850+ job seekers</span> supporting each other.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button 
                        variant="white" 
                        size="lg"
                        className="h-16 px-10 text-lg rounded-full hover:scale-105 transition-transform"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Plans
                    </Button>
                    <Button 
                        variant="outline" 
                        size="lg" 
                        className="h-16 px-10 text-lg rounded-full text-white border-white/30 hover:bg-white/10 hover:border-white"
                        onClick={() => window.open('https://t.me/referrix_community', '_blank')}
                    >
                        Join Free Group <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </Reveal>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;
