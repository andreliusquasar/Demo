import { CardListModule } from './../card-list-component/card-list-component.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";

@NgModule({
    imports: [
        CommonModule,
        CharactersRoutingModule,
        CardListModule
    ],
    declarations: [
        CharactersComponent
    ]
})
export class CharactersModule {}