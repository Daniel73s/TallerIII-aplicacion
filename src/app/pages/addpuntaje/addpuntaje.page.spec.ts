import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpuntajePage } from './addpuntaje.page';

describe('AddpuntajePage', () => {
  let component: AddpuntajePage;
  let fixture: ComponentFixture<AddpuntajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpuntajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpuntajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
