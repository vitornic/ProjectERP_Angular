import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CClientComponent } from './c-client.component';

describe('CClientComponent', () => {
  let component: CClientComponent;
  let fixture: ComponentFixture<CClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
