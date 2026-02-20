"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldEllipsis } from "lucide-react";

export default function page() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Urban Runner Low",
      variant: "Size 10 | Ruby Red",
      price: 145,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
    },
    {
      id: 2,
      name: "Analog Classic",
      variant: "One Size | Matte White",
      price: 210,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500",
    },
    {
      id: 3,
      name: "Aviator Shades",
      variant: "Unisex | Gold Frame",
      price: 185,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
  ]);

  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                    ? item.quantity - 1
                    : 1,
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-[#f4f4f4] min-h-screen py-16 px-6 md:px-0">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-light">Cart Items</h1>
            <span className="text-gray-500">{cart.length} items</span>
          </div>

          <div className="space-y-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-300 pb-8"
              >
                <div className="flex gap-6 items-center">
                  <div className="relative w-32 h-24 bg-gray-200 rounded">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-medium">{item.name}</h2>

                    <p className="text-lg text-[#7a8f7c] font-semibold">
                      <span className="font-bangla-regular">৳</span>
                      {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center gap-6 mt-6 sm:mt-0">
                  <div className="flex border border-zinc-300 rounded overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, "dec")}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-6 py-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "inc")}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-black text-xl"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="inline-block mt-10 text-[#7a8f7c] hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="bg-[#8a9a8b] text-white p-10 rounded">
          <h2 className="text-2xl mb-10 font-light">Checkout Summary</h2>

          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {" "}
                <span className="font-bangla-regular">৳</span>
                {subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>
                - <span className="font-bangla-regular">৳</span>
                0.00
              </span>
            </div>
          </div>

          <div className="border-t border-white/40 my-8"></div>

          <div className="flex justify-between text-3xl font-semibold mb-10">
            <span>Total</span>
            <span>
              {" "}
              <span className="font-bangla-regular">৳</span>
              {subtotal.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-black py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition">
            Checkout
          </button>

          <p className="text-sm text-white/70 mt-6 text-center flex items-center justify-center gap-1">
            <ShieldEllipsis size={14} /> Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
}
