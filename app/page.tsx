import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import Link from 'next/link';
import { RegisterButton } from '@/components/auth/register-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-600">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          <Link href="/">🔥 calcifer</Link>
        </h1>
        <p className="text-white text-lg">
          a lil web game set in the magical town of calcifer.
        </p>
        <div className="flex justify-center gap-4 w-full items-center">
          <LoginButton>
            <Button size="lg" variant="secondary">
              sign in
            </Button>
          </LoginButton>
          <RegisterButton>
            <Button size="lg" variant="secondary">
              register
            </Button>
          </RegisterButton>
        </div>
      </div>
    </main>
  );
}
