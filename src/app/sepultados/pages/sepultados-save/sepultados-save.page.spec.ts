import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepultadosSavePage } from './sepultados-save.page';

describe('SepultadosSavePage', () => {
  let component: SepultadosSavePage;
  let fixture: ComponentFixture<SepultadosSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepultadosSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepultadosSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
