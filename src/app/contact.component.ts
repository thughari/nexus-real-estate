import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <section id="contact" class="py-24 bg-slate-50 relative">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Contact Info -->
          <div>
            <h2 class="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
              Let's find your <br/>
              <span class="text-indigo-600">perfect space.</span>
            </h2>
            <p class="text-lg text-slate-600 mb-12 max-w-md">
              Whether you're looking to buy, sell, or lease, our experts are here to guide you. Drop us a message and we'll get back to you shortly.
            </p>

            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <mat-icon>location_on</mat-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Locate Us</h4>
                  <p class="text-slate-600 leading-relaxed">
                    NEXUS<br/>
                    No.981, First floor, 12th A main,<br/>
                    Indiranagar, Bangalore - 560008.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <mat-icon>phone</mat-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Call Us</h4>
                  <a href="tel:+919008300846" class="text-slate-600 hover:text-indigo-600 transition-colors">
                    +91 9008300846
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <mat-icon>email</mat-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Email Us</h4>
                  <a href="mailto:aditya@nres.in" class="text-slate-600 hover:text-indigo-600 transition-colors">
                    aditya&#64;nres.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 class="text-2xl font-bold text-slate-900 mb-8">Leave Us a Message</h3>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    formControlName="firstName"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="John"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    formControlName="lastName"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Doe"
                  >
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  formControlName="email"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="john@example.com"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  formControlName="phone"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="+91 98765 43210"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Type Your Message Here</label>
                <textarea 
                  formControlName="message"
                  rows="4"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                [disabled]="contactForm.invalid"
                class="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Send Message
                <mat-icon class="text-sm">send</mat-icon>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission
      this.contactForm.reset();
    }
  }
}
