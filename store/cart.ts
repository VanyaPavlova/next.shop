import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartState, CartAction, CartItem } from "@/types/cart";

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      dispatch: (action: CartAction) => {
        const { items } = get();
        let newItems: CartItem[] = [...items];

        switch (action.type) {
          case "ADD": {
            const exists = newItems.find((i) => i.id === action.payload.id);
            if (exists) {
              newItems = newItems.map((i) =>
                i.id === action.payload.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              );
            } else {
              newItems.push({ ...action.payload, quantity: 1 });
            }
            break;
          }

          case "REMOVE":
            newItems = newItems.filter((i) => i.id !== action.payload);
            break;

          case "CLEAR":
            newItems = [];
            break;
        }

        const totalItems = newItems.reduce((sum, i) => sum + i.quantity, 0);
        const totalPrice = newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );

        set({ items: newItems, totalItems, totalPrice });
      },
    }),
    { name: "cart-storage" }
  )
);
