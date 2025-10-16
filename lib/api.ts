import axios from "axios";

import { Product } from "@/types/product";
import { ApiProduct, FetchProductsResponse } from "@/types/api";


export const api = axios.create({ baseURL: "https://dummyjson.com" });

export type FetchProductByIdResponse = ApiProduct;

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<FetchProductsResponse>("/products");

  const products: Product[] = response.data.products.map((p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    thumbnail: p.thumbnail,
    rating: p.rating,
    description: p.description,
    discountPercentage: p.discountPercentage,
  }));

  return products;
};


export const fetchProductById = async (id: number | string): Promise<Product> => {
  const response = await api.get<FetchProductByIdResponse>(`/products/${id}`);
  const p = response.data;

  if (!p) throw new Error(`Product with id ${id} not found`);

  const product: Product = {
    id: p.id,
    title: p.title,
    price: p.price,
    thumbnail: p.thumbnail,
    rating: p.rating,
    description: p.description,
    discountPercentage: p.discountPercentage,
  };

  return product;
};
