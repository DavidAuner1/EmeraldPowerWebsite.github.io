
import React from 'react';
import globeImage from "@assets/Screen Shot 2025-06-10 at 8.05.29 PM_1749611176851.png";

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
        <div className="emerald-green font-bold tracking-wider text-lg leading-tight">
          EMERALD POWER
        </div>
        
        {/* Tagline - Blue with quotes */}
        <div className="emerald-blue text-x italic -mt-1">
          "Clean Power for a Greener Tomorrow"
        </div>
        
        {/* Globe/Earth Icon - PNG Image */}
        <div className="mt-0">
          <img 
            src={globeImage}
            alt="Earth Globe"
            width="40"
            height="40"
            className="drop-shadow-sm block object-contain"
          />
        </div>
      </div>
    </div>
  );
}
