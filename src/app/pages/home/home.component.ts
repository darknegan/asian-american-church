import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CHURCH_IMAGES } from '../../shared/church-assets';

interface HeroStat {
  readonly value: string;
  readonly label: string;
}

interface MarqueePhoto {
  readonly src: string;
  readonly label: string;
  readonly alt: string;
}

interface RhythmCard {
  readonly eyebrow: string;
  readonly title: string;
  readonly meta: string;
  readonly body: string;
  readonly image: string;
  readonly alt: string;
}

interface BulletItem {
  readonly title: string;
  readonly subtitle: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly images = CHURCH_IMAGES;

  readonly stats: readonly HeroStat[] = [
    { value: '1883', label: 'First Baptist Rogers organized' },
    { value: 'SBC', label: 'Southern Baptist · Baptist Faith & Message' },
    { value: 'Matt 28', label: 'Making disciples of all nations' },
    { value: 'Rogers', label: 'Olive Street campus · NWA' },
  ];

  readonly marquee: readonly MarqueePhoto[] = [
    { src: CHURCH_IMAGES.worship, label: 'Worship', alt: 'Worship gathering in the sanctuary' },
    { src: CHURCH_IMAGES.fellowship, label: 'Fellowship', alt: 'Members in conversation after service' },
    { src: CHURCH_IMAGES.youth, label: 'Youth', alt: 'Students gathered for youth night' },
    { src: CHURCH_IMAGES.gallery04, label: 'Kids', alt: 'Children participating in a Sunday activity' },
    { src: CHURCH_IMAGES.outreach, label: 'Outreach', alt: 'Volunteers serving the neighborhood' },
  ];

  readonly bullets: readonly BulletItem[] = [
    { title: 'Bilingual Sunday worship', subtitle: 'English + Korean, live translation for visitors' },
    { title: 'Kids & student ministries', subtitle: 'Nursery through high school every week' },
    { title: 'Pastoral care', subtitle: 'Prayer teams, counseling, and home visits' },
  ];

  readonly rhythms: readonly RhythmCard[] = [
    {
      eyebrow: 'Sundays',
      title: 'Worship service',
      meta: 'Olive Street campus · Asian American worship 9:30am',
      body: 'Teaching, communion rhythms, and sending prayers to close. Translation available where offered.',
      image: CHURCH_IMAGES.worship,
      alt: 'Congregation worshipping with lifted hands',
    },
    {
      eyebrow: 'Wednesdays',
      title: 'Midweek prayer',
      meta: '7:30 pm · Chapel + online',
      body: 'One quiet, expectant hour to pray for our city, families, and global partners.',
      image: CHURCH_IMAGES.prayer,
      alt: 'Small group praying together',
    },
    {
      eyebrow: 'First Sundays',
      title: 'Community lunch',
      meta: 'After worship · Fellowship hall',
      body: 'Bring a dish or simply show up — tables are long and stories run deep.',
      image: CHURCH_IMAGES.fellowship,
      alt: 'Fellowship meal gathered at long tables',
    },
  ];
}
