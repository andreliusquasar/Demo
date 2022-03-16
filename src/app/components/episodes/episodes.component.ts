import { NotificationI18nService } from './../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { delay, pluck, tap } from 'rxjs';
import { ServiceRequest } from './../../shared/services/service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes$ = this.service.getEpisodes().pipe(delay(400), pluck('results'), tap(() => this.spinner.hide())); 

  constructor(
    private service: ServiceRequest,
    private router: Router,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private languageService: NotificationI18nService
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.languageService.getLanguageI18n().subscribe((res: string) => {
      this.translate.setDefaultLang(res);
    });
  }

  redirectTo(id: number): void {
    this.router.navigate(['episodes/detail', id]);
  }

}
