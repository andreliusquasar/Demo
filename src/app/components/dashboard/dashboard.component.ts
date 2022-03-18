import { NotificationI18nService } from './../../core/notification-language.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ServiceRequest } from './../../shared/services/service-request.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ICharacter } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  showList = false;
  page = 1;
  characters: ICharacter[];
  subscription: Subscription;

  constructor( 
    private service: ServiceRequest,
    private translate: TranslateService,
    private languageService: NotificationI18nService
  ) {
    this.characters = [];
    this.subscription = new Subscription();
   }

  ngOnInit() {
    this.subscription = this.service.getCharacters(this.page).subscribe((res: any) => {this.characters = res.results; this.showList = true; })
    this.initTraslate(); 
  }
  
  ngAfterViewInit(): void {
    this.sentinelaObserver();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private sentinelaObserver() {
    const sentinela = new IntersectionObserver(res => {
        if (res.some((entri) => entri.isIntersecting)) {
          this.page += 1;
          this.subscription = this.service.getCharacters(this.page).subscribe((res: any) => {
            setTimeout(() => {
              this.characters = [...this.characters,...res.results] 
            }, 200);
          })
        }
    });
     const div: any = document.querySelector('#sentinel');
     sentinela.observe(div);
     return () => sentinela.disconnect();
   }

   private initTraslate(): void {
    this.languageService.getLanguageI18n().subscribe((res: string) => {
      this.translate.setDefaultLang(res);
    });
   }

}
