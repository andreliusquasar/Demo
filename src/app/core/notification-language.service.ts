import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationI18nService {
  private languageI18n: Subject<string> = new Subject();

  getLanguageI18n(): Subject<string> {
    return this.languageI18n;
  }
  
  setLanguageI18n(language: string): void {
    this.languageI18n.next(language);
  }

}
