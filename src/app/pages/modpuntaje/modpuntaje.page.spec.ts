import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModpuntajePage } from './modpuntaje.page';

describe('ModpuntajePage', () => {
  let component: ModpuntajePage;
  let fixture: ComponentFixture<ModpuntajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModpuntajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModpuntajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
