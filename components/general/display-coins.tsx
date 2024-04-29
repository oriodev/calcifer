import { useCurrentUser } from '@/hooks/use-current-user';
import { GiCoins } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface DisplayCoins {
  textSize: string;
  iconSize: number;
}

const DisplayCoins = ({ textSize, iconSize }: DisplayCoins) => {
  const user = useCurrentUser();
  const coins = user?.coins || 0;

  return (
    <motion.div
      className="flex gap-x-1 justify-center items-center"
      whileHover={{
        scale: 1.2,
      }}
    >
      <GiCoins size={iconSize} />
      <p className={`${textSize}`}>{coins}</p>
    </motion.div>
  );
};

export default DisplayCoins;
