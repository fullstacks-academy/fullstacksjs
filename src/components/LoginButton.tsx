'use client';
import { signIn } from 'next-auth/react';

import GithubOutlineIcon from './GithubIcon.svg';
import { SecondaryButton } from './SecondaryButton';

function LoginButton() {
  const handleLogin = async () => {
    try {
      await signIn('github');
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <SecondaryButton onClick={handleLogin}>
      <div className="rounded-full border border-fg-0 bg-bg-0 p-3.5">
        <GithubOutlineIcon className="h-6 w-6" />
      </div>
      <p className="hidden tablet:mr-2 tablet:block">Login with Github</p>
    </SecondaryButton>
  );
}

export default LoginButton;
