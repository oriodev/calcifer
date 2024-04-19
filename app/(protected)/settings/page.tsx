import { auth, signOut } from '@/auth';

const SettingsPage = async () => {
  const session = await auth();

  const sessionStringified = JSON.stringify(session);

  return (
    <div>
      {sessionStringified}

      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
