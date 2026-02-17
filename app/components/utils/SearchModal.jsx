"use client";
import { CircleX, Loader, Search, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function SearchModal() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const loading = false;
  const searchResults = [
    {
      _id: "hdfn",
      name: "Headphones with comatozze saree",
      image:
        "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=",
      discountPrice: 2944320,
      price: 200,
    },
    {
      _id: "fw4g",
      name: "Headphones with comatozze saree",
      image:
        "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=",
      discountPrice: 290,
      price: 200,
    },
    {
      _id: "sfg3",
      name: "Headphones with comatozze saree",
      image:
        "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=",
      discountPrice: 290,
      price: 200,
    },
    {
      _id: "sfew",
      name: "Headphones with comatozze saree",
      image:
        "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=",
      discountPrice: 290,
      price: 200,
    },
    {
      _id: "das",
      name: "Headphones with comatozze saree",
      image:
        "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=",
      discountPrice: 290,
      price: 200,
    },
  ];
  return (
    <div
      onClick={() => document.getElementById("search_modal").showModal()}
      className=" cursor-pointer"
    >
      <SearchIcon size={20} />
      <dialog id="search_modal" className="modal">
        <div className="modal-box bg-subMain text-text h-[30rem] p-4 max-w-4xl cursor-default">
          {/* Search Input */}
          <div className="w-full relative">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none mt-3 w-full bg-lightDark border border-zinc-300 rounded-md pl-9 pr-3 py-2 text-sm tracking-wide"
              placeholder="Search products"
            />
            <button className="absolute left-2 top-[21px]">
              <Search className="w-5 h-5 opacity-60" />
            </button>
            {search.length > 0 && (
              <div
                onClick={() => setSearch("")}
                className="absolute right-2 top-[21px] cursor-pointer"
              >
                <CircleX className="w-5 h-5 text-zinc-500" />
              </div>
            )}
          </div>

          {/* Search Results */}
          <div className="w-full mt-2 flex flex-col">
            {loading ? (
              <div className="w-full flex items-center justify-center mt-10 ">
                <Loader className="animate-spin" />
              </div>
            ) : searchResults.length > 0 ? (
              <ul className="w-full overflow-y-auto max-h-96">
                {searchResults.map((product) => (
                  <Link href={`/product/${product?._id}`} key={product?._id}>
                    <div className="py-2 flex items-start gap-3 hover:bg-main px-4 rounded-md">
                      <img
                        src={product?.image}
                        alt={product?.name}
                        className="size-20 object-cover rounded-md"
                      />
                      <div>
                        <h2 className="text-xl text-zinc-800">
                          {product?.name}
                        </h2>

                        <div className=" flex items-end gap-2">
                          <h2 className=" font-medium text-2xl  ">
                            <span className="font-bangla-regular">৳</span>

                            {Number(product.discountPrice).toLocaleString(
                              "en-US",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )}
                          </h2>
                          <h2 className=" text-gray-600 line-through mb-[1px] ">
                            <span className="font-bangla-regular">৳</span>

                            {Number(product.price).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            ) : (
              <p className="text-xl text-center mt-10 font-medium text-zinc-600">
                {debouncedSearch ? "Nothing Found" : "Search Cars"}
              </p>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}

export default SearchModal;
