'use client';

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function CartButton() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link 
      href="/cart" 
      className="fixed bottom-4 right-1/8 -translate-x-1/2 z-50 inline-flex items-center justify-center gap-2 bg-white text-sentimental px-4 py-3 rounded font-bold text-base hover:bg-gray-100 transition-colors"
    >
      <span className="text-2xl">🛒</span>
      Cart
      {itemCount > 0 && (
        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
