import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepultadosListPage } from './sepultados-list.page';

describe('SepultadoListPage', () => {
  let component: SepultadosListPage;
  let fixture: ComponentFixture<SepultadosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepultadosListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepultadosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
