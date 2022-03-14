import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceRequest } from './../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { delay, pluck, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  locations$ = this.service.getLocations().pipe(delay(400), pluck('results'), tap(() => this.spinner.hide())); 

  constructor(
    private service: ServiceRequest,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { 
    this.spinner.show();
  }

  redirectTo(id: number): void {
    this.router.navigate(['locations/detail', id]);
  }
}
