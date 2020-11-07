import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmaciaPage } from './farmacia.page';

describe('FarmaciaPage', () => {
  let component: FarmaciaPage;
  let fixture: ComponentFixture<FarmaciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmaciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
