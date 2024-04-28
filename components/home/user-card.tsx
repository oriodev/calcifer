import React from 'react';

import { GiBookshelf } from 'react-icons/gi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { currentUser } from '@/lib/auth';
import Image from 'next/image';

const UserCard = async () => {
  const user = await currentUser();
  const userName = user?.name || 'ghostie';

  return (
    <Card className="mt-5 w-1/3 text-xl">
      <CardHeader>
        <CardTitle className="flex gap-x-3">
          <GiBookshelf />
          {userName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-x-5">
          <div>
            <Image
              src={`/playable-characters/chara${user?.character}.png`}
              alt=""
              width={200}
              height={100}
            />
          </div>
          <div>
            <p>
              <strong>tavern room: </strong> {user?.tavernNumber}
            </p>
            <p>
              <strong>strength: </strong> {user?.strength}
            </p>
            <p>
              <strong>weakness: </strong> {user?.weakness}
            </p>

            <br />

            <p>
              <strong>background</strong>
            </p>
            <p>{user?.background}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
