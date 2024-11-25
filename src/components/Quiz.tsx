import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Quale è il limite di velocità in città?",
    options: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Cosa significa un semaforo con luce gialla lampeggiante?",
    options: [
      "Stop obbligatorio",
      "Procedere con prudenza",
      "Divieto di transito",
      "Area pedonale"
    ],
    correctAnswer: 1
  },
  // Add more questions as needed
];

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerClick = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <section className="py-24 bg-dark-900" id="quiz">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Quiz Patente</h2>
          <p className="text-xl text-gray-300">
            Metti alla prova le tue conoscenze con il nostro quiz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-dark-800 rounded-xl p-8 shadow-xl"
        >
          {showScore ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hai completato il quiz!
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Punteggio: {score} su {questions.length}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Riprova
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>Domanda {currentQuestion + 1} di {questions.length}</span>
                  <span>Punteggio: {score}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedAnswer === null
                          ? 'bg-dark-700 hover:bg-dark-600 text-white'
                          : selectedAnswer === index
                          ? index === questions[currentQuestion].correctAnswer
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-dark-700 text-white'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Quiz;