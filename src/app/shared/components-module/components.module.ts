import { NgModule } from "@angular/core";
import { HeaderModule } from "src/app/components/header/header.module";

@NgModule({
    imports: [HeaderModule],
    exports: [HeaderModule]
})
export class ComponentsModule { }