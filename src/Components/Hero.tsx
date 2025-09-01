"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 to-blue-300 py-32 text-center">
        <div className="absolute inset-0">
          <Image
            src="/FridgeShowroom.jpg"
            alt="Fridge Showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-4">
            Keep it Cool with <span className="text-blue-200">FridgeMart</span>
          </h2>
          <p className="text-white/90 mb-6 text-lg">Best deals on refrigerators & freezers</p>
          <Link
            href="/Browse"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg transition"
          >
            Browse Fridges
          </Link>
        </div>
      </section>
    </div>
  );
}
