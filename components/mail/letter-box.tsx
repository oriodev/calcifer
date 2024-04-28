import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { GiLoveLetter } from 'react-icons/gi';
import { currentUser } from '@/lib/auth';
import { getUsersLetters } from '@/data/letters';
import LetterBoxCard from './letter-box-card';

const LetterBox = async () => {
  const user = await currentUser();
  const userId = user?.id;

  // letter options
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };

  const letters = await getUsersLetters(userId || '0');

  const sortedLetters = letters?.sort((a, b) => {
    // Convert date strings to Date objects
    const dateA = new Date(a.sentDate);
    const dateB = new Date(b.sentDate);

    // Compare dates
    if (dateA > dateB) return -1; // If dateA is newer, put it before dateB
    if (dateA < dateB) return 1; // If dateB is newer, put it before dateA
    return 0; // If dates are equal, maintain current order
  });

  const unreadLettersCount = letters?.filter((letter) => !letter.read).length;

  return (
    <Card className="w-1/3 mt-5">
      <CardHeader className="flex flex-row gap-x-3 items-center">
        <GiLoveLetter size={36} />
        <h1 className="text-2xl font-semibold">
          letterbox ({unreadLettersCount})
        </h1>
      </CardHeader>
      <CardContent className="overflow-auto max-h-96 flex flex-col gap-5 break-all">
        {/* Render each letter as a separate card */}
        {letters?.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} options={options} />
        ))}
      </CardContent>
    </Card>
  );
};

export default LetterBox;
