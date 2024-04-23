'use client';

import { CardWrapper } from './card-wrapper';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import { ResetSchema } from '@/schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

import { reset } from '@/actions/reset';
import { useState, useTransition } from 'react';

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const [isPending, startTransition] = useTransition();

  // this defines the form w/ zod for validation/schema stuff
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  // handles submit obvs
  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    // gives u 'is pending' while it's loading so u can't edit fields during that time
    startTransition(() => {
      setError('');
      setSuccess('');

      reset(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data.success);
        })
        .catch((error) => {
          console.log(error);
        });

      // login(values)
      //   .then((data) => {
      //     setError(data?.error);
      //     setSuccess(data.success);
      //   })
      //   .catch((error) => {
      //     console.log('probably ur just on /settings, refresh the page pls');
      //   });
    });
  };

  return (
    <CardWrapper
      headerLabel="reset password"
      backButtonLabel="go back to login"
      backButtonHref="/auth/login"
    >
      {/* we're using shadcn form stuff here */}
      <Form {...form}>
        {/* this handles on submit */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="email@email.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* display response mssgs after login attempt */}
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">
            send reset email.
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
