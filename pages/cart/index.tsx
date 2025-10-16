"use client";

import Image from "next/image";

import { useCart } from "@/store/cart";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/common/Button";
import { BackTo } from "@/components/navigation/BackTo";

import { CartItem } from "@/types/cart";

export default function CartPage() {
  const { items, totalItems, totalPrice, dispatch } = useCart((s) => s);

  if (!items || items.length === 0) {
    return (
      <Layout>
        <main className="flex justify-center py-16 px-4 sm:px-6 lg:px-8">
          <article className="border border-neutral-200 rounded-lg shadow-lg p-6 max-w-md w-full text-center flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Your Cart is Empty</h1>
            <BackTo />
          </article>
        </main>
      </Layout>
    );
  }

  const handleRemove = (id: number) => dispatch({ type: "REMOVE", payload: id });
  const handleClear = () => dispatch({ type: "CLEAR" });

  return (
    <Layout>
      <main className="flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <article className="border border-neutral-200 rounded-lg shadow-lg max-w-4xl w-full flex flex-col gap-4 p-4 sm:p-6">
          <header className="flex justify-between items-center mb-2">
            <BackTo />
            <Button variant="outline" className="text-sm" onClick={handleClear}>
              Clear Cart
            </Button>
          </header>

          <section className="flex flex-col gap-2">
            {items.map((item: CartItem) => (
              <article
                key={item.id}
                className="grid grid-cols-[60px_1fr_auto] gap-2 items-center p-4 md:p-2 border border-neutral-200 rounded"
              >
                <aside className="relative w-16 h-16 overflow-hidden rounded">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </aside>

                <section className="flex flex-col justify-center gap-1 text-sm">
                  <h2 className="font-medium max-w-md">{item.title}</h2>
                  <aside className="flex gap-2 flex-wrap">
                    <span>Qty: {item.quantity}</span>
                    <span>Price: ${item.price}</span>
                    <span className="font-semibold">Subtotal: ${item.price * item.quantity}</span>
                  </aside>
                  <div className="flex justify-end md:hidden">
                    <Button
                    variant="ghost"
                    className="text-xs p-1"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                  </div>
                </section>

                <aside className="justify-end hidden md:flex">
                  <Button
                    variant="ghost"
                    className="text-xs p-1"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </aside>
              </article>
            ))}
          </section>

          <footer className="flex flex-col sm:flex-row justify-between items-center gap-2 p-2 border border-neutral-200 rounded mt-2 text-sm">
            <p className="font-semibold">
              Total Items: {totalItems} | Total Price: ${totalPrice}
            </p>
            <Button variant="outline" className="w-full sm:w-auto cursor-not-allowed" disabled>
              Checkout
            </Button>
          </footer>
        </article>
      </main>
    </Layout>
  );
}
