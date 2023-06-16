'use client';
import { signOut } from 'next-auth/react';

import LogoutIcon from './LogoutIcon.svg';
import { SecondaryButton } from './SecondaryButton';

interface Props {
  username: string;
  avatar: string;
}

export function ProfileButton({ username, avatar }: Props) {
  const handleLogout = () => {
    void signOut();
  };

  return (
    <div className="flex gap-2">
      <SecondaryButton>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          className="h-14 w-14 rounded-full border border-white"
          alt={`${username}'s avatar`}
        />
        <p className="hidden tablet:mr-2 tablet:block">{username}</p>
      </SecondaryButton>
      <SecondaryButton
        className="aspect-square justify-center"
        onClick={handleLogout}
      >
        <LogoutIcon className="h-10 w-10" />
      </SecondaryButton>
    </div>
  );
}
