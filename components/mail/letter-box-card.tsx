import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GiLoveLetter } from 'react-icons/gi';
import LetterBoxCardButtons from './letter-box-card-buttons';

const LetterBoxCard = ({ letter, options }: any) => {
  return (
    <Dialog>
      <DialogTrigger className="text-left">
        <div
          className={`p-4 border border-gray-200 flex justify-between hover:bg-blue-900 hover:cursor-pointer ${
            letter.read ? 'bg-gray-900' : 'bg-red-900'
          }`}
        >
          <div>
            <p className="text-lg font-semibold">from: {letter.senderName}</p>
            <p className="text-sm">{letter.message.slice(0, 50)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">
              {new Date(letter.sentDate).toLocaleDateString(undefined, options)}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="h-1/2 overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex flex-row gap-x-3">
            <GiLoveLetter size={36} />
            this is a letter from {letter.senderName}
          </DialogTitle>
          <LetterBoxCardButtons letter={letter} />
          <DialogDescription className="pt-5 break-all text-lg ">
            {letter.message}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LetterBoxCard;
