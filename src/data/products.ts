export type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
  };
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'StepZone Air Max Phantom',
      category: 'Casual',
      price: 899.90,
      description: 'Design futurista com amortecimento premium para o dia a dia.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      name: 'StepZone Zoom Elite',
      category: 'Running',
      price: 1299.00,
      description: 'Performance de alto nível para corredores exigentes. Leveza e propulsão.',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      name: 'StepZone Dunk Retro',
      category: 'Streetwear',
      price: 749.50,
      description: 'O clássico das ruas reinventado com materiais de luxo.',
      image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800'
    }
  ];