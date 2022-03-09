import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'characters',
        loadChildren: () => import('./components/characters/characters.module').then(c => c.CharactersModule)
     },
     {
        path: 'locations',
        loadChildren: () => import('./components/locations/locations.module').then(l => l.LocationsModule)
     },
      
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}