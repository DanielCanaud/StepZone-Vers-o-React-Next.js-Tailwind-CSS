'use client'
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) return <div className="p-20 text-center text-white">Produto não encontrado.</div>;

  const handleBuy = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-zinc-950 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div className="space-y-6">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">{product.category}</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{product.name}</h1>
          <p className="text-3xl font-light text-zinc-300">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg">{product.description}</p>
          
          <button 
            onClick={handleBuy}
            className="w-full md:w-auto px-12 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wide hover:bg-emerald-400 hover:text-zinc-900 transition-all rounded-full"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </main>
  );
}