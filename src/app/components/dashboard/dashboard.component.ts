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

  constructor( private service: ServiceRequest) {
    this.characters = [];
    this.subscription = new Subscription();
   }

  ngOnInit() {
    setTimeout(() => {
      this.subscription = this.service.getCharacters(this.page).subscribe((res: any) => {this.characters = res.results; this.showList = true; })
    }, 200)
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

}
