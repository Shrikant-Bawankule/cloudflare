import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gradient' | 'premium' | 'early' | 'white' | 'outline' | 'ghost' | 'amber';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    if (onClick) {
      onClick(event);
    }
  };

  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 hover:scale-[1.03] hover:shadow-lg";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30",
    gradient: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30",
    premium: "bg-indigo-600 text-white hover:bg-indigo-700",
    early: "bg-purple-600 text-white hover:bg-purple-700",
    amber: "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/30",
    white: "bg-white text-indigo-900 hover:bg-slate-50 shadow-md",
    outline: "border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100",
    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10",
  };

  const rippleColor = ['white', 'outline', 'ghost'].includes(variant) 
    ? 'bg-indigo-500/20' 
    : 'bg-white/30';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      onClick={createRipple}
      {...props}
    >
      <style>
        {`
          @keyframes ripple {
            0% { transform: scale(0); opacity: 0.5; }
            100% { transform: scale(4); opacity: 0; }
          }
          .animate-ripple {
            animation: ripple 600ms linear;
          }
        `}
      </style>
      
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin relative z-10" />}
      {!isLoading && leftIcon && <span className="mr-2 relative z-10">{leftIcon}</span>}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {!isLoading && rightIcon && <span className="ml-2 relative z-10">{rightIcon}</span>}
      
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={`absolute rounded-full ${rippleColor} animate-ripple pointer-events-none`}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

export default Button;