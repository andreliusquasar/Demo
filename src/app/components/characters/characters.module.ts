import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { CardListModule } from './../card-list-component/card-list-component.module';
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        CharactersRoutingModule,
        CardListModule,
        PrettyJsonModule,
        NgxSpinnerModule
    ],
    declarations: [
        CharactersComponent,
        CharacterDetailComponent
    ]
})
export class CharactersModule {}