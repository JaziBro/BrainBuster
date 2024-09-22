"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto p-6 text-center mt-36">
        <h1 className="text-4xl font-bold mb-6">Contact Us 📲</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Have a question, suggestion, or just want to say hello? We would love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 dark:hover:bg-purple-500"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
