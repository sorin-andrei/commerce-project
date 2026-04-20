'use client';

import Link from 'next/link';
import { useCartItemCount } from '@/app/hooks/useCartItemCount';

export default function Header() {
  const itemCount = useCartItemCount();

  return (
    <header className="bg-sentimental text-white border-b border-white border-opacity-20">
      <div className="max-w-5xl mx-auto px-12 py-2 flex justify-between items-center">
        <Link href="/" className="text-sm text-base-comic hover:opacity-80">
          Sentimental Store
        </Link>
        <Link 
          href="/cart" 
          className="relative text-xs hover:opacity-80 flex items-center gap-1"
        >
          🛒 Cart
          {itemCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
