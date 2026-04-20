'use client';

import Link from 'next/link';
import { useCartItemCount } from '@/app/hooks/useCartItemCount';

export default function CartButton() {
  const itemCount = useCartItemCount();

  return (
    <Link
      href="/cart"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center bg-white text-sentimental w-14 h-14 rounded-full font-bold hover:bg-gray-100 transition-colors"
    >
      <span className="text-2xl">🛒</span>
      {/*Coșul meu*/}
      {itemCount > 0 && (
        <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
