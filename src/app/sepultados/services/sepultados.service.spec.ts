import { TestBed } from '@angular/core/testing';

import { SepultadosService } from './sepultados.service';

describe('SepultadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SepultadosService = TestBed.get(SepultadosService);
    expect(service).toBeTruthy();
  });
});
