import { supabase } from '@/lib/supabase';
import { Database, Constants } from '@/types/supabase';
import ProductGrid from './components/product-grid';
import FilterBar from './components/filter-bar';
import Link from 'next/link';

type MediumFilter = Database['public']['Enums']['medium'];
const VALID_MEDIUMS = Constants.public.Enums.medium;

interface SearchParams {
  medium?: string;
}

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { medium } = await searchParams;
  const activeFilter = VALID_MEDIUMS.includes(medium as MediumFilter) ? (medium as MediumFilter) : null;

  let query = supabase.from('product').select('*');
  if (activeFilter) {
    query = query.eq('medium', activeFilter);
  }

  const { data: products, error } = await query;

  if (error) console.error("Database error:", error.message);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-sentimental text-white">
      <header className="max-w-5xl mb-16 pb-8">
        <h1 className="text-large-comic">Aprozar Sentimental</h1>
      </header>

      <nav className="flex gap-4 mb-16">
        <Link href="/about" className="px-8 py-3 rounded text-base-comic bg-white text-black hover:bg-gray-200 transition-colors">Despre</Link>
        <Link href="/artists" className="px-8 py-3 rounded text-base-comic bg-white text-black hover:bg-gray-200 transition-colors">Artiști</Link>
      </nav>

      <FilterBar activeFilter={activeFilter} />

      <ProductGrid products={products} />

      {products?.length === 0 && (
        <div className="flex flex-col items-center mt-20 text-white">
          <p className="text-base-comic uppercase">Such empty stock :O</p>
        </div>
      )}
    </main>
  );
}
