import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CHURCH_IMAGES } from '../../shared/church-assets';
import { BELIEFS, type Belief } from './about-beliefs.data';

interface Meta {
  readonly label: string;
  readonly value: string;
}

interface Pillar {
  readonly title: string;
  readonly body: string;
}

interface Milestone {
  readonly year: string;
  readonly title: string;
  readonly body: string;
}

interface Leader {
  readonly name: string;
  readonly role: string;
  readonly tenure: string;
  readonly bio: string;
  readonly image: string;
  readonly alt: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly images = CHURCH_IMAGES;

  readonly meta: readonly Meta[] = [
    { label: 'Church family', value: 'First Baptist Rogers' },
    { label: 'Organized', value: 'March 6, 1883' },
    { label: 'Affiliation', value: 'SBC · Baptist Faith & Message' },
    { label: 'Campus', value: '626 W Olive St, Rogers, AR 72756' },
  ];

  readonly pillars: readonly Pillar[] = [
    { title: 'Worship', body: 'Gathered around Scripture in spirit and truth — reverent, joyful, and hospitable.' },
    { title: 'Formation', body: 'Disciples who learn Christ together across generations and cultures.' },
    { title: 'Mission', body: 'Sent with the Great Commission — near neighbors and the nations.' },
  ];

  readonly beliefs: readonly Belief[] = BELIEFS;

  // num of the currently expanded accordion panel; null means all closed.
  readonly openBelief = signal<string | null>(BELIEFS[0]?.num ?? null);

  toggleBelief(num: string): void {
    this.openBelief.update((current) => (current === num ? null : num));
  }

  isBeliefOpen(num: string): boolean {
    return this.openBelief() === num;
  }

  readonly milestones: readonly Milestone[] = [
    {
      year: '1883',
      title: 'A church is born',
      body: 'The First Baptist Church of Rogers was organized on March 6 with twelve members and the Rev. John Dunnegan as the first pastor.',
    },
    {
      year: '1906',
      title: 'A city sanctuary',
      body: 'A new sanctuary opened on September 1, designed by architect A.O. Clark, with stained-glass windows celebrated across the region.',
    },
    {
      year: '1967',
      title: 'Room to grow',
      body: 'The church dedicated its building at 8th and Olive Streets — a campus that would later serve generations of worshippers and community ministries.',
    },
    {
      year: '2010',
      title: 'Pleasant Grove home',
      body: 'First Baptist Rogers moved to its Pleasant Grove Road campus on September 12, making room for a growing church family.',
    },
    {
      year: '2025',
      title: 'Still building',
      body: 'A larger worship center on the Pleasant Grove campus was completed in April, continuing decades of faithfulness in Northwest Arkansas.',
    },
    {
      year: 'Today',
      title: 'Many nations, one mission',
      body: 'We worship as the Asian American Congregation within this same church — sent with the whole body to make disciples of all nations.',
    },
  ];

  readonly leaders: readonly Leader[] = [
    {
      name: 'Ger',
      role: 'Pastor, Asian American Congregation',
      tenure: 'First Baptist Rogers',
      bio: 'Shepherds our congregation in partnership with the wider church — preaching, pastoral care, and helping people take their next step with Jesus.',
      image: CHURCH_IMAGES.aboutPastorGer,
      alt: 'Pastor Ger',
    },
    {
      name: 'Robert',
      role: 'Pastor, Asian American Congregation',
      tenure: 'First Baptist Rogers',
      bio: 'Walks alongside families and individuals through teaching, prayer, and discipleship in our hospitable church community.',
      image: CHURCH_IMAGES.aboutPastorRobert,
      alt: 'Pastor Robert',
    },
    {
      name: 'KFC',
      role: 'Pastor, Asian American Congregation',
      tenure: 'First Baptist Rogers',
      bio: 'Serves the Asian American Congregation with a heart for welcome — formation, outreach rhythms, and connecting newcomers to the table.',
      image: CHURCH_IMAGES.aboutPastorKFC,
      alt: 'Pastor KFC',
    },
  ];
}
