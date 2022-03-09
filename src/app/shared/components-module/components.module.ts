import { NgModule } from "@angular/core";
import { HeaderModule } from "src/app/components/header/header.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar/sidebar.module";

@NgModule({
    imports: [
        HeaderModule,
        SideBarModule
    ],
    exports: [
        HeaderModule,
        SideBarModule
    ]
})
export class ComponentsModule { }