import OnboardingForm from '@/components/onboarding/onboarding-form';
import OnboardingInfo from '@/components/onboarding/onboarding-info';
import React from 'react';

const OnboardingPage = async () => {
  return (
    <div className="min-h-screen w-full flex flex-row">
      {/* info about onboarding */}
      <div className="justify-center items-center flex-1 hidden md:flex bg-gradient-to-b from-slate-900 to-slate-600">
        <OnboardingInfo />
      </div>

      {/* the actual onboarding form */}
      <div className="flex justify-center items-center flex-1 bg-background text-foreground">
        <OnboardingForm />
      </div>
    </div>
  );
};

export default OnboardingPage;
