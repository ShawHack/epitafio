import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepultadosPerfilPage } from './sepultados-perfil.page';

describe('SepultadosPerfilPage', () => {
  let component: SepultadosPerfilPage;
  let fixture: ComponentFixture<SepultadosPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepultadosPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepultadosPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
