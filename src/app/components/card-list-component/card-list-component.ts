import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-list-component',
  templateUrl: './card-list-component.html',
  styleUrls: ['./card-list-component.scss']
})
export class CardListComponent {

  @Input() title: string;
  
  @Input() inputProperts: any;

  @Output() actionEmmiter: EventEmitter<number> = new EventEmitter(); 

  constructor() {
    this.title = '';
   }

   action(id: number): void {
     this.actionEmmiter.next(id);
   }
}
