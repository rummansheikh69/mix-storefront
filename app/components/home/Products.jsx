"use client";
import { useState } from "react";
import ProductCard from "../products/ProductCard";

function Products() {
  const [selected, setSelected] = useState("all");

  const options = [
    { label: "All", value: "all" },
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Customer Rating", value: "rating_desc" },
  ];

  const products = [
    {
      _id: "sdasda",
      title: "Headphones with comatozze saree",
      image:
        "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=",
      price: 200,
      discountPrice: 100,
      rating: 4.8,
      totalReviews: 100,
      stock: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    },
    {
      _id: "5ryheg",
      title: "পূজা স্পেশাল: আটপৌরে পূজা স্পেশাল: আটপৌরে",
      image:
        "https://media.istockphoto.com/id/1442161520/photo/banarasi-saree-with-beautiful-texture-and-hand-work-on-it.jpg?s=612x612&w=0&k=20&c=SeViCbz6uwtnDOP0tHCPu3M6DQy-LUJ7vudWK41HYbk=",
      price: 200,
      discountPrice: 8900,
      rating: 4.5,
      totalReviews: 100,
      stock: 10,

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    },
    {
      _id: "67fgh",
      title: "Headphones",
      image:
        "https://media.istockphoto.com/id/89323827/photo/indian-sarees.jpg?s=612x612&w=0&k=20&c=IYClFnkKf0QinOD3A0x7KXXMTXII9V9KBBewNjDpFhM=",
      price: 200,
      discountPrice: 100,
      rating: 4.5,
      totalReviews: 100,
      stock: 10,

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    },
    {
      _id: "5yhedfgd",
      title: "Headphones",
      image:
        "https://i.pinimg.com/736x/13/5a/be/135abeed3f635544ace9bc1f315a6800.jpg",
      price: 200,
      discountPrice: 100,
      rating: 4.5,
      stock: 10,

      totalReviews: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    },
    {
      _id: "gwerhd",
      title: "Headphones",
      image:
        "https://media.istockphoto.com/id/2087956814/photo/closeup-view-of-stacked-saris-or-sarees-in-display-of-retail-shop-for-use-as-indian-textiles.jpg?s=612x612&w=0&k=20&c=3gtGp1HeeVilRjLrX6f1LsbQAjEcMl0_Iwch_pvbf5Y=",
      price: 200,
      discountPrice: 100,
      rating: 4.5,
      stock: 10,

      totalReviews: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    },
  ];

  const handleChange = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };
  return (
    <div className=" pb-10 w-full grid grid-cols-12 gap-10">
      <div className="col-span-3 bg-subMain sticky top-20 rounded-md h-max">
        <div className=" w-full h-max p-5">
          <h2 className=" font-medium text-zinc-600">Filter</h2>
          <div className=" w-full border-b border-border mt-1 mb-3"></div>
          <div className=" flex items-center gap-2 w-full">
            <div className=" w-full">
              <h5 className=" text-sm ">Min</h5>
              <input
                type="number"
                className=" w-full h-8 rounded-md outline-none border border-border mt-0.5 pl-2 text-sm"
              />
            </div>
            <div className=" w-full">
              <h5 className=" text-sm float-end">Max</h5>
              <input
                type="number"
                className=" w-full h-8 rounded-md outline-none border border-border mt-0.5 pl-2 text-sm"
              />
            </div>
          </div>

          <h2 className=" font-medium text-zinc-600 mt-3">Sort By</h2>
          <div className=" w-full border-b border-border mt-1 mb-3"></div>

          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="sort"
                  value={option.value}
                  checked={selected === option.value}
                  onChange={() => handleChange(option.value)}
                  className="accent-black"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* products here */}
      <div className=" col-span-9">
        <div className=" grid grid-cols-3 gap-5">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
