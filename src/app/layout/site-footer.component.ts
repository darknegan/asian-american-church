import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface FooterLink {
  readonly label: string;
  readonly href?: string;
  readonly route?: string;
}

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear();

  readonly columns: readonly FooterColumn[] = [
    {
      title: 'Visit',
      links: [
        {
          label: '626 W Olive St, Rogers, AR 72756',
          href: 'https://www.google.com/maps/search/?api=1&query=626+W+Olive+St,+Rogers,+AR+72756',
        },
        { label: 'Service times & directions', href: 'https://www.fbcrogers.org/' },
        { label: 'Plan a visit', href: 'https://www.fbcrogers.org/' },
        { label: 'About this congregation', route: '/about' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'About us', route: '/about' },
        { label: 'Our beliefs (FBC Rogers)', href: 'https://www.fbcrogers.org/about' },
        { label: 'Events', route: '/events' },
        { label: 'Main church website', href: 'https://www.fbcrogers.org/' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Call (479) 636-3451', href: 'tel:+14796363451' },
        { label: 'info@fbcrogers.org', href: 'mailto:info@fbcrogers.org' },
        { label: 'Giving', href: 'https://www.fbcrogers.org/' },
        { label: 'Contact', href: 'mailto:info@fbcrogers.org' },
      ],
    },
  ];

  readonly socials: readonly FooterLink[] = [
    { label: 'Church website', href: 'https://www.fbcrogers.org/' },
    { label: 'About FBC Rogers', href: 'https://www.fbcrogers.org/about' },
    { label: 'Email', href: 'mailto:info@fbcrogers.org' },
  ];
}
