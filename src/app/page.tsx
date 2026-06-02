import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'StepZone | Lançamentos Exclusivos',
  description: 'Compre os melhores tênis de alta performance e streetwear.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-12 pb-24">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tight">
          Trending Now
        </h1>
        <p className="text-zinc-400 mb-12 text-lg">Os modelos mais cobiçados do momento.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}