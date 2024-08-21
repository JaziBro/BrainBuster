"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"


export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full bg-white shadow-md py-4 fixed top-0 left-0 z-50">
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
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-bold text-purple-600 ">QuizMaster</span>, where learning meets fun!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our platform offers a wide range of quizzes on various topics, from science to sports, designed to challenge your knowledge and keep you engaged.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you are here to brush up on your trivia skills, prepare for a test, or simply have fun, we have something for everyone. So dive in, explore our quizzes, and enjoy the journey of learning!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for being a part of our community. <span className="text-purple-600 font-bold">Happy quizzing! </span>
        </p>
      </main>
    </div>
  );
}
