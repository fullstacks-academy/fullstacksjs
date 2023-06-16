import { gql, GraphQLClient } from 'graphql-request';

import type { AllEventsQuery } from './__genearted__';

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: 'Bearer 842caac028840a8bc5f3e72ce2d25b',
  },
});

const document = gql`
  {
    allEvents {
      slug
      title {
        blocks
        links
        value
      }
      thumbnail {
        url
        alt
        size
        width
        height
      }
      startDate
      lecturers {
        slug
        name
        avatar {
          url
          alt
          size
          width
          height
        }
      }
    }
  }
`;

export interface FullstacksJSEvent {
  slug: string;
  title: any;
  date: Date;
  thumbnail: string;
  subscribersCount: number;
  presenterAvatar: string;
}

export async function getEvents(): Promise<FullstacksJSEvent[]> {
  console.log('Request zade shod');

  const res = await client.request<AllEventsQuery>(document);
  return res.allEvents.map(
    (ev) =>
      ({
        title: ev.title,
        thumbnail: ev.thumbnail?.url,
        presenterAvatar: ev.lecturers[0]?.avatar?.[0]?.url,
        date: ev.startDate ? new Date(ev.startDate) : undefined,
      } as FullstacksJSEvent),
  );
}
