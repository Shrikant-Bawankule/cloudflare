import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import Button from './Button';
import { Check, X, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'bimonthly' | 'quarterly'>('quarterly');

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-sky-50/50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-900 transition-colors relative overflow-hidden">
      
      {/* Background decoration - Existing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* New Aesthetic Elements */}
      <div className="aesthetic-blob blob-2" style={{ bottom: '-10%', left: '-10%' }}></div>
      <div className="decorative-circle circle-2" style={{ top: '10%', right: '5%' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Invest in your career with plans designed to get you hired. No hidden fees.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center space-x-6 glass-premium inline-flex px-6 py-2 rounded-full">
                <span className={`text-sm font-bold transition-colors ${billingCycle === 'bimonthly' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`}>
                2 Months
                </span>
                <button
                onClick={() => setBillingCycle(prev => prev === 'bimonthly' ? 'quarterly' : 'bimonthly')}
                className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    billingCycle === 'quarterly' ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
                >
                <span
                    className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    billingCycle === 'quarterly' ? 'translate-x-6' : 'translate-x-0'
                    }`}
                />
                </button>
                <span className={`text-sm font-bold transition-colors ${billingCycle === 'quarterly' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`}>
                Quarterly <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full ml-1">SAVE 15%</span>
                </span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch perspective-1000">
          {PRICING_PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 150}>
              <div 
                className={`
                  relative h-full flex flex-col rounded-3xl p-8 transition-all duration-500 group preserve-3d
                  hover:-translate-y-4 hover:shadow-2xl
                  ${plan.isPopular 
                    ? 'bg-indigo-50/60 dark:bg-indigo-500/10 border-2 border-indigo-500 shadow-xl shadow-indigo-500/20 z-10 scale-105 backdrop-blur-xl' 
                    : plan.id === 'early' 
                        ? 'bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/40 dark:to-purple-900/40 shadow-xl border border-indigo-200/50 dark:border-white/10 backdrop-blur-md'
                        : 'glass-card border border-slate-200 dark:border-slate-700/50'
                  }
                `}
              >
                {/* Popular/Value Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-max">
                    <span className={`
                      inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg
                      ${plan.id === 'early' 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      }
                    `}>
                      {plan.id === 'early' && <Sparkles className="w-3 h-3 mr-1" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center pb-8 border-b border-slate-200/20 dark:border-slate-700/50 mb-8 mt-4">
                  
                  {/* Timing Badge - Natural Aesthetic */}
                  {plan.timingBadge && (
                      <div className={`
                        inline-block rounded-full px-5 py-1.5 mb-5 text-center font-medium tracking-wide shadow-sm
                        ${plan.id === 'early' 
                            ? 'bg-gradient-to-r from-amber-600 to-orange-700 text-white border border-amber-500/30 text-sm' 
                            : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border border-emerald-500/30 text-sm'
                        }
                      `}>
                          {plan.timingBadge}
                      </div>
                  )}

                  <h3 className={`text-xl font-bold mb-2 text-slate-900 dark:text-white`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mt-6">
                    <span className={`text-5xl font-black tracking-tight text-slate-900 dark:text-white`}>
                      ₹{plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                        <span className={`ml-1 text-lg font-medium ${plan.id === 'early' ? 'text-indigo-600 dark:text-indigo-200' : 'text-slate-500'}`}>
                        /{billingCycle === 'bimonthly' ? '2mo' : 'qtr'}
                        </span>
                    )}
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`p-0.5 rounded-full mr-3 mt-0.5 flex-shrink-0 ${plan.id === 'early' ? 'bg-indigo-100 dark:bg-green-400/20' : 'bg-green-500/10'}`}>
                        <Check className={`h-4 w-4 ${plan.id === 'early' ? 'text-indigo-600 dark:text-green-400' : 'text-green-600 dark:text-green-500'}`} />
                      </div>
                      <span className={`text-[15px] font-bold leading-snug ${plan.id === 'early' ? 'text-slate-700 dark:text-slate-100' : 'text-slate-900 dark:text-white'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.unavailableFeatures?.map((feature) => (
                    <li key={feature} className="flex items-start opacity-50">
                        <div className="p-0.5 rounded-full mr-3 bg-slate-500/10 flex-shrink-0">
                            <X className={`h-4 w-4 text-slate-400`} />
                        </div>
                        <span className={`text-[15px] font-medium text-slate-500`}>
                            {feature}
                        </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                    <Button 
                        variant={plan.id === 'early' ? 'amber' : plan.isPopular ? 'primary' : 'outline'}
                        className={`w-full group-hover:scale-105 transition-transform duration-300 ${plan.id === 'early' ? 'border-none shadow-amber-500/25' : ''}`}
                        onClick={() => {
                            const url = typeof plan.link === 'string' ? plan.link : plan.link[billingCycle];
                            window.open(url, '_blank');
                        }}
                    >
                    {plan.buttonText}
                    </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
