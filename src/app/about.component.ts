import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="about" class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left: Big Logo / Graphic -->
          <div class="relative flex justify-center items-center p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div class="w-64 h-64 relative text-white">
              <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-2xl">
                <path d="M10,90 L10,10 L90,10 L90,90 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.5"/>
                <path d="M10,90 L50,10 L90,90" fill="none" stroke="currentColor" stroke-width="3"/>
                <path d="M30,50 L70,50" fill="none" stroke="currentColor" stroke-width="3"/>
                <path d="M50,10 L50,90" fill="none" stroke="currentColor" stroke-width="3"/>
              </svg>
            </div>
            
            <!-- Floating stats -->
            <div class="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl">
              <div class="text-3xl font-bold mb-1">10+</div>
              <div class="text-indigo-100 text-sm font-medium">Years Experience</div>
            </div>
          </div>

          <!-- Right: Content -->
          <div>
            <h2 class="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8">
              More than a transaction. <br/>
              <span class="text-indigo-400">A new relationship.</span>
            </h2>
            
            <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Founded by seasoned real estate experts who believe in providing end-to-end customized solutions, Nexus is all about creating memorable experiences by connecting people to their dream properties.
              </p>
              <p>
                We don't shake hands and walk away; we guide you through the complete process of buying, selling, renting, or leasing property, first as a friend and then as your realty expert.
              </p>
              <p>
                Our experts help you choose and invest in the right property with great ease. Absolute transparency is our prime trait and it is reflected in our selection of properties and negotiating closures.
              </p>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <mat-icon>verified</mat-icon>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">Transparency</h4>
                  <p class="text-sm text-slate-400">Clear communication at every step.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <mat-icon>handshake</mat-icon>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">End-to-End</h4>
                  <p class="text-sm text-slate-400">Complete guidance till closure.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
