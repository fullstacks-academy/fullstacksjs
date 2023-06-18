import { useTranslations } from 'next-intl';

import { feature } from '@/features';

import { NavLink } from './NavLink';

interface Nav {
  feature: string;
  href: string;
  title: string;
}

const navs: Nav[] = [
  { feature: 'home', href: '/', title: 'about' },
  { feature: 'rules', href: '/rules', title: 'rules' },
  { feature: 'ask', href: '/ask', title: 'ask' },
  { feature: 'events', href: '/events', title: 'events' },
];

export const Navs = (): React.JSX.Element => {
  const t = useTranslations('navigation');

  return (
    <ul className="inline-flex gap-8 text-md font-bold leading-tight tablet:gap-16">
      {navs
        .filter((nav) => feature.includes(nav.feature))
        .map(({ title, href }) => (
          <NavLink key={title} href={href}>
            {t(title)}
          </NavLink>
        ))}
    </ul>
  );
};
