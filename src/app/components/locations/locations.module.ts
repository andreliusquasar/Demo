import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListModule } from '../card-list-component/card-list-component.module';
import { LocationsRoutingModule } from "./locations-routing.module";

import { I18nModule } from 'src/app/core/i18n.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { PrettyJsonModule } from 'angular2-prettyjson';

import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

@NgModule({
    imports: [
        CommonModule,
        LocationsRoutingModule,
        CardListModule,
        PrettyJsonModule,
        NgxSpinnerModule,
        I18nModule
    ],
    declarations: [
        LocationsComponent,
        LocationDetailComponent
    ],
    exports: [LocationsComponent]
})
export class LocationsModule {}