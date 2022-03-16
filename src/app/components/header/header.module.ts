import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from 'src/app/core/i18n.module';
import { HeaderComponent } from './header.component';
@NgModule({
    imports: [
        CommonModule,
        I18nModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}