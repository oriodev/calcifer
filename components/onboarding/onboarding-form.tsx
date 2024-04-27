'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useCurrentUser } from '@/hooks/use-current-user';

import { OnboardingSchema } from '@/schemas';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Textarea } from '../ui/textarea';

import { DemonCarousel } from './demon-carousel';

import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { GiVitruvianMan } from 'react-icons/gi';

import { characterStrengths, characterWeaknesses } from '@/gameinfo/charainfo';
import { onboarding } from '@/actions/onboarding';
import { useRouter } from 'next/navigation';

const OnboardingForm = () => {
  const router = useRouter();

  const user = useCurrentUser();
  const characterName = user?.name || 'ghostie';

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
      onboarding(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);

        if (data.success) {
          router.push('/home');
        }
      });

      setError('');
      setSuccess('');
    });
  };

  return (
    <div className="w-full flex justify-center">
      {' '}
      <Card
        className="w-3/4 bg-background max-h-[80vh] overflow-y-auto"
        // style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <CardHeader className="w-full flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-row gap-x-3">
            <GiVitruvianMan size={36} />
            <p className="text-3xl font-semibold">the paperwork</p>
          </div>
          <p className="text-muted-foreground">
            time to create your character.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <DemonCarousel />
          </div>
          {/* we're using shadcn form stuff here */}
          <Form {...form}>
            {/* this handles on submit */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                {/* character */}
                <FormField
                  control={form.control}
                  name="character"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>what do you look like?</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="select from the dropdown." />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value={'1'}>
                            purple dude with funky orange dress
                          </SelectItem>
                          <SelectItem value={'2'}>
                            blue dude with badass sword and wings
                          </SelectItem>
                          <SelectItem value={'3'}>
                            grey fawn dude with funky hat
                          </SelectItem>
                          <SelectItem value={'4'}>
                            grey-blue dude with funky gold boots
                          </SelectItem>
                          <SelectItem value={'5'}>
                            red dude with green wings and cool staff
                          </SelectItem>
                          <SelectItem value={'6'}>
                            orange dude with bone wings and horns
                          </SelectItem>
                          <SelectItem value={'7'}>
                            white dude with red-orange dress and green cloak
                          </SelectItem>
                          <SelectItem value={'8'}>
                            purple dude with big axe and black trousers
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* background. */}
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>background</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={`what brings ${characterName} to calcifer?`}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* greatest strengths */}
              <FormField
                control={form.control}
                name="strength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>what is ur greatest strength?</FormLabel>
                    <Select
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="pick one." />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {Array.from({ length: characterStrengths.length }).map(
                          (_, index) => (
                            <SelectItem
                              key={index}
                              value={characterStrengths[index]}
                            >
                              {characterStrengths[index]}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* greatest weaknesses */}
              <FormField
                control={form.control}
                name="weakness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>what is ur greatest weakness?</FormLabel>
                    <Select
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="pick one." />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {Array.from({ length: characterWeaknesses.length }).map(
                          (_, index) => (
                            <SelectItem
                              key={index}
                              value={characterWeaknesses[index]}
                            >
                              {characterWeaknesses[index]}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* display response mssgs after register attempt */}
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className="w-full">
                create character
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
