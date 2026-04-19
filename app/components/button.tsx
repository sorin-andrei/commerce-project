import { Product } from '@/types/product';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded font-comic text-sm tracking-widest transition-colors';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-gray-400 text-black hover:bg-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
