import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";

@NgModule({
    imports: [
        CommonModule,
        CharactersRoutingModule
    ],
    declarations: [CharactersComponent]
})
export class CharactersModule {}