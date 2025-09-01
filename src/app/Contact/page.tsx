"use client";

import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white/10 p-6 rounded-xl shadow-lg text-white space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-300">Contact Info</h3>
              <p>📍 <span className="text-cyan-100">Al Madina, House # 20, Area 0, Korangi#3, Karachi</span></p>
              <p>📞 <span className="text-cyan-100">+92 3703440409</span></p>
              <p>📧 <span className="text-cyan-100">wazeemaamir145@gmail.com</span></p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-5">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Your Message</label>
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 font-medium mt-3 text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
  );
};

export default Contact;
