'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  hoverColor: string;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  hoverColor
}: SectionBlockProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href}>
        <div className={`bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group ${hoverColor}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 w-full sm:w-auto">
              <div className={`${bgColor} p-2 sm:p-2.5 lg:p-3 rounded-full flex-shrink-0`}>
                <Icon className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${bgColor} ${color} px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-full font-medium text-xs sm:text-sm hover:shadow-md transition-all duration-200 flex-shrink-0 w-full sm:w-auto text-center`}
            >
              Commencer
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}