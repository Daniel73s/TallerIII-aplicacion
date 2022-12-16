import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservasvetPage } from './reservasvet.page';

describe('ReservasvetPage', () => {
  let component: ReservasvetPage;
  let fixture: ComponentFixture<ReservasvetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasvetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservasvetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
