import React, { useEffect, useRef, useState } from 'react';

interface KineticTextProps {
  text: string;
  type?: 'char' | 'word' | 'typing';
  tag?: React.ElementType;
  className?: string;
  delay?: number;
}

const KineticText: React.FC<KineticTextProps> = ({ 
  text, 
  type = 'char', 
  tag: Tag = 'div', 
  className = '',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (type === 'char') {
    return (
      <Tag ref={ref} className={`inline-block ${className}`} aria-label={text}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block whitespace-pre transition-all duration-500 ease-out`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              transitionDelay: `${delay + index * 30}ms`,
              filter: isVisible ? 'blur(0)' : 'blur(4px)'
            }}
          >
            {char}
          </span>
        ))}
      </Tag>
    );
  }

  if (type === 'word') {
    return (
      <Tag ref={ref} className={`inline-block ${className}`} aria-label={text}>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            className={`inline-block whitespace-pre mr-2 transition-all duration-700 ease-out`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) rotate(0)' : 'translateY(40px) rotate(5deg)',
              transitionDelay: `${delay + index * 100}ms`
            }}
          >
            {word}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
};

export default KineticText;
