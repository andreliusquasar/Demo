import { NotificationI18nService } from './../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private languageService: NotificationI18nService
  ) {
    translate.setDefaultLang('br');
  }

  ngOnInit(): void {
    this.languageService.getLanguageI18n().subscribe((res: string) => this.translate.setDefaultLang(res));
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

}
