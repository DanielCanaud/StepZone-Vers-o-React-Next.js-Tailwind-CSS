# StepZone

Uma aplicação web moderna de E-commerce Desenvolvida com  **Next.js, React, TypeScript e Tailwind CSS**, focada na exibição e filtragem de produtos de marca fictícia Stepzone. objetivo era trabalhar a interação entre produto e carrinho, aplicando descontos automatico em determinados valores.



![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)


---

## Funcionalidades principais

- **Home (Vitrine)** — Hero section com CTA de alta conversão, busca em tempo real e filtros dinâmicos por categoria.
- **Página de Produto Dinâmica** — Detalhes completos do tênis com SEO dinâmico, imagens otimizadas e botão de adição ao carrinho com feedback visual (Toast).
- **Gerenciamento de Carrinho** — Estado global utilizando React Context API, sincronização segura com `localStorage`, controle de quantidade, cálculo de subtotais e regras de desconto.
- **Checkout Simulado** — Formulário de finalização com validação robusta usando Zod e React Hook Form, suporte a simulação de Pix, Cartão e Débito.
- **Design Responsivo** — Abordagem Mobile-First, garantindo fluidez e layouts consistentes desde smartphones até monitores ultra-wide.
- **Acessibilidade e SEO** — Conformidade com HTML semântico, metadados dinâmicos gerados no lado do servidor e tags amigáveis para indexação.
- **Performance** — Separação estratégica entre Server Components e Client Components, Next/Image para *lazy loading* e processamento de parâmetros assíncronos.

---

## Como rodar

## Pré-requisitos

-Node.js 20.0 ou superior
-Npm ou  yarn

### instalação

```bash
# clone o repositório
git clone https://github.com/DanielCanaudtepZone-Vers-o-React-Next.js-Tailwind-CSS
cd stepzone

# Instale as dependências
npm install
# ou
yarn install
```

### Desenvolvimento

``` Bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

acesse `http://localhost:3000` no navegador.

### Build para produção

```bash
# Crie o build otimizado
npm run build

# Inicie o servidor de produção
npm run start
```

### linting

``` bash
#verifique  a qualidae do código
npm  run lint
```

---

## Consumo de API

### Imagens via Unsplash

As imagens dos artigos são obtidas diretamente  do **Unsplash** através de URLs públicas, sem necessidade de autenticação ou chave de API.




## Estrutura do Projeto

```
            Estrutura do Projeto
stepzone/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── AddToCartButton.tsx
│   │   ├── Header.tsx
│   │   └── ProductCard.tsx
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   ├── hooks/
│   │   └── useCart.tsx
│   │
│   └── lib/
│       └── storage.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

---



## Stack
- **Next.js 16.2.6** - Framework React com roteamento SSR e otimização
- **React 19.2.4** - Biblioteca UI par componentes interativos
- **TypeScript** - JavaScript com tipagem estática
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5 semântico** - Estrutura acessível
- **ES6+** - Classes, arrow function, template literals, promisies 

### Dependências  Principais

```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "^4",
  "typescript": "^5",
  "clsx": "^2.1.1"
}
```

---

## Componentes Principais

### Navegação
- Barra de navegação responsiva
- Menu Hamburguer para mobilie
- Links de navegação com scroll suave

### Exibição de notícias
- **Hero Section** — Artigos em destaque com imagens grandes
- **News Grid** — Grid responsivo de artigos
- **News Cards** — Cards individuais com metadados
- **Category Bar** — Filtro por categoria

### Elementos UI
- Loading skeletons para melhor UX
- Badges de categoria
- Botão scroll to top
- Tipografia e espaçamento profissionais

---

## Otimizações

### Performance
- Server-Side Rendering (SSR)
- Static Generation
- Otimização de imagens
- Code splitting automático
- Cache headers otimizados

### SEO
- Sitemap dinâmico
- Meta tags estruturadas
- Robots.txt customizável
- Schema markup support
- Next.js Image otimizado

### Acessibilidade
- Estrutura HTML semântica
- ARIA labels e atributos
- Suporte a navegação por teclado
- Contraste de cores em conformidade
- Focus indicators em elementos interativos

---
Autor

Daniel Canaud

GitHub: https://github.com/DanielCanaud

Licença:
Este projeto está disponível para uso educacional e desenvolvimento de portfólio.


