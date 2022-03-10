import { ServiceRequest } from './../../shared/services/service.service';
import { Component } from '@angular/core';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters$ = this.service.getCharacters().pipe(pluck('results')); 

  constructor(private service: ServiceRequest) { }

}
