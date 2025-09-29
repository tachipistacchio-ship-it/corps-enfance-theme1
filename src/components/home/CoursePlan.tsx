'use client';

import { Target, Rocket, BarChart3, Users, Brain, HelpCircle, Award, PenTool } from 'lucide-react';
import SectionBlock from './SectionBlock';

export default function CoursePlan() {
  const sections = [
    {
      title: "Introduction",
      description: "Concepts de base et définitions sur le corps et l'enfance préhistorique",
      href: "/introduction",
      icon: Rocket,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-50"
    },
    {
      title: "Section I - Le Corps au Paléolithique",
      description: "Représentations corporelles et symbolisme dans l'art préhistorique",
      href: "/section-1",
      icon: BarChart3,
      color: "text-green-600",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-50"
    },
    {
      title: "Section II - L'Enfance Préhistorique",
      description: "Traces archéologiques et interprétations de l'enfance au Paléolithique",
      href: "/section-2",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-50"
    },
    {
      title: "Section III - Parentalité et Société",
      description: "Structures familiales et rôles parentaux dans les sociétés préhistoriques",
      href: "/section-3",
      icon: Brain,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      hoverColor: "hover:bg-indigo-50"
    },
    {
      title: "Quiz",
      description: "Évaluation interactive de vos connaissances acquises",
      href: "/quiz",
      icon: HelpCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      hoverColor: "hover:bg-orange-50"
    },
    {
      title: "Cas Pratiques",
      description: "Exercices d'application et analyse de cas concrets",
      href: "/cas-pratiques",
      icon: Award,
      color: "text-violet-600",
      bgColor: "bg-violet-100",
      hoverColor: "hover:bg-violet-50"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
          Suivez ce parcours structuré pour maîtriser tous les aspects du sujet
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={index}
            {...section}
          />
        ))}
        <SectionBlock
          title="Exercices d'Application"
          description="Testez vos connaissances avec des QCM et exercices de réflexion sur les femmes préhistoriques"
          href="/exercices"
          bgColor="bg-gradient-to-br from-teal-500 to-cyan-600"
          color="text-white"
          hoverColor="hover:from-teal-600 hover:to-cyan-700"
          icon={PenTool}
        />
      </div>
    </div>
  );
}