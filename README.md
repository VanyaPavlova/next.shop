# next.shop

**next.shop** is a lightweight e-commerce demo built with [Next.js](https://nextjs.org), showcasing **product listing**, **product details**, and a **shopping cart** with persistent state.

The project emphasizes **clarity, maintainability, and performance**, without complex animations. Fully typed with **TypeScript**, styled with **TailwindCSS**, and using **Zustand** for state management.
**Next.Shop**  is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Features

- **Product Listing**: Responsive grid of products fetched from a dummy API.
- **Product Details Page**: Displays title, description, price, discount, rating, and thumbnail.
- **Shopping Cart**: Persistent cart with add/remove/clear functionality.
- **Zustand State Management**: Simple and lightweight.
- **TailwindCSS Styling**: Minimal, responsive design.
- **TypeScript**: Strong typing for products, API responses, and cart items.

## Trade-offs

Building a lightweight e-commerce app like **Next.Shop** involves deliberate trade-offs between simplicity, and scalability.  
The goal is to balance developer experience and real-world usability without over-engineering.

---

### **Pros**

- **Simplicity & Maintainability**  
  The codebase is intentionally minimal — easy to read, extend, and onboard new contributors.

- **Performance-First Design**  
  Static generation and lightweight state management (Zustand) ensure fast load times and smooth user experience.

- **Strong Typing**  
  TypeScript enforces reliable contracts between API responses and UI components, reducing runtime errors.

- **Modern Tooling**  
  Uses Next.js, TailwindCSS, and modern patterns aligned with industry standards.

---

### **Cons**

- **Limited Backend Complexity**  
  Relies on a dummy API and client-side persistence — not suited for production-scale e-commerce systems.

- **No Real Checkout or Payments**  
  Focused on front-end interactions only; payment flow and backend logic are intentionally omitted.

- **Basic State Management**  
  Zustand is simple but not ideal for large applications with complex, cross-feature dependencies.

- **Minimal Error Handling**  
  Simplified architecture means less robust handling of network, validation, and concurrency issues.


---

## Installation

Clone the repository:

## Setup

```bash
# Clone the repository (via HTTPS or SSH)

# HTTPS
git clone https://github.com/VanyaPavlova/next.shop.git

# SSH
git clone git@github.com:VanyaPavlova/next.shop.git

# Navigate into the project
cd next.shop

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
