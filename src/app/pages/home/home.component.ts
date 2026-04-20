import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
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
  readonly description: string;
}

interface RhythmCard {
  readonly eyebrow: string;
  readonly title: string;
  readonly meta: string;
  readonly body: string;
  readonly image: string;
  readonly alt: string;
  readonly zoomOutImage?: boolean;
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
export class HomeComponent implements OnInit, OnDestroy {
  readonly images = CHURCH_IMAGES;
  readonly currentSlide = signal(0);
  readonly autoplayMs = 5000;
  readonly isAutoplayPaused = signal(false);
  readonly elapsedMs = signal(0);
  readonly autoplayTickMs = 100;
  private autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private isHoverPaused = false;
  private isVisibilityPaused = false;
  private readonly visibilityHandler = (): void => {
    if (document.hidden) {
      this.isVisibilityPaused = true;
      this.isAutoplayPaused.set(true);
      this.stopAutoplay();
    } else {
      this.isVisibilityPaused = false;
      this.isAutoplayPaused.set(this.isHoverPaused);
      this.startAutoplay();
    }
  };

  readonly stats: readonly HeroStat[] = [
    { value: '1883', label: 'First Baptist Rogers organized' },
    { value: 'SBC', label: 'Southern Baptist · Baptist Faith & Message' },
    { value: 'Matt 28', label: 'Making disciples of all nations' },
    { value: 'Rogers', label: 'Olive Street campus · NWA' },
  ];

  readonly marquee: readonly MarqueePhoto[] = [
    {
      src: CHURCH_IMAGES.worship,
      label: 'Worship',
      alt: 'Worship gathering in the sanctuary',
      description: 'Gathered in song, Scripture, and prayer each Sunday morning.',
    },
    {
      src: CHURCH_IMAGES.fellowship,
      label: 'Fellowship',
      alt: 'Members in conversation after service',
      description: 'Shared meals and conversations that help people feel known and welcomed.',
    },
    {
      src: CHURCH_IMAGES.youth,
      label: 'Youth',
      alt: 'Students gathered for youth night',
      description: 'Students growing in faith through teaching, friendships, and mentorship.',
    },
    {
      src: CHURCH_IMAGES.kids,
      label: 'Kids',
      alt: 'Children participating in a Sunday activity',
      description: 'Kids learning the gospel in a safe, joyful, age-appropriate environment.',
    },
    {
      src: CHURCH_IMAGES.communityA,
      label: 'Community',
      alt: 'Church family in the neighborhood',
      description: 'Serving neighbors and building Christ-centered relationships across our city.',
    },
  ];

  readonly activeSlide = computed<MarqueePhoto>(() => this.marquee[this.currentSlide()]);

  readonly activeSlideIndex = computed<number>(() => this.currentSlide() + 1);
  readonly progressPercent = computed<number>(() =>
    Math.min(100, (this.elapsedMs() / this.autoplayMs) * 100),
  );

  readonly slideCount = this.marquee.length;

  readonly bullets: readonly BulletItem[] = [
    {
      title: 'Sunday worship',
      subtitle: 'English service with Scripture-centered preaching and prayer',
    },
    { title: 'Kids & student ministries', subtitle: 'Nursery through high school every week' },
    { title: 'Pastoral care', subtitle: 'Prayer teams, counseling, and home visits' },
  ];

  readonly rhythms: readonly RhythmCard[] = [
    {
      eyebrow: 'Sundays',
      title: 'Worship service',
      meta: 'Olive Street campus · Asian American worship 9:30am',
      body: 'Teaching, communion rhythms, and sending prayers to close.',
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
      image: CHURCH_IMAGES.communityLunch,
      alt: 'Fellowship meal gathered at long tables',
      zoomOutImage: true,
    },
  ];

  ngOnInit(): void {
    document.addEventListener('visibilitychange', this.visibilityHandler);
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    this.stopAutoplay();
  }

  previousSlide(): void {
    this.currentSlide.update((idx) => (idx - 1 + this.slideCount) % this.slideCount);
    this.elapsedMs.set(0);
  }

  nextSlide(): void {
    this.currentSlide.update((idx) => (idx + 1) % this.slideCount);
    this.elapsedMs.set(0);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
    this.elapsedMs.set(0);
  }

  pauseAutoplay(): void {
    this.isHoverPaused = true;
    this.isAutoplayPaused.set(true);
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.isHoverPaused = false;
    this.isAutoplayPaused.set(this.isVisibilityPaused);
    this.startAutoplay();
  }

  private startAutoplay(): void {
    if (this.autoplayTimer || this.isAutoplayPaused() || document.hidden) return;
    this.autoplayTimer = setInterval(() => {
      const nextElapsed = this.elapsedMs() + this.autoplayTickMs;
      if (nextElapsed >= this.autoplayMs) {
        this.nextSlide();
        return;
      }
      this.elapsedMs.set(nextElapsed);
    }, this.autoplayTickMs);
  }

  private stopAutoplay(): void {
    if (!this.autoplayTimer) return;
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = null;
  }
}
