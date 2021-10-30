import React from 'react';

interface ShareIconProps {
  className?: string;
}

export const ShareIcon: React.FC<ShareIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 8.99458L11.5195 1V5.76971C6 6.5 1 10.4384 1 17C3.82589 13.9818 7 12 11.5195 12.2194V16.9892L19 8.99458Z"
        stroke="#9C9CAA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
