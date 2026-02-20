"use client";
import { HeartIcon, SearchIcon, ShoppingBagIcon, User } from "lucide-react";
import Link from "next/link";
import SearchModal from "../utils/SearchModal";
import CartDrawer from "../cart/CartDrawer";
import Image from "next/image";
import { useCartStore } from "@/app/store/useCartStore";

function Navbar() {
  const { cart } = useCartStore();
  return (
    <div className=" w-full bg-subMain h-16 border-b border-border fixed top-0 left-0 z-50">
      <div className=" md:max-w-6xl md:mx-auto flex items-center h-full justify-between px-3 md:px-0">
        <div>
          <Link href="/">
            <Image src={"/logo.png"} width={90} height={90} alt="Logo" />
          </Link>
        </div>

        <div className=" flex items-center gap-5">
          <SearchModal />
          <Link href="/cart">
            <div className=" relative cursor-pointer">
              {cart.length > 0 && (
                <div className=" absolute -top-1.5 -right-1 bg-black text-white rounded-full size-4 text-xs flex items-center justify-center">
                  {cart.length}
                </div>
              )}

              <ShoppingBagIcon size={20} className=" text-black" />
            </div>
          </Link>
          {/* <div className=" relative cursor-pointer">
            <div className=" absolute -top-1.5 -right-1 bg-black text-white rounded-full size-4 text-xs flex items-center justify-center">
              1
            </div>
            <HeartIcon size={20} />
          </div> */}
          <Link href="/login">
            <div className=" cursor-pointer w-24 h-8 rounded-md border border-border flex items-center justify-center gap-1 hover:bg-main duration-200">
              <div>
                <User size={20} className="text-black" />
              </div>
              <span className=" text-black">Login</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
