import Link from 'next/link';

export default function Success() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-2xl flex flex-col items-center">
        
        {/* Ícone de Sucesso Animado (usando SVG) */}
        <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
          Pedido Confirmado!
        </h1>
        
        <p className="text-zinc-400 mb-8 leading-relaxed">
          Sua compra foi processada com sucesso. Em breve você receberá um e-mail com os detalhes do envio do seu novo tênis.
        </p>

        <Link 
          href="/" 
          className="w-full block py-4 bg-white text-zinc-950 font-bold uppercase tracking-wide rounded-full hover:bg-emerald-400 transition-colors"
        >
          Voltar para o Início
        </Link>
      </div>
    </main>
  );
}