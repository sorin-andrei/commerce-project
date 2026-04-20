'use client';

import { useCart } from '@/app/context/CartContext';
import { formatPriceInLei } from '@/lib/format-price';
import BackButton from '@/app/components/back-button';
import CartItemRow from '@/app/components/cart-item';
import Button from '@/app/components/button';
import Link from 'next/link';

const cartPageClassName = 'flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 bg-sentimental text-white';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <main className={`${cartPageClassName} justify-center`}>
        <h1 className="text-large-comic mb-6 sm:mb-8 text-center">Coșul tău</h1>
        <p className="text-base-comic mb-6 sm:mb-8 text-center">Coșul tău este gol</p>
        <Link href="/"><Button>Continuă cumpărăturile</Button></Link>
      </main>
    );
  }

  return (
    <main className={cartPageClassName}>
      <div className="w-full max-w-5xl">
        <div className="mb-8"><BackButton /></div>

        <div className="mt-8 space-y-4 sm:space-y-6">
          {items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onRemove={() => removeItem(item.id)}
              onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
            <p className="text-lg sm:text-2xl font-bold text-base-comic">Total:</p>
            <p className="text-lg sm:text-2xl font-bold text-base-comic">{formatPriceInLei(total)}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={clearCart}
              className="flex-1 bg-white text-black px-4 sm:px-8 py-2 sm:py-3 rounded text-base-comic hover:bg-gray-200"
            >
              Golire cos
            </button>
            <button className="flex-1 bg-green-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded text-base-comic hover:bg-green-600">
              Comanda
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
