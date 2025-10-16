"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product"; 
import { useCart } from "@/store/cart";

import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";

export const ProductCard = (product: Product) => {
  const { id, title, price, thumbnail, rating, description } = product;
  const dispatch = useCart((s) => s.dispatch);

  const handleAddToCart = () => {
    const { id, title, price, thumbnail } = product;
    dispatch({ type: "ADD", payload: { id, title, price, thumbnail } });
  };

  return (
    <Card className="flex flex-col h-full p-2 gap-2">
      <aside className="relative rounded overflow-hidden">
        <Image src={thumbnail} alt={title} width={300} height={300} />
      </aside>

      <header className="flex flex-col gap-1">
        <h2 className="font-semibold text-base max-w-md">{title}</h2>
        <p className="text-sm text-gray-400">⭐ {rating}</p>
      </header>

      {description && (
        <p className="text-sm text-gray-500 max-w-md">{description}</p>
      )}

      <aside className="flex justify-end mt-1">
        <span className="bg-accent text-background text-sm font-semibold px-2 py-1 rounded">
          ${price}
        </span>
      </aside>

      <footer className="mt-auto flex flex-col gap-2">
        <Link href={`/products/${id}`} passHref>
          <Button className="w-full text-sm">View Details</Button>
        </Link>
        <Button className="w-full text-sm" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </footer>
    </Card>
  );
};
