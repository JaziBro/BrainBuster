import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto p-6 text-center mt-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Welcome to <span className="font-bold text-purple-600 dark:text-purple-400">QuizMaster</span>, where learning meets fun!
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Our platform offers a wide range of quizzes on various topics, from science to sports, designed to challenge your knowledge and keep you engaged.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Whether you are here to brush up on your trivia skills, prepare for a test, or simply have fun, we have something for everyone. So dive in, explore our quizzes, and enjoy the journey of learning!
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Thank you for being a part of our community. <span className="text-purple-600 dark:text-purple-400 font-bold">Happy quizzing!</span>
        </p>
      </main>
    </div>
  );
}
