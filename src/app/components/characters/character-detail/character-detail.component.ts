import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, pluck, switchMap, tap } from 'rxjs';
import { ServiceRequest } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  episodes: string[];

  characterDetail$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id: number) => this.service.getCharactersDetail(id).pipe(delay(400), tap(() => this.spinner.hide()))),
    tap(res => this.getEpisodes(res.episode))
  )

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRequest,
    private spinner: NgxSpinnerService
  ) {
    this.episodes = [];
    this.spinner.show();
  }

  private getEpisodes(episodes: string[]): void {
    this.episodes = episodes.map(el => el.substring(el.lastIndexOf('/') + 1));
  }

}
