'use client';

import Link from 'next/link';

import { LogoutButton } from '../auth/logout-button';
import { ThemeToggle } from '../theme-toggle';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 text-xl border-b-2 border-gray-200 shadow-sm">
      <Link href="home" className="font-bold">
        Calcifer
      </Link>

      {/* settings stuff */}
      <div className="flex gap-x-3">
        <ThemeToggle />
        <LogoutButton>Leave.</LogoutButton>
      </div>
    </div>
  );
};

export default Navbar;
