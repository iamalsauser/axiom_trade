import React, { useState } from 'react';

interface TokenLogoProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  fallbackSrc?: string;
}

export const TokenLogo: React.FC<TokenLogoProps> = ({ 
  src, 
  alt, 
  size = 32, 
  className = '',
  fallbackSrc = '/images/placeholder-logo.png'
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <div 
      className={`flex-shrink-0 rounded-full bg-gray-100 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover"
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};
