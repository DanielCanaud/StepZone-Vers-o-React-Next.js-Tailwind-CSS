'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';

import { getStorageItem, setStorageItem } from '@/lib/storage';
import { Product } from '@/data/products';

type CartItem = Product & {
  quantity: number;
};

interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      return getStorageItem<CartItem[]>('@StepZone:cart') ?? [];
    } catch (error) {
      console.error('Erro ao recuperar o carrinho do storage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      setStorageItem('@StepZone:cart', cart);
    } catch (error) {
      console.error('Erro ao salvar o carrinho no storage:', error);
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const updateQuantity = (
    id: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartSubtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const cartDiscount = useMemo(() => {
    return cartSubtotal > 1000
      ? cartSubtotal * 0.1
      : 0;
  }, [cartSubtotal]);

  const cartTotal = useMemo(() => {
    return cartSubtotal - cartDiscount;
  }, [cartSubtotal, cartDiscount]);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartSubtotal,
      cartDiscount,
      cartTotal,
    }),
    [
      cart,
      cartSubtotal,
      cartDiscount,
      cartTotal,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}