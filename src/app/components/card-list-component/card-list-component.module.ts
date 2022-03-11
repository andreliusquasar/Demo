import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CardListComponent } from './card-list-component';

@NgModule({
    imports: [CommonModule],
    declarations: [CardListComponent],
    exports: [CardListComponent]
})
export class CardListModule {}