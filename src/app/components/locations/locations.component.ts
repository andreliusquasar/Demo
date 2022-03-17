import { NotificationI18nService } from './../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceRequest } from '../../shared/services/service-request.service';
import { Component, OnInit } from '@angular/core';
import { delay, pluck, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations$ = this.service.getLocations().pipe(delay(400), pluck('results'), tap(() => this.spinner.hide())); 

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
    this.router.navigate(['locations/detail', id]);
  }
}
