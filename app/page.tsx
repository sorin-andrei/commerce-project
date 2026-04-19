import { supabase } from '@/lib/supabase';
import ProductGrid from './components/product-grid';

export default async function Home() {
  const { data: product, error } = await supabase
    .from('product')
    .select('*');
    
  if (error) console.error("Database error:", error.message);

return (
  <main className="flex min-h-screen flex-col items-center p-12 bg-sentimental text-white">
    <header className="max-w-5xl mb-16 pb-8">
      <h1 className="text-large-comic">Aprozar Sentimental</h1>
    </header>

   <ProductGrid products={product} />

    {/* Empty State Logic */}

    {product?.length === 0 && 
    (
      <div className="flex flex-col items-center mt-20 text-white">
        <p className="text-sm font-comic tracking-widest uppercase">Such empty stock :O</p>
      </div>
    )
    }
  </main>
);
}