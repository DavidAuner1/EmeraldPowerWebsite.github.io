
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col items-center">
        {/* Company Name - Green */}
        <div className="text-emerald-green font-bold tracking-wider text-lg leading-tight">
          EMERALD POWER
        </div>
        
        {/* Tagline - Blue with quotes */}
        <div className="emerald-blue text-xs italic -mt-1">
          "Clean Power for a Greener Tomorrow"
        </div>
        
        {/* Globe/Earth Icon - More realistic Earth */}
        <div className="mt-1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="drop-shadow-sm"
          >
            {/* Earth/Globe - Blue oceans */}
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="url(#earthGradient)"
              stroke="#1e40af"
              strokeWidth="1"
            />
            
            {/* North America */}
            <path
              d="M6 12 Q8 10, 12 11 Q15 9, 18 12 Q20 14, 22 11 Q24 9, 26 12 L26 18 Q24 20, 20 19 Q16 17, 12 19 Q8 20, 6 18 Z"
              fill="#10b981"
              opacity="0.9"
            />
            
            {/* Europe/Africa */}
            <path
              d="M28 8 Q30 6, 34 8 Q36 10, 35 14 Q34 18, 32 22 Q30 26, 28 24 Q26 20, 28 16 Q30 12, 28 8 Z"
              fill="#059669"
              opacity="0.8"
            />
            
            {/* Asia */}
            <path
              d="M32 6 Q35 4, 38 7 Q39 10, 37 13 Q35 15, 32 13 Q30 10, 32 6 Z"
              fill="#047857"
              opacity="0.7"
            />
            
            {/* South America */}
            <path
              d="M14 24 Q16 22, 20 25 Q22 28, 20 32 Q18 34, 16 32 Q14 28, 14 24 Z"
              fill="#065f46"
              opacity="0.8"
            />
            
            {/* Antarctica */}
            <path
              d="M8 32 Q12 30, 16 32 Q20 34, 24 32 Q28 30, 32 32 Q28 36, 24 35 Q20 36, 16 35 Q12 36, 8 32 Z"
              fill="#ecfdf5"
              opacity="0.6"
            />
            
            <defs>
              <radialGradient id="earthGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="70%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
