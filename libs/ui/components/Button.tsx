import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const base = 'rounded px-4 py-2 font-semibold focus:outline-none';
  const variants = {
    primary: 'bg-[#2E8B57] text-white hover:bg-[#276947]',
    secondary: 'bg-[#FFD700] text-[#2E8B57] hover:bg-[#FFC300]',
  };
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 