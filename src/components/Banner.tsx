import { useTranslations } from 'next-intl';

import { JoinButton } from './JoinButton';
import Logo from './Logo.svg';

export const Banner = (): React.JSX.Element => {
  const t = useTranslations();

  return (
    <header className="hidden items-center justify-between desktop:flex">
      <div className="flex flex-col items-start gap-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold leading-tight">FullstacksJS</h1>
          <p className="text-md uppercase text-fg-1">{t('header.vision')}</p>
        </div>
        <JoinButton />
      </div>

      <Logo className="w-[30rem] desktop:w-[40rem] wide:w-[47rem]" />
    </header>
  );
};
