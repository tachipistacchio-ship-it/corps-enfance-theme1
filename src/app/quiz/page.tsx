'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la période chronologique du Paléolithique supérieur ?",
    options: [
      "100 000 - 45 000 ans BP",
      "45 000 - 12 000 ans BP",
      "12 000 - 8 000 ans BP",
      "8 000 - 3 000 ans BP"
    ],
    correct: 1,
    explanation: "Le Paléolithique supérieur s'étend d'environ 45 000 à 12 000 ans avant notre ère, période caractérisée par l'émergence de l'art pariétal et mobilier."
  },
  {
    id: 2,
    question: "Que révèlent principalement les empreintes d'enfants dans les grottes ?",
    options: [
      "Leur alimentation",
      "Leur âge et leurs activités",
      "Leur origine géographique",
      "Leur statut social"
    ],
    correct: 1,
    explanation: "Les empreintes de pas et de mains permettent d'estimer l'âge des enfants et de comprendre leurs activités dans les grottes ornées."
  },
  {
    id: 3,
    question: "Les 'Vénus paléolithiques' sont caractérisées par :",
    options: [
      "Des visages très détaillés",
      "Des formes généreuses et des visages stylisés",
      "Des représentations masculines",
      "Des scènes de chasse"
    ],
    correct: 1,
    explanation: "Les statuettes féminines du Paléolithique présentent des formes généreuses (seins et hanches proéminents) avec des visages souvent absents ou stylisés."
  },
  {
    id: 4,
    question: "Comment s'effectue principalement la transmission des savoirs au Paléolithique ?",
    options: [
      "Par l'écriture",
      "Par l'observation et l'imitation",
      "Par des écoles spécialisées",
      "Par des livres illustrés"
    ],
    correct: 1,
    explanation: "La transmission des connaissances s'effectue principalement par l'observation et l'imitation, permettant l'acquisition progressive des compétences."
  },
  {
    id: 5,
    question: "Quel site est célèbre pour ses empreintes de pieds d'enfants ?",
    options: [
      "Lascaux",
      "Altamira",
      "Niaux",
      "Chauvet"
    ],
    correct: 2,
    explanation: "La grotte de Niaux est particulièrement connue pour ses empreintes de pieds d'enfants de 10-12 ans, témoignages directs de leur présence."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement le sujet.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront de parfaire vos connaissances.';
    return 'Il serait bon de revoir les sections du cours avant de continuer.';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quiz terminé !
            </h1>
            
            <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
              {score}/{questions.length}
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              {getScoreMessage()}
            </p>
            
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <div key={question.id} className="text-left bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    {answers[index] === question.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="font-medium">Question {index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{question.question}</p>
                  <p className="text-sm text-blue-600">{question.explanation}</p>
                </div>
              ))}
            </div>
            
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer le quiz
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">Quiz</h1>
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} sur {questions.length}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <motion.div
                className="bg-orange-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswer === index
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-gray-300'
                      }`} />
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-6 rounded-lg mb-6 ${
                      selectedAnswer === questions[currentQuestion].correct
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {selectedAnswer === questions[currentQuestion].correct ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                      <span className={`font-semibold ${
                        selectedAnswer === questions[currentQuestion].correct
                          ? 'text-green-900'
                          : 'text-red-900'
                      }`}>
                        {selectedAnswer === questions[currentQuestion].correct
                          ? 'Correct !'
                          : 'Incorrect'}
                      </span>
                    </div>
                    <p className={`${
                      selectedAnswer === questions[currentQuestion].correct
                        ? 'text-green-800'
                        : 'text-red-800'
                    }`}>
                      {questions[currentQuestion].explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null || showResult}
                className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                  selectedAnswer === null || showResult
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Terminer le quiz' : 'Question suivante'}
              </button>
            </motion.div>
          </AnimatePresence>

          <NavigationButtons
            previousPage={{
              href: "/section-3",
              title: "Parentalité et Société"
            }}
            nextPage={{
              href: "/cas-pratiques",
              title: "Cas Pratiques"
            }}
          />
        </div>
      </div>
    </div>
  );
}