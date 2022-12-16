import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModproductosPage } from './modproductos.page';

describe('ModproductosPage', () => {
  let component: ModproductosPage;
  let fixture: ComponentFixture<ModproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
