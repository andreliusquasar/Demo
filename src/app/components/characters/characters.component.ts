import { ServiceRequest } from './../../shared/services/service.service';
import { Component } from '@angular/core';
import { pluck } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters$ = this.service.getCharacters().pipe(pluck('results')); 

  constructor(
    private service: ServiceRequest,
    private router: Router
    ) { }

  redirectTo(id: number): void {
    console.log('testando redirect');
    this.router.navigate(['characters/detail', id]);

  }

}
