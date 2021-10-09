import React from 'react';

export interface Icon {
  className?: string;
}

export const CommentIcon: React.FC<Icon> = ({ className }) => (
  <svg className={className} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.600098 1.89999C0.600098 1.34771 1.04781 0.899994 1.6001 0.899994H12.4001C12.9524 0.899994 13.4001 1.34771 13.4001 1.89999V7.73999C13.4001 8.29228 12.9524 8.73999 12.4001 8.73999H10.9386V12.1L6.01548 8.73999H1.6001C1.04781 8.73999 0.600098 8.29228 0.600098 7.73999V1.89999Z"
      stroke="#9C9CAA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
