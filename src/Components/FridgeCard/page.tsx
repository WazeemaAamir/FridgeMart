'use client';

import Image from "next/image";
import React from "react";

interface FridgeCardProps {
  id: string;
  image: string;
  name: string;
  type: string;        // e.g., "Double Door", "French Door"
  capacity: string;    // e.g., "350L"
  energy: string;      // e.g., "A++"
  color: string;
  price: string;
}

const FridgeCard: React.FC<FridgeCardProps> = ({
  id,
  image,
  name,
  type,
  capacity,
  energy,
  color,
  price,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden w-full">
      
      {/* Fridge Image */}
      <div className="relative w-full h-[300px] overflow-hidden rounded-t-3xl group cursor-pointer">
        <Image
          src={image}
          alt={name}
          fill
          sizes="100%"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-3xl"></div>
      </div>

      {/* Fridge Details */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

        <ul className="text-sm text-gray-600 space-y-1">
          <li><span className="font-semibold">Type:</span> {type}</li>
          <li><span className="font-semibold">Capacity:</span> {capacity}</li>
          <li><span className="font-semibold">Energy:</span> {energy}</li>
          <li><span className="font-semibold">Color:</span> {color}</li>
        </ul>

        <div className="pt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-700">Rs. {price}</span>
          <a
            href={`/fridge/${id}`}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default FridgeCard;
