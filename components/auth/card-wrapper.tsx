'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { BackButton } from './back-button';
import { Header } from './header';
import { Social } from './social';

interface CardWrapperProps {
  children: React.ReactNode;
  title?: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  title,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  const [displayBackButton, setDisplayBackButton] = useState(true);

  useEffect(() => {
    if (backButtonHref === '') {
      setDisplayBackButton(false);
    }
  }, [backButtonHref]);

  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={title || 'calcifer'} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      {displayBackButton && (
        <CardFooter>
          <BackButton href={backButtonHref} label={backButtonLabel} />
        </CardFooter>
      )}
    </Card>
  );
};
