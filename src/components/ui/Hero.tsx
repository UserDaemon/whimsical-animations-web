
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type HeroProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

const Hero = ({ title, subtitle, children }: HeroProps) => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-blue overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-indigo-700/70"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl animate-floating"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
