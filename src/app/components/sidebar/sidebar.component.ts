import { NotificationI18nService } from './../../core/notification-language.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  
  constructor(
    private translate: TranslateService,
    private languageService: NotificationI18nService
  ) {}

  ngOnInit(): void {
    this.languageService.getLanguageI18n().subscribe((res: string) => this.translate.setDefaultLang(res));
  }
}
