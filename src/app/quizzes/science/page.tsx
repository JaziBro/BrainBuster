"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function QuizPage() {
  // Example science questions data
  const questions = [
    {
      text: "What is the chemical formula for table salt?",
      options: ["NaCl", "H2O", "CO2", "KCl"],
      correctOption: 0, // Index of the correct option
    },
    {
      text: "What is the speed of light?",
      options: ["3.00 x 10^8 m/s", "1.50 x 10^8 m/s", "2.00 x 10^8 m/s", "3.50 x 10^8 m/s"],
      correctOption: 0,
    },
    {
      text: "Who is known as the father of modern physics?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
      correctOption: 1,
    },
    {
      text: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "H2O2"],
      correctOption: 1,
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctOption: 1,
    },
    {
      text: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      correctOption: 1,
    },
    {
      text: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctOption: 1,
    },
    {
      text: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctOption: 2,
    },
    {
      text: "What is the boiling point of water?",
      options: ["100°C", "0°C", "50°C", "25°C"],
      correctOption: 0,
    },
    {
      text: "What is the main gas found in the sun?",
      options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
      correctOption: 3,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10 * 60); // 10 minutes timer
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Timer countdown
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setQuizCompleted(true);
    }
  }, [time]);

  // Handle answer selection
  const handleOptionClick = (index: number) => {
    if (selectedOption !== null || quizCompleted) return; // Prevent multiple selections

    setSelectedOption(index);
    const correct = index === questions[currentQuestionIndex].correctOption;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000); // Delay to show feedback color
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="container mx-auto p-6">
        {!quizCompleted ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Q. {questions[currentQuestionIndex].text}
              </h2>
              <div className="bg-gray-200 p-3 rounded-full text-purple-600 font-semibold">
                {Math.floor(time / 60)}:{time % 60 < 10 ? "0" : ""}
                {time % 60}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions[currentQuestionIndex].options.map(
                (option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`bg-white shadow-md p-4 rounded-lg cursor-pointer ${
                      selectedOption !== null
                        ? index === questions[currentQuestionIndex].correctOption
                          ? "bg-green-200"
                          : selectedOption === index
                          ? "bg-red-200"
                          : ""
                        : "hover:bg-purple-100"
                    }`}
                  >
                    <p className="text-gray-700 font-medium">
                      {String.fromCharCode(65 + index)}) {option}
                    </p>
                  </div>
                )
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>
            <p className="text-xl">Your Score: {score} / {questions.length}</p>
            <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4 inline-block">
              Return back 
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
