import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, pluck, tap } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';
import { Apollo, gql } from 'apollo-angular';
import { IEpisode } from 'src/app/shared/models/episode.model';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
  
})
export class EpisodeDetailComponent implements OnInit {

  episodeDetail: IEpisode;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private spinner: NgxSpinnerService
  ) {
    this.episodeDetail = this.initEpisodeDetail();
    this.spinner.show();
  }

  ngOnInit(): void {
    this.initRequest();
  }

  private initEpisodeDetail(): IEpisode {
    return {
      id:	        0,
      name:	    '',
      air_date:	'',
      episode:	'',
      characters:	[],
      url:	    '',
      created:	'',
    }
  }

  private getEpisodeDetail(id: number): void {
    this.apollo.watchQuery({
      query: gql `
      query {
        episode(id: ${id}){
         name
         air_date
         episode
         characters {
            name
         }
       }
     }
      `
    }).valueChanges.pipe(delay(400), tap(() => this.spinner.hide())).subscribe((res: any) => {
      this.episodeDetail = res.data.episode;
      console.log(this.episodeDetail);
    })
  }

  private initRequest(): void {
    this.route.params.pipe(
      pluck('id')
    ).subscribe((id: number) => {
      this.getEpisodeDetail(id)
    });
  }
}
