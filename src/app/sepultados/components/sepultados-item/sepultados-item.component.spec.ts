import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepultadosItemComponent } from './sepultados-item.component';

describe('SepultadosItemComponent', () => {
  let component: SepultadosItemComponent;
  let fixture: ComponentFixture<SepultadosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepultadosItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepultadosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
