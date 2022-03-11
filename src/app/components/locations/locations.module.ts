import { LocationsComponent } from './locations.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocationsRoutingModule } from "./locations-routing.module";
import { CardListModule } from '../card-list-component/card-list-component.module';

@NgModule({
    imports: [
        CommonModule,
        LocationsRoutingModule,
        CardListModule
    ],
    declarations: [
        LocationsComponent
    ],
    exports: [LocationsComponent]
})
export class LocationsModule {}