import { NotificationI18nService } from './../../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { ServiceRequest } from '../../../shared/services/service-request.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, pluck, switchMap, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent {
  locationDetail$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id: number) =>
      this.service.getLocationDetail(id).pipe(delay(400), tap(() => this.spinner.hide()))
    )
  );

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRequest,
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
}
