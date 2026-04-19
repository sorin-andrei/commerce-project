'use client';

import { useRouter } from 'next/navigation';

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
    const router = useRouter();
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-sentimental text-white">
        <h1 className="text-base-comic sm:text-large-comic mb-6 sm:mb-8 text-center">Your Cart</h1>
        <p className="text-sm sm:text-base-comic mb-6 sm:mb-8 text-center">Your cart is empty</p>
        <Link href="/" className="text-sm sm:text-base-comic text-blue-300 hover:underline">
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 bg-sentimental text-white">

      <div className="w-full max-w-5xl">
         <button 
        onClick={() => router.back()} 
        className="text-large-comic block mb-8 hover:underline">
        Înapoi
      </button>



        <div className="mt-8 space-y-4 sm:space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white bg-opacity-10 p-4 sm:p-6 rounded gap-4"
            >
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base-comic text-black font-bold break-words">{item.name}</h2>
                <p className="text-xs sm:text-base-comic text-black mt-2">
                  {(item.price / 100).toFixed(2)} RON
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="bg-gray-400 px-2 sm:px-3 py-1 rounded hover:bg-gray-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <span className="w-6 sm:w-8 text-center text-black text-xs sm:text-base-comic">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity === item.stock}
                    className="bg-gray-400 px-2 sm:px-3 py-1 rounded hover:bg-gray-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>

                <p className="text-xs sm:text-base-comic font-bold sm:w-24 sm:text-right">
                  {((item.price * item.quantity) / 100).toFixed(2)} RON
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 px-3 sm:px-4 py-1 rounded text-xs sm:text-base-comic hover:bg-red-600 w-full sm:w-auto"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
            <p className="text-lg sm:text-2xl font-bold text-base-comic">Total:</p>
            <p className="text-lg sm:text-2xl font-bold text-base-comic">
              {(total / 100).toFixed(2)} RON
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={clearCart}
              className="flex-1 bg-white text-black px-4 sm:px-8 py-2 sm:py-3 rounded font-comic text-xs sm:text-sm tracking-widest hover:bg-gray-200"
            >
              Golire cos
            </button>
            <button className="flex-1 bg-green-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded font-comic text-xs sm:text-sm tracking-widest hover:bg-green-600">
              Comanda
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
