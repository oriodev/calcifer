import { GiCampfire, GiVitruvianMan } from 'react-icons/gi';
import { Card, CardContent, CardHeader } from '../ui/card';
import { currentUser } from '@/lib/auth';

const OnboardingInfo = async () => {
  // get all the current user information.
  const user = await currentUser();

  // set the tavern room number for the user.
  const tavernRoomNumber = user?.tavernNumber;

  return (
    <div className="flex justify-center">
      <Card className="w-3/4">
        <CardHeader className="w-full flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-row gap-x-3">
            <GiCampfire size={36} />
            <p className="text-3xl font-semibold">welcome to calcifer!</p>
          </div>
          <p className="text-muted-foreground">
            you take your first steps into town. the sky is dark. the cobbled
            path is lit by jars of fire, suspended in midair as if by magic. you
            cannot see anybody, but you can sense that you are not alone. there
            is a chill in the air. you wrap your cloak tighter around your
            shoulders and soldier on in search of the{' '}
            <strong>small death tavern</strong>, where{' '}
            <strong>room {tavernRoomNumber} </strong>
            is awaiting you.
          </p>
        </CardHeader>
        <CardContent>
          <div className="text-justify text-muted-foreground">
            <p>
              you follow a moulded, wooden signpost down a winding back alley,
              over a small cobbled bridge, and past what you can only assume was
              once a public library, but now appears to be either a brothel or
              perhaps an oddly advertised potion store. you make eye contact
              with a demon exiting the building, and hurry on before they can
              approach you.
            </p>

            <br />

            <p>
              you make it to the small death tavern. on the outside, it appears
              on the edge of collapse, but on the inside, it is full of life.
              drink and song abound. creatures of every walk of life crowd
              around tables, playing games and swapping local gossip.
            </p>

            <br />

            <p>
              you make your way to the bar and ask for your room. the bartender
              slaps a wad of paperwork on the table and shoves a quill into your
              hand. you glance down at it wearily and get to work.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingInfo;
