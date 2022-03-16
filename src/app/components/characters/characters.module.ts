import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { CardListModule } from './../card-list-component/card-list-component.module';
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgxSpinnerModule } from "ngx-spinner";
import { I18nModule } from "src/app/core/i18n.module";

@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        CharactersRoutingModule,
        CardListModule,
        PrettyJsonModule,
        NgxSpinnerModule,
        I18nModule
    ],
    declarations: [
        CharactersComponent,
        CharacterDetailComponent
    ]
})
export class CharactersModule {}