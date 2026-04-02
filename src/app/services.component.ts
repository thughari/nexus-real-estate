import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="services" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
              From Services to Spaces — <br/>
              <span class="text-indigo-600">The Right Fit</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              We believe in going that extra-mile when it comes to delivering realty solutions. Our services are designed to suit your specific needs and get you the best realty deals in Bangalore and Karnataka.
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group">
            Discuss your needs
            <mat-icon class="group-hover:translate-x-1 transition-transform">arrow_forward</mat-icon>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title) {
            <div class="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  [src]="service.image"
                  [alt]="service.title"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div class="p-8">
                <div class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <mat-icon>{{ service.icon }}</mat-icon>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">{{ service.title }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ service.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services = [
    {
      title: 'Commercial Spaces',
      description: 'Find the perfect office or retail space that aligns with your business goals and brand identity.',
      image: 'https://picsum.photos/seed/commercial/800/600',
      icon: 'business'
    },
    {
      title: 'Residential Properties',
      description: 'Discover homes that match your lifestyle, from modern apartments to luxury villas.',
      image: 'https://picsum.photos/seed/residential/800/600',
      icon: 'home'
    },
    {
      title: 'Agricultural Land',
      description: 'Invest in fertile agricultural land and vineyards with clear titles and great potential.',
      image: 'https://picsum.photos/seed/farm/800/600',
      icon: 'landscape'
    }
  ];
}
