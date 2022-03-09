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
     {
        path: 'episodes',
        loadChildren: () => import('./components/episodes/episodes.module').then(e => e.EpisodesModule)
     }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}