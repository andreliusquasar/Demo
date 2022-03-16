import { NotificationI18nService } from './../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private translate: TranslateService,
    private languageService: NotificationI18nService
  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string): void {
    this.languageService.setLanguageI18n(language);
  }

}
