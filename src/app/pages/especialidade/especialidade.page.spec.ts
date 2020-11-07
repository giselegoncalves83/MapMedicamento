import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspecialidadePage } from './especialidade.page';

describe('EspecialidadePage', () => {
  let component: EspecialidadePage;
  let fixture: ComponentFixture<EspecialidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspecialidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
