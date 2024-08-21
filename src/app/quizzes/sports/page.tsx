"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function QuizPage() {
  // cricket questions data
  const questions = [
    {
      text: "Who is known as the 'King of Football'?",
      options: [
        "Cristiano Ronaldo",
        "Lionel Messi",
        "Pele",
        "Diego Maradona",
      ],
      correctOption: 2, // Index of the correct option
    },
    {
      text: "Which country has won the most FIFA World Cup titles?",
      options: ["Germany", "Brazil", "France", "Italy"],
      correctOption: 1,
    },
    {
      text: "Who was the first cricketer to score 10,000 runs in Test cricket?",
      options: ["Sunil Gavaskar", "Sachin Tendulkar", "Javed Miandad", "Allan Border"],
      correctOption: 0,
    },
    {
      text: "Which Pakistani cricketer is known as the 'Sultan of Swing'?",
      options: ["Wasim Akram", "Waqar Younis", "Shoaib Akhtar", "Imran Khan"],
      correctOption: 0,
    },
    {
      text: "In which year did Pakistan win their first Champions Trophy?",
      options: ["1996", "2009", "2017", "1992"],
      correctOption: 2,
    },
    {
      text: "Which player holds the record for the fastest century in ODI cricket for Pakistan?",
      options: ["Shahid Afridi", "Fakhar Zaman", "Inzamam-ul-Haq", "Babar Azam"],
      correctOption: 0,
    },
    {
      text: "What is the maximum score a single player can achieve in one game of ten-pin bowling?",
      options: ["200", "300", "250", "400"],
      correctOption: 1,
    },
    {
      text: "Who was the captain of the Pakistan cricket team during their 1992 World Cup victory?",
      options: ["Imran Khan", "Wasim Akram", "Javed Miandad", "Inzamam-ul-Haq"],
      correctOption: 0,
    },
    {
      text: "How many players are on the field for each team in a standard rugby match?",
      options: ["11", "13", "15", "18"],
      correctOption: 2,
    },
    {
      text: "Who was the first Pakistani cricketer to score a triple century in Test cricket?",
      options: ["Javed Miandad", "Hanif Mohammad", "Younis Khan", "Azhar Ali"],
      correctOption: 1,
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

  // Calculate percentage for the circular progress bar
  const percentage = (time / (10 * 60)) * 100;

  // Handle answer selection
  const handleOptionClick = (index: number) => {
    if (selectedOption !== null || quizCompleted) return;

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
    }, 1000);
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
              <div className="w-20 h-16">
                <CircularProgressbar
                  value={percentage}
                  text={`${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`}
                  styles={buildStyles({
                    textColor: "#6B46C1", // Tailwind purple-600 color
                    pathColor: "#6B46C1",
                    trailColor: "#E2E8F0", // Tailwind gray-200 color
                    textSize: "27px",
                  })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`bg-white shadow-md p-4 rounded-lg cursor-pointer ${
                    selectedOption === index
                      ? index === questions[currentQuestionIndex].correctOption
                        ? "bg-green-400"
                        : "bg-red-400"
                      : "hover:bg-purple-300"
                  }`}
                >
                  <p className="text-gray-700 font-medium">
                    {String.fromCharCode(65 + index)}) {option}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>
            <p className="text-xl">
              Your Score: {score} / {questions.length}
            </p>
            <Link
              href="/"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4 inline-block"
            >
              Return back
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}