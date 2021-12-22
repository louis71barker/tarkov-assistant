import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarkovMarketComponent } from './tarkov-market.component';

describe('TarkovMarketComponent', () => {
  let component: TarkovMarketComponent;
  let fixture: ComponentFixture<TarkovMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarkovMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarkovMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
