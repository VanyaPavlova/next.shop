import { Product } from "@/types/product";

export type CartItem = Pick<Product, "id" | "title" | "price" | "thumbnail"> & {
  quantity: number;
};

export type CartAction =
  | { type: "ADD"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; payload: number } 
  | { type: "CLEAR" };

export type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  dispatch: (action: CartAction) => void;
};
