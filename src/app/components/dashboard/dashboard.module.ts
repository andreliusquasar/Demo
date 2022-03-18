import { I18nModule } from './../../core/i18n.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        I18nModule
    ],
    declarations: [DashboardComponent]
})
export class DashBoardModule {}