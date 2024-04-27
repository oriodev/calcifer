import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

interface DemonCarouselFrameProps {
  num: number;
  width: number;
}

export const DemonCarouselFrame: React.FC<DemonCarouselFrameProps> = ({
  num,
  width,
}) => {
  return (
    <div>
      <CarouselItem className="h-full">
        <Card className="flex items-center justify-center h-full bg-white">
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <Image
              src={`/playable-characters/chara${num}.png`}
              alt=""
              width={width}
              height={100}
            />
          </CardContent>
        </Card>
      </CarouselItem>
    </div>
  );
};
