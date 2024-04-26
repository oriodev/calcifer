import Navbar from '@/components/home/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { currentUser } from '@/lib/auth';
import React from 'react';

const HomePage = async () => {
  const user = await currentUser();
  const userName = user?.name || 'ghostie';

  return (
    <div className="">
      <Navbar />
      <Card className="mt-5 w-1/3 text-xl">
        <CardHeader>
          <CardTitle>{userName}</CardTitle>
        </CardHeader>
        <CardContent>here is a lil info abt u!</CardContent>
      </Card>
    </div>
  );
};

export default HomePage;

{
  /* <UserButton /> */
}
