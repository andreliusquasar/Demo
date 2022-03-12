import { ServiceRequest } from './../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  locations$ = this.service.getLocations().pipe(pluck('results')); 

  constructor(
    private service: ServiceRequest,
    private router: Router
    ) { }

  redirectTo(id: number): void {
    this.router.navigate(['locations/detail', id]);
  }
}
