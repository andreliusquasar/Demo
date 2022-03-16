import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { I18nModule } from "src/app/core/i18n.module";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule, 
        I18nModule
    ],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})
export class SideBarModule {}