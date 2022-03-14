import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { delay, pluck, tap } from 'rxjs';
import { ServiceRequest } from './../../shared/services/service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  episodes$ = this.service.getEpisodes().pipe(delay(400), pluck('results'), tap(() => this.spinner.hide())); 

  constructor(
    private service: ServiceRequest,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
   }

  redirectTo(id: number): void {
    this.router.navigate(['episodes/detail', id]);
  }

}
