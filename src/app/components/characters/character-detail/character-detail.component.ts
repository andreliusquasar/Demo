import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs';
import { ServiceRequest } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  characterDetail$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id: number) => this.service.getCharactersDetail(id))
  )

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRequest
    ) {}

}
