import { ServiceRequest } from './../../shared/services/service.service';
import { Component } from '@angular/core';
import { delay, pluck, tap } from 'rxjs';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters$ = this.service.getCharacters().pipe(delay(400), pluck('results'), tap(() => this.spinner.hide())); 

  constructor(
    private service: ServiceRequest,
    private router: Router,
    private spinner: NgxSpinnerService
    ) {
      this.spinner.show();
     }

  redirectTo(id: number): void {
    this.router.navigate(['characters/detail', id]);
  }

}
