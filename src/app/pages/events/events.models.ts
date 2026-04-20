export type EventCategory = 'Worship' | 'Family' | 'Outreach' | 'Formation' | 'Youth';

export interface ChurchEvent {
  readonly id: string;
  readonly category: EventCategory;
  readonly day: string;
  readonly date: string;
  readonly month: string;
  readonly dateLabel: string;
  readonly timeRange: string;
  readonly location: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly alt: string;
}

export interface EventGroup {
  readonly label: string;
  readonly range: string;
  readonly events: readonly ChurchEvent[];
}

export interface FeaturedEvent {
  readonly category: EventCategory;
  readonly day: string;
  readonly date: string;
  readonly month: string;
  readonly dateLabel: string;
  readonly timeRange: string;
  readonly location: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly alt: string;
}

export interface CategoryFilter {
  readonly id: 'all' | EventCategory;
  readonly label: string;
  readonly count: number;
}
