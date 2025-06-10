
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
        {/* Company Name */}
        <div className="text-emerald-green font-bold tracking-wider text-lg leading-tight">
          EMERALD POWER
        </div>
        
        {/* Tagline */}
        <div className="text-emerald-green text-xs italic -mt-1">
          "Clean Power for a Greener Tomorrow"
        </div>
        
        {/* Globe/Earth Icon */}
        <div className="mt-1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="drop-shadow-sm"
          >
            {/* Earth/Globe */}
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="url(#earthGradient)"
              stroke="#1e40af"
              strokeWidth="1"
            />
            
            {/* Continents - simplified green shapes */}
            <path
              d="M8 15 Q12 12, 16 15 Q20 18, 24 15 Q28 12, 32 15 L32 25 Q28 28, 24 25 Q20 22, 16 25 Q12 28, 8 25 Z"
              fill="#10b981"
              opacity="0.8"
            />
            
            <path
              d="M10 8 Q15 6, 20 8 Q25 10, 30 8 L28 12 Q20 14, 12 12 Z"
              fill="#059669"
              opacity="0.7"
            />
            
            <defs>
              <radialGradient id="earthGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
