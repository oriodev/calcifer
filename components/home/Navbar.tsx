'use client';

import Link from 'next/link';

import { LogoutButton } from '../auth/logout-button';
import { ThemeToggle } from '../theme-toggle';
import {
  GiCampfire,
  GiExitDoor,
  GiLoveLetter,
  GiTavernSign,
} from 'react-icons/gi';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between bg-secondary items-center p-5 text-xl border-b-2 border-gray-200 shadow-sm">
      <h1
        className={`link ${
          pathname === '/town/home' ? 'active' : ''
        } font-semibold flex gap-x-3`}
      >
        <GiCampfire size={32} />
        Calcifer
      </h1>

      <Link
        href="/town/home"
        className={`link ${
          pathname === '/town/home' ? 'font-bold' : ''
        }  flex gap-x-3`}
      >
        <GiTavernSign size={32} />
        Small Death Tavern
      </Link>

      <Link
        href="/town/post-office"
        className={`link ${
          pathname === '/town/post-office' ? 'font-bold' : ''
        }  flex gap-x-3`}
      >
        <GiLoveLetter size={32} />
        Post Office
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
