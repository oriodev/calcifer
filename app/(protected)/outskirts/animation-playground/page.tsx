'use client';

import { Button } from '@/components/ui/button';
import {
  AnimatePresence,
  backIn,
  backInOut,
  backOut,
  easeIn,
  motion,
} from 'framer-motion';
import { useState } from 'react';
import { FallingButton } from './_components/falling-button';

const AnimationPlayground = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="grid place-content-center min-h-screen gap-1">
      <FallingButton x={-500} />
      <FallingButton x={-200} />
      {/*<FallingButton x={100} />
      <FallingButton x={300} />
      <FallingButton x={600} /> */}

      {/* <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: '90deg',
              scale: 1,
              y: 400,
            }}
            exit={{
              rotate: '0deg',
              scale: 0,
              y: -200,
            }}
            transition={{
              duration: 1,
              // type: 'spring',
              ease: backInOut,
            }}
            className="w-[150px] h-[150px] bg-white"
          ></motion.div>
        )}
      </AnimatePresence>
      <Button
        className="mt-10"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        hide/show
      </Button> */}
    </div>
  );
};

export default AnimationPlayground;
