import { LocationsComponent } from './locations.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocationsRoutingModule } from "./locations-routing.module";

@NgModule({
    imports: [
        CommonModule,
        LocationsRoutingModule
    ],
    declarations: [LocationsComponent],
    exports: [LocationsComponent]
})
export class LocationsModule {}