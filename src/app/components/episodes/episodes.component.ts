import { ServiceRequest } from './../../shared/services/service.service';
import { Component } from '@angular/core';
import { pluck } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  episodes$ = this.service.getEpisodes().pipe(pluck('results')); 

  constructor(
    private service: ServiceRequest,
    private router: Router
    ) { }

  redirectTo(id: number): void {
    this.router.navigate(['episodes/detail', id]);
  }

}
