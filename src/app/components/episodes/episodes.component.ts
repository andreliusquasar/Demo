import { ServiceRequest } from './../../shared/services/service.service';
import { Component } from '@angular/core';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  episodes$ = this.service.getEpisodes().pipe(pluck('results')); 

  constructor(private service: ServiceRequest) { }

}
