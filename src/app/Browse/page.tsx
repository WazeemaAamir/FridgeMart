"use client";

import React, { useState } from "react";
import Image from "next/image";

// ✅ Fridge type
type FridgeType = {
  id: string;
  image: string;
  model: string;
  color: string;
  price: string;
  description?: string;
};

// ✅ Full fridge array
const Fridges: FridgeType[] = [
  {
    id: "1",
    image: "/Haier.jpg",
    model: "Haier 538 IFPA/IFGA/IFRA 19cft Twin Inverter Refrigerator",
    color: "Mahroon",
    price: "₨ 128,000",
    description:
      "A well-maintained Haier 538 IFPA/IFGA/IFRA 19cft Twin Inverter Refrigerator with excellent performance, spacious interior, and reliable safety features.",
  },
  {
    id: "2",
    image: "/Gree.jpg",
    model: "GREE Everest Series Refrigerator Floral 9978",
    color: "Red",
    price: "₨ 85,000",
  },
  {
    id: "3",
    image: "/Samsung.jpg",
    model: "Samsung Refrigerator RF48A4010B4 French Door",
    color: "Gray",
    price: "₨ 600,000",
  },
  {
    id: "4",
    image: "/Dawlance.jpg",
    model: "DAWLANCE 9140WB AVANTE GD DOUBLE DOOR REFRIGERATOR",
    color: "Silver",
    price: "₨ 69,000",
  },
  {
    id: "5",
    image: "/Kewood.jpg",
    model: "Kenwood 24457 Glass Door Inverter Refrigerator",
    color: "White",
    price: "₨ 115,000",
  },
  {
    id: "6",
    image: "/Smart.jpg",
    model: "Samsung Smart Refrigerator",
    color: "Black",
    price: "₨ 6,800,000",
  },
  {
    id: "7",
    image: "/MiniFridge.jpg",
    model: "Mini Refrigerator",
    color: "White",
    price: "₨ 14,570",
  },
  {
    id: "8",
    image: "/Orient.jpg",
    model: "Orient Crystal GD INV 350i Refrigerator",
    color: "Purple",
    price: "₨ 101,300",
  },
  {
    id: "9",
    image: "/PEL.jpg",
    model: "PEL PRINVGD 6360 Digital Inverter Glass Door Refrigerator",
    color: "Silver",
    price: "₨ 107,000",
  },
  {
    id: "10",
    image: "/National.jpg",
    model: "Gaba National Refrigerator",
    color: "Black",
    price: "₨ 106,506",
  },
  {
    id: "11",
    image: "/Refrigerators.jpg",
    model: "Ultimate Refrigerator Size Guide Model",
    color: "Silver",
    price: "₨ 95,000",
  },
];

// ✅ Fridge Card component
const FridgeCard: React.FC<FridgeType> = ({
  image,
  model,
  color,
  price,
  description,
}) => {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={model}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">{model}</h2>
      <p className="text-gray-600">Color: {color}</p>
      <p className="text-blue-700 font-bold mt-2">{price}</p>
      {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
    </div>
  );
};

// ✅ Main page component
export default function BrowseFridgePage() {
  const [search, setSearch] = useState("");

  const filteredFridges = Fridges.filter((fridge) =>
    fridge.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 drop-shadow-md">
        Browse Available Fridges
      </h1>

      {/* Search Box */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="search"
          placeholder="Search by model name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          aria-label="Search fridges by model name"
        />
      </div>

      {/* Fridges Grid */}
      <section
        aria-label="Available fridge list"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredFridges.length > 0 ? (
          filteredFridges.map((fridge) => <FridgeCard key={fridge.id} {...fridge} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No fridge found matching your search.
          </p>
        )}
      </section>
    </main>
  );
}