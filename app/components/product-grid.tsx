import { Product } from '@/types/product';
import ProductCard from './product-card';

interface ProductGridProps {
  products: Product[] | null;
}

export default function ProductGrid({ products }: ProductGridProps) {
  
  if (!products) {
    return null;
  }

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full max-w-5xl">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
);

}