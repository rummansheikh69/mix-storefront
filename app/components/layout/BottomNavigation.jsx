import Image from "next/image";
import React from "react";

function BottomNavigation() {
  return (
    <div className=" block md:hidden w-full h-16 bg-subMain fixed bottom-0 border-t border-zinc-200">
      <div className=" w-full h-full grid grid-cols-3 px-3 py-3">
        <div className=" w-full h-full flex items-center justify-center gap-1 border-r border-zinc-200">
          <div className=" size-9 relative">
            <Image
              src={"/offer.png"}
              fill
              alt="Fashion"
              className="object-contain"
            />
          </div>
          <h2 className=" font-medium text-sm text-black">SIM Offers</h2>
        </div>
        <div className=" w-full h-full flex items-center justify-center gap-1 border-r border-zinc-200">
          <div className=" size-7 relative">
            <Image
              src={"/fashion.png"}
              fill
              alt="Fashion"
              className="object-contain"
            />
          </div>
          <h2 className=" font-medium text-sm text-black">Fashion</h2>
        </div>
        <div className=" w-full h-full flex items-center justify-center gap-1">
          <div className=" size-9 relative">
            <Image
              src={"/digital.jpeg"}
              fill
              alt="Fashion"
              className="object-contain"
            />
          </div>
          <h2 className=" font-medium text-sm text-black leading-4">
            Digital <br /> Products
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
