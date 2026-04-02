import { ChangeDetectionStrategy, Component, signal, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      [class]="isScrolled() ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-4' : 'bg-transparent border-transparent py-6'"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" class="flex items-center gap-2 group">
          <div class="relative w-10 h-10 flex items-center justify-center">
            <!-- Abstract Nexus Logo -->
            <svg viewBox="0 0 100 100" class="w-full h-full text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
              <path d="M10,90 L10,10 L90,10 L90,90 Z" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M10,90 L50,10 L90,90" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M30,50 L70,50" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M50,10 L50,90" fill="none" stroke="currentColor" stroke-width="4"/>
            </svg>
          </div>
          <span class="font-display font-bold text-xl tracking-widest text-slate-900 uppercase">Nexus</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          @for (item of menuItems; track item.label) {
            <a
              [href]="item.href"
              class="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {{ item.label }}
            </a>
          }
          <a href="#contact" class="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-indigo-600 transition-colors rounded-full">
            Get in Touch
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden p-2 text-slate-900"
          (click)="isMobileMenuOpen.set(!isMobileMenuOpen())"
        >
          <mat-icon>{{ isMobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4">
          @for (item of menuItems; track item.label) {
            <a
              [href]="item.href"
              class="text-base font-medium text-slate-800 hover:text-indigo-600"
              (click)="isMobileMenuOpen.set(false)"
            >
              {{ item.label }}
            </a>
          }
        </div>
      }
    </nav>
  `,
  imports: [MatIconModule]
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
