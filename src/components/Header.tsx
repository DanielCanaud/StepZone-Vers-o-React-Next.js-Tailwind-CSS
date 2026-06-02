'use client'
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase">
          StepZone
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/cart" className="relative text-zinc-300 hover:text-white transition-colors" aria-label="Acessar carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs text-zinc-950 font-bold h-5 w-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}