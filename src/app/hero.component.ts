import { ChangeDetectionStrategy, Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <!-- Background Pattern / Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/architecture/1920/1080?blur=2"
          alt="Modern Architecture"
          referrerpolicy="no-referrer"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-50/90 to-transparent"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div #heroContent class="max-w-3xl">
          <div class="hero-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 opacity-0 translate-y-4">
            <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span class="text-xs font-semibold text-indigo-900 tracking-wide uppercase">Premium Real Estate</span>
          </div>
          
          <h1 class="hero-item text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight leading-tight mb-6 opacity-0 translate-y-4">
            Your Personalized <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Property Consultants</span>
          </h1>
          
          <p class="hero-item text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed opacity-0 translate-y-4">
            We guide you through the complete process of buying, selling, renting, or leasing property in Bangalore and Karnataka. First as a friend, then as your realty expert.
          </p>
          
          <div class="hero-item flex flex-wrap items-center gap-4 opacity-0 translate-y-4">
            <a href="#services" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5">
              Explore Services
              <mat-icon class="text-sm">arrow_forward</mat-icon>
            </a>
            <a href="#contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs font-medium text-slate-400 uppercase tracking-widest">Scroll</span>
        <mat-icon class="text-slate-400">arrow_downward</mat-icon>
      </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroContent') heroContent!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const items = this.heroContent.nativeElement.querySelectorAll('.hero-item');
    animate(
      items,
      { opacity: [0, 1], y: [20, 0] },
      {
        delay: stagger(0.15),
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    );
  }
}

