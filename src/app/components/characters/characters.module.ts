import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardListComponent } from "../card-list-component/card-list-component.component";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";

@NgModule({
    imports: [
        CommonModule,
        CharactersRoutingModule
    ],
    declarations: [
        CharactersComponent,
        CardListComponent
    ]
})
export class CharactersModule {}