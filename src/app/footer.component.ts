import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 relative text-white">
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <path d="M10,90 L10,10 L90,10 L90,90 Z" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M10,90 L50,10 L90,90" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M30,50 L70,50" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M50,10 L50,90" fill="none" stroke="currentColor" stroke-width="4"/>
            </svg>
          </div>
          <span class="font-display font-bold tracking-widest text-white uppercase">Nexus</span>
        </div>
        
        <div class="text-sm text-center md:text-left">
          &copy; {{ currentYear }} NEXUS. All rights reserved.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
