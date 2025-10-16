"use client";

import Link from "next/link";
import Image from "next/image";

import { useCart } from "@/store/cart";

export const Header = () => {
  const items = useCart((s) => s.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="bg-surface bg-white text-text p-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
      <Link href="/" aria-label="Home">
        <h1 className="text-2xl font-extrabold">Next.Shop.Lite</h1>
      </Link>

      <Link href="/cart" aria-label={`Cart with ${totalItems} items`}>
        <div className="relative">
          <Image
            src="/cart.svg"
            alt="Cart"
            width={32}
            height={32}
          />

          {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 bg-neutral-600 text-white font-bold rounded-full px-3 py-1 text-sm shadow-md">
              {totalItems}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
};
