'use client';

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({ quantity, maxQuantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity === 1}
        className="bg-gray-400 px-2 sm:px-3 py-1 rounded hover:bg-gray-500 text-base-comic disabled:opacity-50 disabled:cursor-not-allowed"
      >
        −
      </button>
      <span className="w-6 sm:w-8 text-center text-black text-base-comic">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        disabled={quantity === maxQuantity}
        className="bg-gray-400 px-2 sm:px-3 py-1 rounded hover:bg-gray-500 text-base-comic disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
}
