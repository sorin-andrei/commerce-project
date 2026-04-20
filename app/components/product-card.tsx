import Link from 'next/link';
import { Product } from '@/types/product';
import ProductImage from './product-image';
import { formatPriceInLei } from '@/lib/format-price';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug_url || product.id}`}>
      <div className="group cursor-pointer">
        <ProductImage />

        <div className="flex justify-between items-start pt-4">
          <div>
            <h2 className="text-base-comic">{product.name}</h2>
          </div>
          <p className="text-base-comic">{formatPriceInLei(product.price)}</p>
        </div>

        <div className="mt-1">
          <p className="text-base-comic">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}
