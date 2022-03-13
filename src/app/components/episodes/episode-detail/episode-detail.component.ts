import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

import { Apollo, gql, APOLLO_OPTIONS } from 'apollo-angular';
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
    private apollo: Apollo
  ) {
    this.episodeDetail = this.initEpisodeDetail();
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
    }).valueChanges.subscribe((res: any) => {
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
