import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ProductDetail from '../../components/product-detail';
import BackButton from '../../components/back-button';

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
    <main className="flex flex-col items-center min-h-screen p-6 sm:p-12 bg-sentimental text-white">
      <div className="w-full max-w-5xl mb-8">
        <BackButton />
      </div>
      <ProductDetail product={product} />
    </main>
  );
}