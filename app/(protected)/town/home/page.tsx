import DoOnboarding from '@/components/home/do-onboarding';
import UserCard from '@/components/home/user-card';
import LetterBox from '@/components/mail/letter-box';
import { currentUser } from '@/lib/auth';
import React from 'react';

const HomePage = async () => {
  const user = await currentUser();
  const onboardingComplete = user?.onboardingComplete;

  return (
    <div className="flex justify-between m-10">
      {onboardingComplete ? <UserCard /> : <DoOnboarding />}

      <LetterBox />
    </div>
  );
};

export default HomePage;
