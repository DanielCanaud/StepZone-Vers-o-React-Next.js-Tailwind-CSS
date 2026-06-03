import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col gap-4 w-full">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
        <Image 
          src={product.image} 
          alt={`Imagem do tênis ${product.name}`} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-emerald-500">{product.category}</p>
        <h3 className="text-lg font-semibold text-zinc-100 leading-tight">{product.name}</h3>
        <p className="text-zinc-400 font-medium">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
        </p>
      </div>
    </Link>
  );
}