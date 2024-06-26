'use client';

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { SendLetterSchema } from '@/schemas/town';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { GiPostStamp } from 'react-icons/gi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';
import { sendLetter } from '@/actions/send-letter';
import { SelectItemIndicator, SelectItemText } from '@radix-ui/react-select';

interface SendMessageFormProps {
  users: any;
  coins: number;
}

const SendMessageForm = ({ users, coins }: SendMessageFormProps) => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const [isPending, startTransition] = useTransition();

  // this defines the form w/ zod for validation/schema stuff
  const form = useForm<z.infer<typeof SendLetterSchema>>({
    resolver: zodResolver(SendLetterSchema),
    defaultValues: {
      user: '',
      message: '',
    },
  });

  // -----
  // users
  // -----

  const allUsers = users;

  const cost = 1;

  // handles submit obvs
  const onSubmit = (values: z.infer<typeof SendLetterSchema>) => {
    // gives u 'is pending' while it's loading so u can't edit fields during that time
    startTransition(() => {
      if (coins - cost < 0) {
        setError('ur too poor sorry :(');
      } else {
        sendLetter(values, cost).then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            setSuccess(data.success);
            // form.reset();
            window.location.reload();
          }
        });
      }
    });
  };

  return (
    <div className="w-full flex justify-center">
      <Card
        className="w-3/4 bg-background max-h-[80vh] overflow-y-auto"
        // style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <CardHeader className="w-full flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-row gap-x-3">
            <GiPostStamp size={36} />
            <p className="text-3xl font-semibold">send a letter</p>
          </div>
          <p className="text-muted-foreground text-center">
            stamps cost 1 coin.
            <br />
            you have {coins} coins.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center"></div>
          {/* we're using shadcn form stuff here */}
          <Form {...form}>
            {/* this handles on submit */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4"></div>

              {/* ------------------------------- */}
              {/* pick user to send the letter to */}
              {/* ------------------------------- */}

              <FormField
                control={form.control}
                name="user"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>write the address</FormLabel>
                    <Select
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="..." />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {Array.from({
                          length: allUsers.length,
                        }).map((_, index) => (
                          <SelectItem key={index} value={allUsers[index].id}>
                            <div className="p-0 m-0 text-left">
                              <div>{`${allUsers[index].name}`}</div>
                              <div>{`tavern room ${allUsers[index].tavernNumber}, calcifer`}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* message. */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[200px]"
                        placeholder={`what do you want to say?`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* display response mssgs after register attempt */}
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className="w-full">
                send letter
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendMessageForm;
