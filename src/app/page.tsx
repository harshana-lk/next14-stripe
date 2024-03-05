"use client";

import Image from "next/image";
import Product from "./components/Product";
import Cart from "./components/Cart";

const products: Product[] = [
  {
    id: "1",
    name: "T-Shirt",
    price: 199,
    quantity: 0,
  },
  {
    id: "2",
    name: "Jeans",
    price: 299,
    quantity: 0,
  },
  {
    id: "3",
    name: "Shoes",
    price: 399,
    quantity: 0,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl">E-Commerce Cart System</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </main>
  );
}
