import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {HeroComponent} from './hero.component';
import {ServicesComponent} from './services.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {FooterComponent} from './footer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500/30">
      <app-navbar></app-navbar>
      <main>
        <app-hero></app-hero>
        <app-services></app-services>
        <app-about></app-about>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class App {}

