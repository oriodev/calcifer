'use client';

import { HashLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

import { CardWrapper } from './card-wrapper';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import { FormSuccess } from '../form-success';
import { FormError } from '../form-error';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError('missing token');
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('something went wrong');
      });
  }, [token, success, error]);

  // this makes it run when we open the page.
  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="confirming ur verification"
      backButtonHref="/auth/login"
      backButtonLabel="back to login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <HashLoader />}

        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
