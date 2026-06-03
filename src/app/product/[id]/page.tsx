import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { Metadata } from 'next';


type Props = {
  params: Promise<{ id: string }>;
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);
  
  if (!product) return { title: 'Produto não encontrado | StepZone' };
  
  return {
    title: `${product.name} | StepZone`,
    description: product.description,
  };
}


export default async function ProductDetail({ params }: Props) {

  
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-white text-2xl font-bold">Produto não encontrado.</h1>
        <Link href="/" className="text-emerald-500 hover:text-emerald-400 transition-colors">
          &larr; Voltar para a vitrine
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority 
            
          />
        </div>
        <div className="space-y-6">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">{product.category}</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{product.name}</h1>
          <p className="text-3xl font-light text-zinc-300">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg">{product.description}</p>
          
         
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}