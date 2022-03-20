import { NgModule } from "@angular/core";
import { FooterModule } from "src/app/components/footer/footer.module";
import { HeaderModule } from "src/app/components/header/header.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar.module";

@NgModule({
    imports: [
        HeaderModule,
        SideBarModule,
        FooterModule
    ],
    exports: [
        HeaderModule,
        SideBarModule,
        FooterModule
    ]
})
export class ComponentsModule { }