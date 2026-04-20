'use client';

import { Product } from '@/types/product';
import ProductImage from './product-image';
import Button from './button';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';
import { formatPriceInLei } from '@/lib/format-price';
import QuantitySelector from './quantity-selector';

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
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const currentInCart = items.find(item => item.id === product.id)?.quantity || 0;
  const remainingStock = product.stock - currentInCart;
  const isCartAtMaxQuantity = remainingStock <= 0;

  const handleAddToCart = () => {
    if (isCartAtMaxQuantity) return;

    addItem(product, selectedQuantity);
    setSelectedQuantity(1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), ADDED_TO_CART_FEEDBACK_DURATION_MS);
  };
  const productHeader = (
    <>
      <h1 className="text-large-comic mb-4">{product.name}</h1>
      {product.artist?.name && (
        <p className="text-base-comic mb-6">
          <span className="font-bold">{product.artist.name}</span>
        </p>
      )}
      <p className="text-base-comic mb-8 leading-relaxed">{product.description}</p>
    </>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full max-w-5xl">

      {/* Mobile only: name, artist, description above the image */}
      <div className="sm:hidden">{productHeader}</div>

      <div className="w-full sm:w-2/5 sm:flex-shrink-0">
        <ProductImage />
      </div>

      <div className="sm:flex-1 sm:flex sm:flex-col">
        {/* Desktop only: name, artist, description in the right column */}
        <div className="hidden sm:block">{productHeader}</div>

        <p className="text-base-comic">Stoc: {product.stock}</p>

        <div className="mt-8 sm:mt-auto">
          <p className="text-2xl font-bold text-base-comic mb-6">
            {formatPriceInLei(product.price)}
          </p>

          {product.stock > 1 && !isCartAtMaxQuantity && (
            <div className="mb-6">
              <QuantitySelector
                quantity={selectedQuantity}
                maxQuantity={remainingStock}
                onIncrease={() => setSelectedQuantity(q => Math.min(q + 1, remainingStock))}
                onDecrease={() => setSelectedQuantity(q => Math.max(q - 1, 1))}
              />
            </div>
          )}

          <Button
            onClick={handleAddToCart}
            className={isAdded ? 'bg-success text-white hover:bg-success-hover' : ''}
          >
            {isAdded ? 'Adăugat!' : 'Adaugă'}
          </Button>
        </div>
      </div>
    </div>
  );
}
