import React from 'react';

interface WarningIconProps {
  className?: string;
}
export const WarningIcon: React.FC<WarningIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4.25V9.76772M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9ZM9 13.3277C8.72386 13.3277 8.5 13.1039 8.5 12.8277C8.5 12.5516 8.72386 12.3277 9 12.3277C9.27614 12.3277 9.5 12.5516 9.5 12.8277C9.5 13.1039 9.27614 13.3277 9 13.3277Z"
        stroke="#9C9CAA"
        stroke-linecap="round"
      />
    </svg>
  );
};
