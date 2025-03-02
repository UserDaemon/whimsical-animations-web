
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
};

const AnimatedCard = ({ icon, title, description, delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-blue-500 mb-4 animate-pulse-subtle">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
