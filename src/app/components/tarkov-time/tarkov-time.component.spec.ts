import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarkovTimeComponent } from './tarkov-time.component';

describe('TarkovTimeComponent', () => {
  let component: TarkovTimeComponent;
  let fixture: ComponentFixture<TarkovTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarkovTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarkovTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
