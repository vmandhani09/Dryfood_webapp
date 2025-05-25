'use client';
import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}! We'll get back to you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info Cards */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Contact Information</h2>

          {/* Phone Card */}
          <div className="flex items-center p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-emerald-500">
            <div className="p-3 rounded-full bg-emerald-500 text-white mr-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h2l3.6 7.59a1 1 0 01-.17 1.07l-2.4 2.4a16 16 0 006.4 6.4l2.4-2.4a1 1 0 011.07-.17L19 19v2a2 2 0 01-2 2h-1a18 18 0 01-13-13V5a2 2 0 012-2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-700">Phone</h3>
              <p className="text-emerald-900 font-medium">+91-7483600212</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400">
            <div className="p-3 rounded-full bg-blue-400 text-white mr-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0H6a2 2 0 00-2 2v3a2 2 0 002 2h2m6 0v6m-6-6v6m4 0H6a2 2 0 01-2-2v-1m8 3h6"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700">Email</h3>
              <p className="text-blue-900 font-medium">info@krishnanaturals.com</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex items-center p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400">
            <div className="p-3 rounded-full bg-yellow-400 text-white mr-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4.418 0-8-3.582-8-8a8 8 0 0116 0c0 4.418-3.582 8-8 8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-700">Location</h3>
              <p className="text-yellow-900 font-medium">
                Shop No. 9, Juna Mondha, Nanded, Maharashtra - 431601
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
