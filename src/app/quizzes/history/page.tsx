"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function QuizPage() {
  // science questions data
  const questions = [
    {
      text: "Who was the first President of the United States?",
      options: [
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
        "Benjamin Franklin",
      ],
      correctOption: 0, // Index of the correct option
    },
    {
      text: "Which ancient civilization built the pyramids?",
      options: ["The Romans", "The Egyptians", "The Greeks", " The Mayans"],
      correctOption: 1,
    },
    {
      text: "What year did World War I begin?",
      options: ["1912", "1914", "1916", "1918"],
      correctOption: 1,
    },
    {
      text: "Who was known as the 'Maid of Orléans'?",
      options: ["Cleopatra", "Joan of Arc", "Marie Antoinette", " Elizabeth I"],
      correctOption: 1,
    },
    {
      text: "What was the name of the ship that brought the Pilgrims to America in 1620?",
      options: ["The Mayflower", "The Santa Maria", "The Endeavour", "The Golden Hind"],
      correctOption: 0,
    },
    {
      text: "The Great Wall of China was primarily built to protect against which group?",
      options: ["The Mongols", "The Russians", "The Japanese", "The Persians"],
      correctOption: 0,
    },
    {
      text: "Which famous explorer discovered America in 1492?",
      options: ["Marco Polo", "Christopher Columbus", "Leif Erikson", "Ferdinand Magellan"],
      correctOption: 1,
    },
    {
      text: "In which city was the Titanic built?",
      options: ["London", "Liverpool", "Belfast", "Glassgow"],
      correctOption: 2,
    },
    {
      text: "Who wrote the Declaration of Independence?",
      options: ["George Washington", "Thomas Jefferson", "John Hancock", "Benjamin Franklin"],
      correctOption: 1,
    },
    {
      text: "What empire was known as the 'Land of the Rising Sun?",
      options: ["The Roman Empire", "The British Empire", "The Japanese Empire", "The Ottoman Empire"],
      correctOption: 2,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10 * 60); // 10 minutes timer
  const [quizCompleted, setQuizCompleted] = useState(false);

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
    if (index === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
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
              <div className="bg-gray-200 p-3 rounded-xl text-purple-600 font-semibold">
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
                      selectedOption === index
                        ? index ===
                          questions[currentQuestionIndex].correctOption
                          ? "bg-green-200"
                          : "bg-red-200"
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
            <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4 inline-block">Return back </Link>         
          </div>
        )}
      </main>
    </div>
  );
}
