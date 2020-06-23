import { TestBed } from '@angular/core/testing';

import { RotasLogadasGuard } from './rotas-logadas.guard';

describe('RotasLogadasGuard', () => {
  let guard: RotasLogadasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RotasLogadasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
