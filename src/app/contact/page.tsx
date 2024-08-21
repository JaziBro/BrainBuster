"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form submission logic here, like sending data to an API
    alert('Thank you for your message!');
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full py-4 fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/"> <Image src={logo} alt="BrainBuster" className="w-24 h-24"/> </Link>
          <nav className="space-x-9">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-xl">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 text-xl">About</Link>
            <Link href="/#quizzes" className="text-gray-700 hover:text-gray-900 text-xl">Quizzes</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 text-xl">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us 📲</h1>
        <p className="text-lg text-gray-700 mb-6">
          Have a question, suggestion, or just want to say hello? We would love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
