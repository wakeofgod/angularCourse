import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PComponentComponent } from './p-component.component';

describe('PComponentComponent', () => {
  let component: PComponentComponent;
  let fixture: ComponentFixture<PComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
