import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import {
  GiCampingTent,
  GiForestEntrance,
  GiMagicPalm,
  GiTentacleHeart,
} from 'react-icons/gi';

const Outskirts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full bg-emerald-800">
      {/* First Row */}
      <div className="bg-emerald-300 h-full"></div>
      <div className="bg-emerald-400 h-full"></div>
      <div className="bg-emerald-500 h-full"></div>

      {/* -------------- */}
      {/* fortune teller */}
      {/* -------------- */}

      <div className="bg-emerald-600 h-full flex flex-col justify-center items-center gap-y-10">
        <div className="flex flex-col justify-center text-center">
          <div className="flex gap-x-3">
            <GiCampingTent size={40} />
            <p className="text-4xl font-black">lilith&apos;s tent</p>
            <GiMagicPalm size={40} />
          </div>

          <div className="">
            <p className="text-sm italic text-center">
              step inside, if you dare
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Button className="w-1/2">
            <Link href="/outskirts/fortune-teller">enter</Link>
          </Button>
        </div>
      </div>

      {/* ------------- */}
      {/* the outskirts */}
      {/* ------------- */}

      <div className="bg-emerald-700 h-full flex flex-col justify-center items-center gap-y-10">
        <div className="flex flex-col justify-center text-center">
          <div className="flex gap-x-3">
            <GiForestEntrance size={50} />
            <p className="text-5xl font-black">outskirts</p>
            <GiForestEntrance size={50} />
          </div>

          <div>
            <p className="text-sm italic">beware!</p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Button className="w-1/2">
            <Link href="/town/home">leave</Link>
          </Button>
        </div>
      </div>
      <div className="bg-emerald-800 h-full"></div>
      {/* Third Row */}
      <div className="bg-emerald-900 h-full"></div>
      <div className="bg-emerald-300 h-full"></div>
      <div className="bg-emerald-400 h-full"></div>
    </div>
  );
};

export default Outskirts;
