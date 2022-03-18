import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, pluck, tap } from 'rxjs';

import { NotificationI18nService } from './../../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
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
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private languageService: NotificationI18nService
  ) {
    this.episodeDetail = this.initEpisodeDetail();
    this.spinner.show();
  }

  ngOnInit(): void {
    this.initRequest();
    this.languageService.getLanguageI18n().subscribe((res: string) => {
      this.translate.setDefaultLang(res);
    });
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

   /***
   * It is not correct to put delay in the request.
   * I added just for example of using the ngx-spinner loading lib added to the project.
   */
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
