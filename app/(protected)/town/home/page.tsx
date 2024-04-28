import UserCard from '@/components/home/user-card';
import LetterBox from '@/components/mail/letter-box';
import React from 'react';

const HomePage = async () => {
  return (
    <div className="flex justify-between">
      <UserCard />
      <LetterBox />
    </div>
  );
};

export default HomePage;
