import React, { RefObject } from 'react';
import { useInView } from '../hooks/useInView';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'slide-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = ''
}) => {
  const [ref, isInView] = useInView() as [RefObject<HTMLDivElement>, boolean];

  const baseStyles = 'opacity-0 transition-all duration-1000';
  
  const animationStyles = {
    'fade-up': 'translate-y-10',
    'fade-down': '-translate-y-10',
    'fade-left': '-translate-x-10',
    'fade-right': 'translate-x-10',
    'fade-in': '',
    'slide-in': 'translate-x-full'
  };

  const activeStyles = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'fade-in': 'opacity-100',
    'slide-in': 'opacity-100 translate-x-0'
  };

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${animationStyles[animation]} ${
        isInView ? activeStyles[animation] : ''
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll; 