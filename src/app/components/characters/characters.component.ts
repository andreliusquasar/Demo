import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, pluck, tap } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { ServiceRequest } from '../../shared/services/service-request.service';
import { NotificationI18nService } from './../../core/notification-language.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  /***
   * It is not correct to put delay in the request.
   * I added just for example of using the ngx-spinner loading lib added to the project.
   */
  characters$ = this.service.getCharacters().pipe(
    delay(400),
    pluck('results'),
    tap(() => this.spinner.hide())
  );

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
    this.router.navigate(['characters/detail', id]);
  }
}
