"use client";
import React from "react";

const Footer = () => {
  return (
  <div>
    <footer className="bg-blue-900 text-white py-6 mt-12">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>© {new Date().getFullYear()} FridgeMart. All rights reserved.</p>
          <div className="flex gap-4">
            <span>📧 wazeemaamir145@gmail.com</span>
            <span>📞 +92 3703440409</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
