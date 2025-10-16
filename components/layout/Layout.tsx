import { ReactNode } from "react";

import Head from "next/head";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export const Layout = ({
  children,
  title = "Next.Shop – Lightweight E-commerce Demo",
  description = "A minimal e-commerce demo built with Next.js, TypeScript, TailwindCSS, and Zustand.",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <section className="min-h-screen bg-bg text-text flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </section>
    </>
  );
};
