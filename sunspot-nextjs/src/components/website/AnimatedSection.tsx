'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimatedSectionProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40 };
      case 'down':
        return { opacity: 0, y: -40 };
      case 'left':
        return { opacity: 0, x: -50 };
      case 'right':
        return { opacity: 0, x: 50 };
      case 'none':
        return { opacity: 0 };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
