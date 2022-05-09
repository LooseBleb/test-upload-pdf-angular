import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabsComponent } from '../list-trabs/trabs.component';

describe('TrabsComponent', () => {
  let component: TrabsComponent;
  let fixture: ComponentFixture<TrabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
