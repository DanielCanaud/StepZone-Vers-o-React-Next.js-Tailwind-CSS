'use client'
import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');


  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-zinc-950 pb-24">
      

      <section className="container mx-auto px-4 pt-12">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tight">
          Trending Now
        </h1>
        <p className="text-zinc-400 mb-8 text-lg">Os modelos mais cobiçados do momento.</p>


        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/3 bg-zinc-900 text-white border border-zinc-800 rounded-full px-6 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
            aria-label="Buscar produtos"
          />
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category 
                    ? 'bg-emerald-500 text-zinc-950' 
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500">
            Nenhum produto encontrado para sua busca.
          </div>
        )}
      </section>


      <section className="container mx-auto px-4 mt-32">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Desbloqueie o <span className="text-emerald-500">StepZone+</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Junte-se ao nosso clube exclusivo. Frete grátis em todas as compras, acesso antecipado a lançamentos limitados e descontos especiais.
            </p>
            <ul className="text-zinc-300 space-y-2 mb-8 md:mb-0">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-emerald-500">✔</span> Frete Expresso Grátis
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-emerald-500">✔</span> Acesso VIP a Drops
              </li>
            </ul>
          </div>
          <button className="px-10 py-5 bg-white text-zinc-950 font-bold uppercase tracking-wide rounded-full hover:bg-emerald-400 hover:scale-105 transition-all w-full md:w-auto">
            Assinar Agora
          </button>
        </div>
      </section>

    </main>
  );
}