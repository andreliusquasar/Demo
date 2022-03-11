import { ServiceRequest } from './../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  locations$ = this.service.getLocations().pipe(pluck('results')); 

  constructor(private service: ServiceRequest) { }
}
