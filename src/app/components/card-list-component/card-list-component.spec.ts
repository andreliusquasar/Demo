import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list-component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call action method', () => {
    spyOn(component, 'action').and.callThrough();
    component.action(1);
    expect(component.action).toHaveBeenCalled();
  });
 
});
