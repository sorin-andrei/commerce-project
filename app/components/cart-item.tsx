'use client';

import { CartItem as CartItemType } from '@/app/context/CartContext';
import { formatPriceInLei } from '@/lib/format-price';
import QuantitySelector from './quantity-selector';

interface CartItemRowProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export default function CartItemRow({ item, onRemove, onUpdateQuantity }: CartItemRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white bg-opacity-10 p-4 sm:p-6 rounded gap-4">
      <div className="flex-1 min-w-0">
        <h2 className="text-base-comic text-black font-bold break-words">{item.name}</h2>
        <p className="text-base-comic text-black mt-2">{formatPriceInLei(item.price)}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <QuantitySelector
          quantity={item.quantity}
          maxQuantity={item.stock}
          onIncrease={() => onUpdateQuantity(item.quantity + 1)}
          onDecrease={() => onUpdateQuantity(item.quantity - 1)}
        />

        <p className="text-base-comic font-bold sm:w-24 sm:text-right">
          {formatPriceInLei(item.price * item.quantity)}
        </p>

        <button
          onClick={onRemove}
          className="bg-red-500 px-3 sm:px-4 py-1 rounded text-base-comic hover:bg-red-600 w-full sm:w-auto"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
