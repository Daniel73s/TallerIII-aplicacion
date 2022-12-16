import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddproductosPage } from './addproductos.page';

describe('AddproductosPage', () => {
  let component: AddproductosPage;
  let fixture: ComponentFixture<AddproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
