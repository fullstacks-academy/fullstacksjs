'use client';

import { comparePaths } from '@fullstacksjs/toolbox';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  href: string;
  children: string;
}

export const NavLink = ({ children, href }: Props): React.JSX.Element => {
  const selectedSegment = useSelectedLayoutSegment() ?? '/';
  const isActive = comparePaths(selectedSegment, href) === 0;

  const isRtl = false;

  return (
    <li
      {...(isActive ? { 'aria-current': 'page' } : {})}
      className={clsx(
        'relative scroll-m-9 list-none uppercase transition-colors after:absolute after:bottom-[-3px] after:h-[3px] after:bg-current after:transition-[width]',
        {
          'after:w-8 text-fg-0': isActive,
          'after:w-0 hover:after:w-8 text-light-muted hover:text-fg-1':
            !isActive,
          'after:left-0': !isRtl,
          'after:right-0': isRtl,
        },
      )}
    >
      <Link
        href={href}
        className="rounded-sm text-base focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-accent-0 tablet:text-md"
      >
        {children}
      </Link>
    </li>
  );
};
