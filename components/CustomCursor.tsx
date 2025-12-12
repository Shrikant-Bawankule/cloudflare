import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        // Direct transform for dot (instant)
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        
        // Fast animation for outline to reduce lag
        outlineRef.current.animate({
          transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
        }, {
          duration: 50, // Reduced from 500ms to 50ms for snappier feel
          fill: "forwards",
          easing: "ease-out"
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className={`hidden md:block cursor-dot ${isHovering ? 'opacity-0' : 'opacity-100'}`} 
      />
      <div 
        ref={outlineRef} 
        className={`hidden md:block cursor-outline transition-all duration-75 ease-out ${
          isHovering 
            ? 'w-16 h-16 bg-indigo-500/10 border-transparent' 
            : 'w-8 h-8'
        }`} 
      />
    </>
  );
};

export default CustomCursor;