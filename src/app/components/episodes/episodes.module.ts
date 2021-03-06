import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

import { I18nModule } from 'src/app/core/i18n.module';
import { CardListModule } from '../card-list-component/card-list-component.module';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EpisodesComponent } from "./episodes.component";
import { EpisodesRoutingModule } from './episodes-routing.module';

import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

@NgModule({
    imports: [
        CommonModule,
        EpisodesRoutingModule,
        CardListModule,
        PrettyJsonModule,
        NgxSpinnerModule,
        I18nModule
    ],
    declarations: [
        EpisodesComponent, 
        EpisodeDetailComponent
    ],
    providers: [
        Apollo,
        { 
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'https://rickandmortyapi.com/graphql'
                    }),
                };
            },
            deps: [HttpLink]
        }
    ]
})
export class EpisodesModule {}