import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {
  const category = [
    { _id: 1, name: "Saree", image: "/saree.png", link: "/" },
    { _id: 2, name: "SIM Offers", image: "/sim.png", link: "/telecom" },
    {
      _id: 3,
      name: "Digital Products",
      image: "/youtobe.jpg",
      link: "/digital",
    },
  ];

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-3 gap-5">
        {category.map((item) => (
          <div
            key={item._id}
            className="relative h-32 w-full rounded-md overflow-hidden group cursor-pointer"
          >
            <Link
              href={item.link}
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-all duration-500"
              />

              {/* Optional overlay text */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold uppercase text-3xl">
                <h2 className=" drop-shadow-xl">{item.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
