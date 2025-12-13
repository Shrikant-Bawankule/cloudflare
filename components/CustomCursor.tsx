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
          duration: 50,
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
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full z-[9999] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={outlineRef}
        className={`custom-cursor-outline pointer-events-none fixed top-0 left-0 w-8 h-8 border-2 ${
          isHovering ? 'border-indigo-400 scale-150' : 'border-indigo-500/50'
        } rounded-full z-[9998] transition-all duration-200`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
