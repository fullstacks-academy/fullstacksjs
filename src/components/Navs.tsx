import { useTranslations } from 'next-intl';

import { NavLink } from './NavLink';

interface Nav {
  // feature: keyof typeof features;
  href: string;
  title: string;
}

const navs: Nav[] = [
  { href: '/', title: 'about' },
  { href: '/rules', title: 'rules' },
  { href: '/ask', title: 'ask' },
  { href: '/events', title: 'events' },
];

export const Navs = (): React.JSX.Element => {
  const t = useTranslations('navigation');

  return (
    <ul className="inline-flex gap-8 text-md font-bold leading-tight tablet:gap-16">
      {navs.map(({ title, href }) => (
        <NavLink key={title} href={href}>
          {t(title)}
        </NavLink>
      ))}
    </ul>
  );
};
