import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocationDetailComponent } from "./location-detail/location-detail.component";
import { LocationsComponent } from "./locations.component";

const routes: Routes = [
    {
        path: '',
        component: LocationsComponent
    },
    {
        path: 'detail/:id',
        component: LocationDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationsRoutingModule {}