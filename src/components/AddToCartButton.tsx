'use client'
import { useCart } from '@/hooks/useCart';
import { Product } from '@/data/products';
import toast from 'react-hot-toast';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(product);
    toast.success(`${product.name} no carrinho!`);
  };

  return (
    <button 
      onClick={handleBuy}
      className="w-full md:w-auto px-12 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wide hover:bg-emerald-400 transition-all rounded-full"
    >
      Adicionar ao Carrinho
    </button>
  );
}