import { ServiceRequest } from './../../../shared/services/service.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent {

  locationDetail$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id: number) => this.service.getLocationDetail(id))
  )

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRequest
    ) {}

}
