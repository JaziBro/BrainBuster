import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import hero_img from "../../public/hero-img.jpeg";
import science_quiz from "../../public/science_quiz.jpg";
import history_quiz from "../../public/history_quiz.jpg";
import sports_quiz from "../../public/sports_quiz.jpg";
import logo from "../../public/logo.png"
import NavBar from "./components/NavBar";

export default function Home() {
  return (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    {/* Hero Section */}
    <section className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 dark:text-white text-left">Take a quiz, or Plan a quiz.</h1>
          <p className="text-lg mb-6 dark:text-gray-300">
            Challenge yourself or others with fun and educational quizzes!
          </p>
          <Link href="#quizzes" className="bg-purple-600 text-white px-4 py-3 rounded hover:bg-purple-700 sm:mt-16">
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
      <div className="container mx-auto px-4 border-purple-600 border-t mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white mt-10">Popular Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col border-black border-t border-b border-l border-r shadow-2xl">
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
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col border-black border-t border-b border-l border-r shadow-2xl">
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
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col border-black border-t border-b border-l border-r shadow-2xl">
            <div className="relative h-48 w-full">
              <Image src={sports_quiz} alt="Quiz 3" layout="fill" objectFit="cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Game On</h3>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">
                Get ready to test your sports savvy! From epic matches to legendary athletes, this quiz has it all.
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
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-auto border-purple-600 border-t">
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
  )
}