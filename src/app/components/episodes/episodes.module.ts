import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EpisodesComponent } from "./episodes.component";
import { EpisodesRoutingModule } from './episodes-routing.module';
import { CardListModule } from '../card-list-component/card-list-component.module';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

@NgModule({
    imports: [
        CommonModule,
        EpisodesRoutingModule,
        CardListModule
    ],
    declarations: [
        EpisodesComponent, 
        EpisodeDetailComponent
    ]
})
export class EpisodesModule {}