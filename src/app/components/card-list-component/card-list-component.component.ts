import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list-component',
  templateUrl: './card-list-component.component.html',
  styleUrls: ['./card-list-component.component.scss']
})
export class CardListComponent {

  @Input() title: string;
  
  @Input() inputProperts: any;

  constructor() {
    this.title = '';
   }
}
