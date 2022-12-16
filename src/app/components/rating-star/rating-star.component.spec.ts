import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingStarComponent } from './rating-star.component';

describe('RatingStarComponent', () => {
  let component: RatingStarComponent;
  let fixture: ComponentFixture<RatingStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingStarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
