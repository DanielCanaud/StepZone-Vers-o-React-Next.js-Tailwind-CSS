'use client'
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';

// 1. Definição do Schema de Validação (Regras)
const checkoutSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 letras.'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  paymentMethod: z.enum(['pix', 'credit', 'debit']),
});

type CheckoutData = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const { cartTotal, clearCart } = useCart();
  const router = useRouter();

  // 2. Integração do Hook Form com o Zod
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CheckoutData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { paymentMethod: 'pix' }
  });

  const paymentMethod = watch('paymentMethod');

  // 3. Função disparada apenas se a validação passar
  const onSubmit = (data: CheckoutData) => {
    toast.success('Processando pagamento...');
    setTimeout(() => {
      clearCart();
      router.push('/success');
    }, 1500); // Simulando o tempo de uma API de pagamento
  };

  return (
    <main className="min-h-screen bg-zinc-950 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-black text-white mb-8 uppercase tracking-tight">Finalizar Pedido</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Seus Dados</h2>
              <div className="grid gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nome Completo" 
                    {...register('name')}
                    className={`w-full bg-zinc-950 text-white border rounded-lg px-4 py-3 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-emerald-500'}`} 
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="E-mail" 
                    {...register('email')}
                    className={`w-full bg-zinc-950 text-white border rounded-lg px-4 py-3 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-emerald-500'}`} 
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Método de Pagamento</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'pix' ? 'border-emerald-500 bg-emerald-500/10' : 'border-zinc-800 bg-zinc-950'}`}>
                  <input type="radio" value="pix" {...register('paymentMethod')} className="hidden" />
                  <span className="text-white font-medium">PIX</span>
                  <span className="text-xs text-emerald-500">Imediato</span>
                </label>
                
                <label className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'credit' ? 'border-emerald-500 bg-emerald-500/10' : 'border-zinc-800 bg-zinc-950'}`}>
                  <input type="radio" value="credit" {...register('paymentMethod')} className="hidden" />
                  <span className="text-white font-medium">Crédito</span>
                  <span className="text-xs text-zinc-500">Até 12x</span>
                </label>

                <label className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'debit' ? 'border-emerald-500 bg-emerald-500/10' : 'border-zinc-800 bg-zinc-950'}`}>
                  <input type="radio" value="debit" {...register('paymentMethod')} className="hidden" />
                  <span className="text-white font-medium">Débito</span>
                  <span className="text-xs text-zinc-500">Visa/Master</span>
                </label>
              </div>
            </section>
          </div>

          <div className="md:col-span-1 h-fit bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-6">Resumo</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-zinc-400">
                <span>Total</span>
                <span className="text-xl font-black text-emerald-500">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal)}
                </span>
              </div>
            </div>
            
            <button type="submit" className="w-full py-4 bg-white text-zinc-950 font-bold uppercase tracking-wide rounded-full hover:bg-emerald-400 transition-colors mb-4">
              Pagar Agora
            </button>
            <Link href="/cart" className="block text-center text-sm text-zinc-400 hover:text-white transition-colors">
              Revisar Carrinho
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}