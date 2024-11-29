'use client';
import Image from "next/image";
import React, { useState } from "react";

const Design_type = ({selectedDesigntype}) => {
  const Designs = [
    {
      name: "Minimalist",
      image: "/minimalist.jpg",
    },
    {
      name: "Modern",
      image: "/modern.jpg",
    },
    {
      name: "Bohemium",
      image: "/Contemporary.jpg",
    },
    {
      name: "Classic",
      image: "/classic.jpg",
    },

    {
      name: "Rustic",
      image: "/rustic.jpg",
    },
    {
      name: "Industrial",
      image: "/industrial.jpg",
    },
  ];

  const [selectedDesignType, setSelectedDesignType] = useState(null);
  return (
    <div className="mt-5 ">
      <label className="text-slate-500"> Select Interio Design Type</label>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3 ">
        {Designs.map((design, index) => (
          <div key={index} onClick={() => {setSelectedDesignType(design.name);selectedDesigntype(design.name)}}>
            <Image
              src={design.image}
              width={100}
              height={100}
              alt="Logo"
              className={`h-[80px]  w-[120px] hover:scale-105 translate-all rounded-md ${
                selectedDesignType === design.name && "border-2 border-primary rounded-md p-1 " }`}
            />
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design_type;
