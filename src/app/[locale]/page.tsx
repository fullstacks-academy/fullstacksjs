import { useTranslations } from 'next-intl';

import { Article } from '@/components/Article';
import { Articles } from '@/components/Articles';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';

const mapper = {
  b: (chunk: React.ReactNode) => <b>{chunk}</b>,
};

export default function Home() {
  const t = useTranslations();

  return (
    <Articles>
      <Article title={t('main.about.title')}>
        <Paragraph>
          {t.rich('main.about.content', {
            mark: (chunk) => <Highlight>{chunk}</Highlight>,
          })}
        </Paragraph>
      </Article>

      <Article title={t('main.motivation.title')}>
        <Paragraph>{t.rich('main.motivation.content', mapper)}</Paragraph>
      </Article>

      <Article title={t('main.values.title')}>
        <Paragraph>{t('main.values.content')}</Paragraph>
        <Paragraph>{t.rich('main.values.ethics', mapper)}</Paragraph>
        <Paragraph>{t.rich('main.values.validity', mapper)}</Paragraph>
      </Article>
    </Articles>
  );
}
