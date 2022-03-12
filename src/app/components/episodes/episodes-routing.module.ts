import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
    {
        path: '',
        component: EpisodesComponent
    },
    {
        path: 'detail/:id',
        component: EpisodeDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EpisodesRoutingModule {}