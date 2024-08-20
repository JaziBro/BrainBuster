"use client"

import Link from "next/link";
import Image from "next/image";
import hero_img from "../../public/hero-img.jpeg"
import quiz_card from "../../public/quiz.jpg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">QuizMaster</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#home" className="hover:text-purple-600">Home</Link></li>
              <li><Link href="#quizzes" className="hover:text-purple-600">Quizzes</Link></li>
              <li><Link href="#about" className="hover:text-purple-600">About</Link></li>
              <li><Link href="#contact" className="hover:text-purple-600">Contact</Link></li>
            </ul>
          </nav>
          <div>
            <Link href="/login" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Login</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className=" py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Take a quiz, or Plan a quiz.</h1>
            <p className="text-lg mb-6">Challenge yourself or others with fun and educational quizzes!</p>
            <Link href="#quizzes" className="bg-purple-600 text-white px-3 py-3 rounded hover:bg-purple-700">Get Started</Link>
          </div>
          <div className="md:w-1/2">
            <Image src={hero_img} alt="Quiz Illustration" className="w-full h-auto"/>
          </div>
        </div>
      </section>

      {/* Quiz Cards Section */}
      <section id="quizzes" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Quizzes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={quiz_card} alt="Quiz 1" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Science is Fun</h3>
                  <p className="text-gray-700">Unlock the mysteries of the universe! Dive into the wonders of science with questions that make learning fun and exciting.</p>
                  <Link href="/quizzes/science" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-6 inline-block">Start Quiz</Link>
                </div>
              </div>

            {/* Card 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={quiz_card} alt="Quiz 2" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Historical History</h3>
                  <p className="text-gray-700">Travel back in time and test your knowledge of the past! Explore pivotal events and legendary figures in this captivating history quiz.</p>
                  <Link href="/quizzes/history" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-6 inline-block">Start Quiz</Link>
                </div>
              </div>

            {/* Card 3 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={quiz_card} alt="Quiz 3" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Game On</h3>
                  <p className="text-gray-700">Get ready to test your sports savvy! From epic matches to legendary athletes, this quiz has it all—let's see if you've got game!</p>
                  <Link href="/quizzes/sports" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-6 inline-block">Start Quiz</Link>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-black py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-lg font-bold mb-2">QuizMaster</h4>
              <p className="text-gray-400">© 2024 QuizMaster. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#home" className="hover:text-gray-300">Home</Link>
              <Link href="#quizzes" className="hover:text-gray-300">Quizzes</Link>
              <Link href="#about" className="hover:text-gray-300">About</Link>
              <Link href="#contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
