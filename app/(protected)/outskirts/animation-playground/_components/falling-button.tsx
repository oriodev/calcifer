'use client';

import {
  AnimatePresence,
  backIn,
  backInOut,
  backOut,
  easeIn,
  motion,
} from 'framer-motion';

export const FallingButton = ({ x }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          rotate: '0deg',
          scale: 0,
          x: x,
          y: -500,
        }}
        animate={{
          rotate: '90deg',
          scale: 1,
          y: 200,
        }}
        exit={{
          rotate: '0deg',
          scale: 0,
          x: x,
          y: -500,
        }}
        transition={{
          duration: 1,
          // type: 'spring',
          ease: backInOut,
        }}
        className="w-[150px] h-[150px] bg-white"
      ></motion.div>
    </AnimatePresence>
  );
};
