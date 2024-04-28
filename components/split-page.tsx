import React from 'react';

interface SplitPageProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
}

const SplitPage = ({ leftSide, rightSide }: SplitPageProps) => {
  return (
    <div className="flex flex-row h-screen overflow-y-hidden">
      {/* Left half */}
      <div className="flex-1 flex bg-gradient-to-b from-slate-900 to-slate-600">
        <div className="flex-1 flex justify-center items-center">
          {leftSide}
        </div>
      </div>

      {/* Right half */}
      <div className="flex-1 flex bg-background text-foreground">
        <div className="flex-1 flex justify-center items-center">
          {rightSide}
        </div>
      </div>
    </div>
  );
};

export default SplitPage;
