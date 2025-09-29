import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BackToPlanButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="mb-4 sm:mb-6"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 bg-white/80 hover:bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Retour au plan</span>
      </Link>
    </motion.div>
  );
}