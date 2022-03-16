import { NotificationI18nService } from './../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { ServiceRequest } from './../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { delay, pluck, tap } from 'rxjs';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters$ = this.service.getCharacters().pipe(delay(400), pluck('results'), tap(() => this.spinner.hide())); 

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
