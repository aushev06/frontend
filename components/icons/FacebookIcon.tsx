import React from 'react';

interface FacebookIconProps {
  className?: string;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({ className }) => {
  return (
    <svg className={className} width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.95921 6.29691V4.64105C5.95921 4.39248 5.97065 4.19994 5.99389 4.06393C6.01704 3.92771 6.06973 3.79375 6.1515 3.66149C6.23315 3.52932 6.36536 3.43808 6.54793 3.38751C6.73075 3.33687 6.97369 3.31163 7.277 3.31163H8.93277V0H6.28572C4.75407 0 3.65402 0.363388 2.9854 1.09017C2.31687 1.81711 1.98265 2.88787 1.98265 4.30287V6.29687H0V9.60874H1.98252V19.2175H5.95917V9.60878H8.60606L8.95593 6.29691H5.95921Z"
        fill="#9C9CAA"
      />
    </svg>
  );
};
