'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Eye, EyeOff, Lightbulb } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

interface CasePractice {
  id: number;
  title: string;
  context: string;
  question: string;
  elements: string[];
  correction: string;
  methodology: string[];
}

const cases: CasePractice[] = [
  {
    id: 1,
    title: "Analyse d'une sépulture d'enfant",
    context: "Lors de fouilles archéologiques, vous découvrez la sépulture d'un enfant du Paléolithique supérieur. Le squelette, âgé d'environ 8 ans, est accompagné de plusieurs objets : des perles en ivoire, un petit couteau en silex, des coquillages perforés et des traces d'ocre rouge sur les os.",
    question: "Analysez cette découverte et proposez une interprétation sur le statut social de cet enfant dans sa communauté.",
    elements: [
      "Âge de l'enfant (8 ans)",
      "Présence de mobilier funéraire varié",
      "Utilisation d'ocre rouge",
      "Qualité des objets (ivoire, silex taillé)",
      "Coquillages (origine lointaine possible)"
    ],
    correction: "Cette sépulture révèle un statut social élevé de l'enfant. Le mobilier funéraire riche (perles d'ivoire, coquillages exotiques) indique une position privilégiée dans la communauté. L'ocre rouge suggère des pratiques rituelles élaborées. La présence d'un outil (couteau en silex) montre que l'enfant était déjà intégré dans les activités techniques. Cette découverte témoigne d'une société où le statut social peut être acquis dès le plus jeune âge, probablement par héritage familial.",
    methodology: [
      "Identifier tous les éléments matériels présents",
      "Analyser la provenance et la valeur des objets",
      "Comparer avec d'autres sépultures contemporaines",
      "Interpréter les pratiques rituelles (ocre)",
      "Contextualiser dans l'organisation sociale paléolithique"
    ]
  },
  {
    id: 2,
    title: "Interprétation d'empreintes dans une grotte",
    context: "Dans une grotte ornée, vous identifiez une série d'empreintes de mains et de pieds de différentes tailles. Les analyses révèlent des mains d'adultes, d'adolescents et d'enfants. Certaines empreintes se superposent, d'autres sont isolées. La grotte contient également des peintures animales et des signes géométriques.",
    question: "Que nous apprennent ces empreintes sur l'utilisation de la grotte et la participation des enfants aux activités artistiques ?",
    elements: [
      "Empreintes de différents âges",
      "Superposition de certaines traces",
      "Présence d'art pariétal",
      "Localisation dans une grotte ornée",
      "Variété des tailles d'empreintes"
    ],
    correction: "Ces empreintes témoignent d'une utilisation collective de la grotte impliquant toute la communauté, y compris les enfants. La superposition suggère des visites répétées dans le temps. La présence d'enfants dans un espace orné indique leur participation aux activités artistiques et rituelles, contredisant l'idée d'une exclusion des plus jeunes des pratiques symboliques. Cette découverte révèle un processus d'apprentissage et de transmission culturelle où les enfants sont progressivement initiés aux pratiques artistiques et spirituelles de leur groupe.",
    methodology: [
      "Mesurer et classer les empreintes par âge",
      "Analyser la stratigraphie des superpositions",
      "Étudier la relation spatiale avec l'art pariétal",
      "Comparer avec d'autres sites similaires",
      "Interpréter les pratiques sociales et éducatives"
    ]
  },
  {
    id: 3,
    title: "Analyse d'une Vénus paléolithique",
    context: "Vous étudiez une statuette féminine du Paléolithique supérieur découverte dans un habitat. Cette 'Vénus' présente des formes généreuses, un visage sans traits, des seins et hanches proéminents, et des jambes qui se terminent en pointe. Elle mesure 11 cm et est sculptée dans de l'ivoire de mammouth.",
    question: "Proposez une interprétation de cette statuette en considérant les différentes hypothèses sur la fonction des Vénus paléolithiques.",
    elements: [
      "Morphologie caractéristique (formes généreuses)",
      "Absence de traits faciaux",
      "Matériau précieux (ivoire)",
      "Taille réduite (11 cm)",
      "Contexte de découverte (habitat)"
    ],
    correction: "Cette statuette peut être interprétée selon plusieurs hypothèses complémentaires. L'hypothèse religieuse suggère une déesse-mère liée à la fertilité, soutenue par l'emphase sur les attributs reproducteurs. L'hypothèse sociale propose une représentation de statuts particuliers ou d'idéaux esthétiques. Le matériau précieux et le contexte domestique suggèrent un objet personnel important. L'absence de traits faciaux pourrait indiquer une représentation universelle plutôt qu'individuelle. Cette Vénus témoigne de la complexité symbolique des sociétés paléolithiques et de l'importance accordée à la représentation du corps féminin.",
    methodology: [
      "Décrire précisément la morphologie",
      "Analyser le choix du matériau et sa signification",
      "Contextualiser la découverte",
      "Comparer avec d'autres Vénus contemporaines",
      "Évaluer les différentes hypothèses interprétatives"
    ]
  }
];

