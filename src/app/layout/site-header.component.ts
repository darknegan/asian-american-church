import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  readonly label: string;
  readonly path: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly navItems: readonly NavItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Give', path: '/give' },
  ];

  readonly mobileOpen = signal(false);

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
