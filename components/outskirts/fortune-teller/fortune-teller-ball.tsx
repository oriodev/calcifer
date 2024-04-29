import React from 'react';
import FortuneBallItself from './fortune-ball-itself';

const FortuneTellerBall = ({ updatePaid, paid }: any) => {
  return (
    <div className="h-full w-full bg-indigo-950 flex justify-center items-center">
      <FortuneBallItself updatePaid={updatePaid} />
    </div>
  );
};

export default FortuneTellerBall;
