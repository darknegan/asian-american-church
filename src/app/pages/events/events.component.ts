import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CHURCH_IMAGES } from '../../shared/church-assets';

import {
  CategoryFilter,
  EventCategory,
  EventGroup,
  FeaturedEvent,
} from './events.models';

type FilterId = CategoryFilter['id'];

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  readonly featured: FeaturedEvent = {
    category: 'Family',
    day: 'Sat',
    date: '15',
    month: 'Mar',
    dateLabel: 'Saturday, March 15',
    timeRange: '9:00 am – 1:00 pm',
    location: 'East parking lot',
    title: 'Neighborhood clean-up & grill',
    description:
      'Serve alongside local schools and small businesses for the morning, then regroup over cold drinks and grilled skewers. Kids welcome — bring a hat.',
    imageSrc: CHURCH_IMAGES.eventB,
    alt: 'Volunteers gathered for a neighborhood service day',
  };

  readonly groups: readonly EventGroup[] = [
    {
      label: 'This week',
      range: 'March 10 – March 16',
      events: [
        {
          id: 'ev1',
          category: 'Formation',
          day: 'Wed',
          date: '12',
          month: 'Mar',
          dateLabel: 'Wednesday, March 12',
          timeRange: '7:00 pm',
          location: 'Chapel room B',
          title: 'Lenten reading group',
          description:
            'Week three of walking through the Gospel of Mark together. New folks welcome.',
          imageSrc: CHURCH_IMAGES.gallery07,
          alt: 'Small group gathered around a table for study',
        },
        {
          id: 'ev2',
          category: 'Youth',
          day: 'Fri',
          date: '14',
          month: 'Mar',
          dateLabel: 'Friday, March 14',
          timeRange: '6:30 pm',
          location: 'Pavilion',
          title: 'Youth night — Friday fires',
          description:
            'Dinner, games, and an honest conversation about belonging. 7th–12th grade.',
          imageSrc: CHURCH_IMAGES.youth,
          alt: 'Youth gathered around an outdoor fire pit',
        },
        {
          id: 'ev3',
          category: 'Family',
          day: 'Sat',
          date: '15',
          month: 'Mar',
          dateLabel: 'Saturday, March 15',
          timeRange: '9:00 am',
          location: 'East parking lot',
          title: 'Neighborhood clean-up & grill',
          description:
            'Serve alongside local partners; stay for skewers. Kids welcome — bring a hat.',
          imageSrc: CHURCH_IMAGES.eventB,
          alt: 'Volunteers cleaning the neighborhood together',
        },
        {
          id: 'ev4',
          category: 'Worship',
          day: 'Sun',
          date: '16',
          month: 'Mar',
          dateLabel: 'Sunday, March 16',
          timeRange: '10:00 am',
          location: 'Sanctuary',
          title: 'Bilingual worship & communion',
          description:
            'Communion Sunday, with a congregational prayer from our Korean team.',
          imageSrc: CHURCH_IMAGES.worship,
          alt: 'Congregation in worship during a bilingual service',
        },
      ],
    },
    {
      label: 'Next week',
      range: 'March 17 – March 23',
      events: [
        {
          id: 'ev5',
          category: 'Formation',
          day: 'Tue',
          date: '18',
          month: 'Mar',
          dateLabel: 'Tuesday, March 18',
          timeRange: '6:30 pm',
          location: 'Library',
          title: 'Parenting roundtable',
          description:
            'Seasoned parents share what has mattered; childcare provided with RSVP.',
          imageSrc: CHURCH_IMAGES.gallery02,
          alt: 'Parents in conversation around a table',
        },
        {
          id: 'ev6',
          category: 'Worship',
          day: 'Wed',
          date: '19',
          month: 'Mar',
          dateLabel: 'Wednesday, March 19',
          timeRange: '7:30 pm',
          location: 'Chapel',
          title: 'Midweek prayer',
          description:
            'One quiet hour to bring our city and families before the Lord.',
          imageSrc: CHURCH_IMAGES.prayer,
          alt: 'Small group praying in a quiet chapel',
        },
        {
          id: 'ev7',
          category: 'Outreach',
          day: 'Sat',
          date: '22',
          month: 'Mar',
          dateLabel: 'Saturday, March 22',
          timeRange: '8:30 am',
          location: 'Fellowship hall',
          title: 'ESL breakfast',
          description:
            'Volunteer conversation partners needed. No experience required — just kindness.',
          imageSrc: CHURCH_IMAGES.outreach,
          alt: 'Members gathered for a morning breakfast',
        },
      ],
    },
    {
      label: 'Later in March',
      range: 'March 24 – April 6',
      events: [
        {
          id: 'ev8',
          category: 'Family',
          day: 'Sun',
          date: '23',
          month: 'Mar',
          dateLabel: 'Sunday, March 23',
          timeRange: 'After worship',
          location: 'Fellowship hall',
          title: 'First-Sunday lunch',
          description:
            'Bring a dish, or simply come hungry. Long tables, deep stories.',
          imageSrc: CHURCH_IMAGES.fellowship,
          alt: 'Community lunch shared around long tables',
        },
        {
          id: 'ev9',
          category: 'Youth',
          day: 'Fri',
          date: '28',
          month: 'Mar',
          dateLabel: 'Friday, March 28',
          timeRange: '9:00 am',
          location: 'Trailhead',
          title: 'College group hike',
          description:
            'Low-key day hike plus picnic lunch. Carpool from the church at 8:30 am.',
          imageSrc: CHURCH_IMAGES.gallery05,
          alt: 'College students hiking an open trail',
        },
        {
          id: 'ev10',
          category: 'Worship',
          day: 'Sun',
          date: '30',
          month: 'Mar',
          dateLabel: 'Sunday, March 30',
          timeRange: '10:00 am',
          location: 'Sanctuary',
          title: 'Palm Sunday',
          description:
            'A processional from the lobby into Holy Week. All ages invited to carry palms.',
          imageSrc: CHURCH_IMAGES.communityC,
          alt: 'Congregation processing with palms',
        },
      ],
    },
  ];

  readonly activeFilter = signal<FilterId>('all');

  readonly filters = computed<readonly CategoryFilter[]>(() => {
    const counts: Record<EventCategory, number> = {
      Worship: 0,
      Family: 0,
      Outreach: 0,
      Formation: 0,
      Youth: 0,
    };
    let total = 0;
    for (const group of this.groups) {
      for (const ev of group.events) {
        counts[ev.category] += 1;
        total += 1;
      }
    }
    return [
      { id: 'all', label: 'All events', count: total },
      { id: 'Worship', label: 'Worship', count: counts.Worship },
      { id: 'Family', label: 'Family', count: counts.Family },
      { id: 'Outreach', label: 'Outreach', count: counts.Outreach },
      { id: 'Formation', label: 'Formation', count: counts.Formation },
      { id: 'Youth', label: 'Youth', count: counts.Youth },
    ] as const;
  });

  readonly visibleGroups = computed<readonly EventGroup[]>(() => {
    const active = this.activeFilter();
    if (active === 'all') return this.groups;
    return this.groups
      .map((g) => ({ ...g, events: g.events.filter((e) => e.category === active) }))
      .filter((g) => g.events.length > 0);
  });

  setFilter(id: FilterId): void {
    this.activeFilter.set(id);
  }

  categoryTagClass(category: EventCategory): string {
    return `tag tag--${category.toLowerCase()}`;
  }
}
