'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

export const AuthProvider = ({
  children,
  session,
}: Props): React.JSX.Element => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
