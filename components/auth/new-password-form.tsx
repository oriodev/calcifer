'use client';

import { CardWrapper } from './card-wrapper';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import { NewPasswordSchema } from '@/schemas';

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

import { newPassword } from '@/actions/new-password';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

export const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [isPending, startTransition] = useTransition();

  // this defines the form w/ zod for validation/schema stuff
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "don't be boring",
    },
  });

  // handles submit obvs
  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    // gives u 'is pending' while it's loading so u can't edit fields during that time
    startTransition(() => {
      setError('');
      setSuccess('');

      newPassword(values, token)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="enter a new password"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="don't be boring"
                      type="password"
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
            reset password.
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
