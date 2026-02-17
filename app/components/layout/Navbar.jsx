import { HeartIcon, SearchIcon, ShoppingBagIcon, User } from "lucide-react";
import Link from "next/link";
import SearchModal from "../utils/SearchModal";
import CartDrawer from "../cart/CartDrawer";

function Navbar() {
  return (
    <div className=" w-full bg-subMain h-16 border-b border-border fixed top-0 left-0 z-50">
      <div className=" max-w-6xl mx-auto flex items-center h-full justify-between">
        <div>
          <Link href="/">
            <h1 className="text-3xl font-bold uppercase text-zinc-800">Logo</h1>
          </Link>
        </div>

        <div className=" flex items-center gap-5">
          <SearchModal />
          <CartDrawer />
          {/* <div className=" relative cursor-pointer">
            <div className=" absolute -top-1.5 -right-1 bg-black text-white rounded-full size-4 text-xs flex items-center justify-center">
              1
            </div>
            <HeartIcon size={20} />
          </div> */}
          <Link href="/login">
            <div className=" cursor-pointer w-24 h-8 rounded-md border border-border flex items-center justify-center gap-1 hover:bg-main duration-200">
              <div>
                <User size={20} />
              </div>
              <span className="">Login</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
