'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

export default function ExercicesPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const exercises = [
    {
      id: 'ex1',
      type: 'qcm',
      question: "Quelle est la principale méthode d'identification sexuelle des ossements préhistoriques ?",
      options: [
        "L'analyse de l'ADN uniquement",
        "L'os du bassin car il est lié à la capacité d'enfanter",
        "La taille générale du squelette",
        "L'analyse des dents"
      ],
      correct: 1,
      explanation: "L'os du bassin est privilégié car c'est le seul os dont la morphologie est directement liée à la possibilité d'enfanter."
    },
    {
      id: 'ex2',
      type: 'qcm',
      question: "Quel pourcentage des empreintes de mains négatives dans les grottes sont féminines ?",
      options: [
        "25%",
        "50%",
        "75%",
        "90%"
      ],
      correct: 2,
      explanation: "75% des mains négatives dans les grottes sont féminines, montrant la participation active des femmes à l'art pariétal."
    },
    {
      id: 'ex3',
      type: 'qcm',
      question: "Quelle est l'hypothèse de la 'Grand-Mère' ?",
      options: [
        "Les femmes âgées étaient exclues du groupe",
        "Les femmes ménopausées jouaient un rôle crucial dans la transmission culturelle",
        "Seules les jeunes femmes s'occupaient des enfants",
        "Les grand-mères ne participaient pas aux activités du groupe"
      ],
      correct: 1,
      explanation: "L'hypothèse de la Grand-Mère suggère que les femmes post-ménopausées jouaient un rôle crucial dans la transmission culturelle et l'assistance aux jeunes mères."
    },
    {
      id: 'ex4',
      type: 'reflexion',
      question: "Analysez comment les biais historiques du 19e siècle ont influencé notre vision de la femme préhistorique.",
      points: [
        "Influence de la Bible et des représentations religieuses",
        "Projection des modèles sociaux contemporains sur la préhistoire",
        "Rôle des représentations muséales et artistiques",
        "Impact de l'art officiel et des expositions universelles"
      ]
    },
    {
      id: 'ex5',
      type: 'analyse',
      question: "Comparez les trois idées reçues sur les femmes préhistoriques avec les preuves scientifiques actuelles.",
      structure: {
        "Idée reçue 1": "Femme faible vs preuves de force physique",
        "Idée reçue 2": "Uniquement reproductrice vs diversité des rôles",
        "Idée reçue 3": "Femme soumise vs preuves d'autonomie et de pouvoir"
      }
    }
  ];

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [exerciseId]: answer
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercises = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Exercices d&apos;Application
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Testez vos connaissances sur les femmes préhistoriques
            </p>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <h3 className="text-blue-900 font-semibold mb-2 text-base sm:text-lg">📝 Instructions</h3>
              <p className="text-blue-800 text-sm sm:text-base">
                Répondez aux questions suivantes pour évaluer votre compréhension des trois grandes idées reçues sur les femmes préhistoriques.
              </p>
            </div>

            <div className="space-y-8">
              {exercises.map((exercise, index) => (
                <div key={exercise.id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Exercice {index + 1} : {exercise.question}
                  </h3>

                  {exercise.type === 'qcm' && (
                    <div className="space-y-3">
                      {exercise.options?.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name={exercise.id}
                            value={optionIndex.toString()}
                            checked={selectedAnswers[exercise.id] === optionIndex.toString()}
                            onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                            className="text-blue-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                      
                      {showResults && selectedAnswers[exercise.id] && (
                        <div className={`mt-4 p-4 rounded-lg ${
                          parseInt(selectedAnswers[exercise.id]) === exercise.correct 
                            ? 'bg-green-50 border border-green-200' 
                            : 'bg-red-50 border border-red-200'
                        }`}>
                          <p className={`font-semibold ${
                            parseInt(selectedAnswers[exercise.id]) === exercise.correct 
                              ? 'text-green-800' 
                              : 'text-red-800'
                          }`}>
                            {parseInt(selectedAnswers[exercise.id]) === exercise.correct ? '✓ Correct !' : '✗ Incorrect'}
                          </p>
                          <p className="text-gray-700 mt-2">{exercise.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {exercise.type === 'reflexion' && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Points à développer :</h4>
                      <ul className="text-yellow-800 space-y-1">
                        {exercise.points?.map((point, pointIndex) => (
                          <li key={pointIndex}>• {point}</li>
                        ))}
                      </ul>
                      <textarea
                        className="w-full mt-4 p-3 border border-gray-300 rounded-lg"
                        rows={6}
                        placeholder="Rédigez votre analyse ici..."
                      />
                    </div>
                  )}

                  {exercise.type === 'analyse' && (
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Structure d&apos;analyse :</h4>
                      <div className="space-y-3">
                        {Object.entries(exercise.structure || {}).map(([key, value]) => (
                          <div key={key} className="bg-white p-3 rounded border">
                            <h5 className="font-medium text-blue-800">{key} :</h5>
                            <p className="text-blue-700 text-sm">{value}</p>
                            <textarea
                              className="w-full mt-2 p-2 border border-gray-300 rounded"
                              rows={3}
                              placeholder="Développez votre analyse..."
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={checkAnswers}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Vérifier les réponses
              </button>
              <button
                onClick={resetExercises}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Recommencer
              </button>
            </div>

            <NavigationButtons 
              previousPage={{
                href: "/cas-pratiques",
                title: "Cas Pratiques"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}