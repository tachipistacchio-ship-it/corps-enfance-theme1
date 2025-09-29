'use client';

import { BookOpen, Clock, Target } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl mb-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm flex-shrink-0">
          <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
        
        <div className="flex-1 w-full">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
            Corps, Enfance et Parentalité au Paléolithique Supérieur
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
            Découvrez les aspects sociaux et culturels de la préhistoire à travers l&apos;étude du corps, de l&apos;enfance et des relations familiales au Paléolithique supérieur.
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Target className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Expert</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">4h 15min</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}