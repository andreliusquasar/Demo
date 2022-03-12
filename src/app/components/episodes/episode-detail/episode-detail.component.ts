import { ServiceRequest } from './../../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent {

  episodeDetail$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id: number) => this.service.getEpisodeDetail(id))
  )

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRequest
    ) {}

}
