import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRttComponent } from './demande-rtt.component';

describe('DemandeRttComponent', () => {
  let component: DemandeRttComponent;
  let fixture: ComponentFixture<DemandeRttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeRttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeRttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
