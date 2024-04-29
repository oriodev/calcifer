'use client';

import { useRouter } from 'next/navigation';
import { GiReturnArrow } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface DisplayCoins {
  iconSize: number;
}

const BackButton = ({ iconSize }: DisplayCoins) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <motion.div
      className="flex gap-x-1 justify-center items-center hover:cursor-pointer"
      whileHover={{
        rotate: '180deg',
      }}
      onClick={handleClick}
    >
      <GiReturnArrow size={iconSize} />
    </motion.div>
  );
};

export default BackButton;
