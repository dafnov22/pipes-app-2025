import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('fr');

  constructor() {
    // Initialize with a default locale if needed
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocale) || 'es'
    );
  }

  get getCurrentLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload(); // Reload to apply the new locale
  }
}
