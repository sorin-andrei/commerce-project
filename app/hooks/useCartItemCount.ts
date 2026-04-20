'use client';

import { useCart } from '@/app/context/CartContext';

export function useCartItemCount(): number {
  const { items } = useCart();
  return items.reduce((total, item) => total + item.quantity, 0);
}
