'use client';

import { deleteLetter, markLetterAsRead } from '@/actions/letter-buttons';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const LetterBoxCardButtons = ({ letter }: any) => {
  const router = useRouter();

  const onDeleteLetter = async (letter: any) => {
    const deletedLetter = await deleteLetter(letter);

    if (deletedLetter?.success) {
      router.refresh();
    }
  };

  const onMarkRead = async (letter: any) => {
    const markRead = await markLetterAsRead(letter);

    if (markRead?.success) {
      router.refresh();
    }
  };

  const onReply = () => {
    router.push('/town/post-office');
  };

  return (
    <div className="flex flex-row gap-x-3">
      <Button
        onClick={() => {
          onMarkRead(letter);
        }}
        variant="secondary"
      >
        {letter.read ? 'mark unread' : 'mark read'}
      </Button>
      <Button
        onClick={async () => {
          onDeleteLetter(letter);
        }}
        variant="secondary"
      >
        delete
      </Button>
      <Button
        onClick={() => {
          onReply();
        }}
        variant="secondary"
      >
        reply
      </Button>
    </div>
  );
};

export default LetterBoxCardButtons;
