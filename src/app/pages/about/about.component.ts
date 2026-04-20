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
  readonly scriptures: string;
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

  readonly values: readonly Value[] = [
    {
      num: '01',
      title: 'God',
      body:
        'God is the Creator and Ruler of the universe. He has eternally existed in three persons: the Father, the Son and the Holy Spirit. These three are co-equal and are one God.',
      scriptures:
        'Genesis 1:1, 26-27; 3:22; Psalm 90:2; Matthew 28:19; 1 Peter 1:2; 2 Corinthians 13:14',
    },
    {
      num: '02',
      title: 'Jesus Christ',
      body:
        'Jesus Christ is the Son of God. He is co-equal with the Father. Jesus lived a sinless human life and offered Himself as the perfect sacrifice for the sins of all men by dying on a cross. He arose from the dead after three days to demonstrate His power over sin and death. He ascended to Heaven\'s glory and will return again to earth to reign as King of kings, and Lord of lords.',
      scriptures:
        'Matthew 1:22-23; Isaiah 9:6; John 1:1-5, 14:10-30; Hebrews 4:14, 15; 1 Corinthians 15:3-4; Romans 1:3-4; Acts 1:9-11; 1 Timothy 6:14-15; Titus 2:13',
    },
    {
      num: '03',
      title: 'Holy Spirit',
      body:
        'The Holy Spirit is equal with the Father and the Son as God. He is present in the world to make men aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with power for living, understanding of spiritual truth, and guidance in doing what is right. The Christian seeks to live under His control daily.',
      scriptures:
        '2 Corinthians 3:17; John 16:7-13, 14:16-17; Acts 1:8; 1 Corinthians 2:12, 3:16; Ephesians 1:13; Galatians 5:25; Ephesians 5:1',
    },
    {
      num: '04',
      title: 'Eternity',
      body:
        'Man was created to exist forever. He will either exist eternally separated from God by sin, or in union with God through forgiveness and salvation. To be eternally separated from God is Hell. To be eternally in union with Him is eternal life. Heaven and Hell are places of eternal existence.',
      scriptures:
        'John 3:16; John 2:25; John 5:11-13; Romans 6:23; Revelation 20:15; 1 John 5:11-12; Matthew 25:31-46',
    },
    {
      num: '05',
      title: 'Man',
      body:
        'Man is made in the spiritual image of God, to be like Him in character. He is the supreme object of God\'s creation. Although man has tremendous potential for good, he is marred by an attitude of disobedience toward God called "sin." This attitude separates man from God.',
      scriptures: 'Genesis 1:27; Psalm 8:3-6; Isaiah 53:6a; Romans 3:23; Isaiah 59:1-2',
    },
    {
      num: '06',
      title: 'Salvation',
      body:
        'Salvation is a gift from God to man. Man can never make up for his sin by self-improvement or good works. Only by trusting in Jesus Christ as God\'s offer of forgiveness can man be saved from sin\'s penalty. Eternal life begins the moment one receives Jesus Christ into his life by faith.',
      scriptures:
        'Romans 6:23; Ephesians 2:8-9; John 14:6, 1:12; Titus 3:5; Galatians 3:26; Romans 5:1',
    },
    {
      num: '07',
      title: 'Eternal Security',
      body:
        'Because God gives man eternal life through Jesus Christ, the believer is secure in salvation for eternity. Salvation is maintained by the grace and power of God, not by the self-effort of the Christian. It is the grace and keeping power of God that gives this security.',
      scriptures: 'John 10:29; 2 Timothy 1:12; Hebrews 7:25; 10:10,14; 1 Peter 1:3-5',
    },
    {
      num: '08',
      title: 'The Bible',
      body:
        'The Bible is God\'s word to all men. It was written by human authors, under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living. Because it is inspired by God, it is truth without any mixture of error.',
      scriptures:
        '2 Timothy 3:16; 2 Peter 1:20, 21; 2 Timothy 1:13; Psalm 119:105,160, 12:6; Proverbs 30:5',
    },
    {
      num: '09',
      title: 'Baptism',
      body:
        'We believe baptism is an important step in your walk with Christ. Baptism doesn\'t save you, but it is a step of obedience in your public profession of faith in Jesus Christ. It is a picture of what Jesus did for you - He died for your sins, was buried, and raised to life. It is also a picture of what happened to you - you died to an old way of living and have been raised to walk in a brand new life in Jesus. The Bible teaches that everyone who has put their faith in Jesus for salvation needs to be baptized.',
      scriptures: '',
    },
    {
      num: '10',
      title: "Lord's Supper",
      body:
        'We believe the Lord\'s Supper is a vital element of worship because it is a direct command from Jesus Christ, Who instructed His followers to "do this in remembrance of Me" Luke 22:19. This ordinance allows us to reflect on Christ\'s sacrifice on the cross, symbolized through the bread and the cup. These represent His body and blood given for our sins. It is a time of spiritual renewal, self-examination, and unity as the body of Christ, reminding us of His love, the forgiveness of sin, and the hope of His return. Through this act, we proclaim the gospel and celebrate our shared faith in Him.',
      scriptures: '',
    },
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
