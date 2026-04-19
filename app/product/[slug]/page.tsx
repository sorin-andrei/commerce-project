import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ProductDetail from '../../components/product-detail';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: product } = await supabase
    .from('product')
    .select('*, artist(name)')
    .eq('slug_url', slug)
    .maybeSingle();

  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-12 bg-sentimental text-white">
      <div className="w-full max-w-5xl mb-8">
        <a href="/" className="text-large-comic">
          Înapoi
        </a>
      </div>
      <ProductDetail product={product} />
    </main>
  );
}