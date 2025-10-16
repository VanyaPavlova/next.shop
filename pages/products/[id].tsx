"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { Product } from "@/types/product";
import { fetchProductById } from "@/lib/api";

import { useCart } from "@/store/cart";
import { CartItem } from "@/types/cart";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/common/Button";
import { BackTo } from "@/components/navigation/BackTo";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useCart((s) => s.dispatch);

  const [state, setState] = useState<{
    product: Product | null;
    loading: boolean;
    error: string | null;
  }>({ product: null, loading: true, error: null });

  useEffect(() => {
    if (!id) return;

    setState({ product: null, loading: true, error: null });

    fetchProductById(Number(id))
      .then((data) => setState({ product: data, loading: false, error: null }))
      .catch(() =>
        setState({
          product: null,
          loading: false,
          error: "Failed to load product",
        })
      );
  }, [id]);

  if (state.loading)
    return (
      <Layout>
        <p className="text-center py-12">Loading product...</p>
      </Layout>
    );

  if (state.error || !state.product)
    return (
      <Layout>
        <p className="text-center py-12">{state.error || "Product not found."}</p>
      </Layout>
    );

  const product = state.product;

  const handleAddToCart = () => {
    const payload: Omit<CartItem, "quantity"> = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    };
    dispatch({ type: "ADD", payload });
  };

  return (
    <Layout>
      <main className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
        <article className="rounded-lg shadow-lg max-w-4xl w-full grid gap-8 p-6 sm:p-8">
          <nav className="sm:col-span-2">
            <BackTo/>
          </nav>

          <figure className="relative rounded overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={300}
              className="bg-zinc-300/10"
            />
            <figcaption className="sr-only">{product.title}</figcaption>
          </figure>

          <section className="flex flex-col gap-4">
            <header>
              <h2 className="text-3xl font-semibold">{product.title}</h2>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed break-words">
                {product.description}
              </p>
            </header>

            <section className="flex flex-col gap-2" aria-label="Product pricing info">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                <span className="text-sm text-gray-500">
                  Discount: {product.discountPercentage}%
                </span>
              </div>
              <p className="text-sm text-gray-400">⭐ {product.rating}</p>
            </section>

            <footer className="mt-auto pt-4">
              <Button className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </footer>
          </section>
        </article>
      </main>
    </Layout>
  );
}
