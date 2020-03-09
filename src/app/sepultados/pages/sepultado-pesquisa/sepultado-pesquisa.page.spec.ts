import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepultadoPesquisaPage } from './sepultado-pesquisa.page';

describe('SepultadoPesquisaPage', () => {
  let component: SepultadoPesquisaPage;
  let fixture: ComponentFixture<SepultadoPesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepultadoPesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepultadoPesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
