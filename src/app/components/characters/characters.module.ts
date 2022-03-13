import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardListModule } from './../card-list-component/card-list-component.module';
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { PrettyJsonModule } from 'angular2-prettyjson';

@NgModule({
    imports: [
        CommonModule,
        CharactersRoutingModule,
        CardListModule,
        PrettyJsonModule
    ],
    declarations: [
        CharactersComponent,
        CharacterDetailComponent
    ]
})
export class CharactersModule {}