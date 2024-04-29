'use client';

import FortuneTellerBall from '@/components/outskirts/fortune-teller/fortune-teller-ball';
import FortuneTellerInfo from '@/components/outskirts/fortune-teller/fortune-teller-info';
import FortuneTellerNotPaid from '@/components/outskirts/fortune-teller/fortune-teller-not-paid';
import SplitPage from '@/components/split-page';
import React, { useState } from 'react';

const FortuneTeller = () => {
  // state that holds whether you have paid for the ball or not. we could fully open and close it from out here i think??
  // yeah bc pass in a different page if not paid

  const [paid, setPaid] = useState(false);

  const updatePaid = (status: boolean) => {
    setPaid(status);
  };

  return (
    <div className="w-full h-full bg-indigo-950">
      <SplitPage
        leftSide={
          paid ? (
            <FortuneTellerBall updatePaid={updatePaid} />
          ) : (
            <FortuneTellerNotPaid />
          )
        }
        rightSide={<FortuneTellerInfo updatePaid={updatePaid} paid={paid} />}
      />
    </div>
  );
};

export default FortuneTeller;
