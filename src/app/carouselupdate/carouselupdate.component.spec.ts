import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselupdateComponent } from './carouselupdate.component';

describe('CarouselupdateComponent', () => {
  let component: CarouselupdateComponent;
  let fixture: ComponentFixture<CarouselupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
