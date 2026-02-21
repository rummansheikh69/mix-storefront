"use client";

import Image from "next/image";


function page() {

    const digitalProducts = [
        {
            _id: "sdjabnksda",
            name:"Youtube premium",
            image: "https://bdtechpark.com/wp-content/uploads/2024/12/Untitled-design22.png",
            price: 10
        },
        {
            _id: "fhdsdcc",
            name:"Youtube premium",
            image: "https://bdtechpark.com/wp-content/uploads/2024/12/Untitled-design22.png",
            price: 10
        },
        {
            _id: "sfgswrhsc",
            name:"Youtube premium",
            image: "https://bdtechpark.com/wp-content/uploads/2024/12/Untitled-design22.png",
            price: 10
        },
        {
            _id: "ghdetdf",
            name:"Youtube premium",
            image: "https://bdtechpark.com/wp-content/uploads/2024/12/Untitled-design22.png",
            price: 10
        },
        {
            _id: "srthsdc",
            name:"Youtube premium",
            image: "https://bdtechpark.com/wp-content/uploads/2024/12/Untitled-design22.png",
            price: 10
        },
    ]

  return (
    <div className="py-10 w-full grid grid-cols-4 gap-10 max-w-6xl mx-auto px-3 md:px-0">
        {digitalProducts?.map((product)=>(
               <div key={product?._id} className=" col-span-4 md:col-span-1 ">
            <div className=" w-full h-full flex flex-row md:flex-col gap-4 items-center bg-zinc-200 rounded-md md:pb-5 cursor-pointer">
                <div className=" w-20 md:w-full h-20 md:h-52 rounded-lg overflow-hidden relative">
                    <Image src={product?.image} alt={product?.name}fill className=" object-cover"/>
                </div>
                <h2 className=" text-xl font-medium mt-2">{product?.name}</h2>
            </div>
        </div>
        ))}
     
    </div>
  );
}

export default page;
