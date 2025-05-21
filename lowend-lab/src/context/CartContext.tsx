import { createContext } from "react";
import type { Product } from "../data/products";

export type CartItem = Product & { quantity: number };

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, delta: number) => void;
  totalItems: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
