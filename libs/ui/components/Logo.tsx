import React from 'react';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, color = '#2E8B57' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="20" rx="18" ry="12" fill={color} />
    <circle cx="14" cy="20" r="3" fill="#FFD700" />
    <circle cx="20" cy="20" r="3" fill="#FFD700" />
    <circle cx="26" cy="20" r="3" fill="#FFD700" />
  </svg>
);

export default Logo; 