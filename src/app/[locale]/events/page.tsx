import { notFound } from 'next/navigation';

import { getEvents } from '@/data-layer/getEvents';
import { feature } from '@/features';

import EventsContent from './EventContent';

// export const revalidate = 60 * 60 * 24;
// export const dynamic = 'force-static';
export const dynamic = 'force-dynamic';

export interface Lecturer {
  slug: string;
  name: string;
  avatar: string;
}

export default async function EventsPage() {
  if (feature.includes('events')) notFound();

  const events = await getEvents();

  const upcomingEvents = events.filter((event) => event.date > new Date());

  const archivedEvents = events.filter((event) => new Date() > event.date);

  return <EventsContent upcoming={upcomingEvents} archived={archivedEvents} />;
}
