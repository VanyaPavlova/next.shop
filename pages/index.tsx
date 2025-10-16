import { Geist, Geist_Mono } from "next/font/google";

import useSWR from "swr";

import { Product } from "@/types/product";
import { fetchProducts } from "@/lib/api";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { data: products, error } = useSWR<Product[]>("products", fetchProducts);

  return (
    <section className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen`}>
      <Layout>
        {error && <p>Error loading products.</p>}
        {!products && <p>Loading...</p>}

        {products && (
          <section
            aria-label="Product list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
                rating={product.rating}
              />
            ))}
          </section>
        )}
      </Layout>
    </section>
  );
}
