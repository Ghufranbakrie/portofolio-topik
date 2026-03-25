import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ButterflyProps {
  id: number;
}

const Butterfly: React.FC<ButterflyProps> = ({ id }) => {
  const [position, setPosition] = useState({ x: -100, y: Math.random() * 100 });
  const [size] = useState(0.4 + Math.random() * 1.2);
  const [color] = useState(['#2c694e', '#002d1c', '#b1f0ce', '#76b394'][Math.floor(Math.random() * 4)]);
  const [duration] = useState(15 + Math.random() * 10);

  return (
    <motion.div
      initial={{ x: -100, y: `${Math.random() * 100}vh`, opacity: 0 }}
      animate={{ 
        x: '110vw', 
        y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
        opacity: [0, 0.4, 0.4, 0]
      }}
      transition={{ 
        duration: duration, 
        ease: "linear",
        repeat: Infinity,
        delay: Math.random() * 20
      }}
      className="fixed pointer-events-none z-40"
      style={{ scale: size }}
    >
      <div className="relative preserve-3d">
        <motion.div 
          animate={{ rotateY: [0, 85, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-3.5 h-[18px] rounded-[50%_50%_20%_80%] origin-right -left-3.5 shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
          style={{ backgroundColor: color }}
        />
        <motion.div 
          animate={{ rotateY: [0, -85, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-3.5 h-[18px] rounded-[50%_50%_80%_20%] origin-left shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

export const ButterflyEffect: React.FC = () => {
  const [butterflies] = useState(() => Array.from({ length: 6 }, (_, i) => i));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {butterflies.map((id) => (
        <Butterfly key={id} id={id} />
      ))}
    </div>
  );
};
