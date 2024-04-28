import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GiWantedReward } from 'react-icons/gi';
import { Button } from '../ui/button';
import Link from 'next/link';

const DoOnboarding = () => {
  return (
    <Card className="w-1/3 mt-5 text-xl">
      <CardHeader>
        <CardTitle className="flex gap-x-3 justify-center items-center">
          <GiWantedReward size={36} />
          <p className="text-3xl">onboarding not complete</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Button>
          <Link href="/auth/onboarding">check in to continue</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoOnboarding;
