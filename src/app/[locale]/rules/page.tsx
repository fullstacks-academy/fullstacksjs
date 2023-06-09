import { useTranslations } from 'next-intl';

import { Article } from '@/components/Article';
import { Articles } from '@/components/Articles';
import { Paragraph } from '@/components/Paragraph';
import { Rule } from '@/components/Rule';
import { RuleSet } from '@/components/RuleSet';

const rules = [
  'violence',
  'name-calling',
  'nsfw',
  'personal',
  'insult',
  'sex',
  'copyright',
  'spam',
  'dm',
  'advocate',
];

export default function Rules() {
  const t = useTranslations();

  const mapper = {
    b: (chunk: React.ReactNode) => <b>{chunk}</b>,
  };
  return (
    <Articles>
      <Article title={t('rules.title')} id="rules">
        <Paragraph>{t.rich('rules.desc', mapper)}</Paragraph>

        <RuleSet>
          {rules.map((rule) => (
            <Rule target={rule} key={rule}>
              {t.rich(`rules.items.${rule}`, mapper)}
            </Rule>
          ))}
        </RuleSet>
      </Article>

      <Article title={t('guidelines.title')} id="guides">
        <RuleSet>
          <Rule target="kind">{t('guidelines.items.kind')}</Rule>
          <Rule target="topic">{t('guidelines.items.topic')}</Rule>
          <Rule target="cross">{t('guidelines.items.cross')}</Rule>
          <Rule target="opinion">{t('guidelines.items.opinion')}</Rule>
        </RuleSet>
      </Article>
    </Articles>
  );
}
