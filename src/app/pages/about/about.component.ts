import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CHURCH_IMAGES } from '../../shared/church-assets';

interface Meta {
  readonly label: string;
  readonly value: string;
}

interface Pillar {
  readonly title: string;
  readonly body: string;
}

interface Value {
  readonly num: string;
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
    { title: 'Worship', body: 'Gathered around Scripture in spirit and truth — warmly bilingual and hospitable.' },
    { title: 'Formation', body: 'Disciples who learn Christ together across generations and cultures.' },
    { title: 'Mission', body: 'Sent with the Great Commission — near neighbors and the nations.' },
  ];

  readonly values: readonly Value[] = [
    {
      num: '01',
      title: 'Scripture',
      body:
        'The Bible is our authority and joy. We align with the Baptist Faith and Message as a summary of biblical doctrine.',
    },
    { num: '02', title: 'Table', body: 'Meals, holidays, and shared work remind us that the kingdom is relational.' },
    { num: '03', title: 'Justice & mercy', body: 'We pursue the peace of the city, especially for those overlooked and new here.' },
    { num: '04', title: 'Prayer', body: 'We practice quiet, persistent prayer for our city and one another.' },
    { num: '05', title: 'Heritage', body: 'We honor Asian American stories and traditions as gifts to the whole church.' },
    { num: '06', title: 'Hospitality', body: 'A kept seat and a second bowl — the doorway of the gospel is welcome.' },
  ];

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
      body: 'The church dedicated its building at 8th and Olive Streets — a campus that would later serve multiple languages and community ministries.',
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
      name: 'Dr. Wes George',
      role: 'Senior Pastor, First Baptist Rogers',
      tenure: 'Serving since 2002',
      bio: 'Dr. George focuses on preaching, teaching, praying for the church family, and providing directional leadership for First Baptist Rogers. He and his wife, Lisa, have four sons. He holds degrees in civil engineering and advanced biblical studies, and has served in various leadership roles within the Southern Baptist Convention.',
      image: CHURCH_IMAGES.aboutLeadership,
      alt: 'Senior Pastor Dr. Wes George',
    },
    {
      name: 'Congregation leadership',
      role: 'Asian American Congregation, First Baptist Rogers',
      tenure: 'Serving with the wider church',
      bio: 'Our pastors and leaders serve alongside the full First Baptist Rogers team — teaching, prayer, pastoral care, and discipleship in a welcoming, language-accessible context. Contact the church office to connect with someone who can help you take your next step.',
      image: CHURCH_IMAGES.gallery08,
      alt: 'Leaders and members of the Asian American Congregation in fellowship',
    },
  ];
}
