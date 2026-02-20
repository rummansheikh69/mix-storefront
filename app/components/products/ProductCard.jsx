import { Heart, ShoppingBag, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className=" h-[26rem] bg-subMain rounded-md border border-border relative overflow-hidden cursor-pointer">
        <div className=" w-full h-3/5 bg-red-500 group relative overflow-hidden">
          {/* <div
          className=" z-20 absolute top-2 right-2 size-10 rounded-full hover:bg-red-500 duration-300 ease-in-out flex items-center justify-center text-white lg:tooltip lg:tooltip-left tooltip-accent"
          data-tip="Add to wishlist"
        >
          <Heart size={20} />
        </div> */}
          <Image
            src={product?.thumbnailImage}
            alt={product?.title}
            fill
            className="object-cover group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className=" h-full px-3 py-2">
          <h2 className=" text-[18.5px] font-medium text-nowrap truncate cursor-pointer font-bangla-regular ">
            {product?.title}
          </h2>
          <Rating
            rating={product?.rating}
            reviewCount={product?.totalReviews}
          />
          <h2>
            In Stock{" "}
            <span className=" font-medium text-teal-900">
              {product?.inStock}
            </span>
          </h2>

          <div className=" flex items-end gap-2">
            <h2 className=" font-medium text-2xl  ">
              <span className="font-bangla-regular">৳</span>

              {Number(product?.discountPrice).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
            <h2 className=" text-gray-600 line-through mb-[1px]">
              <span className="font-bangla-regular">৳</span>
              {Number(product?.price).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>

          <div
            className=" w-full rounded-full bg-contrast hover:bg-[#65b119] duration-200 h-8 flex items-center justify-center gap-2 text-white mt-2"
            onClick={() => addToCart(product)}
          >
            <div className=" -mt-[1px]">
              <ShoppingBagIcon size={15} />
            </div>
            <h2 className=" font-medium text-sm">Add to Cart</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
