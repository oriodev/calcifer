'use client';

import { OnboardingSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CardWrapper } from './card-wrapper';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const OnboardingForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const [isPending, startTransition] = useTransition();

  // this defines the form w/ zod for validation/schema stuff
  const form = useForm<z.infer<typeof OnboardingSchema>>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {},
  });

  // handles submit obvs
  const onSubmit = (values: z.infer<typeof OnboardingSchema>) => {
    // gives u 'is pending' while it's loading so u can't edit fields during that time
    startTransition(() => {
      setError('');
      setSuccess('');
    });
  };

  return (
    <CardWrapper
      headerLabel="time to create ur character"
      backButtonLabel=""
      backButtonHref=""
    >
      {/* we're using shadcn form stuff here */}
      <Form {...form}>
        {/* this handles on submit */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="character"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>character</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="1, 2, 3, etc."
                      type="input"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* display response mssgs after register attempt */}
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">
            create character
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default OnboardingForm;
