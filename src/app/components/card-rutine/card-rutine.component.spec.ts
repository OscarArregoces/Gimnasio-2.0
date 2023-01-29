import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRutineComponent } from './card-rutine.component';

describe('CardRutineComponent', () => {
  let component: CardRutineComponent;
  let fixture: ComponentFixture<CardRutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
