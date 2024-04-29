'use client';

import { fortunes } from '@/gameinfo/fortunes';
import { randomNum } from '@/lib/game-utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FortuneBallItself = ({ updatePaid }: any) => {
  const [fortune, setFortune] = useState('shake to reveal ur future');

  const pickFortune = () => {
    return fortunes[randomNum(0, fortunes.length)];
  };

  const onShake = () => {
    setFortune('shakin');

    setTimeout(() => {
      const fortune = pickFortune();

      if (fortune === '') {
        setFortune('your death is imminent.');
      } else {
        setFortune(pickFortune);
      }
    }, 1000);

    // need to make it so u can't keep shaking
  };

  return (
    <motion.div
      whileTap={{
        x: [10, -10, 20, -20, 10, -10, 15, -15, 5, -5],
      }}
      className="select-none w-1/2 h-1/2 bg-purple-700 rounded-full flex items-center justify-center text-center text-xl shadow-dm p-20 overflow-hidden"
      onMouseDown={onShake}
    >
      {fortune}
    </motion.div>
  );
};

export default FortuneBallItself;
