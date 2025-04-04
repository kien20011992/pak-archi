import React from 'react';

interface ScrollArrowProps {
  onClick: () => void;
  className?: string;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-1 text-white hover:text-red-500 transition-colors ${className}`}
      aria-label="Scroll down"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        <path 
          d="M7 10L12 15L17 10" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollArrow;
