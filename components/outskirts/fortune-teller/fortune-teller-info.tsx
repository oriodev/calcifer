'use client';

import { spendCoins } from '@/actions/spend-coins';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import React, { useState } from 'react';

const FortuneTellerInfo = ({ updatePaid, paid }: any) => {
  const cost = 5;

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const handlePay = async () => {
    await spendCoins(cost).then((data) => {
      if (data.error) {
        setError(data.error);
      }

      if (data.success) {
        updatePaid(true);
        setSuccess(data.success);
      }
    });
  };

  return (
    <div className="w-full h-full bg-slate-950 flex justify-center items-center">
      <Card className="w-1/2 border-dashed border-2">
        <CardHeader className="flex justify-center">
          <div className="text-center text-4xl font-semibold">
            lilith&apos;s tent
          </div>
          {/* <CardDescription className="flex justify-center gap-3">
            <div>
              <GiHangingSign size={30} />
              <p className="text-lg">
                fortune telling: 5 coins - no refunds!!!
              </p>
            </div>
          </CardDescription> */}
        </CardHeader>

        <CardContent className="flex flex-col text-center justify-center gap-5 mt-5">
          <div className="flex justify-center">
            <Image
              alt="lilith"
              src="/npcs/lilith.png"
              width="200"
              height="200"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <p>
              people travel from across the lands to see such a renowned and
              powerful fortune teller. it is said that once your fortune is read
              by lilith, your fate is sealed. suspended crystals swing gently
              above the doorway, and a waft of lavender and jasmine emanates
              from inside her tent.
            </p>
            <p>would you like to know what the future holds?</p>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button onClick={handlePay} disabled={paid}>
              pay up: 5 coins for unlimited shakes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FortuneTellerInfo;
