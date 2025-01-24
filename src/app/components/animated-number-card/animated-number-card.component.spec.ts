import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedNumberCardComponent } from './animated-number-card.component';

describe('AnimatedNumberCardComponent', () => {
  let component: AnimatedNumberCardComponent;
  let fixture: ComponentFixture<AnimatedNumberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedNumberCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedNumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
