'use client'
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartSubtotal, cartDiscount, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Seu carrinho está vazio.</h2>
        <Link href="/" className="px-8 py-3 bg-white text-zinc-950 font-bold uppercase rounded-full hover:bg-emerald-400 transition-colors">
          Explorar Produtos
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-black text-white mb-8 uppercase">Carrinho</h1>
        
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <img src={item.image} alt={item.name} className="w-full sm:w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-zinc-400">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
              </div>
              <div className="flex items-center gap-4">
                <button aria-label="Diminuir quantidade" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-white bg-zinc-800 w-8 h-8 rounded-full hover:bg-zinc-700 transition-colors">-</button>
                <span className="text-white font-medium w-4 text-center">{item.quantity}</span>
                <button aria-label="Aumentar quantidade" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-white bg-zinc-800 w-8 h-8 rounded-full hover:bg-zinc-700 transition-colors">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm font-medium hover:text-red-400 mt-4 sm:mt-0">
                Remover
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-zinc-900 rounded-xl border border-zinc-800 space-y-4">
          <div className="flex justify-between items-center text-zinc-400">
            <span>Subtotal</span>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartSubtotal)}</span>
          </div>
          
          {cartDiscount > 0 && (
            <div className="flex justify-between items-center text-emerald-500 font-medium">
              <span>Desconto StepZone (10%)</span>
              <span>- {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartDiscount)}</span>
            </div>
          )}
          
          <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
            <span className="text-xl text-white font-medium">Total</span>
            <span className="text-3xl font-black text-white">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal)}
            </span>
          </div>
          
          <Link href="/checkout" className="block w-full py-4 text-center bg-emerald-500 text-zinc-950 font-bold uppercase rounded-full hover:bg-emerald-400 transition-colors mt-6">
            Avançar para Pagamento
          </Link>
        </div>
      </div>
    </main>
  );
}