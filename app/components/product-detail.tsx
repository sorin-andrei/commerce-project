'use client';

import { Product } from '@/types/product';
import ProductImage from './product-image';
import Button from './button';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';
import { formatPriceInLei } from '@/lib/format-price';

const ADDED_TO_CART_FEEDBACK_DURATION_MS = 2000;

interface ProductDetailProps {
  product: Product & { 
    artist?: { name: string | null };
    stock: number;
    };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, items } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const currentInCart = items.find(item => item.id === product.id)?.quantity || 0;
  const isCartAtMaxQuantity = currentInCart >= product.stock;

  const handleAddToCart = () => {

    if (isCartAtMaxQuantity) return;

    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), ADDED_TO_CART_FEEDBACK_DURATION_MS);
  };
  return (
    <div className="flex gap-12 w-full max-w-5xl">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-2/5">
        <ProductImage />
      </div>

      {/* Right: Product Info */}
      <div className="flex-1 flex flex-col justify-start">
        <h1 className="text-large-comic mb-4">{product.name}</h1>

        {product.artist?.name && (
          <p className="text-base-comic mb-6">
            <span className="font-bold">{product.artist.name}</span>
          </p>
        )}

        <p className="text-base-comic mb-8 leading-relaxed">{product.description}</p>


        <p className="text-base-comic">Stoc: {product.stock}</p>

        <div className="mt-auto">
          <p className="text-2xl font-bold text-base-comic mb-6">
            {formatPriceInLei(product.price)}
          </p>
          <Button 
            onClick={handleAddToCart}
            className={isAdded ? 'bg-green-500 text-white hover:bg-green-600' : ''}
          >
            {isAdded ? 'Adăugat!' : 'Adaugă'}
          </Button>
        </div>
      </div>
    </div>
  );
}
