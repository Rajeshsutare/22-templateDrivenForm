import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDEleRefComponent } from './td-ele-ref.component';

describe('TDEleRefComponent', () => {
  let component: TDEleRefComponent;
  let fixture: ComponentFixture<TDEleRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDEleRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDEleRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
