import { useTranslations } from 'next-intl';

import { Separator } from '@/components/Separator';
import type { FullstacksJSEvent } from '@/data-layer/getEvents';

import EventList from './EventList';

export default function EventsContent({
  upcoming,
  archived,
}: {
  upcoming: FullstacksJSEvent[];
  archived: FullstacksJSEvent[];
}) {
  const t = useTranslations();

  return (
    <>
      <EventList events={upcoming} title={t('upcomingEvents.title')} />
      <Separator />
      <EventList events={archived} title={t('archivedEvents.title')} />
    </>
  );
}