export default function CasPratiquesPage() {
  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});
  const [showMethodology, setShowMethodology] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (caseId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  const toggleMethodology = (caseId: number) => {
    setShowMethodology(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Cas Pratiques
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Exercices d&apos;application et analyse de cas concrets
            </p>
          </div>

          <div className="bg-violet-50 border-l-4 border-violet-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
            <h3 className="text-violet-900 font-semibold mb-2 text-base sm:text-lg">📋 Instructions</h3>
            <p className="text-violet-800 text-sm sm:text-base">
              Pour chaque cas pratique, lisez attentivement le contexte, analysez les éléments fournis, 
              puis formulez votre interprétation avant de consulter la correction et la méthodologie.
            </p>
          </div>

          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-violet-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Cas {caseItem.id} : {caseItem.title}
                  </h2>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">📖 Contexte</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {caseItem.context}
                  </p>
                  
                  <h3 className="font-semibold text-gray-900 mb-3">❓ Question</h3>
                  <p className="text-gray-700 font-medium">
                    {caseItem.question}
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3">🔍 Éléments à analyser</h3>
                  <ul className="space-y-2">
                    {caseItem.elements.map((element, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-blue-800">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => toggleCorrection(caseItem.id)}
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                  >
                    {showCorrection[caseItem.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showCorrection[caseItem.id] ? 'Masquer' : 'Voir'} la correction
                  </button>
                  
                  <button
                    onClick={() => toggleMethodology(caseItem.id)}
                    className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
                  >
                    <Lightbulb className="h-4 w-4" />
                    {showMethodology[caseItem.id] ? 'Masquer' : 'Voir'} la méthodologie
                  </button>
                </div>

                {showCorrection[caseItem.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4"
                  >
                    <h3 className="font-semibold text-green-900 mb-3">✅ Correction</h3>
                    <p className="text-green-800 leading-relaxed">
                      {caseItem.correction}
                    </p>
                  </motion.div>
                )}

                {showMethodology[caseItem.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-orange-50 border border-orange-200 p-6 rounded-lg"
                  >
                    <h3 className="font-semibold text-orange-900 mb-3">🔧 Méthodologie</h3>
                    <ol className="space-y-2">
                      {caseItem.methodology.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-orange-800">
                          <span className="bg-orange-200 text-orange-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-violet-900 mb-4">🎯 Conseils pour l&apos;analyse</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-violet-800 mb-2">📝 Approche méthodique</h4>
                <ul className="text-violet-700 space-y-1 text-sm">
                  <li>• Lisez attentivement le contexte</li>
                  <li>• Identifiez tous les éléments matériels</li>
                  <li>• Formulez des hypothèses</li>
                  <li>• Argumentez vos interprétations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-violet-800 mb-2">🔍 Points d&apos;attention</h4>
                <ul className="text-violet-700 space-y-1 text-sm">
                  <li>• Contexte chronologique et géographique</li>
                  <li>• Comparaisons avec d&apos;autres découvertes</li>
                  <li>• Limites de l&apos;interprétation</li>
                  <li>• Approche multidisciplinaire</li>
                </ul>
              </div>
            </div>
          </div>

          <NavigationButtons
            previousPage={{
              href: "/quiz",
              title: "Quiz d'évaluation"
            }}
            nextPage={{
              href: "/exercices",
              title: "Exercices d'Application"
            }}
          />
        </div>
      </div>
    </div>
  );
}