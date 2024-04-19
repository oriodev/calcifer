'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';
import { socialSignIn } from '@/lib/utils';

// login buttons for logging in via google or github (socials)
export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      {/* google button */}
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => socialSignIn('google')}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

      {/* github button */}
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => socialSignIn('github')}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
