"use client";

import Link from "next/link";
import Image from "next/image";
import hero_img from "../../public/hero-img.jpeg";
import history_quiz from "../../public/history_quiz.jpg";
import science_quiz from "../../public/science_quiz.jpg";
import sports_quiz from "../../public/sports_quiz.jpg";
import logo from "../../public/logo.png";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-800 shadow-md py-4 top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <Image src={logo} alt="BrainBuster" className="w-20 h-20" />
          </Link>
          <nav className="space-x-9">
            <ThemeToggle />
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-xl">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-xl">
              About
            </Link>
            <Link href="#quizzes" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-xl">
              Quizzes
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-xl">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Take a quiz, or Plan a quiz.</h1>
            <p className="text-lg mb-6 dark:text-gray-300">
              Challenge yourself or others with fun and educational quizzes!
            </p>
            <Link href="#quizzes" className="bg-purple-600 text-white px-3 py-3 rounded hover:bg-purple-700">
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image src={hero_img} alt="Quiz Illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Quiz Cards Section */}
      <section id="quizzes" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Popular Quizzes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={science_quiz} alt="Quiz 1" layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Science is Fun</h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Unlock the mysteries of the universe! Dive into the wonders of science with questions that make
                  learning fun and exciting.
                </p>
                <Link href="/quizzes/science" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-6 inline-block">
                  Start Quiz
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={history_quiz} alt="Quiz 2" layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Historical History</h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Travel back in time and test your knowledge of the past! Explore pivotal events and legendary
                  figures in this captivating history quiz.
                </p>
                <Link href="/quizzes/history" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-6 inline-block">
                  Start Quiz
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={sports_quiz} alt="Quiz 3" layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Game On</h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Get ready to test your sports savvy! From epic matches to legendary athletes, this quiz has it
                  all—let's see if you've got game!
                </p>
                <Link href="/quizzes/sports" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-6 inline-block">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-lg font-bold mb-2">QuizMaster</h4>
              <p className="text-gray-400 dark:text-gray-500">© 2024 QuizMaster. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="#quizzes" className="hover:text-gray-300">Quizzes</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
