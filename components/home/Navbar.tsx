'use client';

import Link from 'next/link';

import { LogoutButton } from '../auth/logout-button';
import { ThemeToggle } from '../theme-toggle';
import { GiCampfire, GiExitDoor, GiLoveLetter } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 text-xl border-b-2 border-gray-200 shadow-sm">
      <Link href="home" className="font-bold flex gap-x-3">
        <GiCampfire size={32} />
        Calcifer
      </Link>

      <Link href="home" className="flex gap-x-3">
        <GiLoveLetter size={32} />
        Message Board
      </Link>

      <ThemeToggle />

      {/* settings stuff */}
      <div className="flex gap-x-5">
        <LogoutButton>
          <div className="flex items-center gap-x-3">
            <GiExitDoor /> Leave.
          </div>
        </LogoutButton>
      </div>
    </div>
  );
};

export default Navbar;
