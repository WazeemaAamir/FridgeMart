'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/Contact" },
    { name: "Post_Fridge", href: "/Post_Fridge" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">FridgeMart</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li
              key={link.href}
              className={`hover:text-blue-600 cursor-pointer ${
                pathname === link.href ? "text-blue-600 font-bold" : ""
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100">
                {link.name}
              </button>
            </Link>
          ))}
          <Link href="/post_fridge">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition">
              + Post Fridge
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
